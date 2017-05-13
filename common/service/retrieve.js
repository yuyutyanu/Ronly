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
    },
    tweet:(req,res)=> {
        db.t_Tweets.findAll({
            where: {user_id: 'a'},
            attributes: ['id', 'tweet', 'user_id', 'createdAt', 'updatedAt']
        }).then((tweets) => {
            res.send(tweets)
        })
    }
}