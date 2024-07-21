<template>


  <div v-if="animal">
    <ElementsPageTitle :title="(animal.name) +' - ' + (animal.race.name)"/>
    <div v-if="animal.images.length > 0" class="mx-auto px-0 ">
      <nuxt-img
          :src="animal.images.length > 0 ? `${baseUrl}/${animal.images[0].fullUrl}` : '/default-image.jpg'"
          :alt="animal.name"
          class="w-full object-cover mb-8"
          sizes="100vw sm:50vw md:400px"
      />
    </div>
    <div class="container mx-auto pt-4 px-4 md:px-8 xl:px-0">

      <ElementsSectionTitle :title="'Qui est ' + (animal.name) "/>
      <div class="overflow-x-auto mb-8">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="px-4 py-2 border-b">Nom</th>
            <th class="px-4 py-2 border-b">Race</th>
            <th class="px-4 py-2 border-b">Habitat</th>

          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="px-4 py-2 border-b text-center">{{ animal.name }}</td>
            <td class="px-4 py-2 border-b text-center">{{ animal.race.name }}</td>
            <td class="px-4 py-2 border-b text-center">{{ animal.habitat.name }}</td>

          </tr>
          </tbody>
        </table>
      </div>
      <ElementsSectionTitle :title="'Comment se porte ' + (animal.name) "/>
      <div class="overflow-x-auto mb-8">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="px-4 py-2 border-b">Etat de santé</th>
            <th class="px-4 py-2 border-b">Commentaire du vétérinaire</th>


          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="px-4 py-2 border-b text-center">{{ animal.lastMedicalReport.healthStatus.description }}</td>
            <td class="px-4 py-2 border-b text-center">{{ animal.lastMedicalReport.review }}</td>


          </tr>
          </tbody>
        </table>
      </div>
      <div v-if="animal.images.length > 1">
        <ElementsSectionTitle :title="(animal.name) + ' dans son environnement'"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
          <nuxt-img
              v-for="(image, index) in animal.images.slice(1)"
              :key="index"
              :src="`${baseUrl}/${image.fullUrl}`"
              :alt="animal.name"
              class="w-full object-cover rounded-md shadow-md cursor-pointer"
              sizes="100vw sm:50vw md:400px"
              @click="openModal(`${baseUrl}/${image.fullUrl}`, animal.name)"
          />
        </div>
      </div>
    </div>
  </div>


  <div v-else-if="error">
    <ElementsSystemErrorDisplay/>
  </div>
  <div v-else>
    <ElementsSystemLoadingDisplay/>
  </div>


  <VueFinalModal v-model="isModalVisible" @click="closeModal" transition="vfm-fade">
    <div class="relative flex items-center justify-center">
      <img :src="modalImageSrc" :alt="modalImageAlt" class="max-w-full max-h-full cursor-pointer"/>
    </div>
  </VueFinalModal>
</template>

<script setup>
import {VueFinalModal} from 'vue-final-modal'
import {useAsyncData} from "#imports";
import {fetchData} from "~/services/apifetch.js";

const api = inject('api');

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl.replace('/api', '');
const route = useRoute()
//const { data: animal, error, loading } = await api.fetchWithLoading('animals/' + route.params.slug);
const {data: animal, error} = await useAsyncData('animal', () => fetchData('animals/' + route.params.slug));

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


  const response =  await fetch(`${config.public.baseUrl}increment-visit/`+route.params.slug, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ld+json',
      'Authorization': 'Bearer your_jwt_token'
    },

  });


//---------------------------------


</script>

<style scoped>
/* Ajoutez ici des styles spécifiques à la page si nécessaire */
</style>
