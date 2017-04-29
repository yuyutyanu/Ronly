<template>
    <section>
        <div class="profile-head"></div>
        <div class="self-introduction">
                <p class="self-introduction_p">ちゃぬだよ、モック作成なうだよ<br>
                ここは自己紹介文をかくところ
                </p>
        </div>
        <div class="container">
            <div class="tweets">
                <div class="tweet" v-for="item in items">
                    <div class="tweet-head">
                        <a href="/users/{id}"><img class="tweet-head_img" :src="item.samune" alt=""></a>
                        <h2 class="tweet-head_h2">ちゃぬ</h2>
                    </div>
                    <div class="tweet-body">
                        <p>{{item.tweet}}</p>
                        <img :src="item.content_img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                        content_img:faker.image.image()
                    });
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile-head {
        background: #2C5379;
        height: 150px;
        position: relative;
    }

    .profile-head:after {
        position: absolute;
        content: "";
        bottom: -90px;
        left:50%;
        margin-left:-90px;
        background: url('/public/img/chanu.jpeg');
        height: 180px;
        width: 180px;
        border:solid 5px #009999;
    }
    .self-introduction{
        height:250px;
        padding-top:130px;
        border-bottom:solid 3px #fff;
        text-align: center;
    }
    .self-introduction_p{
        letter-spacing: 1px;
        line-height: 25px;
    }

    .tweets {
    }

    .tweet {
        box-sizing: border-box;
        width: 800px;
        height: auto;
        margin-bottom: 20px;
        border: solid 5px #009999;
        transition: all 0.5s;
        background: #fff;
        margin:20px auto;
    }

    .tweet:hover {
        border: solid 5px #006666;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
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
        width: 55%;
        margin: 20px auto;
        border-radius: 10px;

    }
</style>
