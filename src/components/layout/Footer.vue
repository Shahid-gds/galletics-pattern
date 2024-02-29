<template>
    <footer class="bg-[#1e0d34] py-28 footer">
        <div class="container mx-auto text-left">
            <div class="lg:flex space-x-8">
                <div class="w-full">
                    <div class="2xl:flex items-center space-x-4 px-6">
                        <div class="w-full 2xl:block hidden">
                            <img class="w-[99px]" src="../../assets/images/Logo.svg" alt="">
                        </div>
                        <div class="w-full pb-[1rem] 2xl:hidden">
                            <img class="w-[99px]" src="../../assets/images/Logo.svg" alt="">
                        </div>
                        <div class="text-[#c5ace2]">
                            <p>From interpreting the subtle motions of the planets to the significant shifts within the zodiac, we provide clarity and wisdom for any seeker's journey.</p>
                        </div>
                    </div>
                    <div class="pt-[5rem] px-6">
                        <h1 class="text-[20px] font-[poppin-bold] text-white">Subscribe Newsletter</h1>
                        <p class="text-[#bda5d9]">Get Your Daily Horoscope, Daily</p>
                        <div class="relative lg:w-[370px] mt-[2rem]">
                            <input type="text" placeholder="Enter Your Email Address"
                                class="lg:w-[370px] w-full bg-transparent border-2 border-[#3c1a65] p-4 rounded-xl placeholder:text-[#624b7c] outline-none text-white">
                            <div class="absolute top-4 cursor-pointer right-6">
                                <img src="../icons/plan-paper.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 lg:block hidden">
                    <h1 class="text-[20px] text-white font-[poppin-bold] pb-8">Quick Links</h1>
                    <ul class="text-[18px] text-[#b59dd0]">
                        <li class="pb-8"><router-link :to="{ name: 'Home' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Home</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'About Us' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">About Us</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Shop' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Shop</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Blog' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Blogs</router-link></li>
                        <li><router-link :to="{ name: 'Contact Us' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Contact Us</router-link></li>
                    </ul>
                </div>
                <div class=" w-[70%] lg:block hidden">
                    <h1 class="text-[20px] text-white font-[poppin-bold] pb-8">Informations</h1>
                    <ul class="text-[18px] text-[#b59dd0]">
                        <li class="pb-8"><router-link :to="{ name: 'Horoscopes' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Horoscopes</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Predictions' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Predictions</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Love and Compatibility' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Love & Compatibility</router-link>
                        </li>
                        <li class="pb-8"><router-link :to="{ name: 'Astrology Tool' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Astrology Tools</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Astrology Events' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Astrological Events
                                Calendar</router-link></li>
                        <li class="pb-8"><router-link :to="{ name: 'Learning Resources' }"
                                class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                :active-class="'active-route text-[#ac69fc] font-[600]'">Learning Hub &
                                Resources</router-link></li>

                    </ul>
                </div>
                <div class="flex pt-[5rem] lg:hidden">
                    <div class="w-1/2">
                        <h1 class="text-[20px] text-white font-[poppin-bold] pb-8">Quick Links</h1>
                        <ul class="text-[18px] text-[#b59dd0]">
                            <li class="pb-8"><router-link :to="{ name: 'Home' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Home</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'About Us' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">About Us</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Shop' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Shop</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Blog' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Blogs</router-link></li>
                            <li><router-link :to="{ name: 'Contact Us' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Contact Us</router-link></li>
                        </ul>
                    </div>
                    <div class=" w-[70%]">
                        <h1 class="text-[20px] text-white font-[poppin-bold] pb-8">Informations</h1>
                        <ul class="text-[18px] text-[#b59dd0]">
                            <li class="pb-8"><router-link :to="{ name: 'Horoscopes' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Horoscopes</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Predictions' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Predictions</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Love and Compatibility' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Love &
                                    Compatibility</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Astrology Tool' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Astrology Tools</router-link>
                            </li>
                            <li class="pb-8"><router-link :to="{ name: 'Astrology Events' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Astrological Events
                                    Calendar</router-link></li>
                            <li class="pb-8"><router-link :to="{ name: 'Learning Resources' }"
                                    class="active-route-link hover:text-white transition-all ease-in duration-300 hover:ml-1.5"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'">Learning Hub &
                                    Resources</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="w-[80%]">
                    <h1 class="text-[20px] text-white font-[poppin-bold] pb-8">Contact Us</h1>
                    <div class="flex items-start pb-8">
                        <div class="w-[8%] mt-1">
                            <img src="../icons/map.svg" alt="">
                        </div>
                        <div class="text-[18px] text-[#b59dd0] w-full">
                            <p>1356 Brodway squore, NY 10018, California, USA</p>
                        </div>
                    </div>
                    <div class="flex items-start pb-8">
                        <div class="w-[10%] mt-1">
                            <img src="../icons/email.svg" alt="">
                        </div>
                        <div class="text-[18px] text-[#b59dd0] w-full">
                            <p>info@galacticpatterns.com</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-[10%] mt-1">
                            <img src="../icons/phone.svg" alt="">
                        </div>
                        <div class="text-[18px] text-[#b59dd0] w-full">
                            <p>+ (01) 2345-678-91011</p>
                        </div>
                    </div>
                    <div class="mt-[5rem]">
                        <h1 class="text-[20px] text-white font-[poppin-bold] pb-4">Follow Us On:</h1>
                        <div class="flex items-center space-x-6">
                            <div>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6e528a" x="0px" y="0px" width="35"
                                        height="35" viewBox="0 0 24 24">
                                        <path
                                            d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6e528a" x="0px" y="0px" width="30"
                                        height="30" viewBox="0 0 50 50">
                                        <path
                                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#6e528a" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 50 50">
                                    <path
                                        d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="rotate-45">
                            <a href="#">
                                <svg fill="#6e528a" height="30px" width="30px" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 365.892 365.892" xml:space="preserve">
                                    <g>
                                        <circle cx="182.945" cy="286.681" r="41.494" />
                                        <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
                                   c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
                                   c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
                                   C252.285,193.373,218.606,176.029,182.946,176.029z" />
                                        <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
                                   c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
                                   s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
                                   C282.641,128.621,233.883,106.873,182.946,106.873z" />
                                        <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
                                   c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
                                   c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
                                   C367.637,131.238,367.745,119.562,360.611,112.293z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <div class="py-16">
                <div class="h-0.5 w-full bg-[#9740ff]"></div>
            </div>
            <div class="text-[#7a6690] text-[18px]">
                <div class="pb-6">© Copyright 2023 - <a href="/"
                        class="text-white hover:text-[#7a6690] transition-all ease-in duration-300">Galactic
                        Patterns</a> . All Rights Reserved.</div>
                <div class="text-white flex space-x-4 justify-center">
                    <router-link :to="{name:'Terms'}"
                        class="active-route-link hover:text-[#7a6690] transition-all ease-in duration-300"
                        :active-class="'active-route text-[#7a6690] font-[600]'">Terms & Conditions </router-link>
                    <div>/</div><router-link :to="{name:'Privacy'}"
                        class="active-route-link hover:text-[#7a6690] transition-all ease-in duration-300"
                        :active-class="'active-route text-[#7a6690] font-[600]'">Privacy Policy</router-link>
                </div>
            </div>
        </div>
    </div>
</footer></template>



<style scoped>.footer {
    background-image: url('../../assets/images/bgs/FooterBg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}</style>