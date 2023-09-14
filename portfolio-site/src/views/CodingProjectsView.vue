<template>
  <div>
    <Header/>
    <CodingProjects/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import CodingProjects from '../components/CodingProjects.vue'

export default {
    name: 'coding-projects',
    components: {
        Header,
        CodingProjects
    }

}
</script>

<style>

</style>