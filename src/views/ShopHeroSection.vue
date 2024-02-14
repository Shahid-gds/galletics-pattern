<template>
    <section class="">
      <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
        <div class="lg:leading-[4rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1 class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">Shop by</h1>
            <h1 class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#9740ff]">categories</h1>
          </div>
          <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
            <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades, and more! Your world becomes
              clear once you understand how the universe influences it.</p>
          </div>
        </div>
       
      </div>
      <div class="pt-[3rem] pb-[5rem] overflow-hidden">
       <ShopPaginationCard />
      </div>
    </section>
  </template>
  <script setup>
 import ShopPaginationCard from '../components/layout/UI/ShopPaginationCard.vue'
  </script>

<style scoped>

</style>
  