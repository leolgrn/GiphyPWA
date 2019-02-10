<template>
    <v-app dark>
        <app-navigation />
        <v-content class="content">
            <v-alert :value="online" type="success" class="mt-0" dismissible>You are connected.</v-alert>
            <v-alert :value="!online" type="error" class="mt-0">Please check your connection settings.</v-alert>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation,
    },
    computed: {
        online() {
            return this.$store.state.online;
        },
    },
    methods: {
        setOnline(event) {
            this.$store.commit('setOnline', { online: event.type === 'online' });
        },
    },
    beforeMount() {
        window.addEventListener('online', this.setOnline);
        window.addEventListener('offline', this.setOnline);
    },
    mounted() {
        this.$store.dispatch('getTrendingGifs');
        this.$store.dispatch('getRandomGif');
        this.$store.dispatch('getRandomSticker');
    },
    beforeDestroy() {
        window.removeEventListener('online', this.setOnline);
        window.removeEventListener('offline', this.setOnline);
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
