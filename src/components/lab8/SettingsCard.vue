<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Settings
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col />
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import { getApplications } from '../../client/applications';

    export default {
        name: 'ApplicationsCard',
        data: () => ({
            items: [],
        }),

        created() {
            this.updateApplications();
        },
        methods: {
            async updateApplications() {
                try {
                    const filter = this.category ? this.category.value : null;
                    this.items = (await getApplications(filter)).data;
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>

<style scoped>
    .progress {
        height: 3px;
    }
</style>
