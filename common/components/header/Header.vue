<template lang="pug" src="./Header.pug">
</template>

<script>
    const axios = require('axios')
    import event from '../bus'
    const bus = event.bus

    export default{
        data(){
            return {
                show: false,
                text: ""
            }
        }, methods: {
            tweet: function () {
                axios.post('/tweet', {
                    text: this.text
                }).then((data) => {
                    bus.$emit('tweet',data)
                })
            },
            hoge:function(){

            }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

