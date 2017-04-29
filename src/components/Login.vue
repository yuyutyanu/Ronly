<template>
    <div class="container">
            <form action="" class="login-form">
                <input type="text" placeholder="id"><br>
                <input type="password" placeholder="password"><br>
                <router-link to="/index"><button>送信</button></router-link>
            </form>
    </div>
</template>

<script>
    export default {

    }</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-form {
        margin: 100px auto;
        background: #2C5379;
        border: solid 15px #009999;
        width: 500px;
        height: 300px;
        text-align: center;
        transition: all 0.5s;
        position: relative;
    }

    .login-form:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        bottom: -70px;
        left: 50%;
        margin-left: -70px;
        border: solid 70px transparent;
        border-bottom: solid 50px #2C5379;
        z-index: -1;
    }
    .login-form:hover{
        border: solid 15px #33cccc;
    }

    .login-form input {
        margin-top: 50px;
        height: 25px;
        font-size: 15px;
        width: 250px;
        border: solid 5px #006666;
    }

    .login-form button {
        margin-top: 50px;
        background: #009999;
        border: solid 5px #006666;
        color: #f5f5f5;
        transition: all 0.5s;
        letter-spacing: 2px;
    }

    .login-form button:hover {
        border: solid 5px black;

    }
</style>
