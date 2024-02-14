<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
        <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center">
            <div class="sm:flex sm:space-x-4 space-x-2 justify-center">
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Upcoming Celestial</h1>
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Events</h1>
            </div>
            <div class="container mx-auto 2xl:px-[25rem] lg:px-[10rem] px-6 text-center">
                <p class="text-[18px] text-[#9a85b5]">Learn about astrology, zodiac signs, retrogrades, and more! Your world
                    becomes clear once you understand how the universe influences it.</p>
            </div>
        </div>
        <div class="">
            <ReportCard />
        </div>
    </section>
</template>
<script setup>
import ReportCard from '@/components/layout/UI/EventsCards.vue';
</script>