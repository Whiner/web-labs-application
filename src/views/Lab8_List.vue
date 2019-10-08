<template>
    <v-container>
        <v-row>
            <v-col>
                <ApplicationsCard />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ApplicationsCard from '../components/lab8/ApplicationsCard.vue';


    export default {
        name: 'Lab8List',
        components: {
            ApplicationsCard,
        },
        created() {

        },
    };
</script>

<style scoped>

</style>
