<template>
    <div>
        <v-navigation-drawer app fixed clipped permanent :mini-variant="shrinked" width="225" mini-variant-width="60">
            <v-list v-for="(item, index) in items" :key="index">
                <v-list-tile
                    :ripple="{ class: 'grey--text lighten-5' }"
                    :to="item.path"
                    active-class="current"
                    @click="handleItemClick()"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon
                aria-label="Navigation Switch"
                name="Navigation Switch"
                class="mr-0"
                @click="toggleNavigation()"
            />
            <v-img :src="require('../assets/logo-small.gif')" contain class="logo" />
            <v-toolbar-title class="headline text-uppercase ml-0">Gifffle</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            items: this.$router.options.routes,
            clientWidth: document.documentElement.clientWidth,
        };
    },
    computed: {
        shrinked() {
            return this.$store.state.shrinkedNavigation;
        },
    },
    methods: {
        toggleNavigation() {
            this.$store.commit('setShrinkedNavigation', { shrinkedNavigation: !this.$store.state.shrinkedNavigation });
        },
        handleItemClick() {
            if (this.clientWidth < 600 && !this.shrinked) {
                this.$store.commit('setShrinkedNavigation', { shrinkedNavigation: true });
            }
        },
        handleResize() {
            const clientWidth = document.documentElement.clientWidth;

            if (this.clientWidth < 960 && clientWidth >= 960) {
                this.$store.commit('setShrinkedNavigation', { shrinkedNavigation: false });
            }

            if (this.clientWidth > 960 && clientWidth <= 960) {
                this.$store.commit('setShrinkedNavigation', { shrinkedNavigation: true });
            }

            this.clientWidth = clientWidth;
        },
    },
    beforeMount() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>

<style scoped>
div >>> a:hover {
    text-decoration: none;
}

div >>> a > div {
    color: white;
}

div >>> .current {
    background-color: rgba(255, 255, 255, 0.2) !important;
}

.v-list {
    padding: 0;
}

aside.v-navigation-drawer--mini-variant >>> a {
    padding: 0 6px;
}

.logo {
    flex-grow: initial;
    height: 100%;
    width: 6rem;
}

nav >>> .v-toolbar__content {
    padding-left: 1.25rem;
}
</style>
