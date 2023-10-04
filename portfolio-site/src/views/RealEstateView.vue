<template>
  <div>
    <Header/>
    <RealEstate/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import RealEstate from '../components/RealEstate.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'real-estate',
    components: {
        Header,
        RealEstate,
        Footer
    }
}
</script>

<style>

</style>