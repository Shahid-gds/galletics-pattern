<template>
    <section class="sm:py-[5rem] py-[4rem]">
        <div class="lg:flex justify-center lg:space-x-8 px-6 text-left">
            <div class="pb-2">
                <div @click="setActiveCategory('Daily')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Daily' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class="font-[Graviton-Solid] text-white text-[20px]">Daily</div>
                            <div class="font-[Graviton-Solid] text-white text-[16px]">Horoscopes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Weekly')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Weekly' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class="font-[Graviton-Solid] text-white text-[20px]">Weekly</div>
                            <div class="font-[Graviton-Solid] text-white text-[16px]">Horoscopes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Monthly')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Monthly' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class="font-[Graviton-Solid] text-white text-[20px]">Monthly</div>
                            <div class="font-[Graviton-Solid] text-white text-[16px]">Horoscopes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-2">
                <div @click="setActiveCategory('Yearly')"
                    :class="{ 'active bg-gradient-to-r from-[#9740ff] bg-[#6824bc]  font-[Graviton-Solid]': activeCategory === 'Yearly' }"
                    class="lg:w-[270px] w-full bg-gradient-to-r from-[#381863] bg-[#14062b]  hover-btn hover:bg-gradient-to-r hover:from-[#9740ff] hover:bg-[#6824bc] hover:text-white p-3 rounded-xl uppercase font-[Graviton-Solid] text-[#9c9c9c] cursor-pointer">
                    <div class="flex items-center space-x-4 leading-5">
                        <div>
                            <img src="../../icons/cardsButtonIcon.svg" alt="">
                        </div>
                        <div>
                            <div class="font-[Graviton-Solid] text-white text-[20px]">Yearly</div>
                            <div class="font-[Graviton-Solid] text-white text-[16px]">Horoscopes</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in filteredCards" :key="card.image"
                class="card-hover card 2xl:w-[495px] xl:w-[620px] p-10 m-2 border-2 border-[#5d289d] rounded-2xl">
                <div class="flex items-center space-x-6">
                    <div>
                        <img class="" :src="card.image">
                    </div>
                    <div class="font-[poppin-bold] text-left">
                        <h1 class="text-[25px] text-white">{{ card.heading }}</h1>
                        <p class="text-[#8437e0]">{{ card.date }}</p>
                    </div>
                </div>
                <div>
                    <p class="text-left pt-6 text-[#c5ace2]">{{ card.paragraph }}</p>
                </div>
                <div class="text-left pt-6 z-40">
                    <router-link :to="`/${card.heading.replace(' ', '-')}`" class="text-white font-[poppin-bold]">{{ card.button }}</router-link>
                </div>
            </div>


        </transition-group>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        category: 'Daily', image: import('../../icons/ariesIcon.svg').then((module) => module.default),
        heading: 'Aries', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/taurus.svg').then((module) => module.default),
        heading: 'Taurus', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/gemini.svg').then((module) => module.default),
        heading: 'Gemini', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/cancer.svg').then((module) => module.default),
        heading: 'Cancer', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/leo.svg').then((module) => module.default),
        heading: 'Leo', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/virgo.svg').then((module) => module.default),
        heading: 'Virgo', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/libra.svg').then((module) => module.default),
        heading: 'Libra', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/scorpio.svg').then((module) => module.default),
        heading: 'Scorpio', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/sagittarius.svg').then((module) => module.default),
        heading: 'Sagittarius', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/capricorn.svg').then((module) => module.default),
        heading: 'Capricorn', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/aquarius.svg').then((module) => module.default),
        heading: 'Aquarius', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Daily', image: import('../../icons/pisces.svg').then((module) => module.default),
        heading: 'Pisces', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },

    // Weekly Cards
    {
        category: 'Weekly', image: import('../../icons/ariesIcon.svg').then((module) => module.default),
        heading: 'Aries', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Weekly', image: import('../../icons/leo.svg').then((module) => module.default),
        heading: 'Leo', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Weekly', image: import('../../icons/virgo.svg').then((module) => module.default),
        heading: 'Virgo', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },

    // Monthly Cards
    {
        category: 'Monthly', image: import('../../icons/capricorn.svg').then((module) => module.default),
        heading: 'Capricorn', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Monthly', image: import('../../icons/aquarius.svg').then((module) => module.default),
        heading: 'Aquarius', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Monthly', image: import('../../icons/pisces.svg').then((module) => module.default),
        heading: 'Pisces', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },

    // Yearly Cards
    {
        category: 'Yearly', image: import('../../icons/virgo.svg').then((module) => module.default),
        heading: 'Virgo', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Yearly', image: import('../../icons/libra.svg').then((module) => module.default),
        heading: 'Libra', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
    {
        category: 'Yearly', image: import('../../icons/scorpio.svg').then((module) => module.default),
        heading: 'Scorpio', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        button: 'Lear More....'
    },
]);


const activeCategory = ref('Daily');

const setActiveCategory = (category) => {
    activeCategory.value = category;
};

const filteredCards = computed(() => cards.value.filter((card) => card.category === activeCategory.value));
const filteredwebCards = computed(() => webcards.value.filter((card) => card.category === activeCategory.value));

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});
</script>
  
<style scoped>
.card {
    background-color: rgba(4, 7, 31, 0.5);
    transition: all 0.3s ease-in-out;
}

.card:hover {
    background-color: rgba(40, 47, 94, 0.5);
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

/*.card-hover {
    transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    display: inline-block;
    outline: 0;
    position: relative;
    overflow: hidden;
  }
  .card-hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(105%, 105%);
    background-color: rgba(26, 14, 64, 0.877);
  }
  .card-hover:hover:before {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }*/</style>
  