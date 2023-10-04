<template>
  <div>
    <Header/>
    <PortraitArt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import PortraitArt from '../components/PortraitArt.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'portrait-art',
    components: {
        Header,
        PortraitArt,
        Footer
    }
}
</script>

<style>

</style>