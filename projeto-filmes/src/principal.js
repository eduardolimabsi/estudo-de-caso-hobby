import { createApp } from 'vue';
import './estilos/global.css';
import Aplicativo from './Aplicativo.vue';
import roteador from './roteador/index.js';

const app = createApp(Aplicativo);
app.use(roteador);
app.mount('#app');
