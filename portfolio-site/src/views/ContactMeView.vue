<template>
  <div>
    <Header/>
    <ContactMe/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ContactMe from '../components/ContactMe.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'contact-me',
    components: {
        Header,
        ContactMe,
        Footer
    }

}
</script>

<style>

</style>