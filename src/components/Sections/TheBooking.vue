<template>
  <section id="booking" class="w-full h-full bg-brand-black-1  pt-0 relative">
    <div class="py-24 mx-20 bg-cover sm:py-10 sm:mx-6 max-w-screen-xl" style="background-image: url(/Tattoo-Shop.jpg)">
          <HeadingText style="background:none" text="BOOKING FORM" ptext="Before booking" pBindClass='font-danc text-3xl' />
          <div class="mx-20 sm:mx-8 ">
              <div class="flex justify-center">
                  <ul class="pt-10  max-w-3xl pl-5">
                      <li class="list-disc text-white pb-2 text-m ">
                          Please, take a look at the  <router-link to="/faq"  class=" text-brand-green-2">FAQ</router-link>, so you can fill up the form knowing all the information. This form will take you 6 – 10min to fill. Please, take your time and do it the best way you
                          can, since that’s the info I will use to give you price and suggestions.
                      </li>
                      <li class="list-disc text-white pb-2 text-m "> l am over 18 or will be at the day of the appointment Thanks for your interest in booking with me!
                      </li>
                  </ul>
              </div>
              <div class="flex justify-center items-center">
                  <p class=" text-white  text-sm pt-5"><i class="uil uil-exclamation-triangle text-yellow-400"></i> Remember to check your spam folder!</p>
              </div>
              <div class="  flex bg-[#3c3c3c] p-4 rounded my-5" v-if="isFormSignIn">
                  <p class="text-xs text-brand-grey-4">Thanks for submitting the booking form, I will answer as soon as possible. Thank you for your patience!</p>
              </div>
              <DialogAlert :formError="formError" />
              <TheForm v-if="!isFormSignIn" @formSubmit="isFormSignIn = true" @formError="formError=true" />
          </div>
          
      </div>
  </section>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
import TheForm from "../Shared/TheForm.vue";
import DialogAlert from '../Shared/DialogAlert.vue';
export default {
  name: "TheBooking",
  components: {
      HeadingText,
      TheForm,
      DialogAlert,
  },
  data() {
      return {
          formError: false,
          isFormSignIn: false,
          items: [{
                  text: "Please, take a look at the FAQ, so you can fill up the form knowing all the information. This form will take you 10 – 15min to fill. Please, take your time and do it the best way you can, since that’s the info I will use  to give you price and suggestions.",
              },
              {
                  text: "l am over 18 or will be at the day of the appointment Thanks for your interest in booking with me!"
              },
          ],
      };
  },
};
</script>

<style scoped></style>




