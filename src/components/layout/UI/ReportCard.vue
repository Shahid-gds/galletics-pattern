<template>
    <section class="">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in cards" :key="card.image"
                class="card-hover card 2xl:w-[583px] xl:w-[400px] p-4 m-2 border-2 border-[#5d289d] rounded-2xl">
                <div class="flex items-center space-x-6">
                    <div class="p-4 bg-[#9740ff] rounded-2xl">
                        <img class="" :src="card.image">
                    </div>
                    <div class="w-full">
                        <h1 class="text-[#ffffff] font-[poppin-bold]">
                            {{ card.heading }}
                        </h1>
                        <h2 class="text-[#8437e1] py-2">
                            {{ card.date }}
                        </h2>
                        <p class="text-[#ac95c7] pt-2">
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
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
    },
    {
        image: import('../../../assets/images/Chart1.svg').then((module) => module.default),
        heading: 'Lorem Ipsum is simply', date: '24 January, 2024', paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Lear More....'
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
  }*/
</style>
  