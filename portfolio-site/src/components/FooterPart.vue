<template>
  <div class="footer">

      <div class="socials">
       <h2>Find Me On</h2>

        <div class="item">
        <img src="../assets/Images/icons/linkedin.png" alt="LinkedIn logo">
        <p>LinkedIn - Amanda-Taylor1</p>
        </div>

        <div class="item">
        <img src="../assets/Images/icons/github.png" alt="GitHub logo">
        <p>GitHub - ATaylorN</p>
        </div>

       </div>

    <div class="contact">
    <h2>Questions or Comments?</h2>
    <p>Feel free to email me</p>
    <div class="item">
    <img src="../assets/Images/icons/email.png" alt="email icon">
    <p>amandanagies@gmail.com</p>
    </div>
    </div>

  </div>
</template>

<script>
</script>

<style scoped>
.item{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 200px;
  padding: 4rem;
  background-color: #002130;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: Oswald, sans-serif;
  font-weight: 800;
}
img{
  max-width: 30px;
  max-height: 30px;
}
h2{
  margin-top: 2rem;
  margin-bottom: 1rem;
}

</style>