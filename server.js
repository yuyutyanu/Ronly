const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    httpOnly:false
}))


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

const login = require('./routes/login')
const index = require('./routes/index')
const profile = require('./routes/profile')
const register = require('./routes/register')

app.use('/login', login)
app.use('/', index)
app.use('/profile', profile)
app.use('/register', register)



app.listen(3000)


