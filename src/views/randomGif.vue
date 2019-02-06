<template>
    <div><iframe v-if="gif" :src="gif.embed_url" /><button v-on:click="getRandomGif()">Reload</button></div>
</template>

<script>
import dataService from '../data.service';

export default {
    name: 'random_gif',
    data() {
        return {
            gif: null,
        };
    },
    methods: {
        getRandomGif() {
            dataService
                .getRandomGif()
                .then(response => {
                    if (response.ok) {
                        response
                            .json()
                            .then(json => {
                                this.gif = json.data;
                                this.saveGifToCache(this.gif);
                            })
                            .catch(err => console.log(err));
                    }
                })
                .catch(err => console.log(err));
        },
        saveGifToCache(gif) {
            caches
                .open(process.env.CACHE_NAME)
                .then(cache => {
                    cache.add(gif.images.downsized.url);
                })
                .catch(err => console.log(err));
        },
    },
    mounted() {
        this.getRandomGif();
    },
};
</script>
