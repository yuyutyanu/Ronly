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



