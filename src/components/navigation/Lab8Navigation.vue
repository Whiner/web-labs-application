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
                    label: 'Вернуться к лабораторным',
                    icon: 'mdi-keyboard-return',
                    url: '/',
                },
                {
                    label: 'Приложения',
                    icon: 'mdi-application',
                    url: '/lab8/list',
                },
                {
                    label: 'Настройки',
                    icon: 'mdi-settings',
                    url: '/lab8/settings',
                },
            ],
        }),
    };
</script>

<style scoped>

</style>
