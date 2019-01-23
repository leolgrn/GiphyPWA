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
                        response.json().then(json => (this.gif = json.data));
                    }
                })
                .catch(err => console.log(err));
        },
    },
    mounted() {
        this.getRandomGif();
    },
};
</script>
