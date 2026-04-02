<template>
  <div class="cartao">
    <img :src="filme.imagem" :alt="filme.titulo" class="imagem-filme" />
    <div class="conteudo">
      <h3 class="cartao-titulo">{{ filme.titulo }}</h3>
      <router-link :to="`/filme/${filme.id}`" class="botao-detalhes">Ver Detalhes</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filme: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.cartao {
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}
.cartao:hover {
  transform: translateY(-5px);
}
.imagem-filme {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.conteudo {
  padding: 15px;
  text-align: center;
}
.cartao-titulo {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 15px;
  min-height: 50px;
}
.botao-detalhes {
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s;
}
.botao-detalhes:hover {
  background-color: #b20710;
}
</style>
