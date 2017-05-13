<template lang="pug" src="./Profile.pug">

</template>

<script>
    var api = require('../../api')
    export default {
        data(){
            return {
                items: []
            }
        },
        created(){
            api.default.getTweets(this.items)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Profile.scss" scoped></style>
