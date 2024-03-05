<template>
    <header class="absolute w-full">
        <!-- Top Header -->
        <div class="lg:block hidden">
            <div class="flex 2xl:p-10 py-10 px-6 items-start justify-between">
                <div class="flex items-center space-x-20">
                    <div class="flex space-x-3 items-center">
                        <div>
                            <a href="#"><img src="../icons/facebook.svg" alt=""></a>
                        </div>
                        <div>
                            <a href="#"><img src="../icons/instagram.svg" alt=""></a>
                        </div>
                        <div>
                            <a href="#"><img src="../icons/twitter.svg" alt=""></a>
                        </div>
                        <div class="rotate-45">
                            <a href="#"><img src="../icons/wifi.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="">
                            <img src="../icons/email.svg" alt="">
                        </div>
                        <div class="mt-1">
                            <a class="text-[16px] uppercase text-[#7f6a97]  hover:text-white transition-all ease-in duration-300"
                                href="mailto:info@galacticpatterns.com">info@galacticpatterns.com</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-9">
                    <div class="flex space-x-4 items-center">
                        <div>
                            <img src="../icons/phone.svg" alt="">
                        </div>
                        <div>
                            <a class="text-[#7f6a97]  hover:text-white transition-all ease-in duration-300" href="#">+ (01)
                                2345-678-91011</a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="relative">
                            <img src="../icons/cart.svg" alt="">
                            <div
                                class="w-4 h-5 top-0 text-[14px] right-0 text-center text-white rounded-full bg-[#9740ff] absolute">
                                0</div>
                        </div>
                        <div class="mt-1">
                            <h1 class="text-[#7f6a97]">$0.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header 2xl:px-[10rem] px-6 xl:block hidden">
            <nav class="flex space-x-10 justify-between items-center w-full py-6 relative">
                <div class="">
                    <ul class="flex flex-wrap 2xl:space-x-6 space-x-4 uppercase text-[#917bab]">
                        <li class="hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Horoscopes' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Horoscopes</router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Predictions' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Predictions</router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Love and Compatibility' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Love & Compatibility</router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Astrology Tool' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Astrology Tools</router-link>
                        </li>
                    </ul>
                </div>
                <router-link :to="{ name: 'Home' }" class="lg-logo absolute left-[39.5%] 2xl:block hidden">
                    <img class="2xl:w-full w-1/2" src="@/assets/images/Logo.svg" alt="">
                </router-link>
                <router-link :to="{ name: 'Home' }" class="absolute left-[41.5%] -top-24 2xl:hidden">
                    <img class="2xl:w-full w-1/2" src="@/assets/images/Logo.svg" alt="">
                </router-link>
                <div class="">
                    <ul class="flex flex-wrap 2xl:space-x-6 space-x-4 uppercase text-[#917bab]">
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Astrology Events' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'"> Astrological Events Calendar
                            </router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Learning Resources' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Learning Hub & Resources
                            </router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Shop' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Shop</router-link>
                        </li>
                        <li class=" hover:text-white transition-all ease-in duration-300">
                            <router-link :to="{ name: 'Blog' }" class="active-route-link"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Blogs</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="flex items-center justify-between p-6 cursor-pointer xl:hidden">
            <div class="w-full">
                <button @click="toggleMobileMenu" class="block 2xl:hidden" transition="slide-fade">
                    <!-- Show menu icon or cancel icon based on isMobileMenuOpen -->
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#ffff" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#ffff" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="w-full">
                <router-link :to="{ name: 'Home' }" class="2xl:hidden">
                    <img class="2xl:w-full w-1/2" src="@/assets/images/Logo.svg" alt="">
                </router-link>
            </div>
            <div class="flex items-center justify-end space-x-3 w-full">
                <div class="relative">
                    <img src="../icons/cart.svg" alt="">
                    <div
                        class="w-4 h-5 top-0 text-[14px] right-0 text-center text-white rounded-full bg-[#9740ff] absolute">
                        0</div>
                </div>
                <div class="mt-1">
                    <h1 class="text-[#7f6a97]">$0.00</h1>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="isMobileMenuOpen" class="absolute z-50 w-full xl:hidden">
                <nav class="flex flex-col py-4 px-6 bg-[#150528] text-[#917bab]">

                    <router-link @click="toggleMobileMenu" :to="{ name: 'Horoscopes' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Horoscopes</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Predictions' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Predictions</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Love and Compatibility' }"
                        class="active-route-link py-2" :active-class="'active-route text-[#ac69fc] font-[600]'">Love &
                        Compatibility</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Astrology Tool' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Astrology Tools</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Astrology Events' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Astrological Events Calendar</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Learning Resources' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Learning Hub & Resources</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Shop' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Shop</router-link>
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Blog' }" class="active-route-link py-2"
                        :active-class="'active-route text-[#ac69fc] font-[600]'">Blogs</router-link>
                </nav>
            </div>
        </transition>
    </header>
</template>
<script setup>
import { ref } from 'vue'
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>


<style scoped>
.header {
    background-image: url('@/assets/images/HeaderBg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media(max-width:1900px) {
    .header {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .lg-logo img {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    } 
}
</style>