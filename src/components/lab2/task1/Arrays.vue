<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 1. Массивы
        </v-card-title>
        <v-card-text class="pt-3">
            <v-container fluid pa-0>
                <v-row justify="space-around">
                    <v-col align-self="center" class="pa-1" cols="5">
                        <v-text-field
                                v-model="size"
                                :rules="arraySizeRules"
                                label="Размер массива"
                                type="number"
                        />
                    </v-col>
                    <v-col align-self="center"
                           class="pa-1"
                           cols="5"
                    >
                        <v-btn :disabled="!isArraySizeValid"
                               block
                               color="primary"
                               @click="generate"
                        >
                            Сгенерировать массив
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pa-0">
                        <v-container fluid>
                            <v-row justify="center">
                                <v-col v-for="(n, index) in array"
                                       :key="index"
                                       :class="{'marked' : n.marked}"
                                       class="text-center cell ma-1 elevation-1"
                                       cols="1"
                                >
                                    {{ n.value }}
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'Arrays',
        data() {
            return {
                size: null,
                arraySizeRules: [
                    value => (Number.parseInt(value, 10) > 0
                        && Number.parseInt(value, 10) < 101 ? true
                        : 'Введите значение от 1 до 101'),
                ],
                array: [],
                i: null,
            };
        },
        computed: {
            isArraySizeValid() {
                return this.size
                    && Number.parseInt(this.size, 10) > 0
                    && Number.parseInt(this.size, 10) < 101;
            },
        },
        methods: {
            generate() {
                this.array = [];
                for (let i = 0; i < this.size; i += 1) {
                    this.array.push({
                        value: this.getRandomInt(0, 15),
                        marked: false,
                    });
                }
                this.i = -1;
                this.mark();
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            },
            mark() {
                this.i += 1;
                if (this.i < this.array.length - 1) {
                    if (this.array[this.i].value > 7 || this.array[this.i].value % 2 === 0) {
                        this.array[this.i].marked = true;
                        setTimeout(this.mark, 200);
                    } else {
                        setTimeout(this.mark, 200);
                    }
                }
            },
        },

    };
</script>

<style scoped>
    .cell {
        border: 1px solid #d7dfff;
        border-radius: 5px;
        background-color: #eaecff9e;
    }

    .marked {
        border: 1px solid #B71C1C !important;
        border-radius: 5px !important;
        background-color: #D32F2F !important;
        color: white;
    }
</style>
