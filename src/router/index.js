import { createRouter, createWebHistory } from 'vue-router';

import home from '@/views/home.vue';
import statement from '@/views/statement.vue';
import contact from '@/views/contact.vue';

const routes = [
    { path: '/', component: home },
    { path: '/statement', component: statement },
    { path: '/contact', component: contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router