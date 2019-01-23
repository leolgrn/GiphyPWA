const host = process.env.VUE_APP_GIPHY_API_HOST;
const api_key = process.env.VUE_APP_GIPHY_API_KEY;
const fetchParams = {
    method: 'GET',
    mode: 'cors',
};

export default {
    getRandomGif() {
        return fetch(host + '/v1/gifs/random?api_key=' + api_key, fetchParams);
    },
    getTrendingGif() {
        return fetch(host + '/v1/gifs/trending?api_key=' + api_key, fetchParams);
    },
    getRandomSticker() {
        return fetch(host + '/v1/stickers/random?api_key=' + api_key, fetchParams);
    },
};
