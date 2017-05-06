const express = require('express')
const router = express.Router()


router.use('/',(req, res, next) => {
    commonFn.check.login(req,res,next)
})

router.get('/', (req, res) =>{
    res.render(__dirname + '/../views/index.pug')
})



module.exports = router