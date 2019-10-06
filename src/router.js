import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/application-catalog',
            name: 'application-catalog',
            component: () => import(/* webpackChunkName: "home" */ './views/Lab7.vue'),
        },
        {
            path: '/',
            name: 'main',
            component: () => import(/* webpackChunkName: "home" */ './views/Main.vue'),
            children: [
                {
                    path: '/lab1',
                    name: 'lab1',
                    component: () => import(/* webpackChunkName: "lab1" */ './views/Lab1.vue'),
                },
                {
                    path: '/lab2',
                    name: 'lab2',
                    component: () => import(/* webpackChunkName: "lab2" */ './views/Lab2.vue'),
                },
                {
                    path: '/lab3',
                    name: 'lab3',
                    component: () => import(/* webpackChunkName: "lab3" */ './views/Lab3.vue'),
                },
                {
                    path: '/lab4',
                    name: 'lab4',
                    component: () => import(/* webpackChunkName: "lab4" */ './views/Lab4.vue'),
                },
                {
                    path: '/lab6/task1',
                    name: 'lab6_1',
                    component: () => import(/* webpackChunkName: "lab6_1" */ './views/Lab6_Task1.vue'),
                },
                {
                    path: '/lab6/task2',
                    name: 'lab6_2',
                    component: () => import(/* webpackChunkName: "lab6_2" */ './views/Lab6_Task2.vue'),
                },
            ],
        },

    ],
});
