<template>
  <header class="cabecalho">
    <div class="logo">
      <router-link to="/">Filmes 2025</router-link>
    </div>
    <nav class="navegacao">
      <router-link to="/">Início</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>
  </header>
</template>

<style scoped>
.cabecalho {
  background-color: #111;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.logo a {
  color: #e50914;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
}

.navegacao {
  display: flex;
  gap: 20px;
}

.navegacao a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;
}

.navegacao a:hover, .navegacao a.router-link-active {
  color: #e50914;
}
</style>
