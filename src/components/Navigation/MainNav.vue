<template>
  <header class="w-full text-xl max-w-96">
    <div class="fixed z-50  h-16 top-0 left-0  bg-brand-black-1 text-white w-full border-b border-solid border-brand-black-2">
      <div class="mx-auto flex h-full flex-nowrap   px-8 max-w-7xl">
        <nav v-if="isOpen"
          class="hidden sm:flex sm:w-full sm:absolute sm:top-full sm:left-0 sm:bg-brand-black-1 sm:text-sm">
          <ul class="w-full">
            <li v-for="menuItem in menuItems" :key="menuItem.text"
              class="pl-4 hover:text-brand-green-2 text-brand-grey-4 transition-all duration-700  font-semibold border border-brand-grey-3 border-solid w-full">
              <router-link @click="toggleNav"  :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.text
              }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex h-full items-center">
         <router-link to="/" > <img src="/signature.png" alt="" class="w-32" /></router-link>
        </div>
        <div class="items-center ml-auto hidden sm:flex" @click="toggleNav">
          <span class="text-3xl text-brand-grey-4 hover:text-brand-green-2 transition-all duration-700"><i
              class="uil uil-bars"></i></span>
        </div>
        <nav class="ml-auto h-full text-sm flex items-center sm:hidden">
          <ul class="flex h-full list-none items-center ">
            <li  v-for="menuItem in menuItems" :key="menuItem.text"
              class=" ml-4 first:ml-0 hover:text-brand-green-2 text-brand-grey-4 transition-all duration-700  font-semibold">
              <router-link  :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.text
              }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div
          class="h-full items-center flex ml-4  hover:text-brand-green-2 text-brand-grey-4 transition-all duration-700">
          <i class="uil uil-instagram"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "ABOUT", url: "/#aboutme" }, //section:'/#home#aboutme'
        { text: "GALLERY", url: "/#gallery" },
        { text: "BOOKING", url: "/#booking" },
        { text: "AFTERCARE", url: "/aftercare" },
        { text: "FAQ", url: "/faq" },
      ],
      isOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    }
  }
};
</script>
