<template>
  <div class="play-wrapper">
    <h1 class="play-title">Play Activity</h1>
    <div class="play-container">
      <h2>Play</h2>
      <form @submit.prevent="handleSubmit" class="play-form">
          <label for="gameSelection"></label>
          <select id="gameSelection" v-model="selectedGame">
            <option v-for="game in games" :key="game.id" :value="game">
              {{ game.name }}
            </option>
          </select>
          <label for="username"></label>
          <input type="text" id="username" v-model="activityCode" placeholder="Activity Code" :class="{ error: hasActivityCodeError }" />
          <span v-if="hasActivityCodeError" class="error">Code is required.</span>
          <label for="password"></label>
          <input type="password" id="password" v-model="password" placeholder="Password" :class="{ error: hasPasswordError }" />
          <span v-if="hasPasswordError" class="error">Password is required.</span>
        <button type="submit" class="btn-type-1">Play</button>
      </form>
    </div>
    <h3 class="play-title-end">© www.eduplive.com</h3>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Game {
  id: number;
  name: string;
}

const games = ref<Game[]>([
  { id: 1, name: 'Game 1' },
  { id: 2, name: 'Game 2' },
  { id: 3, name: 'Game 3' },
]);

const selectedGame = ref<Game>(games.value[0]);
const activityCode = ref('');
const password = ref('');

const hasActivityCodeError = ref(false);
const hasPasswordError = ref(false);

const handleSubmit = () => {
  hasActivityCodeError.value = !activityCode.value;
  hasPasswordError.value = !password.value;

  if (!hasActivityCodeError.value && !hasPasswordError.value) {
    // Submit form data (using ActivityCode and password)
    console.log('Submitting form:', { selectedGame, activityCode, password });
  }
};

console.log('play');
</script>

<style lang="scss" scoped>
.play-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  
  .play-title {
    border-bottom: 2px solid var(--clr-primary-dark);
    padding: .5rem 1rem;
    width: 90%;
    margin: 1rem;
    
  }

  .play-title-end {
    text-align: center;
    border-top: 2px solid var(--clr-primary-dark);
    width: 90%;
    margin-top: auto;
    margin-bottom: 2rem;
  }

  .play-container {
    background-color: var(--clr-primary);
    align-items: center;
    border: 2px solid var(--clr-primary-dark);
    border-radius: 10px;
    padding: 1rem;
    margin: 2rem;

    .play-form {
      margin-block: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    .error {
      color: red;
      font-size: 0.8rem;
    }
  }
}
</style>