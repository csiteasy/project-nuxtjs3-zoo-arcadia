// footer.vue
<template>
  <footer class="bg-primary-900 text-white py-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Section Informations -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Informations</h3>
        <ul>

          <li> <NuxtLink to="/contact" class="hover:text-green-300">Contact</NuxtLink></li>
          <li><a href="#" class="hover:text-green-300">À propos</a></li>
        </ul>
      </div>

      <!-- Section Services -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Services</h3>
        <ul>
          <li><NuxtLink to="/mentions-legales" class="over:text-green-300">Mentions légales</NuxtLink></li>
          <li><NuxtLink to="/politique-de-confidentialite" class="over:text-green-300">Politique de confidentialité</NuxtLink></li>
          <li><NuxtLink to="/conditions-generales" class="over:text-green-300">Conditions générales d'utilisation</NuxtLink></li>
        </ul>
      </div>

      <!-- Section Horaires -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Horaires</h3>
        <ul>
          <li class="mb-2">Lundi - Vendredi : 9h - 18h</li>
          <li class="mb-2">Samedi : 10h - 19h</li>
          <li class="mb-2">Dimanche : 10h - 17h</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-green-700 mt-8 pt-4 text-center text-sm">
      &copy; 2024 Zoo Arcadia. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
// Pas besoin de script spécifique pour ce composant
</script>

<style scoped>
/* Ajoutez ici des styles spécifiques si nécessaire */
</style>
