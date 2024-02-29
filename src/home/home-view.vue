<template>
  <div class="home-wrapper">
    <div class="home-game-card-container">
      <GameCard :gameCards="gameCards" />
    </div>
  </div>
</template>

<script setup>
import GameCard from '../components/game-card.vue';


const gameCards = [
  { title: 'Addition Activity', subtitle: 'Collaborative Multitouch Application asdasd', image: 'act-drawing-thumb.jpg'},
  { title: 'Jigsaw ActivityJigsaw ActivityJigsaw Activity Activity Activity ActivityActivity', subtitle: 'Collaborative Multitouch Application test', image: '../assets/act-drawing-thumb.jpg'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application tester', image: '../assets/act-drawing-thumb.jpg'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Applicationasdasdasdasdasdaasdasdsdasdasdasdasdasdasdasdasd', image: '../assets/logo.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/logo.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/home.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/home.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/home.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/home.png'},
  { title: 'Matching Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/contact.png'},
  { title: 'Jigsaw Activity', subtitle: 'Collaborative Multitouch Application', image: '../assets/act-drawing-thumb.jpg'},
]


</script>

<style lang="scss" scoped>
.home-wrapper {
  display: grid;
}
</style>