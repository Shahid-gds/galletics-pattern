<template>
    <section class="sm:py-[5rem] py-[4rem]">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
            <div v-for="card in paginationCard" :key="card.image"
                class="card-hover card 2xl:w-[470px] xl:w-[400px] p-5 m-2 rounded-2xl">
                <router-link :to="`/${card.id.replace(' ', '-')}`">
                    <div class=" bg-[#150528] relative">
                        <img class="w-full" :src="card.image">
                        <div
                            class="absolute uppercase bottom-0 right-0 text-white bg-gradient-to-r from-[#6719c9] bg-[#9740ff] p-3 px-8 rounded-tl-xl rounded-br-2xl">
                            <div class="flex space-x-2">
                                <div class="font-[poppin-bold]">
                                    {{ card.button }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6">
                        <div class="pb-8 flex justify-between">
                            <div class="flex space-x-3 items-end ">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <div class="text-[#a58dc1]">By - Admin</div>
                            </div>
                            <div class="flex space-x-3 items-end">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                </div>
                                <div class="text-[#a58dc1]">Comments(0)</div>
                            </div>
                        </div>
                        <h1 class="text-white font-[poppin-bold] pb-4">{{ card.heading }}</h1>
                        <p class="text-[#705a8d]">
                            {{ card.desc }}
                        </p>
                    </div>
                </router-link>
            </div>
        </transition-group>
        <div class="flex justify-center mt-5">
            <nav>
                <ul class="pagination">
                    <li>
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-btn uppercase">&larr;
                            Prev</button>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="pageNumber">
                        <template v-if="pageNumber !== 1">
                            <span class="text-[#a897be]"> - </span>
                        </template>
                        <button @click="goToPage(pageNumber)"
                            :class="{ 'pageNumber': true, 'active': pageNumber === currentPage }">{{ pageNumber }}</button>
                    </li>
                    <li>
                        <button @click="nextPage" :disabled="currentPage === totalPages"
                            class="pagination-btn uppercase">Next &rarr;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
    },
    {
        id: 'blog-detail',
        image: import('@/assets/images/BlogImg1.svg').then((module) => module.default),
        heading: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt ',
        desc: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        button: '12 Dec, 2023'
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
            stars: await card.stars,
        }))
    );
});
// Define number of cards per page
const cardsPerPage = 9;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(cards.value.length / cardsPerPage));

const paginationCard = computed(() => {
    const startIndex = (currentPage.value - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.value.slice(startIndex, endIndex);
});

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function goToPage(pageNumber) {
    currentPage.value = pageNumber;
}

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

.pagination {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.pagination li {
    margin: 0 5px;
}

.pagination-btn {
    padding: 0.5rem 1rem;
    color: #ffff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pageNumber {
    padding: 0.5rem 1rem;
    color: #6b5c7d;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination .pageNumber.active {
    color: #9740ff;
    font-family: 'poppin-bold';
}

.pagination .pageNumber:hover {
    color: #9740ff;
    font-family: 'poppin-bold';
}

.pagination-btn:hover {
    color: #6719c9;
}

.pagination-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-btn.active {
    color: #9740ff;
}</style>
  