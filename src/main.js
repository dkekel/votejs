import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from '@/App.vue'
import Main from '@/components/Main.vue'
import Admin from '@/components/admin/Admin.vue'
import Router from 'vue-router'

import messages from "./resources/messages";
import 'bulma/css/bulma.css'
import Vote from "./components/vote/Vote";

Vue.use(VueI18n);
Vue.use(Router);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages
});

const routes = [
    {path: '/', component: Main},
    {path: '/admin', component: Admin},
    {path: '/vote/:talkId', component: Vote, props: true}
];

const router = new Router({
    mode: 'history',
    routes: routes
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    i18n,
    router
}).$mount('#app');