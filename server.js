const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const db = require('./orm/models/index')
const service = require('./common/service/index')
const app = express()
const upload = multer(); // for parsing multipart/form-data
global.db = db
global.commonFn = service

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    httpOnly:false
}))


app.use(express.static(__dirname + '/static'))
app.set('view engine', 'pug');

const login = require('./routes/login')
const index = require('./routes/index')
const profile = require('./routes/profile')
const register = require('./routes/register')

app.use('/login', login)
app.use('/index', index)
app.use('/profile', profile)
app.use('/register', register)

app.listen(3000)


