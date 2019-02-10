import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const apiUrl = process.env.VUE_APP_GIPHY_API_HOST;
const apiKey = process.env.VUE_APP_GIPHY_API_KEY;

export default new Vuex.Store({
    state: {
        shrinkedNavigation: document.documentElement.clientWidth < 960,
        trendingGifs: [],
        randomGif: {},
        randomSticker: {},
        online: navigator.onLine,
    },
    mutations: {
        setShrinkedNavigation(state, payload) {
            state.shrinkedNavigation = payload.shrinkedNavigation;
        },
        setTrendingGifs(state, payload) {
            state.trendingGifs = payload.trendingGifs;
        },
        setRandomGif(state, payload) {
            state.randomGif = payload.randomGif;
        },
        setRandomSticker(state, payload) {
            state.randomSticker = payload.randomSticker;
        },
        setOnline(state, payload) {
            state.online = payload.online;
        },
    },
    actions: {
        async getTrendingGifs({ commit }) {
            const response = await fetch(`${apiUrl}/v1/gifs/trending?api_key=${apiKey}`);

            if (!response.ok) {
                commit('setTrendingGifs', { trendingGifs: [] });
                console.error(response.statusText);
            }

            commit('setTrendingGifs', { trendingGifs: (await response.json()).data });
        },
        async getRandomGif({ commit }) {
            const response = await fetch(`${apiUrl}/v1/gifs/random?api_key=${apiKey}`);

            if (!response.ok) {
                commit('setRandomGif', { randomGif: [] });
                console.error(response.statusText);
            }

            commit('setRandomGif', { randomGif: (await response.json()).data });
        },
        async getRandomSticker({ commit }) {
            const response = await fetch(`${apiUrl}/v1/stickers/random?api_key=${apiKey}`);

            if (!response.ok) {
                commit('setRandomSticker', { randomSticker: [] });
                console.error(response.statusText);
            }

            commit('setRandomSticker', { randomSticker: (await response.json()).data });
        },
    },
});
