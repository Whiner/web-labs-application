<template>
    <v-container class="elevation-1">
        <v-row>
            <v-col>
                <v-btn color="primary" @click="showDialog">
                    Изменить информацию
                </v-btn>
            </v-col>
        </v-row>
        <v-divider />
        <v-row v-if="studentInfo">
            <v-col>
                <p>
                    Я, студент группы {{ studentInfo.group }} {{ name }},
                    родился (родилась) {{ studentInfo.birthDate }}, это был день
                    {{ birthdayWeekDay }}
                </p>
            </v-col>
        </v-row>
        <StudentInfoDialog ref="studentInfoDialog" @data="onDataChanged" />
    </v-container>
</template>

<script>
    import StudentInfoDialog from './StudentInfoDialog.vue';

    export default {
        name: 'StudentInfo',
        components: { StudentInfoDialog },
        data() {
            return {
                dialog: false,
                studentInfo: null,
                course: '',
                studyStartDate: '',

                days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            };
        },
        computed: {
            name() {
                return `${this.studentInfo.surname} ${this.studentInfo.name.charAt(0)}.${this.studentInfo.patronymic.charAt(0)}.`;
            },
            formattedBirthDate() {
                const date = new Date(this.studentInfo.birthDate);
                return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            },
            birthdayWeekDay() {
                return this.days[new Date(this.studentInfo.birthDate).getDay()];
            },
        },
        methods: {
            showDialog() {
                this.$refs.studentInfoDialog.show();
            },
            onDataChanged(data) {
                this.studentInfo = data;
            },
        },
    };
</script>

<style scoped>

</style>
