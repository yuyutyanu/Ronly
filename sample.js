//sequelizeの検証

var db = require('./orm/models/index');


//IDで検索
db.m_Users.findById(1).then(function(user){
    return user.getFollow()
}).then(function(user){
    console.log(user[0].follower_id)
})

//Insert
db.m_Users
    .build({ profile_message: 'foo', samune: 'bar' ,password:"hoge"})
    .save()
    .then(function(anotherTask) {
        // you can now access the currently saved task with the variable anotherTask... nice!
        console.log(anotherTask.id)
    }).catch(function(error) {
    // Ooops, do some error-handling
})