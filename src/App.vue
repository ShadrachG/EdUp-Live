<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './home/home-view.vue';
</script>

<template>
  <div class="menu">
      <router-link class="menu-button" to="/">
        <div class="menu-icon">
          <img src="./assets//home.png">
        </div>
        <div class="menu-title">Home</div>
      </router-link>
      <router-link class="menu-button" to="/play">
        <div class="menu-icon">
          <img src="./assets/game.png">
        </div>
        <div class="menu-title">Play</div>
      </router-link>
      <router-link class="menu-button" to="/contact">
        <div class="menu-icon">
          <img src="./assets/contact.png">
        </div>
        <div class="menu-title">Contact</div>
      </router-link>
      <router-link class="menu-button" to="/login">
        <div class="menu-icon">
          <img src="./assets/login.png">
        </div>
        <div class="menu-title">Login</div>
      </router-link>
    </div>
    <RouterView></RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
