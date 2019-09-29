<template>
    <v-card>
        <v-card-title class="title primary white--text pb-3">
            Рисование
        </v-card-title>
        <v-card-text>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="2">
                        <p class="mb-0">
                            SVG (прямая вставка)
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="mb-0 pl-3">
                            Canvas
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="mb-0 text-center">
                            SVG как фон
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="mb-0 text-center">
                            SVG как картинка
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="2">
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
                                    <image ref="imagePattern"
                                           xlink:href="../../../assets/texture.jpg"
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
                    <v-col cols="2">
                        <canvas ref="canvasField" width="100" height="100" />
                    </v-col>
                    <v-col cols="2" class="svg-as-background pa-0" />
                    <v-col cols="2" class="pa-0 text-center">
                        <img src="../../../assets/my-svg.svg">
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
            this.$nextTick(() => {
                const canvasField = this.$refs.canvasField;
                const ctx = canvasField.getContext('2d');
                const imagePattern = this.$refs.imagePattern;

                ctx.fillStyle = ctx.createPattern(imagePattern, '');
                ctx.beginPath();
                ctx.arc(35, 35, 30, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            });
        },
    };
</script>

<style scoped>
    .svg-as-background{
        background-image: url("../../../assets/my-svg.svg");
        background-position: center;
        height:150px;
        width:160px;
    }
</style>
