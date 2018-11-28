<template>
  <div><iframe v-for="gif in gifs" :src="gif.embed_url"/></div>
</template>

<script>
import dataService from "../data.service"

export default {
    name: "trending_gif",
    data() {
        return {
            gifs: null
        }
    },
    methods: {
        getTrendingGif() {
            dataService.getTrendingGif()
                .then(response => {
                    console.log(response);
                    this.gifs = response.data.data
                })
                .catch(err => console.log(err));
        }
    },
    mounted() {
        this.getTrendingGif();
    }
};
</script>