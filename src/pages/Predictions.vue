<template>
    <div>
     <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-[#1e0d34] opacity-80 z-50">
       <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
   </div>
     <section :class="{ 'bg-opacity-100': !isLoading }" class="bg bg-gradient-to-t from-[#3f256c] bg-[#1e0d34] transition-opacity duration-500">
       <div v-for="section in sections" :key="section.name" :class="section.class">
         <div class="section">
           <component :is="section.component" />
         </div>
       </div>
     </section>
      <!-- Back to Top Button -->
    <button v-if="showBackToTop" @click="scrollToTop" class="w-[50px] h-[50px] fixed bottom-4 right-4 bg-gradient-to-t from-[#8c38f3] bg-[#7526d8] hover:bg-blue-700 transition-all ease-in duration-300 text-white font-bold py-3 px-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>      
    </button>
    </div>
   </template>
   
   <script setup>
     import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue';
   const isLoading = ref(true);
   
   const sections = [
     { name: 'PredictionsHeroBg', class: 'PredictionsHeroBg', component: defineAsyncComponent(() => import('../views/PredictionsHeroSection.vue').then(m => m.default), { lazy: true }) },
     { name: 'PredictionsHistoricalBg', class: 'PredictionsHistoricalBg', component: defineAsyncComponent(() => import('../views/PredictionsHistoricalSection.vue').then(m => m.default), { lazy: true }) },
     { name: 'BlogBg', class: 'BlogBg', component: defineAsyncComponent(() => import('../views/BlogSection.vue').then(m => m.default), { lazy: true }) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);

     //Back to Top Button
     const showBackToTop = ref(false);
    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 100;
    };
    
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
   </script>
   
   
   <style scoped>
  .PredictionsHeroBg{
    background: url("@/assets/images/bgs/PredictionsHeroBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
   }
   .PredictionsHistoricalBg{
    background: url("@/assets/images/bgs/PredictionsHistoricalBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
   }
   .ChooseBg{
    background: url("@/assets/images/bgs/ChooseBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
   }
   .BlogBg{
    background: url("@/assets/images/bgs/BlogBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
   }
     .bg{
         overflow-x: hidden;
     }
     @media(max-width:1366px){
      .PredictionsHeroBg{
        background: url("@/assets/images/bgs/PredictionsHeroBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
        background-size: cover;
       }
       .PredictionsHistoricalBg{
        background: url("@/assets/images/bgs/PredictionsHistoricalBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
        background-size: cover;
       }
       .ChooseBg{
        background: url("@/assets/images/bgs/ChooseBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
        background-size: cover;
       }
       .BlogBg{
        background: url("@/assets/images/bgs/BlogBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
        background-size: cover;
       }
    }
   </style>