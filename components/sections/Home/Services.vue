<template>
  <div class="hasapp-container">

    <div v-if="data && data.length" class="hasapp-grid">

      <div
          v-for="service in data"
          :key="service.id"
          class="hasapp-card p-3"
      >
        <h3 class="text-2xl font-semibold text-primary-500 mb-4">{{ service.name }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ service.description }}</p>
      </div>
    </div>
    <div v-else-if="error">
      <ElementsSystemErrorDisplay :error="error"/>
    </div>
    <div v-else>
      <ElementsSystemLoadingDisplay />
    </div>

  </div>
</template>

<script setup>
import {useAsyncData} from "#imports";
import { fetchData } from '~/services/apifetch'



const { data, error } = await useAsyncData('services', () => fetchData('services'));

</script>

<style scoped>

</style>
