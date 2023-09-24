<template>
  <div>
    <Header/>
    <PortraitArt/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import PortraitArt from '../components/PortraitArt.vue'

export default {
    name: 'portrait-art',
    components: {
        Header,
        PortraitArt
    }
}
</script>

<style>

</style>