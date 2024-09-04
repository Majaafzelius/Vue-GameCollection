import { createRouter, createWebHistory } from 'vue-router';
import GameList from '../components/GameList.vue';
import GameForm from '../components/GameForm.vue';
import InfoPage from '../components/InfoPage.vue';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/add',
    name: 'GameList',
    component: GameList,
  },
  {
    path: '/add',
    name: 'GameForm',
    component: GameForm,
  },
  {
    path: '/infopage',
    name: 'InfoPage',
    component: InfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
