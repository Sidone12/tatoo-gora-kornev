<template>
  <section class=" bg-brand-black-1 py-28 sm:py-20" id="aboutme">
    <a name="aboutme"></a>
    <HeadingText
      text="ABOUT ME"
     />
    <div class="w-full h-full flex px-10 pt-10 sm:flex-col md:flex-col md:items-center sm:items-center justify-center">
      <div class="w-1/3 sm:w-1/2 md:w-1/2 md:pb-5">
        <div class="px-10 sm:p-0 sm:place-self-center">
          <img src="../../assets/photo-1575930005384-8236e807c565.avif" alt="" />
        </div>
      </div>
      <div class="w-2/3 px-20 flex flex-col justify-center md:px-5 sm:w-full sm:p-0 sm:pt-3">
        <p v-for="item, index in items" :key="index" class=" text-brand-grey  text-sm mb-3">
          {{item.text}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";

export default {
  components: { HeadingText },
  name: "AboutMe",
  data(){
    return{
      items:[
        {text:'From Barcelona, at the age of 17 I started working at a tattoo shop, for 7 years, drawing custom designs for a tattoo artist in all styles.'},
        {text:"At the same time I was studying a Bachelor in Fine Arts at the University of Barcelona, where I specialised in drawing and printmaking. I also had the chance to make an internship to Helsinki at the end of the studies. During this period I participated in several exhibitions and publications."},
        {text:"At the same time I was studying a Bachelor in Fine Arts at the University of Barcelona, where I specialised in drawing and printmaking. I also had the chance to make an internship to Helsinki at the end of the studies. During this period I participated in several exhibitions and publications."},
        {text:"At the same time I was studying a Bachelor in Fine Arts at the University of Barcelona, where I specialised in drawing and printmaking. I also had the chance to make an internship to Helsinki at the end of the studies. During this period I participated in several exhibitions and publications."}
      ]
    }
  }
};
</script>

<style lang="scss" scoped></style>
