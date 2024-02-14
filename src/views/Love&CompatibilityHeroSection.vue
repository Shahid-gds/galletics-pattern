<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
      <div class="2xl:pt-[22rem] lg:pt-[18rem] pt-[8rem] text-center container mx-auto">
        <div class="lg:leading-[3rem]">
          <div class="flex sm:space-x-4 space-x-2 justify-center">
            <h1 class="2xl:text-[50px] text-[30px] uppercase text-[#ffff] font-[Graviton-Solid]">Love &</h1>
            <h1 class="2xl:text-[50px] text-[30px]  uppercase text-[#9740ff] font-[Graviton-Solid]">Compatibility</h1>
          </div>
          <div class="2xl:px-[26rem] px-6 leading-[2rem] pt-4">
            <p class="sm:text-[20px] text-[#e4e3e6]">Enter your details in the FREE online love compatibility calculator to
                get your chances of relationship.</p>
          </div>
        </div>
  <div>
    <div class="lg:flex lg:space-x-28 justify-between pt-[5rem] px-6">
      <div class="w-full pb-28">
          <div class="flex sm:space-x-4 space-x-2">
              <h1 class="text-[25px] uppercase text-[#ffff] font-[Graviton-Solid]">Partner</h1>
              <h1 class="text-[25px]  uppercase text-[#9740ff] font-[Graviton-Solid]">a</h1>
          </div>
          <div class="text-left border-b-2 border-[#6c40a1] py-5">
              <p class="text-[#9582ac]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div class="text-left pt-[2rem]">
              <div class="lg:flex lg:space-x-10">
                  <div class="w-full pb-4">
                      <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Your Name</label></div>
                      <input  class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#5a4473]" type="text" placeholder="Enter Your Name">
                  </div>
                  <div class="w-full pb-4">
                      <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Your Zodiac Sign</label></div>
                      <div class="select w-full">
                        <div class="selectBtn border-2 p-3 w-full bg rounded-xl border-[#3c1a65] text-[#5a4473]" :class="{ toggle: dropdownVisible }" @click="toggleDropdown">{{ selectedOption }}</div>
                        <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible }">
                          <div class="option w-full" v-for="option in options" :key="option" @click="selectOption(option)" :data-type="option">{{ option }}</div>
                        </div>
                      </div>
                    </div>
              </div>
           <div class="pt-[2rem] lg:space-x-10 lg:flex items-start">
              <div class="custom-date-input w-full pb-4">
                  <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Date Of Birth</label></div>
                  <input id="datepicker" class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473]" type="date">
              </div>
              <div class="w-full">
                  <h2 class="text-[white] font-[poppin-bold] pb-4">Gender</h2>
                  <div class="radio-group flex items-start space-x-9">
                    <div class="w-full flex p-3 bg rounded-xl border-2 border-[#3c1a65]">
                    <input class="" type="radio" id="Male" name="color" value="Male" checked>
                    <label class="male font-[poppin-bold]" for="Male">Male</label>
                    </div>
                   <div class="w-full flex p-3 bg rounded-xl border-2 border-[#3c1a65]">
                    <input type="radio" id="Female" name="color" value="Female">
                    <label class="male font-[poppin-bold]" for="Female">Female</label>
                   </div>
                  </div>
            
              </div>
           </div>
             
          </div>
      </div>
    <div class="w-[20%] flex justify-center relative">
      <div class="w-1 h-full bg-[#ac69fc]">
        <div class="absolute lg:block hidden w-full lg:right-0 lg:top-[10rem] -top-[8rem]">
          <img class="" src="../assets/images/heart.svg" alt="">
        </div>
      </div>
    </div>
      <div class="w-full">
          <div class="flex sm:space-x-4 space-x-2">
              <h1 class="text-[25px] uppercase text-[#ffff] font-[Graviton-Solid]">Partner</h1>
              <h1 class="text-[25px]  uppercase text-[#9740ff] font-[Graviton-Solid]">b</h1>
          </div>
          <div class="text-left border-b-2 border-[#6c40a1] py-5">
              <p class="text-[#9582ac]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div class="text-left pt-[2rem]">
              <div class="lg:flex lg:space-x-10">
                  <div class="w-full pb-4">
                      <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Your Name</label></div>
                      <input  class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#5a4473]" type="text" placeholder="Enter Your Name">
                  </div>
                  <div class="w-full pb-4">
                      <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Your Zodiac Sign</label></div>
                      <div class="Bselect w-full">
                        <div class="BselectBtn border-2 p-3 w-full bg rounded-xl border-[#3c1a65] text-[#5a4473]" :class="{ Btoggle: BdropdownVisible }" @click="BtoggleDropdown">{{ BselectedOption }}</div>
                        <div class="BselectDropdown p-2" :class="{ Btoggle: BdropdownVisible }">
                          <div class="Boption w-full" v-for="Boption in Boptions" :key="Boption" @click="BselectOption(Boption)" :data-type="Boption">{{ Boption }}</div>
                        </div>
                      </div>
                    </div>
              </div>
           <div class="pt-[2rem] lg:space-x-10 lg:flex items-start">
              <div class="custom-date-input w-full pb-4">
                  <div class="pb-4"><label class="text-[white] font-[poppin-bold]" for="">Date Of Birth</label></div>
                  <input id="datepicker" class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473]" type="date">
              </div>
              <div class="w-full">
                  <h2 class="text-[white] font-[poppin-bold] pb-4">Gender</h2>
                  <div class="w-full flex items-start space-x-9">
                    <div class="w-full flex p-3 bg rounded-xl border-2 border-[#3c1a65]">
                    <input class="" type="radio" id="MaleB" name="b" value="Second-Male" >
                    <label class="maleB font-[poppin-bold]" for="MaleB">Male</label>
                    </div>
                   <div class="w-full flex p-3 bg rounded-xl border-2 border-[#3c1a65]">
                    <input type="radio" id="FemaleB" name="b" value="FemaleB">
                    <label class="maleB font-[poppin-bold]" for="FemaleB">Female</label>
                   </div>
                  </div>
            
              </div>
           </div>
          </div>
      </div>
     
     </div>
     <div class="w-full pt-8">
      <div
      class="hover-btn p-5 text-center bg-gradient-to-r from-[#6719c9] bg-[#9740ff] w-[330px] cursor-pointer rounded-xl text-[16px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
      GET COMPATIBILITY</div>
  </div>
  </div>
      </div>
    </section>
  </template>
  <script setup>
  import { ref } from 'vue';
  let selectedOption = 'Select Zodiac Sign';
  let BselectedOption = 'Select Zodiac Sign';
  const dropdownVisible = ref(false);
  const BdropdownVisible = ref(false);
  const options = ['First option', 'Second option', 'Third option'];
  const Boptions = ['First option', 'Second option', 'Third option'];
  
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };
  const BtoggleDropdown = () => {
    BdropdownVisible.value = !BdropdownVisible.value;
  };
  
  const selectOption = (option) => {
    selectedOption = option;
    dropdownVisible.value = false;
  };
  const BselectOption = (Boption) => {
    BselectedOption = Boption;
    BdropdownVisible.value = false;
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

  /*Option B*/
  .Bselect {
    position: relative;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .Bselect .BselectBtn:after {
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
  .Bselect .BselectBtn.Btoggle {
    border-radius: 15px 15px 0 0;
  }
  .Bselect .BselectBtn.Btoggle:after {
    -webkit-transform: translateY(-50%) rotate(-135deg);
    transform: translateY(-50%) rotate(-135deg);
  }
  .Bselect .BselectDropdown {
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
  .Bselect .BselectDropdown .Boption {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .Bselect .BselectDropdown .Boption:hover {
    background: #1a042d;
    color: white;
    border-radius: 5px;
  }
  .Bselect .BselectDropdown.Btoggle {
    visibility: visible;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  
  input[type="radio"] {
    display: none;
  }
  
  .male, .maleB {
    position: relative;
    padding-left: 30px;
    color: #56416e;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .male:before,
  .maleB:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #ac69fc;
    transition: background-color 0.3s;
  }
  
  input[type="radio"]:checked + label:before {
    background-color: #ac69fc;
  
  }
  
  input[type="radio"]:focus + label {
    color: #ac69fc;
  }
  
  input[type="radio"]:checked + label {
    color: #ac69fc;
  }
  
  /* Neon Style */
  input[type="radio"] + label:before {
    box-shadow: 0 0 10px #ac69fc;
  }
  
  /*input[type="radio"]:checked + label:before {
    box-shadow: 0 0 10px #ac69fc, 0 0 20px #ac69fc, 0 0 30px #ac69fc;
  }*/
  
  input[type="radio"]:hover + label:before {
    background-color: #ac69fc;
  }
  
  input[type="radio"]:focus + label:before {
    background-color: #ac69fc;
  }

</style>
  