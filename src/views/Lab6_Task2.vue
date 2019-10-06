<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <YandexRoutingCard />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import YandexRoutingCard from '../components/lab6/task2/YandexRoutingCard.vue';

    export default {
        name: 'Lab6',
        components: {
            YandexRoutingCard,
        },
        created() {

        },
    };
</script>

<style scoped>

</style>
