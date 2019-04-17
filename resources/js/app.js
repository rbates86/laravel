import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Contactus from './components/Contactus'
import Home from './components/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contactus',
            name: 'contactus',
            component: Contactus,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});