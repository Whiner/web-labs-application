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
                    <v-col class="py-0 progress">
                        <v-progress-linear v-show="loading" :indeterminate="loading" height="3px" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-list v-if="items.length > 0">
                            <v-divider />
                            <template v-for="(item, index) in items">
                                <v-list-item :key="index"
                                             class="application-item"
                                             three-line
                                >
                                    <v-list-item-avatar class="d-flex align-self-center">
                                        <img :src="getSrc(item.icon)">
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
    import { getApplications } from '../../client/applications';
    import { getCategories } from '../../client/categories';

    export default {
        name: 'ApplicationsCard',
        data: () => ({
            items: [],
            category: null,
            categories: [],
            loading: false,
        }),
        watch: {
            category() {
                this.updateApplications();
            },
        },
        created() {
            this.updateApplications();
            this.updateCategories();
        },
        methods: {
            async updateApplications() {
                try {
                    this.loading = true;
                    const filter = this.category ? this.category.value : null;
                    this.items = (await getApplications(filter)).data;
                } catch (e) {
                    console.log(e);
                } finally {
                    this.loading = false;
                }
            },
            async updateCategories() {
                try {
                    this.categories = (await getCategories()).data;
                } catch (e) {
                    console.log(e);
                }
            },
            getSrc(byteArray) {
                return `data:image/png;base64,${this.arrayBufferToBase64(byteArray)}`;
            },
            arrayBufferToBase64(buffer) {
                let binary = '';
                const bytes = new Uint8Array(buffer);
                const len = bytes.byteLength;
                for (let i = 0; i < len; i += 1) {
                    binary += String.fromCharCode(bytes[i]);
                }
                return btoa(binary);
            },
        },
    };
</script>

<style scoped>
    .progress {
        height: 3px;
    }
</style>
