<template>
  <div class="fixed top-10 right-10  sm:hidden">
    <div
        @click="handleToggle"
        :class="{
        'burger-close': isToggled,
        'burger-icon': true,
        'burger-icon-white': true,
        'menu__icon': true
      }"
        class="flex flex-col items-center justify-center w-10 h-10 cursor-pointer "
    >
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'mb-1': !isToggled,
         /* 'transition-transform': true,
          'transform': true,
          'rotate-45': isToggled,
          '-translate-y-2': isToggled*/
        }"
      ></span>
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'my-1': !isToggled,
          'opacity-0': isToggled,
         /* 'transition-opacity': true*/
        }"
      ></span>
      <span
          :class="{
          'bg-white': true,
          'block': true,
          'w-8': true,
          'h-1': true,
          'mt-1': !isToggled,
          /*'transition-transform': true,
          'transform': true,
          '-rotate-45': isToggled,
          'translate-y-2': isToggled*/
        }"
      ></span>
    </div>
  </div>
<!--
  <div @click="handleToggle" :class="{ 'burger-close': isToggled }" class="burger-icon burger-icon-white menu__icon"><span class="burger-icon-top"></span><span class="burger-icon-mid"> </span><span class="burger-icon-bottom"></span></div>
-->
  <nav :class="{ 'opacity-0 pointer-events-none ': !isToggled }" class="fixed top-20 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]">

    <div class="p-[30px]">
      <ul class="font-chivo font-medium text-[16px] leading-[16px]">
        <li class="group menu-mobile-item py-[13px]" @click="handleClick(1)">
          <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
            <p>Home</p>
            <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>

</style>
<script setup>
import { ref } from "vue";
const isToggled = ref(false);
const handleToggle = () => {
  isToggled.value = !isToggled.value;
};
const isActive = ref({
  status: false,
  key: ""
});
const handleClick = (key) => {
  if (isActive.value.key === key) {
    isActive.value.status = false;
  } else {
    isActive.value.status = true;
    isActive.value.key = key;
  }
};
</script>
