<template>
  <section class="">
    <div class="container mx-auto">
      <div class="lg:leading-[3rem]">
        <div class="flex sm:space-x-4 space-x-2 justify-center">
          <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">E-Books</h1>
          <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">&</h1>
          <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">Quizzes</h1>
        </div>
        <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4 text-center">
          <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades, and more! Your world
            becomes
            clear once you understand how the universe influences it.</p>
        </div>
      </div>
    </div>
    <div class="pt-[1rem]">
      <EventCarousel />
    </div>
  </section>
  <section class="sm:pb-[10rem] pb-[5rem]">
    <div class="lg:flex flex-row-reverse px-6 text-left items-center pt-[2rem] relative">
      <div class="w-full">
        <img class="lg:w-[40%] w-[50%] lg:absolute top-0 right-[10rem] mr-auto ml-auto"
          src="../assets/images/AboutUsEbookImg.svg" alt="">
      </div>
      <div class="w-full 2xl:pl-[15rem] sm:text-left text-center">
        <div class="sm:flex sm:space-x-4 space-x-2 pb-4">
          <h1 class="font-[Graviton-Solid] sm:text-[30px] text-[20px] uppercase text-[#ffffff]">TRANSITS &</h1>
          <h1 class="font-[Graviton-Solid] sm:text-[30px] text-[20px] uppercase text-[#9740ff]">FORECASTING</h1>
        </div>
        <h1 class="sm:text-[22px] text-[20px] text-white italic pb-6">Track the planets' current motion for astrological
          timing insights.</h1>
        <p class="text-[#9a84b4] pb-6 sm:text-[18px]">Transits are the planetary positions moving through the sky right
          now. As they aspect your birth chart planets and angles, they spark events and circumstances reflecting those
          cosmic energies. For example, when transiting Jupiter trines your natal Mars, you'll feel fired up and
          confident to pursue new ambitions.</p>
        <p class="text-[#9a84b4] pb-6 sm:text-[18px]">Notice where the transiting planets are currently traveling
          through your chart's houses. If Saturn is transiting your 7th house of relationships, you may experience some
          tests, delays, or restructuring in your partnerships. </p>
        <p class="sm:text-[22px] text-[20px] italic text-[#c5ace2]">But hang in there - that'll help build solid
          foundations! Master the rhythms of these passing cosmic tides to navigate life's unfolding cycles with more
          wisdom and flow.</p>
        <div class="pt-[2rem]">
          <div
            class="get-btn lg:p-3 p-2 py-4 bg-gradient-to-r from-[#ffffff] bg-[#c9c9c9] px-[35px] text-center cursor-pointer rounded-xl lg:text-[20px] uppercase text-[#230944] font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#ffffff] hover:bg-[#c9c9c9] transition duration-150">
            Schedule your session</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCarousel from '../components/layout/UI/EventCarousel.vue';
</script>