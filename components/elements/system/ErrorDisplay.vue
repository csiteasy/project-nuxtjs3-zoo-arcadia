<template>
  <div v-if="error" class="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md" role="alert">
    <svg class="w-6 h-6 mr-2 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.001 10h2v5h-2zm0-4h2v2h-2z"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
    <div>
      <strong class="font-bold">Erreur : </strong>
      <span>{{ error }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  error: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
/* Ajoutez des styles spécifiques si nécessaire */
</style>
