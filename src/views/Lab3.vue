<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <Cinema />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

    import Cinema from '../components/lab3/task1/Cinema.vue';

    export default {
        name: 'Lab3',
        components: {
            Cinema,
        },
        data() {
            return {};
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped>

</style>
