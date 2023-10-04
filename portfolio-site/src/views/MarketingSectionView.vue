<template>
  <div>
    <Header/>
    <MarketingSection/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MarketingSection from '../components/MarketingSection.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'marketing-section',
    components: {
        Header,
        MarketingSection,
        Footer
    }
}
</script>

<style>

</style>