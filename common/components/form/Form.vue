<template lang="pug" src="./Form.pug"></template>

<script>
    export default {
        data(){
            return {
                location: "login",
                register: false
            }
        },
        created: function () {
            if (window.location.pathname === "/register") {
                this.location = "register"
                this.register = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Form.scss" scoped></style>
