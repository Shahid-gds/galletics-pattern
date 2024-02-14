<template>
    <section class="sm:py-28 sm:pb-[15rem] pb-[5rem]">
        <div>
            <div class="sm:flex sm:space-x-4 space-x-2 justify-center text-center">
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Astrology Birth</h1>
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Chart Generator</h1>
            </div>
            <div class="container mx-auto 2xl:px-[15rem] lg:px-[10rem] px-6 text-center pb-16">
                <p class="text-[18px] text-[#9a85b5]">Learn about astrology, zodiac signs, retrogrades, and more! Your world
                    becomes clear once you understand how the universe influences it.</p>
            </div>
        </div>
        <div class="container mx-auto lg:px-[10rem] px-6">
        <div class="border-t-2 border-[#6c40a1]">
            <div class="text-left lg:flex items-center lg:space-x-10 pt-8">
                <div class="w-full pb-4">
                    <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Your Name</label></div>
                    <input class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#5a4473]" type="text" placeholder="Enter Name">
                </div>
                <div class="w-full pb-4">
                    <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Place Of Birth</label></div>
                    <div class="select w-full">
                      <div class="selectBtn border-2 p-3 w-full bg rounded-xl border-[#3c1a65] text-[#5a4473]" :class="{ toggle: dropdownVisible }" @click="toggleDropdown">{{ selectedOption }}</div>
                      <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible }">
                        <div class="option w-full" v-for="option in options" :key="option" @click="selectOption(option)" :data-type="option">{{ option }}</div>
                      </div>
                    </div>
                </div>
                <div class="w-full pb-4">
                    <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Email Address</label></div>
                    <input class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#5a4473]" type="email" placeholder="Enter Email Address">
                </div>
            </div> 
            <div class="text-left lg:flex items-center lg:space-x-10 sm:pt-8">
                <div class="custom-date-input w-full pb-4">
                    <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Date Of Birth</label></div>
                    <input id="datepicker" class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473]" type="date">
                  </div>
                <div class="custom-time-input w-full pb-4">
                  <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Time Of Birth</label></div>
                  <input id="datepicker" class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473]" type="time">
                </div>
                <div class="w-full pb-4">
                    <div class="pb-2"><label class="text-[white] font-[poppin-bold]" for="">Birth Location</label></div>
                    <input class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#5a4473]" type="text" placeholder="Enter Location">
                </div>
            </div> 
        </div>
        <div class="2xl:px-[6rem] lg:px-[10rem] px-6 text-center pt-8">
            <p class="text-[18px] text-[#9a85b5]">Learn about astrology, zodiac signs, retrogrades, and more! Your world
                becomes clear once you understand how the universe influences it.</p>
        </div>     
             <div class="flex justify-center py-8">
                <div class="form-group">
                    <input type="checkbox" id="html" checked>
                    <label class="text-[#f5f4f5]" for="html">By accepting you agree to our <a class="text-[#ad95c7] underline" href="#">Terms of Service</a> and <a class="text-[#ad95c7] underline" href="#">Privacy Policy</a>.</label>
                  </div>
             </div>
             <div class="w-full flex justify-center">
                <div
                class="hover-btn p-3.5 text-center bg-gradient-to-r from-[#6719c9] bg-[#9740ff] w-[443px] cursor-pointer rounded-xl text-[16px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
                Get your Free Birth Chart</div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
let selectedOption = 'Enter City Name';
const dropdownVisible = ref(false);
const options = ['First option', 'Second option', 'Third option'];

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
  selectedOption = option;
  dropdownVisible.value = false;
};
</script>

<style scoped>
.bg {
  background-color: rgba(4, 7, 31, 0.5);
}
input[type="date"]::-webkit-calendar-picker-indicator {
  background: url('data:image/svg+xml;utf8,<svg fill="%239740ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20H4V4h6V2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6h-2v6zM16 2h2c1.1 0 2 .9 2 2v2h-2V4h-2V2zM10 4h2v2h-2zM20 10h-2V8h2v2zM4 8h2v2H4zm0 4h2v2H4zm0 4h2v2H4zm4-4h2v2H8zm0-4h2v2H8zm0-4h2v2H8zm4 12h2v2h-2zm-4 0h2v2H8zm4-4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/></svg>') no-repeat center;
  background-size: contain;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
input[type="time"]::-webkit-calendar-picker-indicator {
    background: url('data:image/svg+xml;utf8,<svg fill="%239740ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v5l4.25 2.52-.75 1.23L11 13V7z"/></svg>') no-repeat center;
    background-size: contain;
    width: 20px;
    height: 20px;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .select {
    position: relative;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .select .selectBtn:after {
    content: "";
    position: absolute;
    top: 45%;
    right: 15px;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid #9740ff;
    border-bottom: 2px solid #9740ff;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .select .selectBtn.toggle {
    border-radius: 15px 15px 0 0;
  }
  .select .selectBtn.toggle:after {
    -webkit-transform: translateY(-50%) rotate(-135deg);
    transform: translateY(-50%) rotate(-135deg);
  }
  .select .selectDropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    overflow-y: hidden;
    background: #9740ff;
    border-top: 1px solid #9740ff;
    z-index: 1;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }
  .select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .select .selectDropdown .option:hover {
    background: #1a042d;
    color: white;
    border-radius: 5px;
  }
  .select .selectDropdown.toggle {
    visibility: visible;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  
  
  .form-group {
    display: block;
    margin-bottom: 15px;
  }
  
  .form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }
  
  .form-group label {
    position: relative;
    cursor: pointer;
  }
  
  .form-group label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #3c1a65;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 8px;
  }
  
  .form-group input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid #0079bf;
    border-radius:20px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>