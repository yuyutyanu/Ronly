const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const db = require('./sequelize/models/index')
global.db = db
const service = require('./service/index')
global.commonFn = service
const app = express()
const upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    httpOnly: false
}))


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');



//api
app.get('/users', (req, res) => {
    commonFn.retrieve.timeLine(req).then((timeLine) => {
        console.log(timeLine)
        res.send(timeLine)
    })
})
app.get('/users/:id', (req, res) => {
    if (req.params.id === 'me') {
        commonFn.retrieve.myTweets(req).then((tweets) => {
            res.send(tweets)
        })
    }else {
        commonFn.retrieve.profile(req.params.id).then((tweets)=>{
            res.send(tweets)
        })
    }
})
app.post('/tweet', (req, res) => {
    commonFn.create.tweet(req, res)
})

app.post('/follow', (req) =>{
    console.log(req.body)
    commonFn.create.followUser(req)
})
app.delete('/follow/:id',(req) =>{
    commonFn.dele.followUser(req)
})

const login = require('./routes/login')
const index = require('./routes/index')
const profile = require('./routes/profile')
const register = require('./routes/register')

app.use('/login', login)
app.use('/register', register)
app.use('/', index)
app.use('/:id', profile)


app.listen(3000)



