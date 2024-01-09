<template>
    <div class="container mx-auto max-w-screen-xl  bg-brand-black-1 py-24 px-10 md:px-0 sm: sm:py-20 md:mx-5">
        <HeadingText text="AFTERCARE" ptext="GENERAL ADVICES" class="pb-24 sm:py-10" />
        <p class=" text-brand-grey text-xs mb-5 2xl:text-base">Keep the tattoo away from the sun for at least the first 3 weeks, or
            wear
            sun-protective clothing whenever
            you go outside. DO NOT use sunscreen for the first two weeks.</p>
        <p class=" text-brand-grey text-xs mb-10 2xl:text-base">Avoid hard exercise, sauna, pool and sea during the first 2 weeks.</p>
        <SecondHeading text="1ST BANDAGE" ptext="This bandage will stay on 3 to 4 hours or up to 24 hours max." />
        <div class="flex bg-brand-grey-5 p-4 rounded mb-10 xl:mx-16 sm:mx-0 ">
            <div class="flex items-center text-2xl mr-5 text-brand-grey"><i class="uil uil-info-circle"></i></div>
            <p class="text-xs text-brand-grey 2xl:text-base">Before you start taking care of the tattoo, make sure to wash your hands
                and put on clean surgical gloves if possible. If you left the shop with Pads instead of protective film,
                the process is the same. Make sure to read <a href="https://www.sik.dk/sites/default/files/2021-08/stps_tattoo_a4_uk_v2_2021.pdf" target="blank" class=" text-brand-green-2">THIS</a> information
                provided by the Danish Health Department, in case you feel any discomfort.</p>
        </div>
        <div class="flex sm:flex-col">  
            <div v-for="careItem, index in careItems" :key="index" class="w-1/4 m-2 sm:w-full">
                <div class="p-1 bg-white">
                    <img :src="careItem.img" alt="" class="w-full h-auto">
                </div>
                <p class="text-xs my-6 text-brand-grey 2xl:text-base">{{careItem.text  }}</p>
            </div>
        </div>
        <div class="flex bg-brand-grey-5 p-4 rounded mb-10 xl:mx-16 sm:mx-0 ">
            <div class="flex items-center text-2xl mr-5 text-brand-grey"><i class="uil uil-info-circle"></i></div>
            <p class="text-xs text-brand-grey 2xl:text-base">
                If the protective film is hard to pull off, simply let some warm water run under the tattoo film, so
                that the glue becomes tender and the removal is easier. You may also use the ointment provided to rub
                under the film with clean fingers in order to remove the glue.</p>
        </div>
        <div class="m-auto max-w-4xl border-b border-solid border-white h-2 mb-8"></div>
        <SecondHeading text="2N BANDAGE" ptext="This bandage will stay on for 24 hours." />
        <div class="flex sm:flex-col">  
            <div v-for="care2Item, index in care2Items" :key="index" class="w-1/6 m-2 sm:w-full">
                <div class="p-1 bg-white">
                    <img :src="care2Item.img" alt="" class="sm:w-full">
                </div>
                <p class="text-xs my-6 text-brand-grey 2xl:text-base">{{care2Item.text  }}</p>
            </div>
        </div>
        <div class="m-auto max-w-4xl border-b border-solid border-white h-2 mb-8"></div>
        <SecondHeading text="3RD BANDAGE" ptext="Repeat the same steps as the second bandage, this one stays on 24 hours as well." />
        <div class="m-auto max-w-4xl border-b border-solid border-white h-2 mb-8"></div>
        <SecondHeading text="AFTER THE 3RD BANDAGE" ptext="Remove the protective film as advised before. From now on no bandage is required. After letting it dry/patting it dry, start applying the tattoo cream (with panthenol)."/>
        <p class=" text-brand-grey text-xs mb-5"> Apply a thin layer 3-5 times a day, for 2 weeks. Wash the tattoo once or twice a day.</p>
        <p class=" text-brand-grey text-xs mb-5"> Make sure not to pull off the skin when it’s peeling: the skin will fall off while applying the cream, washing or during the day, when it’s ready to do so. It’s normal to feel itchiness during the healing process. Do not scratch your tattoo, apply some of the cream to ease the feeling.</p>
        <p class=" text-brand-grey text-xs mb-5"> If you feel any discomfort or feel like something is going wrong, send me an email with a picture. Make sure you go to the doctor if you have high fever or see any signs of infection.</p>
        <p class=" text-brand-grey text-xs mb-8">After two weeks, stop using the panthenol cream. From then, just use moisturiser once in a while (for example after the shower), and make sure to use sunblock 50 when the sun will be exposed to the sun.</p>
        <div class="flex bg-brand-grey-5 p-4 rounded mb-10 xl:mx-16 sm:mx-0 ">
            <div class="flex items-center text-2xl mr-5 text-brand-grey"><i class="uil uil-info-circle"></i></div>
            <p class="text-xs text-brand-grey">
                Make sure to read <a href="https://www.sik.dk/sites/default/files/2021-08/stps_tattoo_a4_uk_v2_2021.pdf" target="blank" class=" text-brand-green-2">THIS</a> information by the Danish Health Department if you feel like something may be wrong with the tattoo.</p>
        </div>
        <div class="m-auto max-w-4xl border-b border-solid border-white h-2"></div>
</div>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
import SecondHeading from "../Shared/SecondHeading.vue";

export default {
    name: "AfterCare",
    components: {
        HeadingText,
        SecondHeading,

    },
    data() {
        return {
            careItems: [
                { img: '/care/IMG_3433-300x300.jpg', text: 'After 3 to 4 hours (max 24h, or when the bandage is falling off) remove the bandage applied by the tattooer. It is advisable to do it under the shower after letting some water run between the skin and the film.' },
                { img: '/care/IMG_3434-300x300.jpg', text: 'Wash it gently with soap and rinse any residual with water, so that all secretions are removed from the skin.' },
                { img: '/care/IMG_3435-300x300.jpg', text: 'Dry tap with kitchen paper and make sure the skin is completely dry. DO NOT use a towel to dry your tattoo for the first two weeks.' },
                { img: '/care/IMG_3432-300x300.jpg', text: 'Apply a thin layer of the ointment provided, ONLY on the tattoo area. It has to be clean around so the new bandage will stick into the skin.' }, 
            ],
            care2Items: [
                { img: '/care/IMG_3436-300x300.jpg', text: 'Cut the bandage leaving an extra margin around the tattoo (you may need more than one, that will overlap).' },
                { img: '/care/IMG_3437-300x300.jpg', text: 'Peel off the protective coating from the SHORT checked side, avoid touching the adhesive with your fingers.' },
                { img: '/care/IMG_3438-300x300.jpg', text: 'Place the adhesive surface at least 3-5cm from the edge of the tattoo. You should make it adhere to the skin by applying slight pressure with your fingers.' },
                { img: '/care/IMG_3439-300x300.jpg', text: 'Peel off the protective back coating from the LONG checked side and lay the whole film on the top of the tattoo. You should make it adhere to the skin by applying slight pressure with your fingers.' }, 
                { img: '/care/IMG_3440-300x300.jpg', text: 'Starting from the arrows, soflty peel off the upper protective film from the center to the external edges.' }, 
                { img: '/care/IMG_3441-300x300.jpg', text: 'In case of using more than one strip of film you should repeat this process by overlaying the pre-cut strips with maximum 1-2 cm.' }, 
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

</style>