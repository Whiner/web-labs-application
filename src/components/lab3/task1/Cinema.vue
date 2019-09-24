<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 1. Кинотеатр
        </v-card-title>
        <v-card-text>
            <v-container class="pb-0" fluid>
                <v-row>
                    <v-col offset="1" cols="11" class="text-center subtitle-1 pa-0">
                        Экран
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="10" offset="1" class="screen" />
                </v-row>
                <v-row>
                    <v-col class="pa-0">
                        <v-container fluid>
                            <v-row v-for="(seats, index) in rows" :key="index">
                                <v-col cols="1" align-self="center">
                                    {{ index + 1 }}
                                </v-col>
                                <v-col class="d-flex flex-row justify-center pa-0">
                                    <v-tooltip v-for="seat in seats"
                                               :key="seat.number"
                                               bottom
                                    >
                                        <template v-slot:activator="{ on }">
                                            <div :class="{'sold' : seat.sold}"
                                                 class="text-center cell elevation-1 ma-1"
                                                 v-on="on"
                                                 @click="openBuyDialog(seat)"
                                            >
                                                {{ seat.number }}
                                            </div>
                                        </template>
                                        <span> {{ seat.cost }} ₽ </span>
                                    </v-tooltip>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <BuyTicketDialog ref="buyTicketDialog"
                         @buy="onBuy"
                         @cancel="onCancel"
        />
    </v-card>
</template>

<script>
    import BuyTicketDialog from './BuyTicketDialog.vue';

    export default {
        name: 'Cinema',
        components: {
            BuyTicketDialog,
        },
        data() {
            return {
                seatsCountArray: [18, 14, 12, 12, 12, 12, 16, 18],
                seatsCostArray: [100, 200, 300, 400, 500, 600, 700, 800],
                rows: [],
                buyingSeat: null,
            };
        },
        mounted() {
            for (let i = 0; i < this.seatsCountArray.length; i += 1) {
                const row = [];
                for (let j = 0; j < this.seatsCountArray[i]; j += 1) {
                    row[j] = {
                        row: j + 1,
                        number: j + 1,
                        cost: this.seatsCostArray[i] ? this.seatsCostArray[i] : 100,
                        sold: false,
                    };
                }
                this.rows.push(row);
            }
        },
        methods: {
            openBuyDialog(seat) {
                if (!seat.sold) {
                    this.buyingSeat = seat;
                    this.$refs.buyTicketDialog.show(seat);
                }
            },
            onBuy() {
                this.buyingSeat.sold = true;
            },
            onCancel() {
                this.buyingSeat = null;
            },
        },
    };
</script>

<style scoped>
    .cell {
        border: 1px solid #d7dfff;
        border-radius: 5px;
        background-color: #eaecff9e;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .cell:hover {
        border: 1px solid rgba(207, 209, 222, 0.52);
        background-color: rgba(207, 209, 222, 0.52);
    }

    .sold {
        border: 1px solid #B71C1C !important;
        border-radius: 5px !important;
        background-color: #D32F2F !important;
        color: white;
    }

    .sold:hover {
        border: 1px solid rgba(250, 28, 28, 0.81) !important;
        background-color: rgba(220, 47, 47, 0.86) !important;
    }

    .screen {
        border-top: 5px solid rgba(122, 124, 135, 0.52);
    }

</style>
