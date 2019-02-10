import Vue from 'vue';
import '@/plugins/vuetify';
import App from '@/App';
import router from '@/router/router';
import store from '@/store';
import '@/registerServiceWorker';
import '@/service-worker';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
