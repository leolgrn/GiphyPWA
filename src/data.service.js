import axios from "axios";
import config from "../global.config";

const host = "http://api.giphy.com";
const params = {
  params: {
    api_key: config.APIKEY
  }
};

export default {
  getRandomGif() {
    return axios.get(host + "/v1/gifs/random", params);
  },
  getTrendingGif() {
    return axios.get(host + "/v1/gifs/trending", params);
  },
  getRandomSticker() {
    return axios.get(host + "/v1/stickers/random", params)
  }
};
