<template>
  <div class="coding">

    <div class="icons">
    <h1 class="animate__animated animate__zoomIn">Tools I Use:</h1>
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/bootstrap.png" alt="BootStrap logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/intellij.png" alt="IntelliJ logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/javascript.png" alt="JavaScript logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/java.png" alt="Java logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/html.png" alt="HTML logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/figma.png" alt="Figma logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/vue.png" alt="Vue logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/vscode.png" alt="Visual Studio Code logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/css.png" alt="CSS logo" />
      <img class="animate__animated animate__zoomIn" src="../assets/Images/icons/pgadmin.png" alt="PostgreSQL logo" />
      </div>

    <div class="mealplan">
      <div class="photos">
        <img src="../assets/Images/coding/LandingPage.png" alt="Meal Plan landing page" />
        <img src="../assets/Images/coding/Calendar.png" alt="Meal Plan calendar" />
      </div>
      <div class="details">
      <h1 class="animate__animated animate__fadeInRight">Meal Planner App</h1>
       <p class="animate__animated animate__fadeInRight">12 weeks into the program, we were assigned to a team of 4. Together we utilized Java, Spring Boot, PostgreSQL, and Vue.js (just to name a few) 
        to develop a meal planner web application where a user can view, add, or update recipes with ease. In the 'Build a Recipe' page, the user can search for 
        ingredients to add to their recipe and the information/images are supplied by an API. Our Calendar contained a lot of functionality; by simply dragging and 
        dropping selected recipes onto the calendar, users can plan out a full month's worth of meals accurately. With the option to select a date range, the application 
        will display the necessary ingredients needed for that period. To further streamline the process, users can print or email the grocery list, 
        and even download a VCS file that is compatible with Google Calendar.</p>

        <h2 class="animate__animated animate__fadeInRight">What I Learned:</h2>
        <p class="animate__animated animate__fadeInRight">In this project, I learned a lot about team dynamics and the importance of communication. Some of my team members were people I had never met before the 
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
      <p>This project is great because I continue to learn from it even after completing it. Not only was it a great solo learning experience where I learned things like how to pull random data from a 
        database and how to make quizzes, but I still go back to it to study. I can also easily add new questions to study as I continue to learn new things. 
      </p>
      </div>
      <div class="fcphotos">
      <img class="one" src="../assets/Images/coding/landing-page.png" alt="Flash Cards landing page" />
      <img class="two" src="../assets/Images/coding/questions.png" alt="Flash Card questions" />
      <img class="three" src="../assets/Images/coding/quiz-view.png" alt="Flash Card quiz" />
      <img class="four" src="../assets/Images/coding/further-study.png" alt="Flash Card further study" />
      </div>
    </div>

    <div class="comingsoon">
      <div classs="libphoto">
        <img src="../assets/Images/coding/library.png" alt="Library App - Under Construction">
      </div>
      <div class="libdetails">
      <h1>Library App</h1>
      <p>Status: In Progress</p>

      <h2>Goal:</h2>
      <p>I have currently built out the database that I will be using for this project. I at one point had the SQL queries and what not started in IntelliJ,
        but it somehow managed to get deleted. I'm a little disappointed, but I've learned a lot since I started this project so maybe it's ultimately for the best.
        The end goal for this project is to have an application where I, as a user, 
        can have a library catalog of all of the books that I own. I want to have the ability to view them based on whether or not they've been read yet and 
        I want to be able to browse them based on things like genre and series. I'd also like to add a wishlist component to it so that 
        I can keep track of books that I'm interested in purchasing and have it keep a running total of how much these books cost. Honestly, I'm tired of going to a bookstore,
        picking up a book and wondering if it looks familiar because I've considered purchasing it before or because I've already purchased it and it's at home waiting to be read.</p>
    </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icons{
   margin-bottom: 2rem;
   margin-top: 2rem;
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
  padding: 2rem 4rem;
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
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}
.flashcards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text photo";
  background-color: #002130;
  border-radius: 10px;
  color: white;
  margin-bottom: 4rem;
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
.comingsoon{
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: "libphoto libtext";
  background-color: #B95952;
  border-radius: 10px;
  color: white;
  margin-bottom: 6rem;
  align-items: center;
  box-shadow: 0px 5px 20px 0px black;
  padding: 2rem 0rem;
}
.libphotos{
  grid-area: libphoto;
}
.libdetails{
  grid-area: libtext;
  padding: 2rem 4rem 2rem 2rem;
}
.mealplan{
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: "photo text";
  background-color: #B95952;
  border-radius: 10px;
  color: white;
  margin-bottom: 4rem;
  align-items: center;
  box-shadow: 0px 5px 20px 0px black;
  padding: 2rem 0rem;
}
.photos{
  grid-area: photo;
}
.details{
  grid-area: text;
  padding: 2rem 4rem 2rem 2rem;
}
.icons img{
  max-width: 50px;
}
.mealplan img{
  max-width: 700px;
  margin: 20px;
  border-radius: 10px;
  padding-left: 2rem
}
.comingsoon img{
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
@media (max-width: 1475px){
    .mealplan {
      grid-template-columns: 1fr;
      grid-template-areas: "photo"
                            "text";
    }
    .flashcards{ 
      grid-template-columns: 1fr;
      grid-template-areas: "photo"
                            "text";
    }
    .flashcards img {
      width: 400px;
    }
    .comingsoon{
      grid-template-columns: 1fr;
      grid-template-areas: "libphoto"
                            "libtext";
    }
}
@media (max-width: 783px){
  .mealplan img{
    max-width: 400px;
  }
  .comingsoon img{
    max-width: 400px;
  }
}
</style>