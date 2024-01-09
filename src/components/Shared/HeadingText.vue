<template>
  <div class="w-full flex justify-center bg-brand-black-1 text-brand-green-1">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-6xl font-semibold h-full tracking-tight sm:text-3xl text-center">{{ text }}</h1>
      <div class="border-b-2 border-solid border-brand-grey-2 w-20 h-1 my-3"></div>
      <p  class="sm:text-sm text-center" >{{ ptext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadingText",
  props: {
    text: {
      type: String,
      required: true,
      default: "Heading",
    },
    ptext: {
      type: String,
    },
  },
};
</script>

<style></style>
