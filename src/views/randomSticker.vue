<template>
    <div><iframe v-if="gif" :src="gif.embed_url" /><button v-on:click="getRandomSticker()">reload</button></div>
</template>

<script>
import dataService from '../data.service';

export default {
    name: 'random_sticker',
    data() {
        return {
            gif: null,
        };
    },
    methods: {
        getRandomSticker() {
            dataService
                .getRandomSticker()
                .then(response => {
                    if (response.ok) {
                        response.json().then(json => (this.gif = json.data));
                    }
                })
                .catch(err => console.log(err));
        },
    },
    mounted() {
        this.getRandomSticker();
    },
};
</script>
