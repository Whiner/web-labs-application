<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 3
        </v-card-title>
        <v-card-text>
            <v-container class="pb-0" fluid>
                <v-row>
                    <v-col class="text-center subtitle-1">
                        Проверяемая функция <b>ch(x)</b>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col align-self="center" class="pa-1" cols="5">
                        <v-text-field v-model="x" :rules="xRules" label="Введите X" />
                    </v-col>
                    <v-col align-self="center"
                           class="pa-1"
                           cols="5"
                    >
                        <v-btn :disabled="!isValid"
                               block
                               color="primary"
                               @click="calc"
                        >
                            Пересчитать
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="isValid">
                    <v-col class="text-center">
                        Ожидаемый результат: <b>ch({{ x }}) = {{ rightAnswer.toFixed(3) }}</b>
                    </v-col>
                </v-row>
                <v-row v-if="answer && steps">
                    <v-col class="text-center">
                        Полученный результат: <b>{{ answer.toFixed(3) }}</b>.
                        Количество итераций - <b>{{ steps.length }}</b>
                    </v-col>
                </v-row>
                <v-row v-if="steps">
                    <v-col class="pb-0">
                        <v-list>
                            <v-list-item
                                    v-for="(step, index) in steps"
                                    :key="index"
                                    class="text-right"
                            >
                                <v-list-item-avatar>
                                    {{ index + 1 }})
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <p class="mb-0">
                                        {{ step }}
                                    </p>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'Series',
        data() {
            return {
                x: null,
                steps: [],
                answer: null,
                xRules: [
                    value => (Number.parseInt(value, 10) > 0
                        && Number.parseInt(value, 10) < 26 ? true
                        : 'Введите значение от 1 до 25'),
                ],
            };
        },
        computed: {
            rightAnswer() {
                return Math.cosh(this.x);
            },
            isValid() {
                return this.x && Number.parseInt(this.x, 10) > 0
                    && Number.parseInt(this.x, 10) < 26;
            },
        },
        methods: {
            factorial(n) {
                if (n === 0) {
                    return 1;
                }
                return n * this.factorial(n - 1);
            },
            calc() {
                this.steps = [];
                let y = 0;
                let m = 0;
                const right = this.rightAnswer.toFixed(3);
                while (y.toFixed(3) !== right) {
                    y += (this.x ** (m * 2) / this.factorial(m * 2));
                    this.steps.push(y.toFixed(5));
                    m += 1;
                }
                this.answer = y;
            },
        },
    };
</script>

<style scoped>

</style>
