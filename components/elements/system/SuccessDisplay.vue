<template>
  <div v-if="success" class="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md" role="alert">
    <svg class="w-6 h-6 mr-2 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 15l-5-5 1.41-1.42L10 12.17l7.59-7.58L19 6l-9 9z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
    <div>

      <span>{{ success }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  success: {
    type: String,
    default: null
  }
})
</script>
