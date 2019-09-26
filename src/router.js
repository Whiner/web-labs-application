import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        },
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
    ],
});
