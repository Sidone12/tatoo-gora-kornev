<template>
  <div>
    <MainNav />
    <!-- <router-view /> -->
    <!-- <PreloaderImg /> -->

    <router-view v-slot="{ Component, route }"> 
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <TheFooter class="mt-auto" />
  </div>
</template>


<script>
import MainNav from "./components/Navigation/MainNav.vue";
import TheFooter from "./components/Sections/TheFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheFooter,
  },
};
</script>
<style>
body {
  background-color: rgba(34, 34, 34);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 0.7s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
