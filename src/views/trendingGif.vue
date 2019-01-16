<template>
    <div class="card-columns">
        <div class="card gif-element" v-for="gif in gifs" :key="gif.id">
            <img :src="gif.images.downsized.url" class="card-img-top" alt="..." />
        </div>
    </div>
</template>

<script>
import dataService from '../data.service';

export default {
    name: 'trending_gif',
    data() {
        return {
            gifs: null,
        };
    },
    methods: {
        getTrendingGif() {
            dataService
                .getTrendingGif()
                .then(response => {
                    console.log(response.data.data);
                    this.gifs = response.data.data;
                })
                .catch(err => console.log(err));
        },
    },
    mounted() {
        this.getTrendingGif();
    },
};
</script>

<style>
img {
    width: 100%;
    height: 100%;
}

.card-columns {
    @include media-breakpoint-only(lg) {
        column-count: 4;
    }

    @include media-breakpoint-only(xl) {
        column-count: 5;
    }
}

.card-columns {
    padding: 10%;
}

.card {
    overflow: hidden;
}

.gif-element {
    box-shadow: 1px 1px 16px #ccc;
    margin-bottom: 10% !important;
    border-radius: 30px;
}
</style>
