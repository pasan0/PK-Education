<template>
  <div>
    <q-layout view="lHh Lpr lFf">
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
</q-toolbar>


      <q-page-container>
        <div>
          <q-splitter
            v-model="splitterModel"
            style="height: 450px"
          >

            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="text-teal"
              >
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="call" label="Phone" />
                <q-tab name="movies" icon="thumb_up" label="Facebook" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="mails">
                  <div class="text-h4 q-mb-md">Mails</div>
                  <p>📧 Contact Us:<br><br>

                    Got questions, feedback, or just want to say hello?<br> We're all ears! Drop us a line at <br><span style="font-weight: bolder; font-size: 24px;"><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">pasanweerasinghe62@gmail.com</a></span><br> and our dedicated team will get back to you as soon as possible. Whether it's about our products, services, or anything else, we're here to help. Looking forward to hearing from you!<br><br>

                    Best regards,<br>
                    <span style="font-weight: 800; font-style: italic; font-size: 17px;">PK Education</span></p>
                </q-tab-panel>

                <q-tab-panel name="alarms">
                  <div class="text-h4 q-mb-md">Phone</div>
                  <p>📞 Contact Us:<br><br>

                    Have a question or need assistance? <br>Feel free to give us a call at <br><span style="font-weight: bolder; font-size: 26px; color: darkblue;" >+94 70 51 71702</span><br> 
                    <span style="font-weight: bolder; font-size: 26px; color: darkblue;" >+94 70 66 71702</span>
                    <br>Our friendly team is ready to assist you with any inquiries you may have regarding our products, services, or anything else. We're here to help make your experience with us exceptional. Looking forward to hearing from you!<br><br>

                    Best regards,<br>
                    <span style="font-weight: 800; font-style: italic; font-size: 17px;">PK Education</span></p>
                </q-tab-panel>

                <q-tab-panel name="movies">
                  <div class="text-h4 q-mb-md">Facebook</div>
                  <p>📱 Connect with Us on Facebook:<br><br>

                    Got questions, feedback, or just want to stay updated?<br> Follow us on <br><span style="font-weight: bolder; font-size: 26px;"> <a href="https://www.facebook.com/pkauushalya.pk?mibextid=ZbWKwL">Facebook</a></span><br> for the latest news, updates, and to reach out directly. Our team is here to assist you with any inquiries you may have. Drop us a message, leave a comment, or simply give us a like! We look forward to connecting with you on social media.<br><br>

                    Best regards,<br>
                    <span style="font-weight: 800; font-style: italic; font-size: 17px;">PK Education</span></p>
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </div>
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

// Define variables directly
const tab = ref('mails');
const splitterModel = ref(20);
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
