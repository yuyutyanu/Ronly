const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render(__dirname + '/../views/login.pug')
})

router.post('/', (req, res) => {
    commonFn.check.user(req,res);
})


module.exports = router