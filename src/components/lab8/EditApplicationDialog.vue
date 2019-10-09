<template>
    <v-dialog v-model="dialog" width="800px">
        <v-card>
            <v-card-title class="headline primary white--text">
                Данные о студенте
            </v-card-title>

            <v-card-text>
                <v-container fluid py-1 mt-3>
                    <v-row>
                        <v-col class="py-2">
                            <v-text-field
                                    v-model="application.name"
                                    outlined
                                    hide-details
                                    label="Application name"
                            />
                        </v-col>
                        <v-col class="py-2">
                            <v-text-field
                                    v-model="application.url"
                                    outlined
                                    hide-details
                                    label="Site url"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="py-2">
                            <v-textarea
                                    v-model="application.description"
                                    auto-grow
                                    outlined
                                    hide-details
                                    rows="1"
                                    label="Description"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="py-2" cols="6">
                            <v-combobox
                                    v-model="category"
                                    :items="categories"
                                    label="Category"
                                    clearable
                                    hide-details
                                    outlined
                            />
                        </v-col>
                        <v-col class="py-2">
                            <v-file-input
                                    v-model="icon"
                                    prepend-inner-icon="mdi-image"
                                    prepend-icon=""
                                    outlined
                                    hide-details
                                    accept=".png"
                                    label="Icon"
                            />
                        </v-col>
                        <v-col v-if="iconSrc" class="d-flex align-self-center pl-0 py-0" cols="1">
                            <img :src="iconSrc" alt="" class="icon">
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-container fluid py-1>
                    <v-row justify="end">
                        <v-col cols="2" class="py-0">
                            <v-btn block
                                   text
                                   color="success"
                                   @click="close"
                            >
                                Вернуться
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { getCategories } from '../../client/categories';
    import { toBase64 } from '../../utils/utils';

    export default {
        name: 'EditApplicationDialog',
        data: () => ({
            dialog: false,
            application: {},
            category: null,
            categories: [],
            icon: null,
            iconSrc: null,
        }),
        watch: {
            async icon() {
                if (this.icon) {
                    this.updateIconSrc();
                } else {
                    this.iconSrc = null;
                }
            },
        },
        created() {
            this.updateCategories();
        },
        methods: {
            async updateIconSrc() {
                this.iconSrc = await toBase64(this.icon);
            },
            show(application) {
                this.application = application || {};
                this.dialog = true;
            },
            close() {
                this.dialog = false;
            },
            async updateCategories() {
                try {
                    this.categories = (await getCategories()).data;
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>

<style scoped>
    .icon {
        width: 100%;
    }
</style>
