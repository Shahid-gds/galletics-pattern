<template>
    <section class="sm:pb-[10rem]">
        <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
            <div class="lg:leading-[4rem]">
                <div class="flex sm:space-x-4 space-x-2 justify-center">
                    <h1
                        class="font-[Graviton-Solid] 2xl:text-[65px] lg:text-[50px] sm:text-[30px] text-[25px] uppercase text-[#ffffff]">
                        Blog</h1>
                </div>
                <div class="2xl:px-[20rem] px-6 leading-[2rem] pt-4">
                    <p class="sm:text-[20px] text-white">Learn about astrology, zodiac signs, retrogrades, and more! Your
                        world becomes
                        clear once you understand how the universe influences it.</p>
                </div>
            </div>
            <transition-group name="nested" tag="div" class="sm:mt-[10rem] mt-[1.5rem] px-6">
                <div class="text-left pb-6" v-for="detail in cardDetails">
                    <div class="text-white font-[poppin-bold] text-[20px] pb-3">
                        <h1>{{ detail.headingTwo }}</h1>
                    </div>
                    <div class="text-[#c5ace2] font-[poppin-bold] text-[16px] pb-3">
                        <h1>{{ detail.paragraph }}</h1>
                    </div>
                </div>
                <div v-for="card in cards"
                    class="w-full bg-gradient-to-t from-[#2e1152] bg-[#150528] sm:p-4 p-2 border-2 sm:rounded-[30px] rounded-2xl border-[#3a1565]">
                    <div class="">
                        <div class="">
                            <img class="w-full" :src="card.image">
                        </div>
                    </div>
                </div>
                <div class="text-left pt-8" v-for="detail in cardDetails">
                    <div class="sm:flex justify-between">
                        <div class="flex space-x-1 items-center pb-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                            </div>
                            <div class="text-[#c5ace2]">
                                {{ detail.date }}
                            </div>
                        </div>
                        <div class="sm:flex sm:space-x-10">
                            <div class="flex space-x-1 items-end pb-4 ">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <div class="text-[#a58dc1]">{{ detail.byAdming }}</div>
                            </div>
                            <div class="flex space-x-1 items-end pb-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                </div>
                                <div class="text-[#a58dc1]">{{ detail.comments }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[4rem]">
                        <div class="text-[#c5ace2] text-[16px]">{{ detail.paraA }}</div>
                        <div class="text-[#c5ace2] text-[16px] py-6">{{ detail.paraB }}</div>
                        <div class="text-[#c5ace2] text-[16px] py-6">{{ detail.paraC }}</div>
                    </div>
                </div>
            </transition-group>
            <div class="pt-[5rem]">
                <div class="flex justify-start space-x-4 px-6 pb-8">
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Leave A</h1>
                    <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Comment</h1>
                </div>
                <div class="lg:flex lg:space-x-6 pb-4 inputs text-left px-6">
                    <div class="lg:w-1/2 pb-4">
                        <div class="pb-2">
                            <label class="text-[white] font-[poppin-bold]" for="">Name</label>
                        </div>
                        <input
                            class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                            type="text" placeholder="Enter Full Name" required>
                    </div>
                    <div class="lg:w-1/2 pb-4">
                        <div class="pb-2">
                            <label class="text-[white] font-[poppin-bold]" for="">Email</label>
                        </div>
                        <input
                            class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                            type="email" placeholder="Enter Email Address" required>
                    </div>
                    <div class="w-full pb-4">
                        <div class="pb-2">
                            <label class="text-[white] font-[poppin-bold]" for="">Comments</label>
                        </div>
                        <input
                            class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                            type="text" placeholder="Enter Comments">
                    </div>
                    <div class="sm:w-[30%] mr-auto ml-auto sm:pt-[2rem] pt-[1rem]">
                        <div
                        class="hover-btn p-3 text-center bg-gradient-to-r from-[#6719c9] bg-[#9740ff] w-full cursor-pointer rounded-xl text-[16px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
                        Submit Now</div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        image: import('../assets/images/BlogDetailImg1.svg').then((module) => module.default),
    },


]);
const cardDetails = ref([
    {
        headingTwo: 'Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt',
        paragraph: 'Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come. Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come. Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come. Unpack the mysteries of the universe with our horoscopes! Our cosmic guidance will help you prepare for what to come.',
        date: '26-January-2024',
        byAdming: 'By - Admin',
        comments: 'Comments(0)',
        paraA: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        paraB: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
        paraC: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker'
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
.bg{
    background-color: rgba(4, 7, 31, 0.5);
}
</style>  