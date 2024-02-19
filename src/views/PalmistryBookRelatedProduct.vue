<template>
    <section class="sm:py-[5rem] py-[4rem]">
        <div class="lg:leading-[3rem] lg:pt-[8rem]">
            <div class="flex sm:space-x-4 space-x-2 justify-center">
                <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">Related</h1>
                <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">Products</h1>
            </div>
            <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
                <p class="sm:text-[20px] text-[#8874a3] lg:px-[10rem] text-center">Learn about astrology, zodiac signs, retrogrades, and more! Your world
                    becomes clear once you understand how the universe influences it.</p>
            </div>
        </div>
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in cards" :key="card.image"
                class="card-hover card 2xl:w-[470px] xl:w-[450px] p-5 m-2 rounded-2xl">

                <div class="h-[377px] bg-[#150528] p-28 border-2 rounded-2xl border-[#3a1565] flex justify-center relative">
                    <img class="w-[200px]" :src="card.image">
                    <div
                        class="absolute cursor-pointer uppercase bottom-0 right-0 text-white bg-gradient-to-r from-[#6719c9] bg-[#9740ff] p-3 px-8 rounded-tl-xl rounded-br-2xl">
                        <div class="flex space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <div class="font-[poppin-bold]">
                                {{ card.cardButton }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="font-[poppin-bold] text-left pt-[2rem]">
                    <h1 class="text-[25px] text-white">{{ card.heading }}</h1>
                    <div class="flex items-center justify-between pt-6">
                        <div class="flex">
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                        </div>
                        <div class="">
                            <div class="text-[#ca9dff] font-[poppin-bold] text-xl">{{ card.amount }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </transition-group>

    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        image: import('../assets/images/PalmistryBook.svg').then((module) => module.default),
        heading: 'Palmistry Book', stars: import('../components/icons/star.svg').then((module) => module.default),
        amount: '$47.00',
        cardButton: 'Shop Now',
    },
    {
        image: import('../assets/images/AstrologyBook.svg').then((module) => module.default),
        heading: 'Astrology Book', stars: import('../components/icons/star.svg').then((module) => module.default),
        amount: '$55.00',
        cardButton: 'Shop Now'
    },

    {
        image: import('../assets/images/TarotBook.svg').then((module) => module.default),
        heading: 'Tarot Book', stars: import('../components/icons/star.svg').then((module) => module.default),
        amount: '$38.00',
        cardButton: 'Shop Now'
    },

]);


const activeCategory = ref('Accessories');

const setActiveCategory = (category) => {
    activeCategory.value = category;
};

const filteredCards = computed(() => cards.value.filter((card) => card.category === activeCategory.value));


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
            stars: await card.stars,
        }))
    );
});

</script>
  
<style scoped>
.card {
    background: url("@/assets/images/PaginationCard.svg");
    background-repeat: no-repeat;
}


.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
</style>
  