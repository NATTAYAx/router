import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import KeepInTouch from './components/KeepInTouch.vue';
import ForestBake from './components/ForestBake.vue';
import DongMadame from './components/DongMadame.vue';
import CheevitCheeva from './components/CheevitCheeva.vue';
import WabiCha from './components/WabiCha.vue';
import MaoCoffee from './components/MaoCoffee.vue';

const routes = [
  { path: '/', component: App },
  { path: '/keep-in-touch/:id', component: KeepInTouch},
  { path: '/forest-bake/:id', component: ForestBake},
  { path: '/dong-madame/:id', component: DongMadame},
  { path: '/cheevit-cheeva/:id', component: CheevitCheeva},
  { path: '/wabi-cha/:id', component: WabiCha},
  { path: '/mao-coffee/:id', component: MaoCoffee},
  {
    path: '/component/:name',
    component: () => import(`./components/${name}.vue`),
    props: true
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;