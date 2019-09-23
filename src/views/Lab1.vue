<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-btn color="primary" block @click="showDialog">
                    Изменить информацию
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="studentInfo">
            <v-col cols="4">
                <StudentInfo :student-info="studentInfo" />
            </v-col>
            <v-col v-if="studentInfo.sex && studentInfo.birthDate" cols="4">
                <EducationInfo :birth-date="studentInfo.birthDate" :sex="studentInfo.sex" />
            </v-col>
        </v-row>
        <StudentInfoDialog ref="studentInfoDialog" v-model="studentInfo" />
    </v-container>
</template>
<script>
    import StudentInfo from '../components/lab1/task1/StudentInfo.vue';
    import StudentInfoDialog from '../components/lab1/task1/StudentInfoDialog.vue';
    import EducationInfo from '../components/lab1/task2/EducationInfo.vue';

    export default {
        name: 'Lab1',
        components: {
            StudentInfo,
            StudentInfoDialog,
            EducationInfo,
        },
        data() {
            return {
                studentInfo: null,
            };
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
