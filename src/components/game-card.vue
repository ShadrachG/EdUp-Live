<template>
  <div class="card-container">
    <div v-for="gameCard in gameCards" :key="gameCard.title">
      <div class="game-card">
        <div class="card-img">
          <img src="../assets/act-drawing-thumb.jpg" class="card-image" alt="Game Image">
        </div>
        <div class="card-info">
          <div class="card-title">{{ gameCard.title }}</div>
          <div class="card-subtitle">{{ gameCard.subtitle }}</div>
          <button class="btn-type-1">View Demo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const prop = defineProps({
  gameCards: {
    type: Array,
    required: true,
  },
});

console.log('value =', prop.gameCards[0].image);

</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: 
  repeat(auto-fit, minmax(calc(300px + 2rem), 1fr));

  .game-card {
    background-color: var(--clr-primary);
    display: grid;
    border: 3px solid var(--clr-primary-dark);
    border-radius: 20px;
    width: 300px;
    height: 350px;
    margin: 1rem;
    transition: 0.3s ease-in-out;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    .card-img {
      border-top-left-radius: 17px;
      border-top-right-radius: 17px;
      width: 295.5px;
      height: 196px;
      overflow: hidden;
      margin-bottom: .2rem;
    }
 
    .card-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 295px;
      height: 154px;
      text-align: center;

      .card-title {
        font-weight: 700;
        color: var(--fc-dark);

        width: 280px;
        height: 2.5rem;
        line-height: 1.2;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
      }

      .card-subtitle {
        font-size: .9rem;
        font-weight: 500;
        color: var(--fc-gray);

        width: 280px;
        height: 2.6rem;
        line-height: 1.2;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
      }
    }
  }

  .game-card:hover {
    border: 3px solid var(--clr-accent-dark);
    box-shadow: 0 0 10px var(--clr-accent);
    transition: 0.3s ease-in-out;
  }

}
</style>