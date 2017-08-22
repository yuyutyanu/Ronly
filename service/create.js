var faker = require('faker')
var dt = new Date()
module.exports = {
    user: (req, res) => {
        db.m_Users
            .build({
                id: req.body.id,
                name: req.body.nickname,
                profile_message: faker.random.word(),
                samune: faker.random.image(),
                password: req.body.password,
            })
            .save()
            .then(function (savedTask) {
                res.redirect("/login")
            }).catch(function (error) {
            res.redirect("/register")
        })
    },
    tweet: (req, res) => {
        db.t_Tweets
            .build({
                tweet: req.body.text,
                user_id: req.session.user.id,
            })
            .save()
            .then(function (savedTask) {
                commonFn.retrieve.user(req, res).then((data) => {
                    var tweet = {
                        tweet: savedTask.tweet,
                        name: data.name,
                        samune: data.samune
                    }

                    res.send(tweet)
                })
            })
    },
    followUser: (req) => {
        return db.t_Follows.build({
            follow_id: req.body.follow_id,
            user_id: req.session.user.id
        }).save()
    }
}