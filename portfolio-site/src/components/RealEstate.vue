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

      <div class="campaigns">
      <div class="alltheways">
        <div class="atwtext">
        <h1>Real Estate Marketing - 2021 to 2023</h1>
        <p class="title">Individual Realtors and Real Estate Teams need a ton of marketing to get in front of potential home-seller and home-buying clients and stay top of mind.
            This can mean numerous social media campaigns, listing presentations, events, brochures, email campaigns, and brochures (just to name a few!)
        </p>
        </div>
        <div class="posts">
        <h2>Campaign - All the Ways JA Can Help You</h2>
        <p>When you think of a Realtor, you may only think of buying and/or selling a home, but this team wants you to know that they can also
            help with things like new construction and commercial space. This campaign included social media posts and a flyer created for their
            listing presentation.
        </p>
        <div class="atwphotos">
        <img src="../assets/Images/marketing/realestate1.png" alt="Save the date version 1" />
        <img src="../assets/Images/marketing/realestate2.png" alt="Save the date version 2" />
        <img src="../assets/Images/marketing/realestate3.png" alt="Save the date version 3" />
        <img src="../assets/Images/marketing/realestate4.png" alt="Save the date version 3" />
        <img src="../assets/Images/marketing/realestate5.png" alt="Save the date version 3" />
        <img src="../assets/Images/marketing/realestateflyer.png" alt="Save the date version 3" />
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
        <img src="../assets/Images/marketing/comingsoon.png" alt="Save the date version 1" />
        <img src="../assets/Images/marketing/justlisted.png" alt="Save the date version 2" />
        <img src="../assets/Images/marketing/openhouse.png" alt="Save the date version 3" />
        <img src="../assets/Images/marketing/closed.png" alt="Save the date version 3" />
        </div>
        </div>
    
      <div class="email">
        <div class="etext">
        <h2>Email Newsletter</h2>
        <p>I created and implemented a monthly email newsletter which included a market update, highlights from past events, advertisements for upcoming events,
            and their current listings.
        </p>
        </div>
        <div class="ephotos">
        <img src="../assets/Images/marketing/newsletter.png" alt="Save the date version 1" />
        <img src="../assets/Images/marketing/newsletter2.png" alt="Save the date version 2" />
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
  max-width: 500px;
}
.listphotos{
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
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
.title{
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
  max-height: 1480px;
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
 max-width: 1550px;
  color: white;
}
.listings img{
max-width: 400px;
  border-radius: 10px;
}
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
</style>