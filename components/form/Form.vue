<template lang="pug" src="./Form.pug"></template>

<script>
    export default {
        props:["register"],
        data(){
            return {
                location: "login",
                register: false
            }
        },
        created: function () {
            if (this.register === "true") {
                this.location = "register"
                this.register = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Form.scss" scoped></style>
