<template>
  <div class="relative w-full h-screen bg-green-900">
    <div class="absolute inset-0 z-0">
<!--      <nuxt-img
          src="/assets/images/zoo-arcadia-panorama.jpg"
          alt="Zoo Arcadia Panorama"
          layout="fill"
          object-fit="cover"
          class="full-image"
      />-->
      <img src="/assets/images/zoo-arcadia-panorama.jpg" alt="Zoo Arcadia Panorama" class="full-image">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div class="relative z-10 container mx-auto py-16 flex flex-col lg:flex-row items-center px-4 md:px-8 xl:px-0 h-full">
      <div class="lg:w-2/3 lg:mr-10 text-center lg:text-left">
        <h1 class="font-chivo font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Zoo ARCADIA
        </h1>
        <p class="text-gray-200 text-lg md:text-xl lg:text-2xl mb-8">
          "Bienvenue au Zoo Arcadia - Un Paradis Écologique en Bretagne"
        </p>
        <div class="flex justify-center lg:justify-start space-x-4">
          <nuxt-link to="/planifiez-votre-visite" class="bg-secondary-500 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded">
            Planifiez Votre Visite
          </nuxt-link>
          <nuxt-link to="/decouvrez-nos-animaux" class="bg-white hover:bg-gray-100 text-primary-900 font-bold py-2 px-4 rounded">
            Découvrez Nos Animaux
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this template
</script>

<style scoped>
.full-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
