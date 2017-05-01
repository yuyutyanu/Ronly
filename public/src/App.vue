<script>

    import Vue from 'vue';
    import CustomHeader from './components/header/Header'
    import Index from './components/index/Index'
    import Login from './components/login/Login'
    import Profile from './components/profile/Profile'


    const app = new Vue({
        el: '#app',
        components: {
            CustomHeader,
            Index,
            Login,
            Profile
        }
    });

</script>

