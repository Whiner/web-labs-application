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
                            <v-row>
                                <v-col class="pb-0">
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
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="5" class="pb-0">
                        <v-container fluid class="pa-0">
                            <v-row>
                                <v-col>
                                    <v-text-field
                                            v-model="categoryField"
                                            outlined
                                            hide-details
                                            clearable
                                            label="Category"
                                    />
                                </v-col>
                                <v-col v-if="categoryField && categoryField.length > 0"
                                       cols="1"
                                       align-self="center"
                                       class="pa-0"
                                >
                                    <v-btn icon @click="saveCategory">
                                        <v-icon>
                                            mdi-content-save
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col v-if="editingCategory"
                                       cols="1"
                                       align-self="center"
                                       class="pa-0"
                                >
                                    <v-btn icon @click="cancelEditing">
                                        <v-icon>
                                            mdi-close-circle
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="pa-0">
                                    <p class="subtitle-1 mb-0 text-center">
                                        Category list
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="pb-0">
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
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <EditApplicationDialog ref="applicationDialog" @edit="onAppEdit" />
        <ConfirmDialog ref="confirmDialog" @confirm="onDialogConfirm" />
    </v-card>
</template>

<script>
    import { deleteApplication, getApplications } from '../../client/applications';
    import { addCategory, editCategory, getCategories } from '../../client/categories';
    import EditApplicationDialog from './EditApplicationDialog.vue';
    import ConfirmDialog from '../ConfirmDialog.vue';

    export default {
        name: 'ApplicationsCard',
        components: {
            EditApplicationDialog,
            ConfirmDialog,
        },
        data: () => ({
            categoryField: '',
            items: [],
            categories: [],
            deletingItemId: null,
            editingCategory: null,
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
            editApplication(application) {
                this.$refs.applicationDialog.show(application);
            },
            onAppEdit() {
                this.updateApplications();
            },
            editCategory(category) {
                this.editingCategory = category;
                this.categoryField = this.editingCategory.text;
            },
            async saveCategory() {
                if (this.editingCategory) {
                    await editCategory({
                        // eslint-disable-next-line no-underscore-dangle
                        id: this.editingCategory._id,
                        text: this.categoryField,
                        value: this.editingCategory.value,
                    });
                } else {
                    await addCategory(this.categoryField);
                }
                this.editingCategory = null;
                this.categoryField = null;
                await this.updateCategories();
            },
            cancelEditing() {
                this.editingCategory = null;
                this.categoryField = null;
            },
            deleteApplication(id) {
                this.$refs.confirmDialog.show();
                this.deletingItemId = id;
            },
            async onDialogConfirm() {
                await deleteApplication(this.deletingItemId);
                this.deletingItemId = null;
                this.updateApplications();
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
