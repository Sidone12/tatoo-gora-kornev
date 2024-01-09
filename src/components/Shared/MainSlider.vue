<template>
<div class="flex mt-16 w-full h-screen relative z-10 sm:w-full sm:h-auto">

    <div class="w-full static">
        <transition-group name="list">
            <div class="w-full static" v-for="slide in slides" :key="slide.id" v-show="slide.id == currentSlide">
                <img :src="slide.url" class="w-full h-screen transition-all duration-500 sm:w-full sm:max-h-96">
            </div>
        </transition-group>
        <div class=" absolute top-1/3 right-1/2 flex  translate-x-1/2 justify-between items-center w-full sm:top-1/3">
            <div @click="prev"><span class="text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.7)] transition-all duration-500 text-6xl sm:text-lg"><i class="uil uil-angle-left-b"></i></span></div>
            <div class="flex flex-col items-center ">
                <p class=" text-white text-xl text-center sm:text-sm sm:mb-1">Tattoos and Art.</p>
                <h1 class=" text-[100px]  text-white font-semibold mb-5 text-center sm:text-3xl 2xl:text-[150px] sm:mb-1 font">Gora Kornev</h1>
                <!-- <p class=" text-brand-grey text-xs mb-10 text-center sm:text-sm sm:mb-1">Tattoos . Art . Illustration</p> -->
                <router-link to="/#booking">
                    <button class="tracking-[-.05em] text-[#979592] bg-[rgba(0,0,0,0.3)] text-2xl font-semibold mb-10 border border-solid border-brand-grey py-1 px-5 hover:bg-[rgba(0,0,0,0.7)] hover:text-brand-grey transition-all duration-500 sm:text-sm sm:px-2 ">BOOK A SECTION</button>
                </router-link>  
            </div>
            <div @click="next"><span class="text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.7)] transition-all duration-500 text-6xl sm:text-lg"><i class="uil uil-angle-right-b"></i></span></div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "MainSlider",
    data() {
        return {
            currentSlide: 0,
            slides: [
                { id: 0, url: '/Tattoo-master.webp' },
                { id: 1, url: '/Untitled_design.png' },
            ],
            interval: null,
        }
    },
    created() {
        this.changeTitle();
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        prev() {
            this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
        },
        next() {
            this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1
        },
        changeTitle() {
            this.interval = setInterval(() => {
                this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1
            }, 5000);
        },
    }
}
</script>

<style scoped>
.list-enter-active {
    transition: all 1s ease;
}

.list-leave-active {
    transition: all 0s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
</style>
