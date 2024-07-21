<!-- pages/test.vue -->
<template>
  <div>
    <h1>Data fetched from API 16</h1>
    <div v-if="data && data.length">data ok
      <p>{{ data }}</p>
    </div>
    <div v-else-if="error"> data error
      <p>Error: {{ error.message }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData, useRuntimeConfig  } from '#imports'
const config = useRuntimeConfig();

const { data, error } = await useAsyncData(
    'fetchData',
    async () => {
      const response = await $fetch(config.public.baseUrl+'animals', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response['hydra:member'] || response
    }
)

// Afficher le contenu de data dans la console
console.log('data', data)
</script>
