<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
            <v-divider />
            <v-list-group
                    v-for="item in items"
                    :key="item.index"
            >
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon size="20">
                                {{ item.icon }}
                            </v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>
                            {{ item.label }}
                        </v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-tile v-for="subitem in item.subitems"
                             :key="subitem.index"
                             :to="subitem.url"
                >
                    <v-list-tile-action>
                        <v-icon size="20">
                            {{ subitem.icon }}
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        {{ subitem.label }}
                    </v-list-tile-title>
                </v-list-tile>
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
            ],
        }),
        methods: {},
    };
</script>

<style scoped>

</style>
