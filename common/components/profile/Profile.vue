<template lang="pug" src="./Profile.pug">

</template>

<script>
    var faker = require('faker');
    export default {
        data(){
            return {
                    items:[]
            }
        },
            created(){
                for (var i = 0; i < 20; i++) {
                    console.log()
                    this.items.push({
                        samune: faker.image.imageUrl(),
                        tweet: faker.random.words() + faker.random.words() + faker.random.words()  + faker.random.words() + faker.random.words() + faker.random.words(),
                        content_img: faker.image.image()
                    });
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Profile.scss"scoped></style>
