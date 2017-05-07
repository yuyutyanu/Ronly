module.exports = {
    user:(req,res)=>{
        db.m_Users.findOne({
            where: {
                id: req.session.user.id
            }
        })
        .then((user) => {
            res.send(user)
        })
    }
}