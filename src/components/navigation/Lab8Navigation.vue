<template>
    <Navigation :items="items" />
</template>

<script>
    import Navigation from './Navigation.vue';

    export default {
        name: 'L8Nav',
        components: {
            Navigation,
        },
        data: () => ({
            drawer: null,
            items: [
                {
                    label: 'Back to labs',
                    icon: 'mdi-keyboard-return',
                    url: '/',
                },
                {
                    label: 'Applications',
                    icon: 'mdi-application',
                    url: '/lab8/list',
                },
                {
                    label: 'Settings',
                    icon: 'mdi-settings',
                    url: '/lab8/settings',
                },
            ],
        }),
    };
</script>

<style scoped>

</style>
