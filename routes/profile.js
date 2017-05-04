const express = require('express')
const router = express.Router()

// router.use((req, res) => {
//     res.redirect('/login')
// })

router.get('/', (req, res) => {
    res.render(__dirname + '/../views/profile.pug')
})

module.exports = router