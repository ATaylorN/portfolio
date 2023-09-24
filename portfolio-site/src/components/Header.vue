<template>
  <nav class="navbar navbar-expand-sm" id="header">
  <div class="container-fluid">
    <a href="/" class="navbar-text">Amanda Taylor - Software Developer</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
     <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About Me</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="/coding">Coding</a>
      </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Marketing</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/fall-fest">Fall Fest</a></li>
            <li><a class="dropdown-item" href="/buy-and-sell">Buying/Selling Seminar</a></li>
            <li><a class="dropdown-item" href="/real-estate">Real Estate</a></li>
          </ul>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="/portraits">Portraits</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
    </div>
  </div>
</nav>
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
.dropdown-menu{
  background-color:#002130;
}
</style>
