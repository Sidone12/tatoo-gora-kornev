<template>
  <section class="w-full h-full bg-brand-black-1 pt-10 sm:pt-0" id="gallery">
    <HeadingText text="GALLERY" ptext="Some of my works" class="mb-8" />
    <div class="w-full h-full flex justify-center">
      <div class="grid grid-cols-3 w-full gap-x-2 gap-y-4 sm:flex sm:flex-col">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-full"
        >
          <img class="w-full" :src="item.url" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
export default {
  name: "TheGallery",
  components: { HeadingText },
  data() {
    return {
      items: [
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
        { url: "https://tattookiev.org/wp-content/uploads/2021/01/sleevetattoo-037.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
