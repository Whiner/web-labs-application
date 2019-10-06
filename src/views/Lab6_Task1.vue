<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <YandexMaps />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import YandexMaps from '../components/lab6/task1/YandexMaps.vue';

    export default {
        name: 'Lab6',
        components: {
            YandexMaps,
        },
        created() {

        },
    };
</script>

<style scoped>

</style>
