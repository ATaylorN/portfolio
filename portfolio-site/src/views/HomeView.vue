<template>
  <div class="home">
  <Header/>

  <div class="wip">
    <h1>Under Construction</h1>
    <h2>Feel feel to browse but please keep in mind that it's a work in progress</h2>
    <p>Thanks!</p>
 </div>
 </div>

</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
  
}
</script>

<style>
.home{
  background-image: url('../assets/Images/background/fogtextureblue.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.wip{
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  width: 900px;
  text-align: center;
  border-radius: 10px;
  background-color: #B95952;
  color: white;
}
.wip h1{
  font-family: 'Quantico', Courier, monospace;
  font-size: 75px;
  font-weight: 700;
  margin-bottom: 2rem;
}
.wip h2{
  font-family: 'Oswald', Courier, monospace;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 1rem;
}
.wip p{
  font-family: 'Oswald', Courier, monospace;
  font-size: 20px;
  font-weight: 300;
}
</style>