<template>
  <div class="hasapp-container">

    <div  v-if="data && data.length" class="hasapp-grid">

     <div
          v-for="animal in data"
          :key="animal.id"
          class="hasapp-card group"
      >
       <nuxt-img v-if="animal.images.length > 0"
            :src="`${baseUrl}/${animal.images[0].fullUrl}`"
            :alt="animal.name"
            class="hasapp-card-img"
            sizes="100vw sm:50vw md:400px"
            fit="cover"
        />
       <img v-else src="/assets/images/image-transparent.png"   class="hasapp-card-img">
        <div class="hasapp-img-card-img-container">
          <h3 class="hasapp-card-title">
            <span >{{ animal.name }}</span>
            <div class="text-gray-300">{{ animal.race.name }}</div>
          </h3>
          <nuxt-link :to="`/animaux/${animal.slug}`" class="hasapp-card-link">
            Voir plus
          </nuxt-link>
        </div>
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
import {useAsyncData, useRuntimeConfig} from "#imports";
import { fetchData } from '~/services/apifetch'
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl.replace('/api', '');

const { data, error } = await useAsyncData('animals', () => fetchData('animals'));


</script>

<style scoped>

</style>
