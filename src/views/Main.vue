<template>
    <div class="fill-height">
        <LabNavigation />
        <v-content>
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </v-content>
    </div>
</template>

<script>
    import LabNavigation from '../components/navigation/LabNavigation.vue';

    export default {
        name: 'Main',
        components: {
            LabNavigation,
        },
    };
</script>
