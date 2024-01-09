<template>
<div class="w-full h-full bg-brand-black-1 pt-10 pb-32 sm:py-20">
    <HeadingText text="LATESTS POSTS" ptext="Follow me on Instagram to see more" class="mb-8" />

    <div class="w-full h-full flex justify-center">
        <div class="grid grid-cols-4 gap-2 sm:grid-cols-1 sm:p-0 sm:">
            <div v-for="image in images" :key="image.id" class="px-2 sm:pb-2">
                <img class="" :src="image.img" alt="" />
            </div>
        </div>
    </div>
    <div class="w-full h-full pt-3">
        <div class="flex justify-center items-center">
            <button @click="uploadMore" class="text-white text-xs h-8 py-2 px-4 bg-brand-grey-3 rounded-lg bg-opacity-50 hover:bg-opacity-100 transition-all duration-400">Load More...</button>
            <button class="text-white text-xs h-8 p-2 ml-2 bg-brand-blue-1 rounded-lg hover:bg-brand-blue-2 transition-all duration-400"><i class="uil uil-instagram"></i><span class="ml-2">Follow on Instagram</span></button>
            <button v-if="isOpen" @click="hideInstagramImages" class="text-white ml-4 border rounded px-2">X</button>
        </div>
    </div>
</div>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
export default {
    name: "InstagramImages",
    components: {
        HeadingText,
    },
    data() {
      return {
            isOpen: false,
            images: [
                { id: 1, img: "/instagram/244552957_317455093516833_3963691342745324654_n.jpg" },
                { id: 2, img: "/instagram/244552957_317455093516833_3963691342745324654_n.jpg" },
                { id: 3, img: "/instagram/244552957_317455093516833_3963691342745324654_n.jpg" },
                { id: 4, img: "/instagram/244552957_317455093516833_3963691342745324654_n.jpg" },
            ]
        }
    },
    methods: {
        uploadMore() {
            for (let i = 0; i < 4; i++) {
                this.images.push({ id: this.images.length + 1, img: "/instagram/244552957_317455093516833_3963691342745324654_n.jpg" })
            }
        this.isOpen = true;
      },
      hideInstagramImages() {
        this.images.splice(4, this.images.length);
        this.isOpen = false;
      }
  }
};
</script>