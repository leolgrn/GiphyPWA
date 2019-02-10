<template>
    <v-container fluid grid-list-md pt-1>
        <h1 class="mt-3 headline">Trending Gifs</h1>
        <div class="mansory mt-1">
            <v-card flat tile v-for="(gif, index) in trendingGifs" :key="index" class="d-inline-block mansory_item">
                <v-img
                    :src="gif.images.fixed_width.webp"
                    :lazy-src="gif.images.fixed_width_small_still.url"
                    :aspect-ratio="gif.images.fixed_width.width / gif.images.fixed_width.height"
                    :alt="gif.title"
                    width="100%"
                />
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0 />
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'TrendingGifs',
    computed: {
        trendingGifs() {
            return this.$store.state.trendingGifs;
        },
    },
};
</script>

<style scoped>
.mansory {
    column-count: 3;
}

@media screen and (max-width: 960px) {
    .mansory {
        column-count: 2;
    }
}

@media screen and (max-width: 600px) {
    .mansory {
        column-count: 1;
    }
}

.mansory_item,
.mansory_item img {
    min-width: 100%;
    width: 100%;
}
</style>
