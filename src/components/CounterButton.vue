<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">
    Click this button to change a crazy setting {{ count }}
  </button>
</template>

<style scoped>
    button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    cursor: pointer;
    }
</style>
