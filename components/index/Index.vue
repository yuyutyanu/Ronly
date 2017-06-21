<template lang="pug" src="./Index.pug"></template>

<script>
    var faker = require('faker');
    var api = require('./../../api')
    import event from '../bus'
    const bus = event.bus

    export default {
        data(){
            return {
                items: [],
            }
        },
        created(){
            var _me = this
            var getTimeLine = function(){
                api.default.getTimeLine().then(function(timeLine){
                    for (var i = 0; i < timeLine.data.length; i++) {
                        _me.items.unshift({
                            id:timeLine.data[i].id,
                            samune: timeLine.data[i].samune,
                            name: timeLine.data[i].name,
                            tweet: timeLine.data[i].tweet,
                        });
                    }
                })
            }
            getTimeLine()

            bus.$on('tweet', function (Obj) {
                console.log(Obj)
                _me.items.unshift({
                    samune: Obj.data.samune,
                    name: Obj.data.name,
                    tweet:Obj.data.tweet,
                })
            })

            bus.$on('createFollow', function (){
                getTimeLine();
            })
            bus.$on('deleteFollow', function () {
                getTimeLine();
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Index.scss" scoped></style>
