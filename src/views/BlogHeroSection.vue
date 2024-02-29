<template>
    <section class="">
      <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
        <div class="lg:leading-[4rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1 class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">Blog</h1>
          </div>
          <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
            <p class="sm:text-[20px] text-white">Explore our astrology blog posts to go deeper into the mystical meanings behind the stars.</p>
          </div>
        </div>
      </div>
      <div class="pt-[3rem] pb-[5rem] overflow-hidden">
       <BlogPaginationCards />
      </div>
    </section>
  </template>
  <script setup>
 import BlogPaginationCards from '@/components/layout/UI/BlogPaginationCards.vue';
  </script>

<style scoped>

</style>
  