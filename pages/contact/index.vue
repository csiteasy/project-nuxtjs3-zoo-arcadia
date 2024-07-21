<template>
  <ElementsPageTitle title="Nous contacter" />
  <div class="hasapp-container bg-white">
  <div class="p-10">
    <p class="hasapp-section-text">
      Envoyez-nous un message pour toute question ou demande de renseignement.
    </p>
    <div v-if="successMessage" >

      <ElementsSystemSuccessDisplay :success="successMessage"/>
    </div>
    <div v-if="errorMessage" >

      <ElementsSystemErrorDisplay :error="errorMessage"/>
    </div>
    <form @submit.prevent="sendEmail">
      <div class="mb-4">
        <label for="name" class="block text-md font-medium text-gray-700">Nom</label>
        <input type="text" id="name" v-model="form.name" required class="hasapp-input">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="form.email" required class="hasapp-input">
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" v-model="form.message" required class="hasapp-input"></textarea>
      </div>
      <!-- Champ Honeypot caché -->
      <input type="text" v-model="form.honeypot" style="display:none;">
      <button type="submit" class="hasapp-button-primary w-full">Envoyer</button>
    </form>
  </div>
  </div>
</template>

<script setup>

import { useReCaptcha } from 'vue-recaptcha-v3'
const { executeRecaptcha } = useReCaptcha()


const form = ref({
  name: '',
  email: '',
  message: '',
  honeypot: ''
})

const successMessage = ref('')
const errorMessage  = ref('')

const sendEmail = async () => {
  if (form.value.honeypot !== '') {
    errorMessage.value = 'Spam detected!'
    return
  }

  const config = useRuntimeConfig()
  try {
    const token = await executeRecaptcha('contact_form')
    const response = await fetch(`${config.public.baseUrl}email_messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json',
      },
      body: JSON.stringify(form.value),
    })

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to send email');
    }

    successMessage.value = 'Email envoyé avec succès!';
    errorMessage.value = '';
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    successMessage.value = ''
    errorMessage.value =  'Une erreur est survenue lors de l\'envoi de l\'email.'

  }
}
</script>
