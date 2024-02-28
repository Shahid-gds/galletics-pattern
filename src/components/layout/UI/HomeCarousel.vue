<template>
  <div class="wrapper">
    <div class="box">
      <carousel-3d :autoplay="true" :controls-visible="true" :controls-prev-html="'<'" :controls-next-html="'>'"
      :controls-width="30" :controls-height="30">
        <slide class="p-6" v-for="(slide, i) in slides" :index="i" :key="i">
          <img :src="slide.src">
          <div class="text-center pt-6">
            <h1 class="text-white font-[poppin-bold]">{{ slide.heading }}</h1>
            <p class="text-[#9740ff] font-[poppin-bold]">
              {{ slide.desc }}
            </p>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import Carousel3d from "@/carousel-3d/Carousel3d.vue";
import Slide from "@/carousel-3d/Slide.vue";
import img1 from '@/assets/images/HomeCarousel/img1.svg';

const slides = [
  {
    title: 'Slide 1',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
  },
  {
    title: 'Slide 2',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
  },
  {
    title: 'Slide 3',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
  },
  {
    title: 'Slide 4',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
  },
  {
    title: 'Slide 5',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
  },
  {
    title: 'Slide 6',
    heading:'Natal Chart Readings',
    desc: 'Lorem Ipsum is simply dummy text',
    src: img1
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
