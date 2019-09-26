<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <SvgDrawing />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

    import SvgDrawing from '../components/lab4/task1/SvgDrawing.vue';

    export default {
        name: 'Lab4',
        components: {
            SvgDrawing,
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
