<template>
    <section class="">
      <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
        <div class="lg:leading-[4rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1
              class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">
              Shop Now</h1>
          </div>
        </div>
        <transition-group name="nested" tag="div" class="flex flex-wrap space-x-9 justify-center sm:mt-[3rem] mt-[1.5rem]">
          <div v-for="card in cards"
            class="w-[550px] bg-gradient-to-t from-[#2e1152] bg-[#150528] p-16 border-2 rounded-2xl border-[#3a1565]">
            <div class="mt-[4rem]">
              <div class="flex justify-center">
                <div>
                  <img class="w-[100px]" :src="card.image">
                </div>
              </div>
              <div class="flex space-x-7 items-center justify-center mt-[6rem]">
                <div class="w-[15%]">
                  <img :src="card.imgOne">
                </div>
                <div class="w-[15%]">
                  <img :src="card.imgTwo">
                </div>
                <div class="w-[15%]">
                  <img :src="card.imgThree">
                </div>
              </div>
            </div>
          </div>
          <div class="w-[700px] text-left" v-for="detail in cardDetails">
            <div class="flex items-start">
              <div class="">
                <img class="w-[20px]" :src="detail.stars">
              </div>
              <div class="">
                <img class="w-[20px]" :src="detail.stars">
              </div>
              <div class="">
                <img class="w-[20px]" :src="detail.stars">
              </div>
              <div class="">
                <img class="w-[20px]" :src="detail.stars">
              </div>
              <div class="">
                <img class="w-[20px]" :src="detail.stars">
              </div>
            </div>
            <div class="text-white font-[poppin-bold] text-[25px] py-3">
              <h1>{{ detail.heading }}</h1>
            </div>
            <div class="text-white font-[poppin-bold] text-[18px] pb-3">
              <h1>{{ detail.headingTwo }}</h1>
            </div>
            <div class="text-[#c5ace2] font-[poppin-bold] text-[16px] pb-3">
              <h1>{{ detail.paragraph }}</h1>
            </div>
            <div class="mt-[3rem] flex items-center space-x-5">
              <div class="">
                <div class="text-[#ca9dff] font-[poppin-bold] text-[30px]">{{ detail.amount }}</div>
              </div>
              <div
                class="cursor-pointer uppercase text-white bg-gradient-to-r from-[#6719c9] bg-[#9740ff] p-3 px-8 rounded-xl">
                <div class="flex space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                  <div class="font-[poppin-bold]">
                    {{ detail.cardButton }}
                  </div>
                </div>
              </div>
              
            </div>
            <div class="pt-[3rem]">
              <div class="flex space-x-8 border-b-2 border-[#5916a8]">
                <div :class="{ 'text-white border-b-[6px] border-[#ac69fc] font-[poppin-bold]': activeParagraph === 'desc', 'text-[#8e82a7]': activeParagraph !== 'desc', 'cursor-pointer': activeParagraph !== 'desc' }" class="text-[white] text-xl cursor-pointer p-2 px-6" @click="toggleParagraph('desc')">
                    {{ detail.desc }}
                </div>
                <div :class="{ 'text-white border-b-[6px] border-[#ac69fc] font-[poppin-bold]': activeParagraph === 'review', 'text-[#8e82a7]': activeParagraph !== 'review', 'cursor-pointer': activeParagraph !== 'desc' }" class="text-[white] text-xl cursor-pointer p-2 px-6" @click="toggleParagraph('review')">
                  {{ detail.review }}
                </div>
              </div>
               <!-- Paragraph display based on activeParagraph -->
               <div class="pt-3" v-if="activeParagraph === 'desc'">
                <p class="text-[#c5ace2]  text-[16px]">{{ detail.descParagraph }}</p>
              </div>
              <div class="pt-3" v-else-if="activeParagraph === 'review'">
                <p class="text-[#c5ace2]  text-[16px]">{{ detail.reviewParagraph }}</p>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  
  
  const activeParagraph = ref('desc');
  
  const toggleParagraph = (para) => {
    activeParagraph.value = para;
  };
  const cards = ref([
    {
      image: import('../assets/images/TarotBook.svg').then((module) => module.default),
      imgOne: import('../assets/images/AstrologyBook.svg').then((module) => module.default),
      imgTwo: import('../assets/images/PalmistryBook.svg').then((module) => module.default),
      imgThree: import('../assets/images/TarotBook.svg').then((module) => module.default),
    },
  
  
  ]);
  const cardDetails = ref([
    {
      heading: 'Tarot Book',
      headingTwo: 'Lorem Ipsum is simply dummy text',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
      stars: import('../components/icons/star.svg').then((module) => module.default),
      amount: '$47.00',
      cardButton: 'Add to Cart',
      desc: 'Description',
      review: 'Reviews',
      descParagraph: 'Description Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
      reviewParagraph: 'Review ips Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,'
    },
  ]);
  onMounted(async () => {
    cards.value = await Promise.all(
      cards.value.map(async (card) => ({
        ...card,
        image: await card.image,
      }))
    );
    cards.value = await Promise.all(
      cards.value.map(async (card) => ({
        ...card,
        imgOne: await card.imgOne,
      }))
    );
    cards.value = await Promise.all(
      cards.value.map(async (card) => ({
        ...card,
        imgTwo: await card.imgTwo,
      }))
    );
    cards.value = await Promise.all(
      cards.value.map(async (card) => ({
        ...card,
        imgThree: await card.imgThree,
      }))
    );
    cardDetails.value = await Promise.all(
      cardDetails.value.map(async (detail) => ({
        ...detail,
        stars: await detail.stars,
      }))
    );
  });
  
  </script>
  <style scoped></style>