<template>
    <v-navigation-drawer app width="300" permanent>
        <v-list dense
                shaped
                nav
                expanded
        >
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-group
                    v-for="item in items"
                    :key="item.index"
                    no-action
                    sub-group
                    value="true"
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.label }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="subitem in item.subitems"
                             :key="subitem.index"
                             :to="subitem.url"
                >
                    <v-list-item-icon class="ml-5">
                        <v-icon>
                            {{ subitem.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="subitem.label" />
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

    export default {
        name: 'Navigation',
        data: () => ({
            drawer: null,
            items: [
                {
                    label: 'Лабораторная 1',
                    icon: 'mdi-alert',
                    subitems: [
                        {
                            label: 'Задание 1',
                            icon: 'mdi-alert',
                            url: '/lab1/task1',
                        },
                        {
                            label: 'Задание 2',
                            icon: 'mdi-alert',
                            url: '/lab1/task2',
                        },
                    ],
                },
                /* {
                     label: 'Лабораторная 2',
                     icon: 'mdi-alert',
                     subitems: [
                         {
                             label: 'Задание 1',
                             icon: 'mdi-alert',
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
        methods: {},
    };
</script>

<style scoped>

</style>
