<template>
    <v-container fluid pt-1>
        <h1 class="mt-3 mb-2 headline">Random Gif</h1>
        <v-btn aria-label="Randomize" name="randomize" color="light-blue" class="ml-0 mb-4" @click="getNewRandomGif()"
            >Randomize</v-btn
        >
        <v-card flat tile v-if="gif.title" class="gif">
            <v-img
                :src="gif.images.fixed_width.webp"
                :lazy-src="gif.images.fixed_width_small_still.url"
                :aspect-ratio="gif.images.fixed_width.width / gif.images.fixed_width.height"
                :alt="gif.title"
            />
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0 />
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'RandomGif',
    computed: {
        gif() {
            return this.$store.state.randomGif;
        },
    },
    methods: {
        getNewRandomGif() {
            this.$store.dispatch('getRandomGif');
        },
    },
};
</script>

<style scoped>
.gif {
    max-width: 30rem;
}
</style>
