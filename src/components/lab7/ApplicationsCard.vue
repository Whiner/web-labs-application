<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Applications
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-combobox
                                v-model="category"
                                :items="categories"
                                label="Select application category"
                                clearable
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-list v-if="filteredItems.length > 0">
                            <v-divider />
                            <template v-for="(item, index) in filteredItems">
                                <v-list-item :key="index"
                                             class="application-item"
                                             three-line
                                >
                                    <v-list-item-avatar class="d-flex align-self-center">
                                        <v-img :src="item.icon" />
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        <v-list-item-subtitle v-text="item.description" />
                                    </v-list-item-content>
                                    <v-list-item-action class="d-flex align-self-center">
                                        <v-btn icon link :href="item.url">
                                            <v-icon color="grey lighten-1">
                                                mdi-download
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider :key="-index-1" />
                            </template>
                        </v-list>
                        <p v-else class="subtitle-1 text-center">
                            Nothing founded
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import data from '../../res/data.json';
    import category from '../../res/application-category.json';

    export default {
        name: 'ApplicationsCard',
        data: () => ({
            items: [],
            category: null,
            categories: [],
        }),
        computed: {
            filteredItems() {
                if (this.category) {
                    return this.items.filter(value => value.category === this.category.value);
                }
                return this.items;
            },
        },
        created() {
            this.items = data;
            this.categories = category;
        },
    };
</script>

<style scoped>

</style>
