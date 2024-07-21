<template>
  <div class="wrapper mx-auto text-gray-900 font-normal bg-primary-700">
    <LayoutHeader />
    <div>
      <slot />
    </div>
<!--    <ElementsBackToTop />-->
<LayoutFooter />
  </div>
</template>
<script setup>
import { provide } from 'vue'
import { api } from '~/services/api.js'

// Fournir l'API pour toutes les pages utilisant ce layout
provide('api', api)
</script>
