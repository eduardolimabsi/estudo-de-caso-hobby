<template>
  <div class="pagina-inicio">
    <h1 class="titulo">Melhores Filmes de 2025</h1>
    <p class="descricao">Confira as estreias mais aguardadas deste ano e não perca nenhum detalhe!</p>

    <div class="lista-filmes">
      <FilmeCartao 
        v-for="filme in listaFilmes" 
        :key="filme.id" 
        :filme="filme" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FilmeCartao from '../componentes/FilmeCartao.vue';
import { filmes } from '../dados/filmes.js';

const listaFilmes = ref(filmes);
</script>

<style scoped>
.pagina-inicio {
  padding: 20px;
  text-align: center;
}
.titulo {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.descricao {
  color: #ccc;
  margin-bottom: 30px;
}
.lista-filmes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
