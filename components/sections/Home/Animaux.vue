<template>
  <div class="hasapp-container">

    <div  v-if="data && data.length" class="hasapp-grid">

     <div
          v-for="animal in data"
          :key="animal.id"
          class="hasapp-card group"
      >
       <nuxt-img
            :src="animal.images.length > 0 ? `${baseUrl}/${animal.images[0].fullUrl}` : '/assets/images/image-transparent.png'"
            :alt="animal.name"
            class="hasapp-card-img"
            sizes="100vw sm:50vw md:400px"

            fit="cover"
        />
        <div class="hasapp-img-card-img-container">
          <h3 class="hasapp-card-title">
            <span >{{ animal.name }}</span>
            <span class="text-gray-300">{{ animal.race.name }}</span>
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
