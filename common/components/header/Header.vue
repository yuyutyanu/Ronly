<template lang="pug" src="./Header.pug">
</template>

<script>
    const api = require('../../api')


    export default{
        data(){
            return {
                show: false,
                text: ""
            }
        }, methods: {
           tweet:function(){
               api.default.createTweet({text:this.text})
           }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

