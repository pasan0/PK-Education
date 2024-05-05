<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Bootstrap footer -->
    <div class="container my-5">
      <!-- Footer -->
      <footer class="text-center text-white" style="background-color: #3f51b5">
        <!-- Grid container -->
        <div class="container">
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
            &copy; 2024 copyright - Pasan K Weerasinghe
          </div>
          <!-- End of Footer text -->
        </div>
        <!-- End of Grid container -->
      </footer>
      <!-- End of Footer -->
    </div>
    <!-- End of .container -->
  </q-layout>
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
.full-width {
  width: 100%;
}
</style>
