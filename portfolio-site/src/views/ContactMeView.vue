<template>
  <div>
    <Header/>
    <ContactMe/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ContactMe from '../components/ContactMe.vue'

export default {
    name: 'contact-me',
    components: {
        Header,
        ContactMe
    }

}
</script>

<style>

</style>