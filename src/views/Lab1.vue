<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-btn color="primary" block @click="showDialog">
                    Изменить информацию
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <StudentInfo :student-info="studentInfo" />
                <EducationInfo :birth-date="birthDate" :sex="sex" class="mt-5" />
            </v-col>
            <v-col cols="7">
                <Series />
            </v-col>
        </v-row>
        <StudentInfoDialog ref="studentInfoDialog" v-model="studentInfo" />
    </v-container>
</template>
<script>
    import StudentInfo from '../components/lab1/task1/StudentInfo.vue';
    import StudentInfoDialog from '../components/lab1/task1/StudentInfoDialog.vue';
    import EducationInfo from '../components/lab1/task2/EducationInfo.vue';
    import Series from '../components/lab1/task3/Series.vue';

    export default {
        name: 'Lab1',
        components: {
            StudentInfo,
            StudentInfoDialog,
            EducationInfo,
            Series,
        },
        data() {
            return {
                studentInfo: null,
            };
        },
        computed: {
            birthDate() {
                return this.studentInfo ? this.studentInfo.birthDate : null;
            },
            sex() {
                return this.studentInfo ? this.studentInfo.sex : null;
            },
        },
        methods: {
            showDialog() {
                this.$refs.studentInfoDialog.show();
            },
        },
    };
</script>

<style scoped>

</style>
