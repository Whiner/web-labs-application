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
            path: '/lab1/task1',
            name: 'lab1-task1',
            component: () => import(/* webpackChunkName: "lab1-task1" */ './views/About.vue'),
        },
        {
            path: '/lab1/task2',
            name: 'lab1-task2',
            component: () => import(/* webpackChunkName: "lab1-task2" */ './views/About.vue'),
        },
    ],
});
