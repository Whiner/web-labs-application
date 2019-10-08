<template>
    <div class="fill-height">
        <ApplicationSiteNavigation />
        <v-content>
            <router-view />
        </v-content>
    </div>
</template>

<script>
    import ApplicationSiteNavigation from '../components/navigation/Lab8Navigation.vue';

    export default {
        name: 'Lab8List',
        components: {
            ApplicationSiteNavigation,
        },
    };
</script>

<style scoped>

</style>
