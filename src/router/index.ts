import HomeView from '../home/home-view.vue';
import PlayView from '../play/play-view.vue';
import ContactView from '../contact/contact-view.vue';
import LoginView from '../login/login-view.vue';
import RegisterView from '../register/register-view.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/play', component: PlayView },
  { path: '/contact', component: ContactView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;