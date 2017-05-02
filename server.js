const express = require('express')
const app = express()
app.listen(3000)

app.use( express.static(__dirname + '/public') )
app.set('view engine', 'pug');


app.get('/',function(req,res){
    res.render(__dirname + '/views/index.pug')
})

app.get('/login',function(req,res){
    res.render(__dirname + '/views/login.pug')
})

app.get('/profile',function(req,res){
    res.render(__dirname + '/views/profile.pug')
})




var db = require('./orm/models/index');


db.m_Users.findById(1).then(function(user){
    console.log(db.hoge)
    return user.getFollow()
}).then(function(user){
    console.log(user[0].follower_id)
})