<template>
    <div class="mt-[5rem]">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="700" :clickable="false">
            <slide class="p-4" v-for="(slide, i) in slides" :index="i" :key="i">
                <div class="w-[630px] rounded-2xl p-10" :style="{ backgroundColor: slide.backgroundColor }">
                    <div class="font-[Jost-Bold] text-2xl py-3">
                        {{ slide.heading }}
                    </div>
                    <div class="font-bold">
                        {{ slide.desc }}
                    </div>
                    <button class="w-[44px] h-[44px] bg-white rounded-full p-2.5 mt-[1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

            </slide>
        </carousel-3d>
    </div>
</template>
  
<script>
import Carousel3d from "@/carousel-3d/WelcomeCarousel3d.vue";
import Slide from "@/carousel-3d/WelcomeCarouselSlide.vue";


const slides = [
    {
        title: 'Slide 1',
        heading: 'Skincare & Topicals',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        backgroundColor: '#fbf4e2'
    },
    {
        title: 'Slide 2',
        heading: 'Edibles & Drinks',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        backgroundColor: '#e2f9f6'
    },
    {
        title: 'Slide 3',
        heading: 'A Weed Community',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        backgroundColor: '#fbf4e2'
    },
    {
        title: 'Slide 4',
        heading: 'A Weed Community',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        backgroundColor: '#e2f9f6'
    },
    {
        title: 'Slide 5',
        heading: 'Skincare & Topicals',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        backgroundColor: '#fbf4e2'
    },

]

export default {
    name: 'App',
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            slides: slides,
            slideCount: 10
        }
    },
    methods: {
        onSlideChanged(index) {
            console.log('onSlideChanged Callback Triggered', 'Slide Index ' + index)
        },
        onLastSlide(index) {
            console.log('onLastSlide Callback Triggered', 'Slide Index ' + index)
        },
        onMainSlideClick() {
            console.log('onMainSlideClick Callback Triggered')
        },
        onAfterSlideChanged(index) {
            console.log('@after-slide-changed Callback Triggered', 'Slide Index ' + index)
        },
        onSlideChange(index) {
            console.log('@before-slide-change Callback Triggered', 'Slide Index ' + index)
        },
        addSlide() {
            this.slideCount++
        },
        removeSlide() {
            if (this.slideCount > 1) {
                this.slideCount--
            }
        },
    }
}
</script>
  
<style></style>