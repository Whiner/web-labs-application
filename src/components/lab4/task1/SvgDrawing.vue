<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Задание 1. Рисование SVG
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col cols="1" class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             version="1.1"
                             width="100"
                             height="100"
                        >
                            <defs>
                                <pattern id="pattern1"
                                         patternUnits="userSpaceOnUse"
                                         width="100%"
                                         height="100%"
                                >
                                    <image xlink:href="../../../assets/texture.jpg"
                                           x="-25"
                                           y="-20"
                                           width="100"
                                           height="100"
                                    />
                                </pattern>
                            </defs>
                            <circle cx="35"
                                    cy="35"
                                    r="30"
                                    stroke="#6e5844"
                                    stroke-width="3"
                                    fill="url(#pattern1)"
                            />
                        </svg>
                    </v-col>
                    <v-col cols="1">
                        <canvas ref="canvasField" width="100" height="100" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'SvgDrawing',
        mounted() {
            const canvasField = this.$refs.canvasField;
            const ctx = canvasField.getContext('2d');
            const image = new Image();
            image.src = '../../../assets/texture.jpg';

            ctx.fillStyle = ctx.createPattern(image, 'no-repeat');
            ctx.beginPath();
            ctx.arc(35, 35, 30, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        },
    };
</script>

<style scoped>

</style>
