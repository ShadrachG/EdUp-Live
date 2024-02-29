<template>
  <div class="login-wrapper">
    <h1 class="login-title">Login</h1>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <input
          type="text"
          id="username"
          v-model="username"
          required
          aria-label="Username"
          aria-required="true"
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          v-model="password"
          required
          aria-label="Password"
          aria-required="true"
          placeholder="Password"
        />
        <router-link to="/register"
          @click="handleForgotPassword"
          class="forgot-password-button"
          aria-label="Forgot password button"
        >
          Forgot Password?
        </router-link>
        <button type="submit" aria-label="Login button" class="account-btn">Login</button>
      </form>
      No account? 
      <router-link to="/register" class="register-button" aria-label="Register button">
        Register here
      </router-link>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <h3 class="login-title-end">© www.eduplive.com</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();

async function handleSubmit() {
  // Mock successful login with hardcoded values
  if (username.value === 'test' && password.value === 'password') {
    // Simulate successful login (e.g., redirect to dashboard)
    router.push('/');
  } else {
    error.value = 'Invalid username or password';
  }
  // try {
    // SHADNOTE Start
    // Replace with your authentication logic:
    // - Send credentials to your backend API
    // - Handle successful login: store tokens, redirect
    // - Handle errors: set `error` ref

    // Example placeholder (replace with your API call):
    // SHADNOTE End
  //   const response = await fetch('/api/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ username: username.value, password: password.value }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     // Store token, redirect, etc.
  //   } else {
  //     throw new Error('Invalid credentials');
  //   }
  // } catch (err) {
  //   error.value = err.message;
  // }
}

async function handleForgotPassword() {
  // Implement your forgot password logic here, such as:
  // - Display a modal or prompt for email address
  // - Send a password reset email
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 100vh;
  
  .login-title {
    border-bottom: 2px solid var(--clr-primary-dark);
    padding: .5rem 1rem;
    width: 90%;
    margin: 1rem;
  }

  .login-title-end {
    text-align: center;
    border-top: 2px solid var(--clr-primary-dark);
    width: 90%;
    margin-top: auto;
    margin-bottom: 2rem;
  }

  .login-container {
    background-color: var(--clr-primary);
    border: 2px solid var(--clr-primary-dark);
    border-radius: 10px;
    padding: 1rem;
    margin: 2rem;

    .login-form {
      margin-block: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
