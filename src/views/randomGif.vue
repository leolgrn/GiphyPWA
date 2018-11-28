<template>
  <div>
    <iframe v-if="gif" :src="gif.embed_url"/>
    <button v-on:click="getRandomGif()">Reload</button>
  </div>
</template>

<script>
import dataService from "../data.service"

export default {
    name: "trending_gif",
    data() {
        return {
            gif: null
        }
    },
    methods: {
        getRandomGif() {
            dataService.getRandomGif()
                .then(response => {
                    console.log(response);
                    this.gif = response.data.data
                })
                .catch(err => console.log(err));
        }
    },
    mounted() {
        this.getRandomGif();
    }
};
</script>