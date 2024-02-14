<template>
    <section class="sm:pb-[15rem] pb-[5rem]">
        <div class="2xl:pt-[30rem] lg:pt-[18rem] pt-[8rem] text-center">
            <div class="sm:flex sm:space-x-4 space-x-2 justify-center">
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#ffffff]">Get In</h1>
                <h1 class="font-[Graviton-Solid] sm:text-[50px] text-[30px] uppercase text-[#9740ff]">Touch!</h1>
            </div>
            <div class="container mx-auto 2xl:px-[25rem] lg:px-[10rem] px-6 text-center">
                <p class="text-[18px] text-[#9a85b5]">Please do not hesitate to send us a message</p>
            </div>
        </div>
       <div class="pt-[5rem] container mx-auto xl:px-[10rem] px-6">
        <form class="">
            <div class="sm:flex justify-center">
              <div class="w-full" >
                <div class="lg:flex lg:space-x-6 pb-4 inputs">
                  <div class="w-full pb-4">
                    <div class="pb-2">
                        <label class="text-[white] font-[poppin-bold]" for="">Full Name</label>
                    </div>
                    <input 
                    class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                      type="text" placeholder="Enter Full Name" required >
                  </div>
                  <div class="w-full pb-4">
                    <div class="pb-2">
                        <label class="text-[white] font-[poppin-bold]" for="">Email Address</label>
                    </div>
                    <input 
                    class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                      type="email" placeholder="Enter Email Address" required >
                  </div>
                  <div class="w-full pb-4">
                    <div class="pb-2">
                        <label class="text-[white] font-[poppin-bold]" for="">Phone Number</label>
                    </div>
                    <input 
                    class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                      type="text" placeholder="Enter Phone Number" required @input="filterNonNumeric">
                  </div>
                  <div class="w-full pb-4">
                    <div class="pb-2">
                        <label class="text-[white] font-[poppin-bold]" for="">Subject</label>
                    </div>
                    <input 
                    class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                      type="text" placeholder="Enter Subject" required >
                  </div>
                
                </div>
                <div>
                    <div class="pb-2">
                        <label class="text-[white] font-[poppin-bold]" for="">Message</label>
                    </div>
                  <textarea
                    class="w-full rounded-xl p-3 bg border-2 border-[#3c1a65] text-[#5a4473] placeholder:text-[#624b7c]"
                    name="" id="" cols="" rows="5" placeholder="Type Your Message Here..."></textarea>
                </div>
              </div>
            </div>
            <div class="md:w-[330px] mr-auto ml-auto pt-[2rem]">
                <div
                class="hover-btn p-4 text-center bg-gradient-to-r from-[#6719c9] bg-[#9740ff] w-full cursor-pointer rounded-xl text-[16px] uppercase text-white font-[poppin-bold] hover:bg-gradient-to-l hover:from-[#6719c9] hover:bg-[#9740ff] transition duration-150">
                Submit Now</div>
            </div>
        </form>
        <div class="sm:pt-[10rem] pt-[5rem] md:flex justify-center">
           <div class="text-center w-full pb-6">
            <div class="text-[white] font-[poppin-bold] uppercase text-[20px] sm:pb-4">Email</div>
            <div class="text-[#9d7ec4]">Info@galacticpatterns.com</div>
           </div>
           <div class="text-center w-full pb-4">
            <div class="text-[white] font-[poppin-bold] uppercase text-[20px] sm:pb-4">Address</div>
            <div class="text-[#9d7ec4] px-[3rem]">1356 Brodway squore, NY 10018, 
                California, USA</div>
           </div>
           <div class="text-center w-full">
            <div class="text-[white] font-[poppin-bold] uppercase text-[20px] sm:pb-4">Phone</div>
            <div class="text-[#9d7ec4]">+ (01) 2345 678 91011</div>
           </div>
        </div>
       </div>
    </section>
</template>
<script setup>
const filterNonNumeric = (event) => {
        const input = event.target.value;
        event.target.value = input.replace(/\D/g, '');
    }
</script>

<style>
textarea {
    resize: none;
  }
.bg{
    background-color: rgba(4, 7, 31, 0.5);
}
</style>