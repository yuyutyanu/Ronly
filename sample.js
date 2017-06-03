//sequelizeの検証

var db = require('./sequelize/models/index');
var faker = require('faker')
const service = require('./service/index')
global.commonFn = service

var hoge = function () {
//     //ユーザ登録
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             db.m_Users
//                 .build({
//                     id: faker.random.word() + faker.random.number(),
//                     name: faker.internet.userName(),
//                     profile_message: faker.random.words(),
//                     samune: faker.image.image(),
//                     password: faker.random.word(),
//                 })
//                 .save()
//                 .then(function (savedTask) {
//                     // you can now access the currently saved task with the variable anotherTask... nice!
//                     console.log(1)
//                     console.log(savedTask)
//                     resolve(1)
//                 }).catch(function (error) {
//             })
//         }, 1000)
//     })
// }
// hoge().then((data) => {
//     //1人のユーザのtweet取得
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             db.t_Tweets.findOne({
//                 where: {user_id: 'a'},
//                 attributes: ['id', 'tweet', 'user_id', 'createdAt', 'updatedAt']
//             }).then((tweet) => {
//                 console.log(data + 1)
//                 console.log(tweet)
//                 resolve(data + 1)
//             })
//         }, 1000)
//     })
// }).then((data) => {

    //ユーザid a のタイムライン取得
    var follows = []
    setTimeout(() => {
        var follows = []
        db.m_Users.findById('a').then(function (user) {
            return user.getFollow()
        }).then(function (users) {
            for (var i = 0; i < users.length; i++) {
                follows.push({follow_id: users[i].follow_id})
            }
        }).then(() => {
            for (var i = 0; i < follows.length; i++) {
                console.log(follows[i].follow_id)
                db.m_Users.findOne({
                    where: {id: follows[i].follow_id},
                    include: [{model: db.t_Tweets}]
                }).then(user => {
                    console.log(user.t_Tweets)
                })
            }
        })
    }, 1000)
}
//)


hoge()