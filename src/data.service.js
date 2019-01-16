import axios from 'axios';
import config from '../settings.json';

const host = 'https://api.giphy.com';
const params = {
    params: {
        api_key: config.API_KEY,
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
