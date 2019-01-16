import axios from 'axios';

const host = process.env.VUE_APP_GIPHY_API_HOST;
const params = {
    params: {
        api_key: process.env.VUE_APP_GIPHY_API_KEY,
    },
};

export default {
    getRandomGif() {
        return axios.get(host + '/v1/gifs/random', params);
    },
    getTrendingGif() {
        return axios.get(host + '/v1/gifs/trending', params);
    },
    getRandomSticker() {
        return axios.get(host + '/v1/stickers/random', params);
    },
};
