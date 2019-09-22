<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <StudentInfo />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import StudentInfo from '../components/lab1/StudentInfo.vue';

    export default {
        name: 'Lab1Task1',
        components: { StudentInfo },
        data() {
            return {
                studentInfo: {
                    sex: '',
                    firstName: '',
                    lastName: '',
                    secondName: '',
                    birthDate: '',
                    group: '',
                    course: '',
                    studyStartDate: '',
                },
            };
        },
    };
</script>

<style scoped>

</style>
