import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Index from '../pages/index'

const router = new VueRouter({
    routes: [{
            path: '/index',
            component: Index
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})

export default router;