<template>
    <section id="booking" class="w-full h-full bg-brand-black-1 flex flex-col justify-center">
      <div class="py-24 mx-auto bg-cover sm:py-10 sm:mx-6 max-w-screen-xl" style="background-image: url(/Tattoo-Shop.jpg)">
        <HeadingText style="background:none" text="BOOKING FORM" ptext="BEFORE BOOKING" />
        <div class="mx-20 sm:mx-8">
          <ul class="pt-10">
            <li
              class="list-disc text-brand-grey pb-2 text-sm"
              v-for="(item, index) in items"
              :key="index"
            >
              {{ item.text }}
            </li>
          </ul>
          <div class="flex justify-center items-center">
              <p class=" text-brand-grey text-sm pt-5"><i class="uil uil-exclamation-triangle text-yellow-400"></i> Remember to check your spam folder!</p>
          </div>
          <DialogAlert :formError="formError" />
          <TheForm />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import HeadingText from "../Shared/HeadingText.vue";
  import TheForm from "../Shared/TheForm.vue";
  import DialogAlert from "../Shared/DialogAlert.vue";
  
  export default {
    name: "TheBooking",
    components: {
      HeadingText,
      TheForm,
      DialogAlert,
    },
    data() {
      return {
        formError: true,
        items: [
          {
            text: "Please, take a look at the FAQ, so you can fill up the form knowing all the information. This form will take you 10 – 15min to fill. Please, take your time and do it the best way you can, since that’s the info I will use  to give you price and suggestions.",
          },
          {
            text: "Booking for DROPOUT COLLECTIVE studio in Copenhagen ONLY.",
          },
          {
            text: "After filling up the form, you will receive an automatic email. Make sure you check your spam and promotions folder. I will answer within 1-3 weeks, depending on the amount of inquires I receive. At the moment I am booking from January.",
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>