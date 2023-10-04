<template>
  <div>
    <Header/>
    <FallFest/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import FallFest from '@/components/FallFest.vue'
import Footer from '@/components/FooterPart.vue'

export default {
    name: "fall-fest",
    components: {
        Header,
        FallFest,
        Footer
    }

}
</script>

<style>

</style>