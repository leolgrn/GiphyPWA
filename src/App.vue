<template>
    <v-app dark>
        <app-navigation />
        <v-content class="content"> <router-view /> </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation,
    },
    mounted() {
        this.$store.dispatch('getTrendingGifs');
        this.$store.dispatch('getRandomGif');
        this.$store.dispatch('getRandomSticker');
    },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
    .content {
        padding-left: 60px !important;
    }
}
</style>
