require('./bootstrap');
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

/**
* The following block of code may be used to automatically register your
* Vue components. It will recursively scan this directory for the Vue
* components and automatically register them with their "basename".
*
* Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
*/

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
* Next, we will create a fresh Vue application instance and attach it to
* the page. Then, you may begin adding components to this application
* or customize the JavaScript scaffolding to fit your unique needs.
*/

const LoginPage = () => import('^/Core/Resources/assets/components/Login.vue')
const Template = () => import('^/Core/Resources/assets/components/Template.vue')
const Dashboard = () => import('^/Core/Resources/assets/components/Dashboard.vue')
const Setting = () => import('^/Core/Resources/assets/components/Setting.vue')

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/control/auth/',
            name : 'login',
            component : LoginPage,
            meta: { 
                APP_NAME: process.env.MIX_APP_NAME,
                APP_URL: process.env.MIX_APP_URL,
            }
        },
        {
            path : '/control/spa',
            component : Template,
            children: [
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'dashboard',
                    name: 'dashboard',
                    components : {
                        content : Dashboard,
                    },
                    meta: { 
                        APP_NAME: process.env.MIX_APP_NAME,
                        APP_URL: process.env.MIX_APP_URL,
                        title_dashboard: 'Dashboard'
                    }
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'setting',
                    name: 'setting',
                    components : {
                        content : Setting,
                    },
                    meta: { 
                        APP_NAME: process.env.MIX_APP_NAME,
                        APP_URL: process.env.MIX_APP_URL,
                        title_dashboard: 'Setting'
                    }
                },
            ],
        },
    ]
})
new Vue({
    vuetify : new Vuetify(),
    el : '#main',
    router
})