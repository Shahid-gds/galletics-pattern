<template>
    <section class="sm:pb-[8rem] pb-[5rem]">

        <div class="lg:flex px-6 text-left items-center pt-[2rem] relative">
            <div class="w-full">
                <img class="lg:w-[40%] w-[50%] lg:absolute top-0 left-[6rem] mr-auto ml-auto" src="../assets/images/IntroAstrologyImg3.svg" alt="">
            </div>
            <div class="w-full 2xl:pr-[20rem] sm:text-left text-center">
                <h1 class="sm:text-[22px] text-[20px] text-white italic pb-6">Lorem Ipsum is simply dummy text </h1>
                <p class="text-[#9a84b4] pb-6 sm:text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,</p>
                <p class="text-[#9a84b4] pb-6 sm:text-[18px]">when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, </p>
                <p class="sm:text-[22px] text-[20px] italic text-[#c5ace2]">Remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                   <div class="pt-[2rem]">
                    <div
                    class="get-btn lg:p-3 p-2 py-4 bg-gradient-to-r from-[#ffffff] bg-[#c9c9c9] px-[35px] text-center cursor-pointer rounded-xl lg:text-[20px] uppercase text-[#230944] font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#ffffff] hover:bg-[#c9c9c9] transition duration-150">
                    Schedule your session</div>
                   </div>
            </div>
        </div>
    </section>
    <section class="sm:pb-[10rem] pb-[5rem]">
        <div class="container mx-auto">
          <div class="lg:leading-[3rem]">
            <div class="flex sm:space-x-4 space-x-2 justify-center">
                <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">E-Books</h1>
              <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">&</h1>
              <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">Quizzes</h1>
            </div>
            <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4 text-center">
              <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades, and more! Your world becomes
                clear once you understand how the universe influences it.</p>
            </div>
          </div>
        </div>
        <div class="pt-[1rem]">
          <EventCarousel />
        </div>
      </section>
</template>

<script setup>
import EventCarousel from '../components/layout/UI/EventCarousel.vue';
</script>