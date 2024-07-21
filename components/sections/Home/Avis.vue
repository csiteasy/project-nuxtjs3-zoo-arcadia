//Avis.vue nuxtJs 3
<template>
  <div v-if="reviews && reviews.length" class="container mx-auto py-8">
    <Swiper
        :slides-per-view="1"
        :navigation="true"
        :modules="[Pagination,Navigation]"
        :pagination="{ clickable: true }"
        class="mySwiper"
    >
      <Swiper-slide v-for="review in reviews" :key="review.id">
        <div class="bg-white px-20 py-5 m runrounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="mb-4">
            <h3 class="text-xl font-semibold">{{ review.pseudo }}</h3>
            <p class="text-sm text-gray-500">{{ new Date(review.publishedAt).toLocaleDateString() }}</p>
          </div>
          <p class="text-gray-700">{{ review.content }}</p>
        </div>
      </Swiper-slide>

    </Swiper>
  </div>
  <div v-else-if="error">
    <ElementsSystemErrorDisplay :error="error"/>
  </div>
  <div v-else>
    <ElementsSystemLoadingDisplay />
  </div>


  <div class="mx-auto bg-primary-400">
   <elements-section-title title="Laissez votre avis"></elements-section-title>
    <div class="hasapp-container">
      <p class="hasapp-section-text">
        Laissez votre avis sur notre service, nous serions ravis de vous lire.
      </p>
      <div v-if="successMessage" >

        <ElementsSystemSuccessDisplay :success="successMessage"/>
      </div>
      <div v-if="errorMessage" >

        <ElementsSystemErrorDisplay :error="errorMessage"/>
      </div>
      <form @submit.prevent="submitReview" class="mt-8 space-y-4">
        <div>
          <label for="pseudo" class="block text-md  text-gray-700">Pseudo</label>
          <input type="text" id="pseudo" v-model="newReview.pseudo" required
                 class="hasapp-input">
        </div>
        <div>
          <label for="content" class="block text-md  text-gray-700">Votre avis</label>
          <textarea id="content" v-model="newReview.content" required
                    class="hasapp-input"></textarea>
        </div>
        <!-- Champ Honeypot caché -->
        <input type="text" v-model="newReview.honeypot" style="display:none;">
        <button type="submit"
                class="hasapp-button-primary w-full ">
          Envoyer
        </button>

      </form>
    </div>
  </div>


</template>

<script setup>
import {useAsyncData, useRuntimeConfig} from "#imports";
import {fetchData} from '~/services/apifetch';
import 'swiper/swiper-bundle.css'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination,Navigation } from 'swiper/modules';

import { useReCaptcha } from 'vue-recaptcha-v3'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const {data:reviews, error} = await useAsyncData('reviews', () => fetchData('reviews'));

const successMessage = ref('')
const errorMessage  = ref('')

const { executeRecaptcha } = useReCaptcha()

const newReview = ref({
  pseudo: '',
  content: '',
  honeypot: ''
});

const submitReview = async () => {
  if (newReview.value.honeypot !== '') {
    errorMessage.value = 'Spam detected!'
    return
  }


  try {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.baseUrl;

    const token = await executeRecaptcha('contact_form')
    const response = await fetch(`${BASE_URL}reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json',
        'Authorization': 'Bearer your_jwt_token'
      },
      body: JSON.stringify(newReview.value)
    });

    if (!response.ok) {
      throw new Error('Failed to submit review');
    }
    successMessage.value = 'Message envoyé avec succès!';
    errorMessage.value = '';
    // Clear form and reload reviews
    newReview.value.pseudo = '';
    newReview.value.content = '';

  } catch (error) {
    successMessage.value = ''
    errorMessage.value =  'Une erreur est survenue lors de l\'envoi de votre avis.'

  }
};

</script>