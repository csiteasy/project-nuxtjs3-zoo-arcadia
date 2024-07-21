<template>
  <div class="w-full bg-secondary-500 py-4 shadow-md">
    <h1 class="text-4xl font-bold text-white text-center">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null
  }
})
</script>