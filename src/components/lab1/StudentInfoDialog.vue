<template>
    <v-dialog v-model="dialog" width="1000px">
        <v-card>
            <v-card-title
                    class="headline primary white--text"
            >
                Данные о студенте
            </v-card-title>

            <v-card-text>
                <v-container fluid py-1 mt-3>
                    <v-row>
                        <v-col class="pa-0 mr-2">
                            <v-text-field
                                    v-model="studentInfo.surname"
                                    outlined
                                    label="Фамилия"
                            />
                        </v-col>
                        <v-col class="pa-0 ml-2 mr-2">
                            <v-text-field
                                    v-model="studentInfo.name"
                                    outlined
                                    label="Имя"
                            />
                        </v-col>
                        <v-col class="pa-0 ml-2">
                            <v-text-field
                                    v-model="studentInfo.patronymic"
                                    outlined
                                    label="Отчество"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="pa-0 mr-2">
                            <v-radio-group v-model="studentInfo.sex"
                                           primary
                                           hide-details
                                           class="mt-0"
                                           label="Пол"
                            >
                                <v-radio
                                        label="Мужской"
                                        value="male"
                                />
                                <v-radio
                                        label="Женский"
                                        value="female"
                                />
                            </v-radio-group>
                        </v-col>
                        <v-col class="pa-0 ml-2 mr-2">
                            <v-menu
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                    locale="ru-ru"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="formattedBirthDate"
                                            label="Дата рождения"
                                            prepend-inner-icon="event"
                                            readonly
                                            outlined
                                            v-on="on"
                                    />
                                </template>
                                <v-date-picker
                                        v-model="studentInfo.birthDate"
                                        @input="menu2 = false"
                                />
                            </v-menu>
                        </v-col>
                        <v-col class="pa-0 ml-2">
                            <v-text-field v-model="studentInfo.group" outlined label="Группа" />
                        </v-col>
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
                                   @click="save"
                            >
                                Сохранить
                            </v-btn>
                        </v-col>
                        <v-col cols="2" class="py-0">
                            <v-btn block
                                   text
                                   color="error"
                                   @click="cancel"
                            >
                                Отменить
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
                studentInfo: {
                    sex: '',
                    surname: '',
                    name: '',
                    patronymic: '',
                    birthDate: '',
                    group: '',
                },
            };
        },
        computed: {
            formattedBirthDate() {
                if (this.studentInfo.birthDate) {
                    const date = new Date(this.studentInfo.birthDate);
                    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                }
                return 'Не выбрано';
            },
        },
        methods: {
            show() {
                this.dialog = true;
            },
            save() {
                this.$emit('data', this.studentInfo);
                this.dialog = false;
            },
            cancel() {
                this.dialog = false;
            },
        },
    };
</script>

<style scoped>

</style>
