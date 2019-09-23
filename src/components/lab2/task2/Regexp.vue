<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 2. Регулярные выражения
        </v-card-title>
        <v-card-text class="pt-3">
            <v-container fluid pa-0>
                <v-row>
                    <v-col class="text-center">
                        Производится проверка на то, что число - вещественное
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center">
                        Регулярное выражение - <b>(^-?\d+[.,]\d+$)</b>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col align-self="center" class="pb-0" cols="5">
                        <v-text-field
                                v-model="value"
                                autocomplete="new-password"
                                label="Число"
                                outlined
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pt-0">
                        <v-alert
                                v-model="alertShow"
                                :type="alertType"
                                border="left"
                                class="mb-4"
                        >
                            {{ alertText }}
                        </v-alert>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'Regexp',
        data() {
            return {
                value: null,
                alertShow: false,
                alertType: null,
                alertText: '',
            };
        },
        watch: {
            value() {
                if (this.value) {
                    if (this.value.toString()
                        .match(/^-?\d+[.,]\d+$/)) {
                        this.alertType = 'success';
                        this.alertText = 'Число вещественное';
                    } else {
                        this.alertType = 'error';
                        this.alertText = 'Число не вещественное';
                    }
                    this.alertShow = true;
                } else {
                    this.alertShow = false;
                }
            },
        },
    };
</script>

<style scoped>

</style>
