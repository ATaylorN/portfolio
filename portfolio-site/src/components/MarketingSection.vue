<template>
  <div class="marketing">
    <div class="icons">
    <h1>Tools I Use:</h1>
      <img src="../assets/Images/icons/instagram.png" alt="Instagram logo" />
      <img src="../assets/Images/icons/facebook.png" alt="Facebook logo" />
      <img src="../assets/Images/icons/canva.png" alt="Canva logo" />
      <img src="../assets/Images/icons/mailchimp.png" alt="MailChimp logo" />
      <img src="../assets/Images/icons/airtable.png" alt="AirTable logo" />
      </div>

    <div class="hopshomes">
      <div class="hhtext">
      <h1>Hops and Homes Event</h1>
      <p>Details</p>
      <h2>Social Media, FB event, physical signs, email</h2>
      </div>
      <div class="hhphotos">
      <img class="one" src="../assets/Images/coding/landing-page.png" alt="Flash Cards landing page" />
      <img class="two" src="../assets/Images/coding/questions.png" alt="Flash Card questions" />
      <img class="three" src="../assets/Images/coding/quiz-view.png" alt="Flash Card quiz" />
      <img class="four" src="../assets/Images/coding/further-study.png" alt="Flash Card further study" />
      </div>
    </div>

    <div class="general">
      <div class="gphotos">
        <img src="../assets/Images/coding/LandingPage.png" alt="Meal Plan landing page" />
        <img src="../assets/Images/coding/Calendar.png" alt="Meal Plan calendar" />
      </div>
      <div class="gdetails">
      <h1>General Real Estate</h1>
       <p>Details</p>
        <h2>Social media, email, email newsletter, flyers, open house/just listed/closed</h2>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.icons{
   margin-bottom: 4rem;
   margin-left: auto;
   margin-right: auto;
}
.icons h1{
  text-align: center;
  color:#002130;
}
.marketing{
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
}
.marketing h1{
  font-family: 'Quantico', Courier, monospace;
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.marketing h2{
  font-family: 'Oswald', Courier, monospace;
  font-size: 32px;
  font-weight: 500;
}
.marketing p{
  font-family: 'Oswald', Courier, monospace;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
}
.marketing h2{
  margin-bottom: 1rem;
  font-family: 'Oswald', Courier, monospace;
  color: goldenrod;
}
</style>