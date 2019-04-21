import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Meta from 'vue-meta'

import Home from './views/home.vue';
import Type from './views/type.vue';
import Allnight from './views/allnight.vue';
import Fastfood from './views/fastfood.vue';
import Cafe from './views/cafe.vue';
import Restaurant from './views/restaurant.vue';
import Snacks from './views/snacks.vue';
import Spec from './views/spec.vue';
import Street from './views/street.vue';
import Tour from './views/tour.vue';
import Popup from './views/popup.vue';




Vue.use(Router);
Vue.use(Meta);

const routes = [
 {path: '/', component: Home},
 {path: '/type', component: Type},
 {path: '/allnight', component: Allnight},
 {path: '/fastfood', component: Fastfood},
 {path: '/cafe', component: Cafe},
 {path: '/restaurant', component: Restaurant},
 {path: '/snacks', component: Snacks},
 {path: '/spec', component: Spec},
 {path: '/street', component: Street},
 {path: '/tour', component: Tour},
 {path: '/popup', component: Popup},

]

const router = new Router({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')