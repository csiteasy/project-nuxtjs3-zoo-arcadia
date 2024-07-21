<template>
  <header class="h-auto full-width relative py-[10px] first-letter:lg:py-[16px] bg-primary-500 " :class="{ 'sticky-header': scroll }">
   <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">
      <NuxtLink class="flex" href="/"><img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[100px]" src="/assets/images/logo-zoo-arcadia.png" alt="logo image" /></NuxtLink>
      <nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:block">
        <LayoutMenu />
      </nav>
      <div class="hidden lg:block">
        <button type="button">
          <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[25px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white" href="/contact"
          ><span class="block text-inherit w-full h-full text-heading-6 font-bold font-chivo">Nous contacter</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="Nous contacter" /></i
          ></NuxtLink>
        </button>
      </div>
    </div>
    <LayoutSidebarMenu />
  </header>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const scroll = ref(false);
const handleScroll = () => {
  const scrollCheck = window.scrollY > 100;
  if (scrollCheck !== scroll.value) {
    scroll.value = scrollCheck;
  }
};
onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});
</script>
