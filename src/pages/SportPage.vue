<template>
  <div>
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
    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">
        <q-header reveal elevated>
          <q-toolbar style="background-color: darkgreen;">
            <q-toolbar-title>SPORT Article Name (NEW)</q-toolbar-title>
            <q-btn flat round dense icon="whatshot" />
          </q-toolbar>
        </q-header>

        <q-footer reveal elevated>
          <q-toolbar style="background-color: #5b8b52;">
            <q-toolbar-title></q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page class="q-pa-md">
            <p v-for="n in 15" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>

    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">
        <q-header reveal elevated>
          <q-toolbar style="background-color: darkgreen;">
            <q-toolbar-title>SPORT Article Name (OLD)</q-toolbar-title>
            <q-btn flat round dense icon="whatshot" />
          </q-toolbar>
        </q-header>

        <q-footer reveal elevated>
          <q-toolbar style="background-color: #5b8b52;">
            <q-toolbar-title></q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page class="q-pa-md">
            <p v-for="n in 15" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
