<template>
    <section class="">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in cards" :key="card.image"
                class="card-hover card 2xl:w-[583px] xl:w-[400px] 2xl:p-10 p-4 m-2 border-2 border-[#5d289d] rounded-2xl">
                <div class="flex items-center space-x-6">
                    <div class="rounded-2xl">
                        <img class="" :src="card.image">
                    </div>
                    <div class="w-full">
                        <h1 class="text-[#ffffff] font-[poppin-bold] 2xl:text-[30px] text-[20px]">
                            {{ card.heading }}
                        </h1>
                        <p class="text-[#ac95c7] pt-1">
                            {{ card.paragraph }}
                        </p>
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
        image: import('../../../assets/images/LearningResourcesImg1.svg').then((module) => module.default),
        heading: 'Zodiac Signs', paragraph: 'Learning more about your zodiac sign can shed light on your personality, love life, and more.',
    },
    {
        image: import('../../../assets/images/LearningResourcesImg2.svg').then((module) => module.default),
        heading: 'Birth Chart', paragraph: ' Find out how the planets positions at your birth influence your entire life and personality.',
    },
    {
        image: import('../../../assets/images/LearningResourcesImg3.svg').then((module) => module.default),
        heading: 'Chinese Zodiac', paragraph: 'Based on a 12-year cycle, explore how your Chinese zodiac animal sign reflects your traits, challenges, and destiny.',
    },


]);


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
    background-color: rgba(40, 47, 94, 0.5);
    transition: all 0.3s ease-in-out;
}

.card:hover {
    background-color: rgba(4, 7, 31, 0.5);
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

@media(max-width:1600px){
    .card{
        width: 500px;
    }
  }
</style>