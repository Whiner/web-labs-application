<template>
    <v-container fluid pa-0>
        <v-row justify="center">
            <v-col cols="4" align-self="center">
                <v-text-field v-model="routeFrom"
                              outlined
                              label="Откуда"
                              hide-details
                />
            </v-col>
            <v-col cols="4" align-self="center">
                <v-text-field v-model="routeTo"
                              outlined
                              label="Куда"
                              hide-details
                />
            </v-col>
            <v-col cols="2" align-self="center">
                <v-btn block
                       class="primary"
                       :loading="loading"
                       :disabled="loading"
                       @click="addRoute"
                >
                    Добавить
                </v-btn>
            </v-col>
            <v-col cols="2" align-self="center">
                <v-btn block
                       class="green white--text"
                       :disabled="routes.length < 2"
                       @click="compare"
                >
                    Сравнить
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <v-expand-transition>
                    <p v-if="error" class="error--text mb-0 text-center">
                        {{ errorMessage }}
                    </p>
                </v-expand-transition>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col v-if="routes.length > 0" cols="6">
                <v-list>
                    <v-divider />
                    <template v-for="(item, index) in routes">
                        <v-list-item :key="index">
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.from }} - {{ item.to }}. Расстояние - {{ item.distance }}
                                </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action class="d-flex align-self-center">
                                <v-btn icon link :href="item.url">
                                    <v-icon color="error" @click="remove(index)">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="-index-1" />
                    </template>
                </v-list>
            </v-col>
            <v-col v-else cols="6" align-self="center">
                <p class="subtitle-1 text-center mb-0">
                    Пусто
                </p>
            </v-col>
            <v-col id="map" cols="6" class="map" />
        </v-row>
    </v-container>
</template>

<script>
    import ymaps from 'ymaps';

    export default {
        name: 'YandexRoutingList',
        data: () => ({
            routes: [],
            routeFrom: 'Донецк',
            routeTo: 'Горловка',
            maps: null,
            map: null,
            loading: false,
            error: false,
            errorMessage: 'Некорректный маршрут',
        }),
        async mounted() {
            this.maps = await ymaps.load('https://api-maps.yandex.ru/2.1/?'
                + 'apikey=d5d7ac5b-1e25-4233-8a72-f51cfb57bb50&lang=ru_RU');
            this.map = new this.maps.Map('map', {
                center: [48.002158, 37.805078],
                zoom: 10,
            });
        },
        methods: {
            compare() {
                this.$emit('compare', this.routes);
            },
            addRoute() {
                if (this.routeFrom && this.routeTo) {
                    this.loading = true;
                    this.addRouteToList(this.routeFrom, this.routeTo);
                    this.routeFrom = '';
                    this.routeTo = '';
                }
            },
            addRouteToList(from, to) {
                const router = new this.maps.multiRouter.MultiRoute(
                    {
                        referencePoints: [
                            from,
                            to,
                        ],
                    },
                    {
                        boundsAutoApply: true,
                    },

                );
                router.model.events
                    .add('requestsuccess', () => {
                        const activeRoute = router.getActiveRoute();
                        const distance = activeRoute.properties.get('distance').text;

                        this.map.geoObjects.add(router);
                        this.routes.push({
                            router,
                            distance,
                            from,
                            to,
                        });
                        this.loading = false;
                    })
                    .add('requestfail', () => {
                        this.error = true;
                        setTimeout(() => {
                            this.error = false;
                        }, 2000);
                        this.loading = false;
                    });
            },
            remove(index) {
                const splice = this.routes.splice(index, 1);
                this.map.geoObjects.remove(splice[0].router);
            },
        },
    };
</script>

<style scoped>
    .map {
        height: 60vh;
    }
</style>
