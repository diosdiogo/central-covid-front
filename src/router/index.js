import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import New from '@/views/New'
import Edit from '@/views/Edit'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'new',
        path: '/new',
        component: New
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit
    }
]

const router = new Router({ routes })

export default router