const db = require('.././models/index')
global.db = db

module.exports = {
    user: (req, res) => {
        db.m_Users.findOne({
            where: {
                id: req.session.user.id
            }
        })
            .then((user) => {
                res.send(user)
            })
    },
    myTweets: (req) => {
        return new Promise((resolve, reject) => {
            db.m_Users.findOne({
                where: {id: req.session.user.id},
                include: [{model: db.t_Tweets}]
            }).then((tweets) => {
                resolve(tweets)
            })
        })
    },
    followUsers: (req) => {
        var followUsers = []
        return new Promise((resolve, reject) => {
            db.m_Users.findById(req.session.user.id).then(function (user) {
                return user.getFollow()
            }).then(function (users) {
                for (var i = 0; i < users.length; i++) {
                    followUsers.push({follow_id: users[i].follow_id})
                }
                resolve(followUsers)
            })
        })
    },
    followUsersTweets(req){
        var followUsersTweets = []
        return new Promise((resolve, reject) => {
            commonFn.retrieve.followUsers(req).then((follows) => {
                for (var i = 0; i < follows.length; i++) {
                    db.m_Users.findOne({
                        where: {id: follows[i].follow_id},
                        include: [{model: db.t_Tweets}]
                    }).then(users => {
                        followUsersTweets.push(users)
                        if (followUsersTweets.length === follows.length) {
                            resolve(followUsersTweets)
                        }
                    })
                }
            })
        })
    },
    profile:(id)=>{
        return new Promise((resolve, reject) => {
            db.m_Users.findOne({
                where: {id:id},
                include: [{model: db.t_Tweets}]
            }).then((tweets) => {
                resolve(tweets)
            })
        })
    },
    timeLine: (req) => {
        var timeLine = [];

        return new Promise((resolve, reject) => {
            commonFn.retrieve.followUsersTweets(req).then((followUsersTweets) => {
                commonFn.retrieve.myTweets(req).then((myTweets) => {

                    for (var i = 0; i < followUsersTweets.length; i++) {
                        for (var j = 0; j < followUsersTweets[i].t_Tweets.length; j++) {
                            timeLine.push({
                                id: followUsersTweets[i].id,
                                name: followUsersTweets[i].name,
                                samune: followUsersTweets[i].samune,
                                tweet: followUsersTweets[i].t_Tweets[j].tweet,
                                createdAt: followUsersTweets[i].t_Tweets[j].createdAt,
                                updatedAt: followUsersTweets[i].t_Tweets[j].updatedAt

                            })
                        }
                    }

                    for (var i = 0; i < myTweets.t_Tweets.length; i++) {
                        timeLine.push({
                            id:myTweets.id,
                            name: myTweets.name,
                            samune: myTweets.samune,
                            tweet: myTweets.t_Tweets[i].tweet,
                            createdAt: myTweets.t_Tweets[i].createdAt,
                            updatedAt: myTweets.t_Tweets[i].updatedAt

                        })
                    }

                    timeLine.sort(function (a, b) {
                        if (a.updatedAt < b.updatedAt) return -1;
                        if (a.updatedAt > b.updatedAt) return 1;
                        return 0;
                    });

                    resolve(timeLine)
                })
            })
        })
    }
}