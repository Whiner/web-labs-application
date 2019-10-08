<template>
    <v-container>
        <v-row>
            <v-col>
                <SettingsCard />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SettingsCard from '../components/lab8/SettingsCard.vue';


    export default {
        name: 'Lab8Settings',
        components: {
            SettingsCard,
        },
        created() {

        },
    };
</script>

<style scoped>

</style>
