<template>
    <section class="sm:py-28 sm:pb-[15rem] pb-[5rem]">
        <div>
            <div class="flex sm:space-x-4 space-x-2 justify-center">
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Compatibility</h1>
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Reports</h1>
            </div>
            <div class="container mx-auto 2xl:px-[25rem] lg:px-[10rem] px-6 text-center">
                <p class="text-[18px] text-[#9a85b5]">Gain insight into your relationship's cosmic dynamics. Discover where you align and where you may need to compromise. Let the stars guide you to deeper love and understanding.</p>
            </div>
        </div>
        <div class="">
            <ReportCard />
        </div>
        <div class="text-center pt-[3rem]">
           
            <div class="flex justify-center space-x-4 py-6 px-6">
                <div
                  class="hover-btn sm:p-4 p-2.5 py-4 bg-gradient-to-r from-[#6719c9] bg-[#9740ff] sm:w-[255px] cursor-pointer rounded-xl 2xl:text-[20px] sm:text-[18px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
                  Explore Astrology</div>
                <div
                  class="get-btn sm:p-4 p-2.5 py-4 bg-gradient-to-r from-[#ffffff] bg-[#c9c9c9] sm:w-[255px] cursor-pointer rounded-xl 2xl:text-[20px] sm:text-[18px] uppercase text-[#230944] font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#ffffff] hover:bg-[#c9c9c9] transition duration-150">
                  Get Start Now!</div>
              </div>
        </div>
    </section>
</template>
<script setup>
import ReportCard from '@/components/layout/UI/ReportCard.vue';
</script>