<template>
<div>
  <nav class="navbar navbar-expand-sm" id="header">
  <div class="container-fluid">
    <a href="/" class="navbar-text">Amanda Taylor - Software Developer</a>
     <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/about">About Me</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="/coding">Coding</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Marketing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Portraits</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: "header-nav"
}
</script>


<style scoped>
#header a{
  text-decoration: none;
  color: white;
  font-family:'Quantico', Courier, monospace;
}
#header{
  background-color: #002130;
  padding: 0.5rem 2rem;
}
#header a:hover{
  color: goldenrod;
}
</style>
