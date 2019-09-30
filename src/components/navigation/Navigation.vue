<template>
    <v-navigation-drawer app
                         permanent
                         width="300"
    >
        <v-list dense
                nav
        >
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-web</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Web лабы</v-list-item-title>
            </v-list-item>
            <v-divider />
            <template v-for="item in items">
                <v-list-group
                        v-if="item.subitems"
                        :key="item.index"
                        value="true"
                        prepend-icon="mdi-alert"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.label }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="subitem in item.subitems"
                                 :key="subitem.index"
                                 :to="subitem.url"
                                 sub-item
                    >
                        <v-list-item-icon class="ml-10">
                            <v-icon v-text="subitem.icon" />
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="subitem.label" />
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.index" :to="item.url">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.label" />
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

    export default {
        name: 'Navigation',
        props: {
            items: {
                type: Array,
                required: true,
            },
        },
        data: () => ({
            drawer: null,
        }),
    };
</script>

<style scoped>

</style>
