<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Сравнение маршрутов с помощью Яндекс карт и Google Charts
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row justify="center">
                    <v-col>
                        <YandexRoutingList @compare="onCompare" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <GoogleChartsCompareDialog ref="compareDialog" />
    </v-card>
</template>

<script>
    import YandexRoutingList from './YandexRoutingList.vue';
    import GoogleChartsCompareDialog from './GoogleChartsCompareDialog.vue';

    export default {
        name: 'YandexRoutingCard',
        components: {
            YandexRoutingList,
            GoogleChartsCompareDialog,
        },
        methods: {
            onCompare(routes) {
                this.$refs.compareDialog.show(routes);
            },
        },
    };
</script>

<style scoped>

</style>
