<template>
  <div class="detalhes-container" v-if="filme">
    <div class="imagem-container">
      <img :src="filme.imagem" :alt="filme.titulo" />
    </div>
    <div class="info-container">
      <h1>{{ filme.titulo }}</h1>
      <p class="diretor"><strong>Direção:</strong> {{ filme.diretor }}</p>
      <p class="sinopse">{{ filme.sinopse }}</p>
      
      <router-link to="/" class="botao-voltar">Voltar para a lista</router-link>
    </div>
  </div>
  <div v-else class="erro-container">
    <h2>Filme não encontrado!</h2>
    <router-link to="/" class="botao-voltar">Voltar para a lista</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { filmes } from '../dados/filmes.js';

const route = useRoute();
const filmeId = parseInt(route.params.id);

const filme = computed(() => {
  return filmes.find(f => f.id === filmeId);
});
</script>

<style scoped>
.detalhes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  gap: 30px;
}

@media (min-width: 768px) {
  .detalhes-container {
    flex-direction: row;
    align-items: flex-start;
  }
}

.imagem-container img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.info-container {
  flex: 1;
}

.info-container h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.diretor {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 20px;
}

.sinopse {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #ddd;
}

.botao-voltar {
  display: inline-block;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.botao-voltar:hover {
  background-color: #555;
}

.erro-container {
  text-align: center;
  padding: 50px;
  color: #fff;
}
</style>
