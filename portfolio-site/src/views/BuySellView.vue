<template>
  <div>
    <Header/>
    <BuySell/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import BuySell from '../components/BuySell.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'buy-and-sell',
    components: {
        Header,
        BuySell,
        Footer
    }
}
</script>

<style>

</style>