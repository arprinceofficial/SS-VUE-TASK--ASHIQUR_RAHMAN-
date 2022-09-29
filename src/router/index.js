import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [{
            path: '/',
            name: 'DashBoard',
            component: () =>
                import ( /* webpackChunkName: "DashBoard" */ '@/views/DashBoard.vue'),
        },

    ],
});

export default router;