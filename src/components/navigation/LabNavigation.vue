<template>
    <Navigation :items="items" />
</template>

<script>
    import Navigation from './Navigation.vue';

    export default {
        name: 'LabNavigation',
        components: {
            Navigation,
        },
        data: () => ({
            drawer: null,
            items: [
                {
                    label: 'Лабораторная 1',
                    icon: 'mdi-file-document-outline',
                    url: '/lab1',
                },
                {
                    label: 'Лабораторная 2',
                    icon: 'mdi-file-document-outline',
                    url: '/lab2',
                },
                {
                    label: 'Лабораторная 3',
                    icon: 'mdi-file-document-outline',
                    url: '/lab3',
                },
                {
                    label: 'Лабораторная 4',
                    icon: 'mdi-file-document-outline',
                    url: '/lab4',
                },
                {
                    label: 'Лабораторная 6',
                    icon: 'mdi-file-document-outline',
                    subitems: [
                        {
                            label: 'Задание 1',
                            icon: 'mdi-map-search   ',
                            url: '/lab6/task1',
                        },
                        {
                            label: 'Задание 2',
                            icon: 'mdi-google-analytics',
                            url: '/lab6/task2',
                        },
                    ],
                },
                {
                    label: 'Лабораторная 7',
                    icon: 'mdi-file-document-outline',
                    url: '/application-catalog',
                },
                /*{
                    label: 'Лабораторная 2',
                    icon: 'mdi-alert',
                    subitems: [
                        {
                            label: 'Задание 1',
                            icon: 'mdi-file-tree',
                            url: '/lab1/task1',
                        },
                        {
                            label: 'Задание 2',
                            icon: 'mdi-alert',
                            url: '/lab1/task2',
                        },
                    ],
                },*/
            ],
        }),
    };
</script>

<style scoped>

</style>
