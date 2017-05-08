<template lang="pug" src="./Index.pug"></template>

<script>
    var faker = require('faker');
    import event from '../bus'
    const bus = event.bus

    export default {
        data(){
            return {
                items: []
            }
        },
        created(){

            for (var i = 0; i < 20; i++) {
                console.log()
                this.items.push({
                    samune: faker.image.image(),
                    name: faker.name.findName(),
                    tweet: faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words(),
                    content_img: faker.image.image()
                });
            }
            var _me = this
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
