<template>
    <section>
        <header>
            <a class="me" href="/users/{id}"></a>
            <a class="timeline" href="/index"></a>
            <a class="settings" href="/"></a>
            <button class="tubuyaki" @click="show = !show">つぶやく</button>

            <transition name="fade">
                <div class="tweet-box" v-if="show">
                    <div class="tweet-box-form">
                        <textarea class="tweet-box_textarea"></textarea>
                        <div class="tweet-box-buttons">
                            <div class="tweet-box_button_positionLeft">

                            </div>
                            <div class="tweet-box_button_positionRight">
                                <button class="tweet-box_button" @click="show = !show">つぶやく</button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </header>
    </section>
</template>

<script>
    export default{
        data(){
            return {
                show: false,
            }
        }
    }
</script>

<style>
    header {
        height: 50px;
        background: #009999;
        padding-top: 9px;
        box-sizing: border-box;
        position: relative;
    }

    header .timeline {
        display: block;
        height: 32px;
        width: 32px;
        background: url('/public/img/home.png');
        position: absolute;
        right: 30px;
    }

    header .me {
        display: block;
        height: 32px;
        width: 32px;
        background: url('/public/img/human.png');
        position: absolute;
        right: 80px;
    }

    header .settings {
        display: block;
        height: 32px;
        width: 32px;
        background: url('/public/img/settings.png');
        position: absolute;
        right: 130px;
    }

    header .tubuyaki {
        position: absolute;
        height: 32px;
        width: 100px;
        right: 180px;
        background: #009999;
        border: solid 5px #006666;
        color: #f5f5f5;
        transition: all 0.5s;
        letter-spacing: 2px;
    }

    header .tubuyaki:hover {
        background: #33cccc;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }

    .tweet-box {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        z-index: 1;
    }

    .tweet-box-form {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 340px;
        width: 400px;
        margin-top: -200px;
        margin-left: -200px;

    }

    .tweet-box_textarea {
        width: 400px;
        height: 300px;
        padding: 10px;
        resize: none;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 15px;
    }

    .tweet-box-buttons {
        height: 30px;
        width: 400px;
        position: relative;
    }

    .tweet-box_button {
        height: 32px;
        width: 100px;
        background: #009999;
        border: solid 5px #006666;
        color: #f5f5f5;
        letter-spacing: 2px;
    }

    .tweet-box_button_positionLeft {
        position: absolute;
        left: 10px;
    }

    .tweet-box_button_positionRight {
        position: absolute;
        right: 10px;
    }

</style>

