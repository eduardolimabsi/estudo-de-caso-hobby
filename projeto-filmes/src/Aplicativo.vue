<template>
  <div id="aplicativo">
    <Cabecalho />
    <main class="conteudo-principal">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Cabecalho from './componentes/Cabecalho.vue';
</script>

<style scoped>
#aplicativo {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.conteudo-principal {
  flex: 1;
  padding: 20px 0;
}
</style>
