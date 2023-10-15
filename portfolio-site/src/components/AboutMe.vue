<template>
<div class="background">
  <div class="about">
    <img class="me" src="../assets/Images/Headshot.jpg" alt="Amanda Taylor">
    
    <div class="about-me">
    <h1 class="title">Amanda Taylor</h1>
    <p class="details">I'm a software developer, veteran, and artist with over 11 years of customer service and sales experience. 
        As far back as I can remember, I’ve always been the creative type. I was the kid that spent all of my time drawing crayon pictures to be hung up on the refrigerator. 
        As I got a little older, I participated in and won numerous art competitions and I was always the kid in class with all the sketches in the margins of their notes. 
        Whether it’s drawing or building an app, if I’m creating something, I’m happy. I find the process of figuring out how to bring an idea to reality to be incredibly 
        rewarding and I have a passion for learning.</p>
    </div>
    <div class="contact">
       <a href="https://www.linkedin.com/in/amanda-taylor1/"> <img src="../assets/Images/icons/linkedin.png" alt="LinkedIn: amanda-taylor1"></a>
        <a href="https://github.com/ATaylorN"><img src="../assets/Images/icons/github.png" alt="GitHub: ATaylorN"></a>
        
        <div class="dropdown">
        <button type="button" data-bs-toggle="dropdown"><img src="../assets/Images/icons/email.png" alt="Email: amandanagies@gmail.com"> </button>
        <ul class="dropdown-menu">
            <li class="dropdown-item"><h4>Email Me</h4>
                <form ref="form" @submit.prevent="sendEmail" class="form">
                <label>Name</label>
                <input type="text" name="user_name" required>
                <label>Email</label>
                <input type="email" name="user_email" required>
                <label>Message</label>
                <textarea name="message" required></textarea>
                <input type="submit" value="SEND" class="send">
            </form></li>
            <li class="status" v-show="showStatus=true">{{statusMessage}}</li>
        </ul>
        </div>
        <div>
            <a href="https://icons8.com/">Icons by Icons8</a>
        </div>
    </div>

    <container class="behindimg"></container>
  </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data(){
        return{
            showStatus: false,
            statusMessage: ''
        }
    },
    methods: {
    sendEmail() {
      emailjs.sendForm('Contact_Me', 'contact_form', this.$refs.form, 'GEie82de2ImMbutSn')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.statusMessage = 'Email Sent!'
            this.$refs.form.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            this.statusMessage = "Error Occurred. Please Try Again!"
        });
    }
  }
}
</script>

<style scoped>
.status{
    text-align: center;
    font-family: Oswald, sans-serif;
    font-size: 24px;
    padding: 1rem;
    color:#002130;
    font-weight: 500;
}
.dropdown-item:active{
    background-color: white;
}
.send{
    font-family: Oswald, sans-serif;
    font-size: 24px;
    font-weight: 500;
    background-color: #B95952;
    border: none;
    padding: 1rem;
    margin-top: 10px;
    border-radius: 10px;
    color: white;
}
.send:hover{
    background-color: #002130;
}
.form textarea{
    height: 200px;
    font-size: 18px;
}
.dropdown-item h4{
    font-family: Oswald, sans-serif;
    color: #B95952;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
}
.form {
    display: flex;
    flex-direction: column;
}
.form input{
    min-width: 400px;
    font-size: 18px;
    margin-bottom: 10px;
}
.form label{
    font-size: 20px;
    font-family: Oswald,sans-serif;
    color: #002130;
    font-weight: 500;
}
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
    height: 710px;
    box-shadow: 0px 5px 20px 0px black;
    background-image: url('../assets/Images/background/fogtexture.jpg');
    background-repeat:round;
    margin-top: -660px;
    margin-left: -50px;
    margin-right: 40px;
    z-index: -1;
    border-radius: 8px;
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
    padding-left: 200px;
    padding-bottom: 2rem;
    font-size: 64px;
    font-family: 'Quantico', Courier, monospace;
    text-decoration: underline;
    color: black;
}
.about-me p{
    font-size: 28px;
    font-family: 'Oswald', Courier, monospace;
    font-weight:300;
}
.contact{
    grid-area: contact;
    padding: 4rem; 
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
}
.contact img{
    max-width: 80px;
    margin-right: 20px;
}
.contact a{
    text-decoration: none;
    color: gray;
    font-size: 12px;
}
.contact a:hover{
    transform: scale(1.2);
    transition-duration: 0.8s;
}
.contact button:hover{
    transform: scale(1.2);
    transition-duration: 0.8s;
}
.contact button{
    border: none;
    background-color: white;
}
</style>