<template>
  <div class="page-container">
<q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%; display: flex; justify-content: flex-end;">
  <q-space />

  <router-link to="/home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
    <q-btn @click="navigate" stretch flat label="Home" icon="home" />
  </router-link>

  <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
    <q-btn @click="navigate" stretch flat label="About" icon="error" />
  </router-link>

  <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
    <q-btn @click="navigate" stretch flat label="Contact" icon="call" />
  </router-link>

  <q-btn @click="logoutAction" stretch flat label="LogOut" icon="logout" />

</q-toolbar>



    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md" style="margin: 0px;">
          <div class="row q-gutter-md" style="background: #dfeefb; display: flex;">
            <div class="text" style="width: 95%;">
              <h1><span style="font-weight: 400; font-size: 45px; ">Welcome to</span> <span style="font-size: 46px; ">PK Education</span></h1>
              <p style="font-size: 15px;font-style: italic;color: #5d2020; font-weight: 500;">Unlock Your Learning Potential With Our Comprehensive Educational Platform, Where Knowledge Meets Innovation.<br><br></p>
            </div>
          </div>

<!-- carousel -->
<div class="q-pa-md full-view-carousel">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1">
        <img src="https://th.bing.com/th/id/R.369dd4b29d357ae13fd51f5da20385b9?rik=%2bzyhgTLtniALQQ&riu=http%3a%2f%2fwww.vacateachers.org%2fwp-content%2fuploads%2f2018%2f03%2fmaxresdefault.jpg&ehk=jQTPJ%2fumlxh2AMrdQBs5evOT8roeNJ9vzf2k5M0t22o%3d&risl=&pid=ImgRaw&r=0" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <img src="https://aslia.com.au/wp-content/uploads/Educational-Image.jpg" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <img src="https://www.buhave.com/wp-content/uploads/2019/05/education.jpg" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="4">
        <img src="https://thumbs.dreamstime.com/z/educational-concept-quality-education-sign-page-183404713.jpg" class="carousel-img" />
      </q-carousel-slide>
    </q-carousel>
  </div>

<!-- live class button -->
    <div class="q-pa-md">
      <q-btn color="blue" class="full-width" label="Join to Live Class" style="margin: 2px;"  @click="goToLink" />
         <q-tooltip class="bg-accent">Live</q-tooltip>
    </div>

<!-- Tab  -->
<div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%;">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
        class="text-secondary"
      >
        <q-tab :ripple="{ color: 'orange' }" name="documents" icon="mail" label="Documents" />
        <q-tab :ripple="{ color: 'orange' }" name="recordings" icon="movie" label="Recordings" />
        <q-tab :ripple="{ color: 'orange' }" name="timetable" icon="alarm" label="TimeTable" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="documents">
          <!-- Content for Documents tab -->
          <div>
            <h3>Documents</h3>
            <p>Here you can manage your documents.</p>
            <!-- Add more content as needed -->
          </div>
        </q-tab-panel>

        <q-tab-panel name="recordings">
          <!-- Content for Recordings tab -->
          <div>
            <h3>Recordings</h3>
            <p>Here you can manage your recordings.</p>
            <!-- Add more content as needed -->
          </div>
        </q-tab-panel>

        <q-tab-panel name="timetable">
          <!-- Content for TimeTable tab -->
          <div>
            <h3>TimeTable</h3>
            <p>Here you can view and manage your timetable.</p>
            <!-- Add more content as needed -->
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>

</q-page>
</q-page-container>
</q-layout>


    <!-- Bootstrap footer -->
    <footer class="text-center text-white" style="background-color: #0d47a1 ">
      <!-- Grid container -->
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <!-- Section: Social -->
        <section class="text-center mb-5" style="padding-top: 10px; align-items: center;">
          <a href="https://www.facebook.com/pkauushalya.pk/" class="text-white me-4" style="margin-right: 30px;">
            <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 20px;" />
          </a>
          <a href="https://twitter.com/PasanKWeerasin1" class="text-white me-4" style="margin-right: 30px;">
            <font-awesome-icon :icon="['fab', 'twitter']" style="font-size: 20px;" />
          </a>
          <a href="https://www.linkedin.com/in/pasan-k-weerasinghe-25242725b/" class="text-white me-4" style="margin-right: 30px;">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" style="font-size: 20px;" />
          </a>
          <a href="https://github.com/pasan0" class="text-white me-4" style="margin-right: 30px;">
            <font-awesome-icon :icon="['fab', 'github']" style="font-size: 20px;" />
          </a>
        </section>
        <!-- Section: Social -->

        <!-- Footer text -->
        <div class="text-center text-white pt-3">
          &copy; 2024 - Pasan K Weerasinghe
        </div>
        <!-- End of Footer text -->
      </div>
      <!-- End of Grid container -->
    </footer>
    <!-- End of Footer -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const tab = ref('documents'); // default active tab

// If you need to change the tab later in your script, you can do so like this:
tab.value = 'mails'; // update the tab value


const slide = ref(1)
const autoplay = ref(true)

// Live class link
const goToLink = () => {
  window.location.href = '#';
}

// Add icons to the library
library.add(faFacebookF, faTwitter, faLinkedinIn, faGithub)

const drawer = ref(false)

import { signOutUser } from 'src/firebase/firebase-signout'
import { useRouter } from 'vue-router'

const router = useRouter()

const logoutAction = () => {
  console.log('Button Clicked')
  signOutUser().then(() => {
    router.push('/login')
  })
}
</script>

<style>
.full-width {
  width: 100%;
}

h1 {
  color: rgb(30, 58, 148);
  margin: 8px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 50px;
}

p {
  margin: 0;
}

.mainheader {
  padding: 10px;
  color: rgb(104, 2, 2);
}

.q-mt-md {
  margin-top: 20px;
}

.image-container {
  position: relative;
}

.go-to-button {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 70%;
  background-color: darkcyan;
  color: #ffffff;
  border: 5px transparent;
  border-radius: 5px;
  font-size: 25px;
  font-weight: bolder;
  font-style: italic;
  padding: 5px 10px;
}

.carousel-img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; Ensure the images cover the slide area */
}

.full-view-carousel {
  width: 100%;
}


</style>
