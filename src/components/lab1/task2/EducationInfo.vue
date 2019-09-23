<template>
    <v-card>
        <v-card-title
                class="title primary white--text py-3"
        >
            Задание 2
        </v-card-title>
        <v-card-text class="pt-3">
            <v-container class="pa-0" fluid>
                <v-row>
                    <v-col v-if="sex && birthDate">
                        <p class="mb-0">
                            {{ message() }}
                        </p>
                    </v-col>
                    <v-col v-else class="text-center">
                        Отсутствует информация
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import { differenceInCalendarDays, parseISO } from 'date-fns';
    import { formatDate } from '../../../utils/utils';

    export default {
        name: 'EducationInfo',
        props: {
            sex: {
                type: String,
                default: null,
            },
            birthDate: {
                type: String,
                default: null,
            },
        },
        data() {
            return {
                coupleTimes: ['08:00', '09:55', '11:50', '13:45', '15:20'],
            };
        },
        methods: {
            message() {
                let extension = '';
                if (this.sex === 'female') {
                    extension = 'a';
                }
                const daysFromBirth = differenceInCalendarDays(
                    new Date(),
                    parseISO(this.birthDate),
                );
                return `На сегодня (${formatDate(new Date())}) я прожил${extension} ${
                    daysFromBirth} дней.
                ${this.timeFromCouple()}`;
            },
            timeFromCouple() {
                const now = new Date();
                const nowTime = `${now.getHours()
                    .toString()
                    .padStart(2, '0')}:${now.getMinutes()
                    .toString()
                    .padStart(2, '0')}`;
                // eslint-disable-next-line no-plusplus
                for (let i = this.coupleTimes.length - 1; i >= 0; i--) {
                    if (nowTime >= this.coupleTimes[i]) {
                        if (this.timeDifference(nowTime, this.coupleTimes[i]) > 90) {
                            return 'Сейчас перемена или пары закончились';
                        }
                        return `С начала пары прошло: ${this.timeDifference(nowTime, this.coupleTimes[i])} минут`;
                    }
                }
                return 'Пары еще не начались';
            },
            timeDifference(time1, time2) {
                let tempTime1 = time1;
                let tempTime2 = time2;
                if (tempTime1 < tempTime2) {
                    tempTime1 = tempTime2;
                    tempTime2 = time1;
                }
                const match1 = tempTime1.match('(\\d\\d):(\\d\\d)');
                const match2 = tempTime2.match('(\\d\\d):(\\d\\d)');

                return (match1[1] - match2[1]) * 60 + (match1[2] - match2[2]);
            },

        },
    };
</script>

<style scoped>

</style>
