<template>
    <div class="fill-height">
        <ApplicationSiteNavigation />
        <v-content>
            <v-container>
                <v-row>
                    <v-col>
                        <ApplicationsCard />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import ApplicationSiteNavigation from '../components/navigation/Lab7Navigation.vue';
    import ApplicationsCard from '../components/lab7/ApplicationsCard.vue';


    export default {
        name: 'Lab7',
        components: {
            ApplicationSiteNavigation,
            ApplicationsCard,
        },
        created() {

        },
    };
</script>

<style scoped>

</style>
