const express = require('express')
const router = express.Router()


// router.use((req, res) => {
//     res.redirect('/login')
// })

router.get('/', (req, res) => {
    req.session.user = req.session.id
    console.log(req.session)
    res.render(__dirname + '/../views/index.pug')
})


module.exports = router