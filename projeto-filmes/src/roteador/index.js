import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../paginas/Inicio.vue';
import Sobre from '../paginas/Sobre.vue';
import FilmeDetalhes from '../paginas/FilmeDetalhes.vue';

const rotas = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/filme/:id',
    name: 'FilmeDetalhes',
    component: FilmeDetalhes,
    props: true
  }
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas
});

export default roteador;
