<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
        <div class="2xl:pt-[35rem] lg:pt-[18rem] pt-[8rem] text-center">
            <div class="sm:flex sm:space-x-4 space-x-2 justify-center">
                <div class="flex justify-center space-x-4">
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Learning</h1>
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Hub</h1>
                </div>
                <div class="flex justify-center space-x-4">
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">&</h1>
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Resources</h1>
                </div>
            </div>
            <div class="container mx-auto 2xl:px-[25rem] lg:px-[10rem] px-6 text-center">
                <p class="text-[18px] text-[#ffff]">Learn about astrology, zodiac signs, retrogrades, and more! Your world
                    becomes clear once you understand how the universe influences it.</p>
            </div>
        </div>
        <div class="pt-[3rem]">
            <ReportCard />
        </div>
    </section>
</template>
<script setup>
import ReportCard from '@/components/layout/UI/LearningResourcesCard.vue';
</script>