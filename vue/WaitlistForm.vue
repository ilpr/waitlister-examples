<template>
  <div v-if="status === 'success'" class="success">
    You're on the list! 🎉
  </div>

  <form v-else @submit.prevent="handleSubmit">
    <input
      v-model="email"
      type="email"
      placeholder="Your email"
      required
    />
    <input
      v-model="name"
      type="text"
      placeholder="Your name (optional)"
    />
    <button type="submit" :disabled="status === 'loading'">
      {{ status === 'loading' ? 'Joining...' : 'Join Waitlist' }}
    </button>
    <div v-if="status === 'error'" class="error">
      Something went wrong. Try again.
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const WAITLIST_KEY = 'YOUR_WAITLIST_KEY';

const email = ref('');
const name = ref('');
const status = ref('idle'); // idle | loading | success | error

const handleSubmit = async () => {
  status.value = 'loading';

  try {
    const res = await fetch(`https://waitlister.me/s/${WAITLIST_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 
        email: email.value, 
        name: name.value 
      })
    });

    if (res.ok) {
      status.value = 'success';
      email.value = '';
      name.value = '';
    } else {
      throw new Error();
    }
  } catch {
    status.value = 'error';
  }
};
</script>
