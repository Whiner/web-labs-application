<template>
    <v-dialog v-model="dialog" width="600px">
        <v-card>
            <v-card-title
                    class="headline primary white--text"
            >
                Покупка билета
            </v-card-title>
            <v-card-text class="pb-0">
                <v-container v-if="seat"
                             fluid
                             py-1
                >
                    <v-row>
                        <v-col cols="7" align-self="center">
                            <p class="mb-1">
                                Дата и время сеанса - <b>03.10.2019 11:50</b>
                            </p> <br>
                            <p class="mb-1">
                                Стоимость билета - <b>{{ seat.cost }} ₽</b>
                            </p> <br>
                            <p class="mb-1">
                                Ряд - <b>{{ seat.row }}</b>
                            </p> <br>
                            <p class="mb-0">
                                Место - <b>{{ seat.number }}</b>
                            </p>
                        </v-col>
                        <v-col cols="5"
                               class="text-center"
                               align-self="center"
                        >
                            <p class="mb-1">
                                Фильм
                            </p>
                            <img src="../../../assets/film.jpg" alt="Фильм" height="200px">
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-container fluid py-1>
                    <v-row justify="end">
                        <v-col cols="3" class="py-0">
                            <v-btn block
                                   text
                                   color="error"
                                   @click="cancel"
                            >
                                Отменить
                            </v-btn>
                        </v-col>
                        <v-col cols="3" class="py-0">
                            <v-btn block
                                   text
                                   color="success"
                                   @click="buy"
                            >
                                Купить
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'StudentInfoDialog',

        data() {
            return {
                dialog: false,
                seat: null,
            };
        },
        methods: {
            buy() {
                this.$emit('buy');
                this.close();
            },
            cancel() {
                this.$emit('cancel');
                this.close();
            },
            show(seat) {
                this.seat = seat;
                if (this.seat) {
                    this.dialog = true;
                }
            },
            close() {
                this.dialog = false;
            },
        },
    };
</script>

<style scoped>

</style>
