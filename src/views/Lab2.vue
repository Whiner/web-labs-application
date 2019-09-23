<template>
    <v-container fluid>
        <v-row>
            <v-col cols="6">
                <Arrays />
            </v-col>
            <v-col cols="6">
                <Regexp />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

    import Arrays from '../components/lab2/task1/Arrays.vue';
    import Regexp from '../components/lab2/task2/Regexp.vue';

    export default {
        name: 'Lab2',
        components: {
            Arrays,
            Regexp,
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
