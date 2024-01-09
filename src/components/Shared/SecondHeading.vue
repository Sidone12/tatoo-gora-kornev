<template>
    <div class="w-full flex justify-center bg-brand-black-1 text-brand-green-1">
        <div class="flex flex-col justify-center items-center">
            <h3 class="text-2xl font-semibold h-full tracking-tight text-brand-green-1 mb-5 2xl:text-3xl">{{ text }}</h3>
            <p class=" text-brand-grey text-xs mb-10 text-center 2xl:text-base">{{ ptext }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SecondHeading",
    props: {
    text: {
      type: String,
      required: true,
      default: "Type heading",
    },
    ptext: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>