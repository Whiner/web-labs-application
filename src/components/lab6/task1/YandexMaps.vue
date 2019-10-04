<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Яндекс карты
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="3">
                        <p class="mb-0">
                            Длина маршрута - {{ routeLength }}
                        </p>
                    </v-col>
                    <v-col cols="3">
                        <p class="mb-0">
                            Примерное время в пути - {{ routeTime }}
                        </p>
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
            maps: null,
            map: null,
            multiRouter: null,
            activeRoute: null,
            routeLength: null,
            routeTime: null,
        }),
        async mounted() {
            this.maps = await ymaps.load('https://api-maps.yandex.ru/2.1/?'
                + 'apikey=d5d7ac5b-1e25-4233-8a72-f51cfb57bb50&lang=ru_RU');
            this.map = new this.maps.Map('map', {
                center: [48.002158, 37.805078],
                zoom: 18,
            });

            this.multiRouter = new this.maps.multiRouter.MultiRoute(
                {
                    referencePoints: [
                        'Донецк, площадь Ленина',
                        'Макеевка, площадь Ленина',
                        'Горловка, площадь Ленина',
                    ],
                },
                {
                    boundsAutoApply: true,
                },
            );

            this.map.geoObjects.add(this.multiRouter);

            this.multiRouter.model.events.add('requestsuccess', () => {
                const activeRoute = this.multiRouter.getActiveRoute();
                this.routeLength = activeRoute.properties.get('distance').text;
                this.routeTime = activeRoute.properties.get('duration').text;
            });

            const myCircle = new this.maps.Circle([[48.129373, 37.857914], 1000]);

            this.map.geoObjects.add(myCircle);

            this.addPoint([48.002447, 37.804902]);
            this.addPoint([48.004168, 37.870281]);
            this.addPoint([48.009596, 37.879272]);
            this.addPoint([48.029117, 37.929525]);
            this.addPoint([48.040458, 37.962806]);
            this.addPoint([48.167054, 37.891512]);
            this.addPoint([48.294510, 38.009810]);
            this.addPoint([48.304148, 38.009026]);
            this.addPoint([48.296918, 38.016794]);
        },
        methods: {
            addPoint(coordinates) {
                const point = new this.maps.GeoObject({
                    geometry: {
                        type: 'Point',
                        coordinates,
                    },
                });
                this.map.geoObjects.add(point);
            },
        },
    };
</script>

<style scoped>
    .map {
        width: 80vw;
        height: 70vh;
    }
</style>
