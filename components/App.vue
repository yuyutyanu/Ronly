<script>

    import Vue from 'vue';
    import CustomHeader from './header/Header'
    import Index from './index/Index'
    import CustomForm from './form/Form'
    import Profile from './profile/Profile'




    const app = new Vue({
        el: '#app',
        components: {
            CustomHeader,
            Index,
            CustomForm,
            Profile
        }
    });

</script>

