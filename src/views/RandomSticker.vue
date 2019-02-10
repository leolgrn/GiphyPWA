<template>
    <v-container fluid pt-1>
        <h1 class="mt-3 mb-2 headline">Random Sticker</h1>
        <v-btn
            aria-label="Randomize"
            name="randomize"
            color="light-blue"
            class="ml-0 mb-4"
            @click="getNewRandomSticker()"
            :disabled="!online"
            >Randomize</v-btn
        >
        <v-card flat tile v-if="sticker.title" class="sticker">
            <v-img
                :src="sticker.images.fixed_width.webp"
                :lazy-src="sticker.images.fixed_width_small_still.url"
                :aspect-ratio="sticker.images.fixed_width.width / sticker.images.fixed_width.height"
                :alt="sticker.title"
            />
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0 />
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'RandomSticker',
    computed: mapState({
        sticker: state => state.randomSticker,
        online: state => state.online,
    }),
    methods: {
        getNewRandomSticker() {
            this.$store.dispatch('getRandomSticker');
        },
    },
};
</script>

<style scoped>
.sticker {
    max-width: 30rem;
}
</style>
