<template>
  <div>
    <Header/>
    <AboutMe/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Footer from '@/components/FooterPart.vue'

export default {
    name: "about-me",
    components: {
        Header,
        AboutMe,
        Footer
    }

}
</script>

<style>

</style>