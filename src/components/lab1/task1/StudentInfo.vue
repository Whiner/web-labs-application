<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 1
        </v-card-title>
        <v-card-text>
            <v-container fluid pa-0>
                <v-row>
                    <v-col>
                        <p class="mb-0">
                            Я, студент<span v-if="studentInfo.sex === 'female'">ка</span>
                            группы {{ studentInfo.group }} {{ name }},
                            <span v-if="studentInfo.sex === 'male'">родился</span>
                            <span v-if="studentInfo.sex === 'female'">родилась</span>
                            {{ formattedBirthDate }}, это был день {{ birthdayWeekDay }}
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import { parseISO } from 'date-fns';
    import { formatDate } from '../../../utils/utils';

    export default {
        name: 'StudentInfo',
        props: {
            studentInfo: {
                type: Object,
                default: () => {
                },
            },
        },
        data() {
            return {
                dialog: false,
                days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            };
        },
        computed: {
            name() {
                return `${this.studentInfo.surname} ${this.studentInfo.name.charAt(0)}.${this.studentInfo.patronymic.charAt(0)}.`;
            },
            formattedBirthDate() {
                return formatDate(new Date(parseISO(this.studentInfo.birthDate)));
            },
            birthdayWeekDay() {
                return this.days[new Date(parseISO(this.studentInfo.birthDate)).getDay()];
            },
        },
    };
</script>

<style scoped>

</style>
