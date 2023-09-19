<template>
  <div>
    <Header/>
    <BuySell/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import BuySell from '../components/BuySell.vue'

export default {
    name: 'buy-and-sell',
    components: {
        Header,
        BuySell
    }
}
</script>

<style>

</style>