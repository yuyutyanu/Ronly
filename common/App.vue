<script>

    import Vue from 'vue';
    import CustomHeader from './components/header/Header'
    import Index from './components/index/Index'
    import CustomForm from './components/form/Form'
    import Profile from './components/profile/Profile'


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

