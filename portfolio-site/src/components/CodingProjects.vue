<template>
  <div class="coding">

    <div class="icons">
    <h1>Tools I Use:</h1>
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

    <div class="mealplan">
      <div class="photos">
        <img src="../assets/Images/coding/LandingPage.png" alt="Meal Plan landing page" />
        <img src="../assets/Images/coding/Calendar.png" alt="Meal Plan calendar" />
      </div>
      <div class="details">
      <h1>Meal Planner App</h1>
       <p>12 weeks into the program, we were assigned to a team of 4. Together we utilized Java, Spring Boot, PostgreSQL, and Vue.js (just to name a few) 
        to develop a meal planner web application where a user can view, add, or update recipes with ease. In the 'Build a Recipe' page, the user can search for 
        ingredients to add to their recipe and the information/images are supplied by an API. Our Calendar contained a lot of functionality; by simply dragging and 
        dropping selected recipes onto the calendar, users can plan out a full month's worth of meals accurately. With the option to select a date range, the application 
        will display the necessary ingredients needed for that period. To further streamline the process, users can print or email the grocery list, 
        and even download a VCS file that is compatible with Google Calendar.</p>

        <h2>What I Learned:</h2>
        <p>In this project, I learned a lot about team dynamics and the importance of communication. Some of my team members were people I had never met before the 
          project since they were from another class. We also had half of the team working remote, but we were still able to produce an awesome product. Throughout this 
          process, I feel like I never stopped learning. We ran into a couple of roadblocks in the beginning because we were eager to get to coding, but once we took the time 
          to thoroughly design out what we wanted the application to be, we were able to execute far more efficiently. I personally learned a ton about frontend including HTML,
           CSS, and Vue.js. As a result, in just 2 weeks, we were able to develop an app that had quite a few features, looked amazing, and is something that we all feel proud of.</p>
      </div>
    </div>

    <div class="flashcards">
      <div class="fctext">
      <h1>Flash Cards App</h1>
      <p>This project was actually heavily inspired by a fellow classmate who created something similar for his .NET studying and I wanted to do something similar for Java. 
        Using Java, Spring Boot, and PostgreSQL for the backend and Vue.js for the frontend, I created an app where the user can choose to have random flashcards to cycle 
        through or chose "Study Mode". "Study Mode" allows a user to cycle through questions and mark whether or not they got the question right. When the user opts to exit, 
        the user is shown a list of all of the questions that they got incorrect so that they know what they need to continue studying. There's also an option for the user to 
        really put their knowledge to the test with a quiz.</p>

      <h2>What I Learned:</h2>
      <p>Insert what I learned here</p>
      </div>
      <div class="fcphotos">
      <img class="one" src="../assets/Images/coding/landing-page.png" alt="Flash Cards landing page" />
      <img class="two" src="../assets/Images/coding/questions.png" alt="Flash Card questions" />
      <img class="three" src="../assets/Images/coding/quiz-view.png" alt="Flash Card quiz" />
      <img class="four" src="../assets/Images/coding/further-study.png" alt="Flash Card further study" />
      </div>
    </div>

    <div class="Coming Soon">
      <h1>Library App</h1>
      <p>Insert Description Here</p>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.icons{
   margin-bottom: 6rem;
   margin-left: auto;
   margin-right: auto;
}
.icons h1{
  text-align: center;
  color:#002130;
}
.coding{
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.coding h1{
  font-family: 'Quantico', Courier, monospace;
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.coding h2{
  font-family: 'Oswald', Courier, monospace;
  font-size: 28px;
  font-weight: 500;
}
.coding p{
  font-family: 'Oswald', Courier, monospace;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.flashcards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text photo";
  background-color: #002130;
  border-radius: 10px;
  color: white;
  margin-bottom: 2rem;
  align-items: center;
  justify-items: center;
  box-shadow: 0px 5px 20px 0px black;
  padding: 2rem 0rem;
}
.fctext{
  grid-area: text;
  padding: 4rem;
}
.fcphotos{
  grid-area: photo;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%; 
  gap: 6px;
  padding: 1rem;
}

.mealplan{
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: "photo text";
  background-color: #B95952;
  border-radius: 10px;
  color: white;
  margin-bottom: 2rem;
  align-items: center;
  box-shadow: 0px 5px 20px 0px black;
  padding: 2rem 0rem;
}
.photos{
  grid-area: photo;
}
.mealplan img:hover{
  transform: scale(1.5); 
  transition-duration: 0.8s;
}
.details{
  grid-area: text;
  padding: 2rem 4rem 2rem 2rem;
}
.icons img{
  max-width: 50px;
}
.mealplan img{
  max-width: 600px;
  margin: 10px;
  border-radius: 10px;
  padding-left: 2rem;
}
.flashcards img{
  max-width: 100%;
  height: 400px;
  border-radius: 10px;
}
.flashcards img:hover{
  transform: scale(1.5); 
  transition-duration: 0.8s;
}
</style>