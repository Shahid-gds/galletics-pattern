<template>
    <section class="">
      <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
        <div class="lg:leading-[3rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">YOUR</h1>
            <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">HOROSCOPE</h1>
          </div>
          <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
            <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades, and more! Your world becomes
              clear once you understand how the universe influences it.</p>
          </div>
        </div>
    <HoroscopesCards />
      </div>
    </section>
  </template>
<script setup>
import HoroscopesCards from '@/components/layout/UI/HoroscopesCards.vue';
</script>
  