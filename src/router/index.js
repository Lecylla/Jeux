import { createRouter, createWebHistory } from 'vue-router';
import PageAccueil from '../views/PageAccueil.vue';
import JeuDrapeaux from '../views/JeuDrapeaux.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: PageAccueil,
  },
  {
    path: '/jeu-drapeaux',
    name: 'JeuDrapeaux',
    component: JeuDrapeaux,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;