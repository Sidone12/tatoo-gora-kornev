<template>
<div>
    <MainSlider />
    <AboutMe />
    <TheGallery />
    <InstagramImages />
    <TheBooking />
    <TheLocations />
</div>
</template>

<script>
import MainSlider from "../Shared/MainSlider.vue"
import AboutMe from "../Sections/AboutMe.vue"
import TheGallery from "../Sections/TheGallery.vue"
import InstagramImages from "../Sections/InstagramImages.vue"
import TheBooking from "../Sections/TheBooking.vue"
import TheLocations from "../Sections/TheLocations.vue"

export default {
    name: "HomeView",
    components: {
        MainSlider,
        AboutMe,
        TheGallery,
        InstagramImages,
        TheBooking,
        TheLocations,
    }

}
</script>
