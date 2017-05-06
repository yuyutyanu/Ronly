const express = require('express')
const router = express.Router()



router.get('/', (req, res)=> {
    res.render(__dirname + '/../views/register.pug')
})

router.post('/',(req,res)=>{
    commonFn.create.user(req,res)
})

module.exports = router