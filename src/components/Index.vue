<template>
    <div class="container">
        <div class="tweets">
            <div class="tweet">
                <div class="tweet-head">
                    <router-link to="/users/{id}"><img class="tweet-head_img" src="/public/img/chanu.jpeg" alt="">
                    </router-link>
                    <h2 class="tweet-head_h2">ちゃぬ</h2>
                </div>
                <div class="tweet-body">
                    <p>今日の朝ごはんは卵焼き</p>
                </div>
            </div>

            <div class="tweet" v-for="item in items">
                <div class="tweet-head">
                    <router-link to="/users/{id}"><img class="tweet-head_img" :src="item.samune" alt=""></router-link>
                    <h2 class="tweet-head_h2">{{item.name}}</h2>
                </div>
                <div class="tweet-body">
                    <p>{{item.tweet}}</p>
                    <img :src="item.content_img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var faker = require('faker');
    export default {
        data(){
            return {
                items: []
            }
        },
        created(){
            for (var i = 0; i < 100; i++) {
                console.log()
                this.items.push({
                    samune: faker.image.image(),
                    name: faker.name.findName(),
                    tweet: faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words() + faker.random.words(),
                    content_img: faker.image.image()
                });
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tweets {

        -webkit-column-count: 4;
        -webkit-column-gap: 30px;

        -moz-column-count: 4;
        -moz-column-gap: 30px;

        column-count: 4;
        column-gap: 30px;

    }

    .tweet {
        box-sizing: border-box;
        width: 300px;
        height: auto;
        margin-bottom: 30px;
        border: solid 5px #009999;
        transition: all 0.5s;
        background: #fff;
        break-inside: avoid;
        word-wrap: break-word;
    }

    .tweet:hover {
        border: solid 5px #006666;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
    }

    .tweet-head {
        width: 100%;
        height: 100px;
        display: flex;
        letter-spacing: 2px;
        background: #2C5379;
        position: relative;
    }

    .tweet-head_img {
        height: 80px;
        width: 80px;
        border: solid 5px #009999;
        box-sizing: border-box;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .tweet-head_h2 {
        color: #fff;
        font-weight: 400;
        font-size: 15px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        left: 100px;
    }

    .tweet-body {
        padding: 10px;
        letter-spacing: 2px;
        height: auto;
        box-sizing: border-box;
        line-height: 25px;
    }

    .tweet-body img {
        display: block;
        width: 80%;
        margin: 10px auto;
        border-radius: 10px;

    }
</style>
