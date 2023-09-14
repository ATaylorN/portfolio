<template>
  <div class="about">
    <img class="me" src="../assets/Images/Headshot.jpg" alt="Amanda Taylor">
    
    <div class="about-me">
    <h1 class="title">Amanda Taylor</h1>
    <p class="details">I'm a software developer, veteran, and artist with over 11 years of customer service and sales experience. 
        As far back as I can remember, I’ve always been the creative type. I was the kid that spent all my time drawing crayon pictures to be hung on the refrigerator. 
        As I got a little older, I participated in and won numerous art competitions and I was always the kid in class with all the sketches in the margins of their notes. 
        Whether it’s drawing or building an app, if I’m creating something, I’m happy. I find the process of figuring out how to bring an idea to reality to be incredibly 
        rewarding and I have a passion for learning.</p>
    </div>
    <div class="contact">
       <a href="https://www.linkedin.com/in/amanda-taylor1/"> <img src="../assets/Images/icons/linkedin.png" alt="LinkedIn: amanda-taylor1"></a>
        <a href="https://github.com/ATaylorN"><img src="../assets/Images/icons/github.png" alt="GitHub: ATaylorN"></a>
        <img src="../assets/Images/icons/email.png" alt="Email: amandanagies@gmail.com">
        <div>
            <a href="https://icons8.com/">Icons by Icons8</a>
        </div>
    </div>

    <container class="behindimg"/>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.me{
    grid-area: photo;
    max-width: 400px;
    border: 4px solid goldenrod;
}
.about{
    margin-left: auto;
    margin-right: auto;
    padding: 6rem 0rem 6rem 6rem;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    grid-template-areas: "photo me"
                        "photo me"
                        "photo contact"
                        "behind .";
}             
.behindimg{
    grid-area: behind;
    border: 5px solid #B95952;
    height: 710px;
    background-color: #B95952;
    margin-top: -750px;
    margin-left: -40px;
    margin-right: 40px;
    z-index: -1;
    
}
.about-me{
    grid-area: me;
    padding: 4rem 8rem 4rem 4rem;
    display: flex;
    flex-direction: column;
    background-color: #B95952;
    color: white;
}
.about-me h1{
    text-align: center;
    padding-bottom: 2rem;
    font-size: 64px;
    font-family: 'Quantico', Courier, monospace;
    text-decoration: underline;
}
.about-me p{
    font-size: 28px;
    font-family: 'Oswald', Courier, monospace;
}
.contact{
    grid-area: contact;
    padding: 4rem;
}
.contact img{
    max-width: 50px;
    margin-right: 20px;
}
.contact a{
    text-decoration: none;
    color: gray;
    font-size: 12px;
}
</style>