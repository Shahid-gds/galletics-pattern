<template>
    <div class="">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="370" :clickable="false">
            <slide  class="p-4 h-[554px]" v-for="(slide, i) in slides" :index="i" :key="i">
               <div class="relative">
                <img :src="slide.src">
                <div class="absolute bottom-0 right-0 text-white bg-gradient-to-r from-[#6719c9] bg-[#9740ff] p-3 px-8 rounded-tl-xl rounded-br-2xl">{{slide.button}}</div>
               </div>
                <div class="pt-6">
                    <div class="pb-8 flex justify-between">
                        <div class="flex space-x-3 items-end ">
                            <div class="">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                             </svg>
                            </div>
                            <div class="text-[#a58dc1]">By - Admin</div>                          
                         </div>
                         <div class="flex space-x-3 items-end">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                  </svg>                                  
                            </div>
                            <div class="text-[#a58dc1]">Comments(0)</div>    
                         </div>
                    </div>
                  <h1 class="text-white font-[poppin-bold] pb-4">{{ slide.heading }}</h1>
                  <p class="text-[#705a8d]">
                    {{ slide.desc }}
                  </p>
                </div>
              </slide>
        </carousel-3d>
      </div>
  </template>
  
  <script>
  import Carousel3d from "@/carousel-3d/BlogCarousel3d.vue";
  import Slide from "@/carousel-3d/BlogSlide.vue";
  import img1 from '@/assets/images/BlogImg1.svg';
  import img2 from '@/assets/images/BlogImg2.svg';
  import img3 from '@/assets/images/BlogImg3.svg';
  
  const slides = [
    {
      title: 'Slide 1',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img1,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 2',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img2,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 3',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img3,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 4',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img1,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 5',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img2,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 6',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img3,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 7',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img2,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 8',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img3,
      button: '12 Dec, 2023'
    },
    {
      title: 'Slide 9',
      heading:'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
      desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
      src: img1,
      button: '12 Dec, 2023'
    },
 
 
  
  ]
  
  export default {
    name: 'App',
    components: {
      Carousel3d,
      Slide
    },
    data () {
      return {
        slides: slides,
        slideCount: 10
      }
    },
    methods: {
      onSlideChanged (index) {
        console.log('onSlideChanged Callback Triggered', 'Slide Index ' + index)
      },
      onLastSlide (index) {
        console.log('onLastSlide Callback Triggered', 'Slide Index ' + index)
      },
      onMainSlideClick () {
        console.log('onMainSlideClick Callback Triggered')
      },
      onAfterSlideChanged (index) {
        console.log('@after-slide-changed Callback Triggered', 'Slide Index ' + index)
      },
      onSlideChange (index) {
        console.log('@before-slide-change Callback Triggered', 'Slide Index ' + index)
      },
      addSlide () {
        this.slideCount++
      },
      removeSlide () {
        if (this.slideCount > 1) {
          this.slideCount--
        }
      },
    }
  }
  </script>
  
  <style>
  
  </style>
  