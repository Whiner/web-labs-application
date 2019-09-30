<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Applications
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-list>
                            <v-divider />
                            <template v-for="(item, index) in items">
                                <v-list-item :key="index" class="application-item" @click="download(item.url)">
                                    <v-list-item-avatar>
                                        <v-img :src="item.icon" />
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        <v-list-item-subtitle v-text="item.description" />
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider :key="-index-1" />
                            </template>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import data from '../../res/data.json';

    export default {
        name: 'ApplicationsCard',
        data: () => ({
            items: [],
        }),
        created() {
            this.items = data;
        },
        methods: {
            download(url) {
                console.log(url);
            },
        },
    };
</script>

<style scoped>

</style>
