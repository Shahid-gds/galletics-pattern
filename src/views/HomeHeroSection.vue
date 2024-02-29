<template>
  <section class="">
    <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
      <div class="lg:leading-[4rem]">
        <div class="flex sm:space-x-4 space-x-2 justify-center">
          <h1
            class="font-[Graviton-Stencil] 2xl:text-[36px] lg:text-[30px] sm:text-[20px] text-[18px] uppercase text-[#9740ff]">
            Get your personal</h1>
          <h1
            class="font-[Graviton-Stencil] 2xl:text-[36px] lg:text-[30px] sm:text-[20px] text-[18px] uppercase text-[#ffffff]">
            divination</h1>
        </div>
        <div class="flex sm:space-x-4 space-x-2 justify-center">
          <h1
            class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">
            Everyting is</h1>
          <h1
            class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#9740ff]">
            Astrology</h1>
        </div>
        <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
          <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades and more! Your world
            becomes clear once you understand how the universe influences it.</p>
        </div>
      </div>
      <div class="flex justify-center space-x-4 py-6 px-6">
        <div
          class="hover-btn sm:p-4 p-2.5 py-4 bg-gradient-to-r from-[#6719c9] bg-[#9740ff] sm:w-[255px] cursor-pointer rounded-xl 2xl:text-[20px] sm:text-[18px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
          Explore Astrology</div>
        <div
          class="get-btn sm:p-4 p-2.5 py-4 bg-gradient-to-r from-[#ffffff] bg-[#c9c9c9] sm:w-[255px] cursor-pointer rounded-xl 2xl:text-[20px] sm:text-[18px] uppercase text-[#230944] font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#ffffff] hover:bg-[#c9c9c9] transition duration-150">
          Get Start Now!</div>
      </div>
    </div>
  <div class="pt-[3rem] overflow-hidden">
    <HomeCarousel />
  </div>
</section></template>
<script setup>
import HomeCarousel from '@/components/layout/UI/HomeCarousel.vue';
</script>