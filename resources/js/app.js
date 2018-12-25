/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./dropzone');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError,AlertErrors, AlertSuccess } from 'vform'
import VueProgressBar from 'vue-progressbar'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import vue2Dropzone from 'vue2-dropzone'


window.drop = vue2Dropzone;

import Swal from 'sweetalert2'
window.wal = Swal;

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000
});

window.toast =toast;

window.NewVue =new Vue();

// Laravel

Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);
// CommonJS


Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertError)
Vue.component(AlertSuccess.name, AlertError)

import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.use(ClientTable);




let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/developer', component: require('./components/Developer.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/users', component: require('./components/Users.vue') }
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  Vue.filter('Mayus',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
  });

  Vue.filter ('date',function(created){
    return moment(created).format('DD/MM/YYYY');
  });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    
});


