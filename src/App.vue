<template>
    <v-app class="app">
        <Navigation />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from './components/navigation/Navigation.vue';

    export default {
        name: 'App',
        components: {
            Navigation,
        },
    };
</script>

<style>
    .app {
        font-family: "Roboto", monospace;
    }
</style>
