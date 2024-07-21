<template>
  <ElementsPageTitle title="Mentions Légales" />
  <section class="bg-gray-100 py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">1. Éditeur du site</h2>
        <p class="mt-2 text-gray-700">
          Nom de l'entreprise : Zoo Arcadia<br />
          Adresse : Forêt de Brocéliande, Bretagne, France<br />
          Email : contact@zooarcadia.fr<br />
          Téléphone : 01 23 45 67 89<br />
          Numéro de SIRET : 123 456 789 00012<br />
          Directeur de la publication : José
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">2. Hébergeur du site</h2>
        <p class="mt-2 text-gray-700">
          Nom de l'hébergeur : Hébergeur XYZ<br />
          Adresse de l'hébergeur : 123 Rue de l'Hébergement, 75001 Paris, France<br />
          Téléphone : 09 87 65 43 21<br />
          Site web : <a href="https://www.hebergeurxyz.com" class="text-blue-600 hover:underline">www.hebergeurxyz.com</a>
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">3. Propriété intellectuelle</h2>
        <p class="mt-2 text-gray-700">
          Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de Zoo Arcadia à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">4. Protection des données personnelles</h2>
        <p class="mt-2 text-gray-700">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ces droits en nous contactant par email à l'adresse contact@zooarcadia.fr.
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary-500">5. Utilisation des cookies</h2>
        <p class="mt-2 text-gray-700">
          Notre site utilise des cookies pour améliorer votre expérience utilisateur. En naviguant sur notre site, vous acceptez l'utilisation des cookies. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-primary-500">6. Conditions d'utilisation</h2>
        <p class="mt-2 text-gray-700">
          L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

useHead({
  bodyAttrs: {
    class: "overflow-x-hidden w-screen relative bg-primary-900"
  },
})
</script>