<template>
  <div class="page-container">
    <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%; display: flex; justify-content: flex-end;">
      <q-separator dark vertical inset />

      <q-space />

      <q-separator dark vertical />

      <router-link to="/home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Home" icon="home" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="About" icon="error" />
      </router-link>
      <q-separator dark vertical />

      <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Contact" icon="call" />
      </router-link>
      <q-separator dark vertical />

      <q-btn @click="logoutAction" stretch flat label="LogOut" icon="logout" />

      <q-separator dark vertical />
    </q-toolbar>

    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md" style="margin: 0px;">
          <div class="row q-gutter-md" style="background: #dfeefb; display: flex;">
            <div class="text" style="width: 75%;">
              <h1><span style="font-weight: 400;">Welcome to</span> <span style="font-size: 50px; ">PK Education</span></h1>
              <p style="font-size: 15px;font-style: italic;color: #5d2020;">Unlock your learning potential with our comprehensive educational platform, where knowledge meets innovation.</p>
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
</style>
