<template>
    <v-dialog v-model="dialog" width="1000px">
        <v-card>
            <v-card-title
                    class="headline primary white--text"
            >
                Сравнение маршрутов
            </v-card-title>

            <v-card-text>
                <v-container fluid py-1 mt-3>
                    <v-row>
                        <v-col ref="chart" class="chart" />
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
    import { GoogleCharts } from 'google-charts';

    export default {
        name: 'GoogleChartsCompareDialog',
        data: () => ({
            dialog: false,
            routes: [],
        }),
        watch: {
            routes() {
                if (this.routes.length > 0) {
                    GoogleCharts.load(this.drawChart);
                }
            },
            dialog() {
                if (this.dialog && this.routes.length > 0) {
                    GoogleCharts.load(this.drawChart);
                }
            },
        },
        methods: {
            show(routes) {
                this.routes = routes;
                this.dialog = true;
            },
            close() {
                this.dialog = false;
            },
            drawChart() {
                const options = {
                    legend: {
                        position: 'bottom',
                        textStyle: {
                            color: 'black',
                            fontSize: 14,
                            fontName: 'EncodeSans',
                        },
                    },
                    title: 'Маршруты',
                    titleTextStyle: {
                        color: 'gray',
                        fontSize: 16,
                        fontName: 'EncodeSans',
                    },
                    chartArea: { left: 0, top: 0, width: '100%', height: '90%' },
                    pieSliceText: 'none',
                };

                const dataArray = [['Название маршрута', 'Дистанция']];
                this.routes.forEach((value) => {
                    const replace = value.distance.replace(/\s/g, '');
                    console.log(replace);
                    const match = replace.match(/^(\d+)км$/);
                    dataArray.push(
                        [
                            `${value.from} - ${value.to}`,
                            Number.parseInt(match[1], 10),
                        ],
                    );
                });
                console.log(dataArray);
                const data = GoogleCharts.api.visualization.arrayToDataTable(dataArray);
                const chart = new GoogleCharts.api.visualization.LineChart(this.$refs.chart);
                chart.draw(data, options);
            },
        },
    };
</script>

<style scoped>
    .chart {
        height: 50vh;
    }
</style>
