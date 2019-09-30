<template>
    <Navigation :items="items" />
</template>

<script>
    import Navigation from './Navigation.vue';

    export default {
        name: 'ApplicationSiteNavigation',
        components: {
            Navigation,
        },
        data: () => ({
            drawer: null,
            items: [
                {
                    label: 'Вернуться к лабораторным',
                    icon: 'mdi-keyboard-return',
                    url: '/',
                },
            ],
        }),
    };
</script>

<style scoped>

</style>
