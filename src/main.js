import Vue from 'vue';
import '@/plugins/vuetify';
import App from '@/App';
import router from '@/router/router';
import store from '@/store';
import path from 'path';

// Start vue app
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(path.resolve('sw.js'))
        .then(registration => {
            console.log('Successfully registered service worker', registration);
        })
        .catch(error => {
            console.warn('Error whilst registering service worker', error);
        });
}
