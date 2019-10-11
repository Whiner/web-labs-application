<template>
    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="title">
                Подтвердите действие
            </v-card-title>
            <v-card-text>
                Вы уверены?
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
                <v-btn color="primary darken-1" text @click="cancel">
                    Нет
                </v-btn>
                <v-btn color="primary darken-1" text @click="confirm">
                    Да
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ConfirmDialog',
        data: () => ({
            dialog: false,
        }),
        methods: {
            show() {
                this.dialog = true;
            },
            close() {
                this.dialog = false;
            },
            confirm() {
                this.close();
                this.$emit('confirm');
            },
            cancel() {
                this.close();
                this.$emit('cancel');
            },
        },
    };
</script>

<style scoped>

</style>
