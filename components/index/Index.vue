<template lang="pug" src="./Index.pug"></template>

<script>
    var faker = require('faker');
    var api = require('./../../../api')
    import event from '../bus'
    const bus = event.bus

    export default {
        data(){
            return {
                items: [],
                href:'/profile?id='
            }
        },
        created(){
            var _me = this

            api.default.getTimeLine().then(function(timeLine){
                for (var i = 0; i < timeLine.data.length; i++) {
                    _me.items.unshift({
                        id:timeLine.data[i].id,
                        samune: timeLine.data[i].samune,
                        name: timeLine.data[i].name,
                        tweet: timeLine.data[i].tweet,
                        content_img: faker.random.image()
                    });
                }
            })


            bus.$on('tweet', function (Obj) {
                _me.items.unshift({
                    samune: faker.image.image(),
                    name: faker.name.findName(),
                    tweet:Obj.data.tweet,
                    content_img: faker.image.image()
                })
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Index.scss" scoped></style>
