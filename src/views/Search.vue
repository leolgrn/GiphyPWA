<template>
    <v-container fluid grid-list-md pt-1>
        <h1 class="mt-3 headline">Search</h1>
        <v-form ref="form" v-model="valid" class="mt-4 mb-4" lazy-validation v-on:submit.prevent>
            <v-flex xs12 sm6 md4 lg3>
                <v-text-field
                    placeholder="cheeseburgers"
                    append-icon="search"
                    class="mt-0 pt-0 ml-0"
                    :disabled="!online"
                    :rules="inputRules"
                    required
                    v-on:keyup.13="searchNewGifs()"
                    v-model="query"
                />
            </v-flex>
            <v-btn
                aria-label="Search"
                name="Search"
                color="light-blue"
                class="mt-2 ml-0"
                @click="searchNewGifs()"
                :disabled="!online || !valid"
                >Search</v-btn
            >
        </v-form>
        <div class="mansory mt-1">
            <v-card flat tile v-for="(gif, index) in searchGifs" :key="index" class="d-inline-block mansory_item">
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
import { mapState } from 'vuex';

export default {
    name: 'Search',
    data: () => ({
        valid: true,
        query: '',
        inputRules: [
            v => !!v || 'Search term is required.',
            v => (v && v.length >= 3 && v.length <= 20) || 'Search term must contain between 3 and 20 characters.',
        ],
    }),
    computed: mapState({
        searchGifs: state => state.searchGifs,
        online: state => state.online,
    }),
    methods: {
        searchNewGifs() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('searchGifs', { query: this.$data.query });
            }
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
