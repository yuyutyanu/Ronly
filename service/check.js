module.exports = {
    login: (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/login');
        }
    },
    user:(req,res)=>{
        db.m_Users.findOne({
            where: {
                "id": req.body.id,
                "password": req.body.password
            }
        }).then((user) => {
            req.session.user = {id: user.id}
        }).then(() => {
            res.redirect("/")
        }).catch(function (err) {
            res.redirect("/login")
        });
    }
}