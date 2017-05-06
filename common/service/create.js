module.exports = {
    user: (req, res) => {
        db.m_Users
            .build({
                id: req.body.id,
                name: req.body.nickname,
                profile_message: 'foo',
                samune: 'bar',
                password: req.body.password
            })
            .save()
            .then(function (savedTask) {
                res.redirect("/login")
            }).catch(function (error) {
                res.redirect("/register")
        })
    }
}