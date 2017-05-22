<template lang="pug" src="./Header.pug">
</template>

<script>
    const api = require('../../api')
    import event from '../bus'
    const bus = event.bus

    export default{
        data(){
            return {
                show: false,
                text: "",
            }
        }, methods: {
            tweet: function () {
                api.default.createTweet({text: this.text}).then(function(data){
                  bus.$emit('tweet', data)
               })
            }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

