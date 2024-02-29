<template>
  <section class="sm:pb-[15rem] pb-[5rem]">
    <div class="text-center container mx-auto">
      <div class="lg:leading-[4rem]">
        <div class="flex sm:space-x-4 space-x-2 justify-center">
          <h1
            class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">
            Yearly</h1>
          <h1
            class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#9740ff]">
            Zodiac Forecast</h1>
        </div>
        <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
          <p class="sm:text-[20px] text-[#5b486f]">Learn about astrology, zodiac signs, retrogrades, and more! Your world
            becomes clear once you understand how the universe influences it.</p>
        </div>
      </div>
    </div>
    <div class="pt-[3rem] pb-[5rem] overflow-hidden">
      <EventCarousel />
    </div>
  </section>
</template>
<script setup>
import EventCarousel from '@/components/layout/UI/EventCarousel.vue';
</script>