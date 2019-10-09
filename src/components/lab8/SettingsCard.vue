<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Settings
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row justify="space-around">
                    <v-col cols="5" class="pb-0">
                        <v-container fluid class="pa-0">
                            <v-row>
                                <v-col class="pa-0" offset="2">
                                    <p class="subtitle-1 mb-0 text-center">
                                        Application list
                                    </p>
                                </v-col>
                                <v-col class="pa-0 text-center" cols="2">
                                    <v-btn icon @click="addApplication">
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="5" class="pb-0">
                        <v-container fluid class="pa-0">
                            <v-row>
                                <v-col class="pa-0" offset="2">
                                    <p class="subtitle-1 mb-0 text-center">
                                        Category list
                                    </p>
                                </v-col>
                                <v-col class="pa-0 text-center" cols="2">
                                    <v-btn icon @click="addCategory">
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col cols="5" class="pb-0">
                        <v-list>
                            <v-divider />
                            <template v-for="(item, index) in items">
                                <v-list-item :key="index" class="pr-3">
                                    <v-list-item-title>
                                        {{ item.name }}
                                    </v-list-item-title>
                                    <v-list-item-action>
                                        <v-btn icon color="info" @click="editApplication(item)">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                    <v-list-item-action>
                                        <v-btn icon color="error" @click="deleteApplication(item._id)">
                                            <v-icon>
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider :key="-index - 1" />
                            </template>
                        </v-list>
                    </v-col>
                    <v-col cols="5" class="pb-0">
                        <v-list>
                            <v-divider />
                            <template v-for="(category, index) in categories">
                                <v-list-item :key="index" class="pr-3">
                                    <v-list-item-title>
                                        {{ category.text }}
                                    </v-list-item-title>
                                    <v-list-item-action>
                                        <v-btn icon color="info" @click="editCategory(category)">
                                            <v-icon>
                                                mdi-pencil
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                    <v-list-item-action>
                                        <v-btn icon color="error" @click="deleteCategory(category._id)">
                                            <v-icon>
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider :key="-index - 1" />
                            </template>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <EditApplicationDialog ref="applicationDialog" />
    </v-card>
</template>

<script>
    import { getApplications } from '../../client/applications';
    import { getCategories } from '../../client/categories';
    import EditApplicationDialog from './EditApplicationDialog.vue';

    export default {
        name: 'ApplicationsCard',
        components: {
            EditApplicationDialog,
        },
        data: () => ({
            items: [],
            categories: [],
        }),
        created() {
            this.updateApplications();
            this.updateCategories();
        },
        methods: {
            async updateApplications() {
                try {
                    this.items = (await getApplications(null)).data;
                } catch (e) {
                    console.log(e);
                }
            },
            async updateCategories() {
                try {
                    this.categories = (await getCategories()).data;
                } catch (e) {
                    console.log(e);
                }
            },
            addApplication() {
                this.$refs.applicationDialog.show(null);
            },
            addCategory() {

            },
            editApplication(application) {
                console.log(application);
            },
            editCategory(category) {
                console.log(category);
            },
            deleteApplication(id) {
                console.log(id);
            },
            deleteCategory(id) {
                console.log(id);
            },
        },
    };
</script>

<style scoped>
    .progress {
        height: 3px;
    }
</style>
