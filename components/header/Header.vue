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
                follow_id: "",
                send_flag: false
            }
        }, methods: {
            tweet: function () {
                api.default.createTweet({text: this.text}).then(function (data) {
                    bus.$emit('tweet', data)
                })
            },
            createFollow: function () {
                if (!this.send_flag) {
                    this.send_flag = true
                    api.default.createFollowUser({follow_id: this.follow_id}).then(() => {
                        bus.$emit('createFollow')
                        this.follow_id = ""
                        this.send_flag = false
                    })
                }
            },
            deleteFollow: function () {
                if (!this.send_flag) {
                    this.send_flag = true
                    api.default.deleteFollowUser({follow_id: this.follow_id}).then(() => {
                        bus.$emit('deleteFollow')
                        this.follow_id = ""
                        this.send_flag = false
                    })
                }
            }
        }
    }
</script>

<style lang="scss" src="./Header.scss" scoped></style>

