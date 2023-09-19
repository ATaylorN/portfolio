<template>
  <div>
    <Header/>
    <RealEstate/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import RealEstate from '../components/RealEstate.vue'

export default {
    name: 'real-estate',
    components: {
        Header,
        RealEstate
    }
}
</script>

<style>

</style>