<template>
  <div>
    <Header/>
    <MarketingSection/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MarketingSection from '../components/MarketingSection.vue'

export default {
    name: 'marketing-section',
    components: {
        Header,
        MarketingSection
    }
}
</script>

<style>

</style>