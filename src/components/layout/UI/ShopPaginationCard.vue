<template>
    <section class="sm:py-[5rem] py-[4rem]">
        <div class="lg:flex justify-center lg:space-x-8 px-6 text-left">
            <div class="pb-2">
                <div @click="setActiveCategory('Accessories')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Accessories' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Accessories</div>
                            <div class=" text-[white] text-[16px]">(10+)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Astrology')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Astrology' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Astrology</div>
                            <div class=" text-[white] text-[16px]">(21+)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Candles')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Candles' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Candles</div>
                            <div class=" text-[white] text-[16px]">(45+)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Crystals')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Crystals' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Crystals</div>
                            <div class=" text-[white] text-[16px]">(100+)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Mystical')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Mystical' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Mystical</div>
                            <div class=" text-[white] text-[16px]">(50+)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Tarot')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Tarot' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class=" text-white text-[20px]">Tarot</div>
                            <div class=" text-[white] text-[16px]">(50+)</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in filteredCards" :key="card.image"
                class="card-hover card 2xl:w-[470px] xl:w-[450px] p-5 m-2 rounded-2xl">
                <div class="">
                    <div class="h-[377px] bg-[#150528] p-28 border-2 rounded-2xl border-[#3a1565] flex justify-center relative">
                        <img class="w-[200px]" :src="card.image">
                        <div class="absolute cursor-pointer uppercase bottom-0 right-0 text-white bg-gradient-to-r from-[#6719c9] bg-[#9740ff] p-3 px-8 rounded-tl-xl rounded-br-2xl">
                           <div class="flex space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>                              
                               </div>
                            <div class="font-[poppin-bold]">
                                {{card.cardButton}}
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
              
                
            </div>
        </transition-group>
    
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        category: 'Accessories', image: import('../../../assets/images/OrangeCalcite.svg').then((module) => module.default),
        heading: 'Orange Calcite', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$47.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/GreenSardonyx.svg').then((module) => module.default),
        heading: 'Orange Calcite', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$55.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/RedJasper.svg').then((module) => module.default),
        heading: 'Red Jasper', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$38.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/PalmistryBook.svg').then((module) => module.default),
        heading: 'Palmistry Book', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$340.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/AstrologyBook.svg').then((module) => module.default),
        heading: 'Astrology Book', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$267.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/TarotBook.svg').then((module) => module.default),
        heading: 'Tarot Book', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$238.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/CandleJasmine.svg').then((module) => module.default),
        heading: 'Candle Jasmine', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$267.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/TarotCards.svg').then((module) => module.default),
        heading: 'Tarot Book', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$40.00',
        cardButton:'Add Cart'
    },
    {
        category: 'Accessories', image: import('../../../assets/images/TarotCardGold.svg').then((module) => module.default),
        heading: 'Tarot Card Gold', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$238.00',
        cardButton:'Add Cart'
    },


    // Astrology Cards
    {
        category: 'Astrology',  image: import('../../../assets/images/TarotCardGold.svg').then((module) => module.default),
        heading: 'Tarot Card Gold', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$238.00',
        cardButton:'Add Cart'
    },


    // Candles Cards
    {
        category: 'Candles',  image: import('../../../assets/images/TarotCardGold.svg').then((module) => module.default),
        heading: 'Tarot Card Gold', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$238.00',
        cardButton:'Add Cart'
    },


    // Crystals Cards
    {
        category: 'Crystals',  image: import('../../../assets/images/TarotCardGold.svg').then((module) => module.default),
        heading: 'Tarot Card Gold', stars: import('../../icons/star.svg').then((module) => module.default),
        amount: '$238.00',
        cardButton:'Add Cart'
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
  