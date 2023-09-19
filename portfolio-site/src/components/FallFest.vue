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

      <div class="fallfest">
      <div class="socialmedia">
        <div class="smtext">
        <h1>Fall Fest 2022</h1>
        <p class="title">Janszen Associates' wanted to host a fall-themed event that specifically targeted their past clients
            as a way to thank them for their business and referrals. This campaign included social media posts, emails, and physical signage for the event.</p>
        </div>
        <div class="posts">
        <h2>Facebook and Instagram Posts</h2>
        <p>For a successful campaign, I created multiple eye-catching graphics to and posted frequently leading up to the event. </p>
        <div class="smphotos">
        <img src="../assets/Images/marketing/fallfest1.png" alt="Save the date version 1" />
        <img src="../assets/Images/marketing/fallfest2.png" alt="Save the date version 2" />
        <img src="../assets/Images/marketing/fallfest3.png" alt="Save the date version 3" />
        <img src="../assets/Images/marketing/fallfest4.png" alt="Save the date version 4" />
        </div>
        </div>

        <div class="fbevent">
          <div class="fbtext">
        <h2>Facebook Event</h2>
        <p>To drum up even more interest, I created a public Facebook event for the campaign and sent invites to our client list, had the agents invite their friends
          and family, and posted regularly in the event so that it stayed in peoples' feeds. 
        </p>
        </div>
        <div class="fephotos">
        <img src="../assets/Images/marketing/fallfestfb.jpg" alt="Facebook event banner">
        <img src="../assets/Images/marketing/fallfestemail.jpg" alt="Facebook event details">
        </div>
        </div>
    
      <div class="email">
        <div class="etext">
        <h2>Email Campaign:</h2>
        <p>Since not all of their clients are on social media, I did email and post card (not pictured) campaigns</p>
        </div>
        <div class="ephotos">
        <img src="../assets/Images/marketing/fallfestemail3.jpg" alt="Email campaign">
        <img src="../assets/Images/marketing/fallfestemail2.jpg" alt="Email campaign pg2">
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
.smtext{
  grid-area: campaign;
  background-color: #002130;
  padding: 2rem;
  border-radius: 10px;
  color: white;
}
.fallfest {
  border-radius: 10px;
  padding: 2rem 4rem 1rem 4rem;
  margin-left: auto;
  margin-right: auto;
}
.etext{
  max-width: 600px;
}
.ephotos{
  display: flex;
  flex-direction: column;
}
.email img{
  border-radius: 10px;
  max-width: 600px;
}
.fephotos{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.socialmedia {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "campaign campaign"
                      "title title"
                      "insta email"
                      "facebook email";
}
.socialmedia h1{
  color: #B95952;
}
.email{
  grid-area: email;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}
.title{
  grid-area: title;
  max-width: 1500px;
  margin-bottom: 2rem;
}
.posts{
  grid-area: insta;
  padding: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-height: 850px;
  border: 4px solid goldenrod;
  border-radius: 10px;
}
.posts p{
  max-width: 600px;
}
.posts img{
  max-width: 300px;
  border-radius: 10px;
}
.smphotos{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
.fbevent{
  margin-left: auto;
  margin-right: auto;
  margin-top: -300px;
  grid-area: facebook;
  padding: 3rem 2rem 0rem 2rem;
  max-height: 1060px;
  background-color:#002130;
  color: white;
  border-radius: 10px;
}
.fbtext{
  max-width: 600px;
}
.fbevent img{
  max-width: 600px;
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
  color: goldenrod;
}
</style>