<template>
  <div class="register-wrapper">
    <h1 class="register-title">Register</h1>
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <input 
          type="text" 
          id="teacherName" 
          v-model="teacherName" 
          required
          aria-label="Teacher Name"
          aria-required="true"
          placeholder="Teacher Name" 
        />

        <input 
          type="email" 
          id="email" 
          v-model="email" 
          required
          aria-label="Email"
          aria-required="true"
          placeholder="Email"
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

        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          required
          aria-label="Confirm Password"
          aria-required="true"
          placeholder="Confirm Password"
        />

        <input 
          type="text" 
          id="countryName" 
          v-model="countryName" 
          required
          aria-label="Country Name"
          aria-required="true"
          placeholder="Country Name"
        />

        <input 
          type="text" 
          id="schoolName" 
          v-model="schoolName" 
          required
          aria-label="School Name"
          aria-required="true"
          placeholder="School Name"
        />

        <button type="submit" class="account-btn">Register</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="login-btn">
        <router-link to="/login" class="register-button" aria-label="Login button">
          Back to Login
        </router-link>
      </div>
    </div>
    <h3 class="register-title-end">© www.eduplive.com</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const teacherName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const countryName = ref('');
const schoolName = ref('');
const error = ref(null);
const router = useRouter();

async function handleRegister() {
  // Validate fields (empty checks, password match, etc.)

  try {
    // Replace with your registration logic:
    // - Send data to your backend API
    // - Handle successful registration: redirect, etc.
    // - Handle errors: set `error` ref

    // Example placeholder (replace with your API call):
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        teacherName: teacherName.value,
        email: email.value,
        password: password.value,
        countryName: countryName.value,
        schoolName: schoolName.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Handle successful registration (e.g., redirect)
    } else {
      throw new Error('Registration failed');
    }
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<style scoped>
.register-wrapper {
  display: flex; /* Enable flexbox */
  flex-direction: column;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Optionally, center vertically */
  height: 100vh;

  .register-title {
    border-bottom: 2px solid var(--clr-primary-dark);
    padding: .5rem 1rem;
    width: 90%;
    margin: 1rem;
  }

  .register-title-end {
    text-align: center;
    border-top: 2px solid var(--clr-primary-dark);
    width: 90%;
    margin-top: auto;
    margin-bottom: 2rem;
  }

  .register-container {
    background-color: var(--clr-primary);
    border: 2px solid var(--clr-primary-dark);
    border-radius: 10px;
    padding: 1rem;
    margin: 2rem;

    .register-form {
      margin-block: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
