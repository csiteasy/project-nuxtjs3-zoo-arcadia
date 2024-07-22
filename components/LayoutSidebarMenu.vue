<template>
  <div class="fixed top-10 right-10 md:hidden">
    <div
        @click="handleToggle"
        :class="{
        'burger-close': isToggled,
        'burger-icon': true,
        'burger-icon-white': true,
        'menu__icon': true
      }"
        class="flex flex-col items-center justify-center w-10 h-10 cursor-pointer"
    >
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'mb-1': !isToggled
        }"
      ></span>
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'my-1': !isToggled,
          'opacity-0': isToggled
        }"
      ></span>
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'mt-1': !isToggled
        }"
      ></span>
    </div>
  </div>

  <nav :class="{ 'opacity-0 pointer-events-none': !isToggled }"
       class="fixed top-20 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]">
    <div class="p-[30px]">
      <ul class="navbar flex flex-col justify-center font-chivo gap-[34px] md:flex-row text-black">
        <li>
          <NuxtLink to="/" class="hover:underline" @click="closeMenu">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/animaux" class="hover:underline" @click="closeMenu">Animaux</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/habitats" class="hover:underline" @click="closeMenu">Habitats</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:underline" @click="closeMenu">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
/* Ajoutez vos styles ici */
</style>

<script setup>
import {ref} from "vue";

const isToggled = ref(false);
const handleToggle = () => {
  isToggled.value = !isToggled.value;
};

const closeMenu = () => {
  isToggled.value = false;
};
</script>
