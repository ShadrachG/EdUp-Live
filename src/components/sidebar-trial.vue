<template>
  <div class="sidebar">
    <div class="menu-navigation-grid">
      <img src="../assets/logo.png">
      <router-link class="menu-button" to="/">
        <div class="menu-icon">
          <img src="../assets//home.png">
        </div>
        <div class="menu-title">Home</div>
      </router-link>
      <router-link class="menu-button" to="/play">
        <div class="menu-icon">
          <img src="../assets/game.png">
        </div>
        <div class="menu-title">Play</div>
      </router-link>
      <router-link class="menu-button" to="/contact">
        <div class="menu-icon">
          <img src="../assets/contact.png">
        </div>
        <div class="menu-title">Contact</div>
      </router-link>
    </div>
    <div class="menu-login-grid">
      <router-link class="menu-button" to="/login">
        <div class="menu-icon">
          <img src="../assets/login.png">
        </div>
        <div class="menu-title">Login</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>

console.log('sidebar');
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.sidebar {
  display: grid;
  grid-template-rows: 90% 10%;
  position: fixed;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
  border-right: 2px solid var(--clr-primary-dark);

  // @include breakpoint(xs) {
  //   background-color: pink;
  //   width: 100px;
  // }

  // @include breakpoint(md) {
  //   background-color: blue;
  //   width: 200px;
  // }

  // @include breakpoint(xl) {
  //   background-color: green;
  //   width: 300px;
  // }

  img {
    margin-right: .5rem;
  }

  .menu-icon {
    margin-right: .5rem;
  }

  .menu-button {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-bottom: 1rem;
    margin-inline: 1.5rem;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    width: auto;
    padding: .5rem;
    border: 2px solid transparent;
    border-radius: 10px;

    @include breakpoint(sm) {
      width: calc(1rem + 30px);
      background-color: red;

      .menu-title {
        display: none;
      }
    }

    @include breakpoint(md) {

    }

  }

  .menu-button:hover {
    background-color: var(--clr-neutral-light);
    border: 2px solid var(--clr-neutral-dark);
    border-radius: 10px;

    .menu-button.active {
      color: green;
    }
  }
}
</style>