import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [{
            path: '/',
            name: 'HomePage',
            component: () =>
                import ( /* webpackChunkName: "HomePage" */ '@/views/HomePage.vue'),
        },

    ],
});

export default router;