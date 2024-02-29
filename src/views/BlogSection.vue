<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
        <div>
            <div class="flex space-x-4 justify-center">
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Latest</h1>
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Blog</h1>
            </div>
            <div class="container mx-auto 2xl:px-[25rem] sm:px-[15rem] px-6 text-center">
                <p class="sm:text-[18px] text-[#9a85b5]">Stay updated with the celestial currents as we bring you the latest insights and trends from the astrological realm.</p>
            </div>
        </div>
        <div class="">
            <BlogCarousel />
        </div>
    </section>
</template>

<script setup>
import BlogCarousel from '@/components/layout/UI/BlogCarousel.vue';
</script>