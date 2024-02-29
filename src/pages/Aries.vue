<template>
    <div>
     <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-[#2d2e30] opacity-80 z-50">
       <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
   </div>
     <section class="bg bg-gradient-to-t from-[#140428] bg-[#140428]">
       <div v-for="section in sections" :key="section.name" :class="section.class">
         <div class="section">
           <component :is="section.component" />
         </div>
       </div>
     </section>
    </div>
   </template>
   
   <script setup>
   import { ref, defineAsyncComponent } from 'vue';
   const isLoading = ref(true);
   
   const sections = [
     { name: 'HeroBg', class: 'HeroBg', component: defineAsyncComponent(() => import('../views/AriesHeroSection.vue').then(m => m.default), { lazy: true }) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);
   </script>
   
   
   <style scoped>
   .HeroBg{
    background: url("../assets/images/bgs/HoroscopeCardDetailBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
   }
  
     .bg{
         overflow-x: hidden;
     }
     @media(max-width:1366px){
      .HeroBg{
        background-image: url('../assets/images/bgs/HoroscopeCardDetailBg.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
     }
   </style>
   