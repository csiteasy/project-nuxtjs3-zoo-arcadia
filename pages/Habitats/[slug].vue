<template>
  <div class="container mx-auto py-16 px-4 md:px-8 xl:px-0">

    <div  v-if="habitat">
    <nuxt-img v-if ="habitat.images.length > 0"
          :src="`${baseUrl}/${habitat.images[0].fullUrl}`"
          :alt="habitat.name"
          class="w-full object-cover rounded-md shadow-md mb-8"
          sizes="100vw sm:50vw md:400px"
      />
   <ElementsPageTitle :title="habitat.name" />
      <p class=" bg-white rounded-lg shadow-lg p-2 text-gray-700 mb-4 mt-8">{{ habitat.description }}</p>


      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
        <nuxt-img
            v-for="(image, index) in habitat.images.slice(1)"
            :key="index"
            :src="`${baseUrl}/${image.fullUrl}`"
            :alt="habitat.name"
            class="w-full object-cover rounded-md shadow-md cursor-pointer"
            sizes="100vw sm:50vw md:400px"
            @click="openModal(`${baseUrl}/${image.fullUrl}`, habitat.name)"
        />
      </div>
    </div>

    <ElementsSectionTitle title="Les animaux" />
    <div  v-if="habitat.animals" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      <div
          v-for="animal in habitat.animals"
          :key="animal.id"
          class="relative bg-white rounded-lg shadow-lg overflow-hidden group"
      >
        <nuxt-img
            :src="animal.images.length > 0 ? `${baseUrl}/${animal.images[0].fullUrl}` : '/assets/images/image-transparent.png'"
            :alt="animal.name"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-150"
            sizes="100vw sm:50vw md:400px"

            fit="cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 class="text-2xl font-semibold text-white mb-4">
            <span class="block text-3xl">{{ animal.name }}</span>
            <span class="block text-xl text-gray-300">{{ animal.race.name }}</span>
          </h3>

          <nuxt-link :to="`/animals/${animal.slug}`" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Voir plus
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else-if="error">
      <ElementsSystemErrorDisplay />
    </div>
    <div v-else>
      <ElementsSystemLoadingDisplay />
    </div>
  </div>




  <VueFinalModal v-model="isModalVisible" @click="closeModal" transition="vfm-fade">
    <div class="relative p-4 bg-white rounded-md">
      <img :src="modalImageSrc" :alt="modalImageAlt" class="max-w-full max-h-full rounded-md shadow-md cursor-pointer" />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import {useAsyncData} from "#imports";
import {fetchData} from "~/services/apifetch.js";
const api = inject('api');

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl.replace('/api', '');
const route = useRoute()
//const { data: habitat, error, loading } = await api.fetchWithLoading('habitats/' + route.params.slug);
const { data:habitat, error } = await useAsyncData('habitat', () => fetchData('habitats/' + route.params.slug));

const isModalVisible = ref(false)
const modalImageSrc = ref('')
const modalImageAlt = ref('')

const openModal = (src, alt) => {

  modalImageSrc.value = src
  modalImageAlt.value = alt
  isModalVisible.value = true
}
const closeModal = () => {
  isModalVisible.value = false
}

</script>

<style scoped>
/* Ajoutez ici des styles spécifiques à la page si nécessaire */
</style>
