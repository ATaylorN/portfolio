<template>
 <div class="marketing">
    <div class="icons">
    <h1 class="animate__animated animate__zoomIn">Tools I Use:</h1>
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/instagram.png" alt="Instagram logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/facebook.png" alt="Facebook logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/canva.png" alt="Canva logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/mailchimp.png" alt="MailChimp logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/airtable.png" alt="AirTable logo" />
      </div>

      <div class="campaigns">
      <div class="alltheways">
        <div class="atwtext">
        <h1 class="animate__animated animate__fadeInRight">Real Estate Marketing - 2021 to 2023</h1>
        <p id="title" class="animate__animated animate__fadeInRight">Individual Realtors and Real Estate Teams need a ton of marketing to get in front of potential home-seller and home-buying clients and stay top of mind.
            This can mean numerous social media campaigns, listing presentations, events, brochures, email campaigns, and brochures (just to name a few!)
        </p>
        </div>
        <div class="posts">
        <h2 class="animate__animated animate__slideInUp">Campaign - All the Ways JA Can Help You</h2>
        <p class="animate__animated animate__slideInUp">When you think of a Realtor, you may only think of buying and/or selling a home, but this team wants you to know that they can also
            help with things like new construction and commercial space. This campaign included social media posts and a flyer created for their
            listing presentation.
        </p>
        <div class="atwphotos">
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestate1.png" alt="HomeBuying" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestate2.png" alt="HomeSelling" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestate3.png" alt="New Construction" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestate4.png" alt="Commercial Leasing and Sales" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestate5.png" alt="Trusted Partners" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/realestateflyer.png" alt="Real Estate Flyer" />
        </div>
        </div>

        <div class="listings">
          <div class="listtext">
        <h2>Campaign - Listings</h2>
        <p> For every single listing that the team would do every year, I created Coming Soon, Just Listed, Open House (if applicable), and Closed
            social media posts to get their listing in front of as many potential buyers as possible.
        </p>
        </div>
        <div class="listphotos">
        <img src="../assets/Images/marketing/comingsoon.png" alt="Coming Soon" />
        <img src="../assets/Images/marketing/justlisted.png" alt="Just Listed" />
        <img src="../assets/Images/marketing/openhouse.png" alt="Open House" />
        <img src="../assets/Images/marketing/closed.png" alt="Closed" />
        </div>
        </div>
    
      <div class="email">
        <div class="etext">
        <h2 class="animate__animated animate__slideInUp">Email Newsletter</h2>
        <p class="animate__animated animate__slideInUp">I created and implemented a monthly email newsletter which included a market update, highlights from past events, advertisements for upcoming events,
            and their current listings.
        </p>
        </div>
        <div class="ephotos">
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/newsletter.png" alt="Newsletter" />
        <img class="animate__animated animate__slideInUp" src="../assets/Images/marketing/newsletter2.png" alt="Newsletter" />
        </div>
      </div>
    </div>
</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.atwtext{
  grid-area: campaign;
  padding: 2rem;
  border-radius: 10px;
  background-color: #002130;
  color: white;
  box-shadow: 0px 5px 20px 0px black;
}
.campaigns{
  border-radius: 10px;
  padding: 2rem 4rem 1rem 4rem;
  margin-left: auto;
  margin-right: auto;
}
.etext{
  max-width: 500px;
}
.ephotos{
  display: flex;
  flex-direction: column;
}
.email img{
  border-radius: 10px;
  max-width: 480px;
}
.listphotos{
  display: flex;
  flex-direction: row
}
.alltheways {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "campaign campaign"
                      "title title"
                      "atw email"
                      "atw email"
                        "listings listings";
}
.email{
  grid-area: email;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
#title{
  grid-area: title;
  max-width: 1680px;
  margin-bottom: 2rem;
}
.posts{
  grid-area: atw;
  padding: 2rem;
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  max-height: 1400px;
  border: 4px solid #CE0F11;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 0px #CE0F11;
}
.posts h2{
color: #CE0F11;
}
.posts p{
  max-width: 700px;
}
.posts img{
  max-width: 350px;
  gap: 10px;
}
.atwphotos{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.listings{
  margin-top: 1rem;
  grid-area: listings;
  padding: 4rem;
  border-radius: 10px;
  background-color: #002130;
  box-shadow: 0px 5px 20px 0px black;
}
.listtext{
 max-width: 1450px;
 margin-left: auto;
 margin-right: auto;
  color: white;
}
.listings img{
  width: 345px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.listphotos{
  display: flex;
  flex-wrap: wrap;
}
.icons{
   margin-bottom: 1rem;
   margin-top: 1rem;
   margin-left: auto;
   margin-right: auto;
}
.icons h1{
  text-align: center;
  color:#002130;
}
.icons img{
  max-width: 70px;
}
.marketing{
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem;
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
}
@media (max-width: 1415px){
  .alltheways {
    grid-template-columns: 1fr;
    grid-template-areas: "campaign"
                          "title"
                          "atw"
                          "email"
                          "listings";
}
  .listings img{
    max-width: 200px;
  }
}
</style>