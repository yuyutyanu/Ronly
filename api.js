var axios = require('axios')

export default{
    createTweet: function ({text}) {
        return new Promise((resolve, reject) => {
            axios.post('/tweet', {text: text}).then((data) => {
                resolve(data)
            })
        })
    },
    getUserTweets: function (id) {
        return new Promise((resolve, reject) => {
            axios.get('/users/' + id).then((obj) => {
                resolve(obj)
            })
        })
    },
    getTimeLine: function () {

        return new Promise((resolve, reject) => {
            axios.get('/users').then((obj) => {
                resolve(obj)
            })
        })
    },
    createFollowUser: function ({follow_id}) {
        return new Promise((resolve, reject) => {
            axios.post('/follow', {follow_id: follow_id})
        })
    },
    deleteFollowUser: function ({follow_id}) {
        axios.delete('/follow/'+follow_id)
    }
}