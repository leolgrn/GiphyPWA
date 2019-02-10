module.exports = {
    routes: [
        {
            path: '/',
            name: 'Trending Gifs',
            icon: 'view_module',
            component: () => import('@/views/TrendingGifs'),
        },
        {
            path: '/random/gif',
            name: 'Random Gif',
            icon: 'casino',
            component: () => import('@/views/RandomGif'),
        },
        {
            path: '/random/sticker',
            name: 'Random Sticker',
            icon: 'sentiment_satisfied_alt',
            component: () => import('@/views/RandomSticker'),
        },
        {
            path: '/search',
            name: 'Search',
            icon: 'search',
            component: () => import('@/views/Search'),
        },
    ],
};
