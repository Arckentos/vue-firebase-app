import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Edit from '@/views/Edit.vue';
import Create from '@/views/Create.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router