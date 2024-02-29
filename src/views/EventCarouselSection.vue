<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
      <div class="container mx-auto">
        <div class="lg:leading-[3rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">Events</h1>
            <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">Archive</h1>
          </div>
          <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4 text-center">
            <p class="sm:text-[20px] text-white">Come and read about all the past events that shaked the horoscope world!</p>
          </div>
        </div>
      </div>
      <div>
        <EventCarousel />
      </div>
    </section>
  </template>
<script setup>
import EventCarousel from '../components/layout/UI/EventCarousel.vue';
</script>
  