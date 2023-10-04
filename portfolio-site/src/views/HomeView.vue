<template>
  <div class="home">
  <Header/>

  <div class="wip">
    <h1>Under Construction</h1>
    <h2>Feel feel to browse but please keep in mind that it's a work in progress</h2>
    <p>Thanks!</p>
    <img src="../assets/Images/icons/linkedin.png" alt="LinkedIn: amanda-taylor1">
    <img src="../assets/Images/icons/github.png" alt="GitHub: ATaylorN">
    <img src="../assets/Images/icons/email.png" alt-="email: amandanagies@gmail.com">
 </div>

<section class="coding">
  <h2>Coding Projects - Title</h2>
  <div class="icons">
      <img src="../assets/Images/icons/bootstrap.png" alt="BootStrap logo" />
      <img src="../assets/Images/icons/intellij.png" alt="IntelliJ logo" />
      <img src="../assets/Images/icons/javascript.png" alt="JavaScript logo" />
      <img src="../assets/Images/icons/java.png" alt="Java logo" />
      <img src="../assets/Images/icons/html.png" alt="HTML logo" />
      <img src="../assets/Images/icons/figma.png" alt="Figma logo" />
      <img src="../assets/Images/icons/vue.png" alt="Vue logo" />
      <img src="../assets/Images/icons/vscode.png" alt="Visual Studio Code logo" />
      <img src="../assets/Images/icons/css.png" alt="CSS logo" />
      <img src="../assets/Images/icons/pgadmin.png" alt="PostgreSQL logo" />
  </div>
  <div class="apps">
  </div>
</section>

  <section class="marketing">
  <h2>Marketing - Title</h2>
  <div class="icons">
      <img src="../assets/Images/icons/instagram.png" alt="Instagram logo" />
      <img src="../assets/Images/icons/facebook.png" alt="Facebook logo" />
      <img src="../assets/Images/icons/canva.png" alt="Canva logo" />
      <img src="../assets/Images/icons/mailchimp.png" alt="MailChimp logo" />
      <img src="../assets/Images/icons/airtable.png" alt="AirTable logo" />
  </div>
  <div class="projects">
    <div class="card" style="width:500px">
    <img class="card-img-top" src="../assets/Images/marketing/fallfest1.png" alt="Fall Fest Campaign">
    <div class="card-img-overlay">
    <h4 class="card-title">EVENT - FALL FEST</h4>
  </div>
</div>

    <div class="card" style="width:400px">
    <img class="card-img-top" src="../assets/Images/marketing/buysell3.png" alt="Buying/Selling Seminar">
    <div class="card-body">
    <h4 class="card-title"><a href="/buy-and-sell">Event: Buying/Selling Seminar</a></h4>
    </div>
    </div>

    <div class="card" style="width:400px">
    <img class="card-img-top" src="../assets/Images/marketing/closed.png" alt="Real Estate">
    <div class="card-body">
    <h4 class="card-title"><a href="/real-estate">Real Estate Campaigns</a></h4>
    </div>
    </div>
  </div>
  </section>

  <section class="portraits">
    <h2>Portraits - Title</h2>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="9"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="10"></button>
  </div>

  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/Images/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/chester_bennington.jpg" alt="Linkin Park - Chester Bennington" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/cutiepiesensei_cosplay.jpg" alt="CutiePieSensei - Black Panther Cosplay" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/eleventh_doctor.jpg" alt="Doctor Who - Eleventh Doctor" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/jessica_jones.jpg" alt="Jessica Jones - Jessica & Kilgrave" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/loki_of_asgard.jpg" alt="Marvel - Loki" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/newly_weds.jpg" alt="Commission - Newly Weds" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/nux.jpg" alt="Mad Max: Fury Road - Nux" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/portraits/nux2.jpg" alt="Mad Max: Fury Road - Nux" class="d-block w-100">
    </div>
  </div>

  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" id="nextbtn"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon" id="nextbtn"></span>
  </button>
    </div>
  </section>

  <section class="footer"></section>

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

<style scoped>
.projects{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
}
.card-img-overlay{
  display: flex;
  align-items: flex-end;
  background: linear-gradient(transparent 60%,black);
}
.card-img-overlay h4{
  color: white;
  margin-left: auto;
  margin-right: auto;
}
.card-img-top{
  filter: blur(30%);
}
.portraits{
  background-color: #002130;
}
.portraits h2 {
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  font-family: 'Oswald', Courier, monospace;
  font-size: 32px;
  font-weight: 300;
}
#nextbtn{
  background-color: gray;
  border-radius: 8px;
  height: 80px;
}
.footer{
  background-color: black;
  width: 100vw;
  height: 200px;
}
#demo{
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  background-color: white;
  border-radius: 10px;
}
#demo img {
  object-fit: contain;
  background-position: top;
  max-height: 600px;
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