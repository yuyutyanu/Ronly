var axios = require('axios')
import event from './components/bus'
const bus = event.bus
var faker = require('faker');

export default{
    createTweet: function ({text}) {
        axios.post('/tweet', {
            text: text
        }).then((data) => {
            bus.$emit('tweet', data)
        })
    },
    getTweets:function(items){
        axios.get('/tweets').then((obj)=>{
            for (var i = 0; i < obj.data.length; i++) {
               items.push({
                   samune: faker.image.imageUrl(),
                   tweet: obj.data[i].tweet,
                   content_img: faker.image.image()
               });
           }
        })
    }
}