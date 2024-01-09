<template>
<div class="w-full h-full bg-brand-black-1 pt-24 sm:py-20 flex justify-center">
    <div class="max-w-7xl">
        <HeadingText text="LOCATION" ptext="Our shop is in the center of Copenhagen. By appointment only." class="mb-8 pb-24 sm:pb-10 sm:px-10" />
        <div class="py-24 bg-cover sm:py-10" style="background-image: url('https://estertarabal.com/wp-content/uploads/2022/06/Untitled_Artwork-3.jpg')">
            <div class="w-full flex justify-between lg:flex-col lg:items-center">
                <img class="w-3/5 pt-8 pr-8 lg:w-full lg:px-4 lg:py-4" src="../../assets/IMG_2053-2-1024x601.jpg" alt="" />
                <div class="w-2/5 lg:w-full lg:px-4">
                    <div class="bg-brand-creem-1 p-10 ml-8 lg:m-0">
                        <div class="bg-brand-creem-2 ">
                            <div class="flex flex-col justify-center items-center p-12">
                                <h2 class="font-semibold tracking-[-0.07em] text-3xl mb-6 text-center lg:text-lg lg:mb-2">DROPOUT COLLECTIVE</h2>
                                <h3 class="font-semibold tracking-[-0.05em] text-1xl mb-6 text-center lg:text-sm lg:mb-2">VESTERBROGADE 149 (BINGS)</h3>
                                <p class=" text-sm mb-5 lg:mb-2 lg:text-xs">building 6, 2nd floor</p>
                                <p class=" text-sm mb-5 lg:mb-2 lg:text-xs">1620 Copenhagen</p>
                                <p class=" text-sm mb-0 lg:mb-0 lg:text-xs">DENMARK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
export default {
    name: "TheLocations",
    components: {
        HeadingText
    }
}
</script>

<style lang="scss" scoped>

</style>