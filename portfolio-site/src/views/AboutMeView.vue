<template>
  <div>
    <Header/>
    <AboutMe/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
    name: "about-me",
    components: {
        Header,
        AboutMe
    }

}
</script>

<style>

</style>