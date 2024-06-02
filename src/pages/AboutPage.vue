<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%;">
      <q-separator dark vertical inset />

      <q-space />

      <q-separator dark vertical />

      <router-link to="/home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Home" icon="home"/>
      </router-link>
      <q-separator dark vertical />

      <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="About" icon="error"/>
      </router-link>
      <q-separator dark vertical />

      <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
        <q-btn @click="navigate" stretch flat label="Contact" icon="call"/>
      </router-link>
      <q-separator dark vertical />


    </q-toolbar>

      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-gutter-md">
            <div class="q-col-gutter-md">
              <div class="text-h6 bg-blue-10 text-white p-2" style="font-size: 30px;">About Us</div>
              <div class="bg-blue-10 text-white p-2 ml-10">
                <div>
              <img src="../assets/OIG3..jpg" style="align-items: center; width: 20%; ">
            </div>
            At PK Education, we stand at the forefront of educational innovation, driven by a steadfast commitment to nurturing intellects and shaping futures. Our journey began with a vision to redefine traditional learning paradigms, crafting a dynamic platform where curiosity is sparked, knowledge is cultivated, and potential is unleashed.<br><br>

With a team of passionate educators, technologists, and visionaries, we strive to create an ecosystem where every learner finds their path to success. Through personalized learning experiences, cutting-edge resources, and collaborative partnerships, we empower students to embrace their unique strengths and conquer academic challenges with confidence.<br><br>

At the heart of our approach lies a deep-rooted belief in the transformative power of education. We champion inclusivity, diversity, and accessibility, ensuring that every individual, regardless of background or circumstance, has the opportunity to thrive. By fostering a culture of continuous improvement and innovation, we seek to inspire a lifelong love for learning and equip future generations with the skills they need to thrive in an ever-evolving world.<br><br>

Join us on our mission to ignite minds, elevate aspirations, and build a brighter tomorrow through the power of education. Together, let's embark on a journey of discovery, growth, and endless possibilities.<br><br></div>

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
</script>

<style scoped>
.bg-blue-10 {
  background-color: #4b6fa8;
}

.q-col-gutter-md{
  padding:20px;
  height: fit-content;
  width: fit-content;
}
</style>
