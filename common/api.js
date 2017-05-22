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
            axios.get('/timeline').then((obj) => {
                resolve(obj)
            })
        })
    }
}