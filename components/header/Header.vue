<template lang="pug" src="./Header.pug">
</template>

<script>
    const api = require('./../../api')
    import event from '../bus'
    const bus = event.bus

    export default{
        data(){
            return {
                show: false,
                text: "",
                id: "me",
                follow_id: ""
            }
        }, methods: {
            tweet: function () {
                api.default.createTweet({text: this.text}).then(function (data) {
                    bus.$emit('tweet', data)
                })
            },
            createFollow: function () {
                api.default.createFollowUser({follow_id: this.follow_id})
                bus.$emit('createFollow')
            },
            deleteFollow: function () {
                api.default.deleteFollowUser({follow_id: this.follow_id})
                bus.$emit('deleteFollow')
            }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

