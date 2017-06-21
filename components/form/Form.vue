<template lang="pug" src="./Form.pug"></template>

<script>
    export default {
        props:["mode"],
        data(){
            return {
                location: "login",
                register: false
            }
        },
        created: function () {
            if (this.mode === "register") {
                this.location = "register"
                this.register = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Form.scss" scoped></style>
