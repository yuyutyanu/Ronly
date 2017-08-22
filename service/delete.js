module.exports = {
    followUser: (req) => {
       return db.t_Follows.destroy({
            where: {
                follow_id: req.params.id,
                user_id: req.session.user.id
            }
        })
    }
}