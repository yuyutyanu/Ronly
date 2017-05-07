<template lang="pug" src="./Header.pug">
</template>

<script>
    const axios = require('axios')

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
                    console.log(data)
                })
            }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

