import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import VueRouter from 'vue-router'

Vue.use(VueRouter);


import App from './App.vue'
import ResultsPage from "@/pages/ResultsPage";
import MainPage from "@/pages/MainPage";

const routes = [
    {
        path: '',
        component: MainPage
    },
    {
        path: '/results',
        component: ResultsPage
    }
];
const router = new VueRouter({
    routes
});

import axios from 'axios'

console.log('request host:', window.location.host);
let host = window.location.host;
host = host.split(":")[0];

Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://' + host + ':9200/recipebook/',

        })
    }
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
