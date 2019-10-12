<template>
    <v-dialog v-model="dialog" width="800px">
        <v-card>
            <v-card-title class="headline primary white--text">
                Данные о студенте
            </v-card-title>

            <v-card-text>
                <v-form ref="form">
                    <v-container fluid py-1 mt-3>
                        <v-row>
                            <v-col class="py-2">
                                <v-text-field
                                        v-model="application.name"
                                        outlined
                                        hide-details
                                        label="Application name"
                                        :rules="rules.notBlank"
                                />
                            </v-col>
                            <v-col class="py-2">
                                <v-text-field
                                        v-model="application.url"
                                        outlined
                                        hide-details
                                        label="Site url"
                                        :rules="rules.notBlank"
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
                                        :rules="rules.notBlank"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="py-2" cols="6">
                                <v-select
                                        v-model="category"
                                        :items="categories"
                                        label="Category"
                                        hide-details
                                        outlined
                                        :rules="rules.selected"
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
                                        show-size
                                        :rules="[isFileCorrect]"
                                />
                            </v-col>
                            <v-col v-if="iconSrc" class="d-flex align-self-center pl-0 py-0" cols="1">
                                <img :src="iconSrc" alt="" class="icon">
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-container fluid py-1>
                    <v-row justify="end">
                        <v-col cols="2" class="py-0">
                            <v-btn block
                                   text
                                   color="primary"
                                   @click="close"
                            >
                                Отмена
                            </v-btn>
                        </v-col>
                        <v-col cols="2" class="py-0">
                            <v-btn block
                                   text
                                   color="primary"
                                   @click="save"
                            >
                                Сохранить
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
    import { arrayBufferToBase64, fileToArrayBuffer, toBase64 } from '../../utils/utils';
    import { addApplication, editApplication } from '../../client/applications';

    export default {
        name: 'EditApplicationDialog',
        data: () => ({
            dialog: false,
            application: {},
            category: null,
            categories: [],
            icon: null,
            iconSrc: null,
            isNew: false,
            iconArrayBuffer: null,
            rules: {
                notBlank: [
                    value => (value && value.length > 0 ? true : 'Не должно быть пустым'),
                ],
                selected: [
                    value => (value ? true : 'Не должно быть пустым'),
                ],
            },
        }),
        computed: {
            isFileSelected() {
                return this.iconArrayBuffer || this.icon;
            },
        },
        watch: {
            async icon() {
                if (this.icon) {
                    this.updateIconSrc();
                    this.iconArrayBuffer = null;
                } else {
                    this.iconSrc = null;
                }
            },
        },
        methods: {
            isFileCorrect(value) {
                return value || this.isFileSelected ? true : 'Не должно быть пустым';
            },
            async updateIconSrc() {
                this.iconSrc = await toBase64(this.icon);
            },
            async show(application) {
                await this.updateCategories();
                if (application) {
                    this.application = {
                        name: application.name,
                        id: application._id,
                        url: application.url,
                        description: application.description,
                    };
                    this.iconSrc = `data:image/png;base64,${arrayBufferToBase64(application.icon)}`;
                    this.iconArrayBuffer = application.icon;
                    const category = this.categories.find(value => value.value === application.category);
                    this.category = category ? category.value : null;
                    this.isNew = false;
                } else {
                    this.application = {};
                    this.isNew = true;
                }
                this.dialog = true;
            },
            close() {
                this.dialog = false;
                this.application = {};
                this.icon = null;
                this.iconSrc = null;
                this.category = null;
                this.iconArrayBuffer = null;
            },
            async updateCategories() {
                try {
                    this.categories = (await getCategories()).data;
                } catch (e) {
                    console.log(e);
                }
            },
            async save() {
                if (this.$refs.form.validate()) {
                    if (this.isNew) {
                        await this.prepareIcon();
                        this.application.category = this.category;
                        await addApplication(this.application);
                    } else {
                        if (this.iconArrayBuffer) {
                            this.application.icon = this.iconArrayBuffer;
                        } else {
                            await this.prepareIcon();
                        }
                        this.application.category = this.category;
                        await editApplication(this.application);
                    }
                    this.close();
                    this.$emit('edit');
                }
            },
            async prepareIcon() {
                const uint8Array = new Uint8Array(await fileToArrayBuffer(this.icon));
                const arr = [];
                uint8Array.forEach(value => arr.push(value));
                this.application.icon = arr;
            },
        },
    };
</script>

<style scoped>
    .icon {
        width: 100%;
    }
</style>
