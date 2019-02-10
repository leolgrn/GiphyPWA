import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Trending Gifs',
            icon: 'view_module',
            component: () => import('@/views/TrendingGifs.vue'),
        },
        {
            path: '/random/gif',
            name: 'Random Gif',
            icon: 'casino',
            component: () => import('@/views/RandomGif.vue'),
        },
        {
            path: '/random/sticker',
            name: 'Random Sticker',
            icon: 'sentiment_satisfied_alt',
            component: () => import('@/views/RandomSticker.vue'),
        },
        {
            path: '/search',
            name: 'Search',
            icon: 'search',
            component: () => import('@/views/Search.vue'),
        },
    ],
});
