<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Яндекс карты
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="3">
                        <v-btn class="primary" block>
                            Маршрут по площадям
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col id="map" class="map" />
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import ymaps from 'ymaps';

    export default {
        name: 'YandexMaps',
        data: () => ({
            map: null,
            multiRouter: null,
            activeRoute: null,
        }),
        async mounted() {
            const maps = await ymaps.load('https://api-maps.yandex.ru/2.1/?'
                + 'apikey=d5d7ac5b-1e25-4233-8a72-f51cfb57bb50&lang=ru_RU');
            this.map = new maps.Map('map', {
                center: [48.002158, 37.805078],
                zoom: 18,
            });

            this.multiRouter = new maps.multiRouter.MultiRoute({
                referencePoints: [
                    'Донецк, площадь Ленина',
                    'Макеевка, площадь Ленина',
                    'Горловка, площадь Ленина', // улица Льва Толстого.
                ],
            }, {
                boundsAutoApply: true,
            });

            this.map.geoObjects.add(this.multiRouter);


            this.activeRoute = this.multiRouter.getActiveRoute();
        },
    };
</script>

<style scoped>
    .map {
        width: 80vw;
        height: 80vh;
    }
</style>
