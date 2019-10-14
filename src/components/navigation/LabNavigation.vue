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
                    label: 'Лабораторная 5',
                    icon: 'mdi-file-document-outline',
                    href: 'http://localhost:8080/lab5/Experiments.html',
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
                    url: '/lab7',
                },
                {
                    label: 'Лабораторная 8',
                    icon: 'mdi-file-document-outline',
                    url: '/lab8/list',
                },
            ],
        }),
    };
</script>

<style scoped>

</style>
