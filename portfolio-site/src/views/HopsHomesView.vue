<template>
  <div>
    <Header/>
    <HopsHomes/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HopsHomes from '../components/HopsHomes.vue'

export default {
    name: 'marketing-section',
    components: {
        Header,
        HopsHomes
    }
}
</script>

<style>

</style>