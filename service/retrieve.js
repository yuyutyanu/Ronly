const db = require('./../sequelize/models/index')
global.db = db

module.exports = {
    user: (req, res) => {
        return new Promise((resolve, reject) => {
            db.m_Users.findOne({
                where: {
                    id: req.session.user.id
                }
            })
                .then((user) => {
                   resolve(user)
                })
        })
    },
    myTweets: (req) => {
        return new Promise((resolve, reject) => {
            db.m_Users.findOne({
                where: {id: req.session.user.id},
                include: [{model: db.t_Tweets}]
            }).then((tweets) => {
                if(Object.keys(tweets).length === 0) {
                    resolve({})
                }else {
                    resolve(tweets)
                }
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
        return new Promise((resolve, reject) => {
            commonFn.retrieve.followUsers(req).then((follows) => {
                if(Object.keys(follows).length === 0){
                    resolve({})
                }else {
                    var followUsersTweets = []
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
                }
            })
        })
    },
    profile: (id) => {
        return new Promise((resolve, reject) => {
            db.m_Users.findOne({
                where: {id: id},
                include: [{model: db.t_Tweets}]
            }).then((tweets) => {
                resolve(tweets)
            })
        })
    },
    timeLine: (req) => {
        var list1 = new Promise((resolve, reject) => {
            commonFn.retrieve.myTweets(req).then((myTweets) => {
                var tweets = [];
                for (var i = 0; i < myTweets.t_Tweets.length; i++) {
                    tweets.push({
                        id: myTweets.id,
                        name: myTweets.name,
                        samune: myTweets.samune,
                        tweet: myTweets.t_Tweets[i].tweet,
                        createdAt: myTweets.t_Tweets[i].createdAt,
                        updatedAt: myTweets.t_Tweets[i].updatedAt

                    })
                }
                resolve(tweets)
            })
        })

        var list2 = new Promise((resolve, reject) => {
            commonFn.retrieve.followUsersTweets(req).then((followUsersTweets) => {
                if(Object.keys(followUsersTweets).length === 0){
                    resolve({})
                }else {
                    var tweets = [];
                    for (var i = 0; i < followUsersTweets.length; i++) {
                        for (var j = 0; j < followUsersTweets[i].t_Tweets.length; j++) {
                            tweets.push({
                                id: followUsersTweets[i].id,
                                name: followUsersTweets[i].name,
                                samune: followUsersTweets[i].samune,
                                tweet: followUsersTweets[i].t_Tweets[j].tweet,
                                createdAt: followUsersTweets[i].t_Tweets[j].createdAt,
                                updatedAt: followUsersTweets[i].t_Tweets[j].updatedAt

                            })
                        }
                    }
                    resolve(tweets)
                }
            })
        })

        return new Promise((resolve, reject) => {
            Promise.all([list1, list2]).then((lists) => {
                var timeLine = [];

                if(Object.keys(lists[0]).length !== 0) {
                    for (var i = 0; i < lists[0].length; i++) {
                        timeLine.push(lists[0][i]);
                    }
                }

                if(Object.keys(lists[1]).length !== 0) {
                    for (var j = 0; j < lists[1].length; j++) {
                        timeLine.push(lists[1][j]);
                    }
                }
                timeLine.sort(function (a, b) {
                    if (a.updatedAt < b.updatedAt) return -1;
                    if (a.updatedAt > b.updatedAt) return 1;
                    return 0;
                });

                resolve(timeLine)
            })
        })
    }
}