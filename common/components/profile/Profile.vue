<template lang="pug" src="./Profile.pug">

</template>

<script>
    var api = require('../../api')
    var faker = require('faker');
    export default {
        data(){
            return {
                items: []
            }
        },
        created(){
            var _me = this
            api.default.getMyTweets(this.items).then(function(obj){
                for (var i = 0; i < obj.data.t_Tweets.length; i++) {
                    _me.items.push({
                        tweet: obj.data.t_Tweets[i].tweet,
                        content_img: faker.image.image()
                    });
                }
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Profile.scss" scoped></style>
