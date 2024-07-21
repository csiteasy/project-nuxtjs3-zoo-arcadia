<template>
  <div class="hasapp-container">


    <div v-if="data && data.length" class="hasapp-grid">

      <div
          v-for="habitat in data"
          :key="habitat.id"
          class="hasapp-card group"
      >
        <nuxt-img
            :src="habitat.images.length > 0 ? `${baseUrl}${habitat.images[0].fullUrl}` : '/assets/images/image-transparent.png'"
            :alt="habitat.name"
            class="hasapp-card-img"
            sizes="100vw sm:50vw md:400px"
            fit="cover"
        />
        <div class="hasapp-img-card-img-container">
          <h3 class="hasapp-card-title">{{ habitat.name }}</h3>
          <nuxt-link :to="`/habitats/${habitat.slug}`" class="hasapp-card-link">
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

const { data, error } = await useAsyncData('habitats', () => fetchData('habitats'));

</script>

<style scoped>

</style>
