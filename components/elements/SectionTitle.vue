<template>
  <div class="w-full bg-secondary-500 py-4 shadow-md">
    <h2 class="text-3xl font-bold text-white text-center">
      {{ title }}
    </h2>
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