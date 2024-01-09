import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import AftercareView from "../views/AftercareView.vue"
import FaqView from "../views/FaqView.vue"

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/aftercare",
      name: "Aftercare",
      component: AftercareView,
    },
    {
      path: "/faq",
      name: "Faq",
      component: FaqView,
    }
]
  
const router = createRouter({
    history: createWebHistory(),
  routes,
  // linkActiveClass: "text-brand-green-2",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || {top:0}

    // return savedPosition || new Promise((resolve) => {
    //   setTimeout(()=>resolve({top:0, behavior:"smooth"}),1000)
    // })
    }
  });
  
  export default router;