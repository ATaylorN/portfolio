<template>
  <div>
    <Header/>
    <CodingProjects/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import CodingProjects from '../components/CodingProjects.vue'
import Footer from '../components/FooterPart.vue'

export default {
    name: 'coding-projects',
    components: {
        Header,
        CodingProjects,
        Footer
    }

}
</script>

<style>

</style>