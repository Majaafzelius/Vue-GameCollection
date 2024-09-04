<template>
  <header class="header is-flex is-justify-content-center is-flex-direction-column">
    <h1 class="title">Moment 3</h1>
    <nav class="navbar">
      <a href="/" class="navbar-item">Hem</a>
      <a href="/add" class="navbar-item">Hantera Spel</a>
      <a href="/InfoPage" class="navbar-item">Tankar om Vue</a>
    </nav>
  </header>

  
  <main>
    <router-view>

    </router-view>
  </main>

  <footer class="footer">
    <div>
      <p>Skapad HT2023 för kursen DT193G, Fullstack-utveckling med ramverk, Av Maja Afzelius.</p>
    </div>
  </footer>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  .view {
    margin: 5% 30%;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3% 0;
  }
  .navbar {
    text-align: center;
  }


</style>
