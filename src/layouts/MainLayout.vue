<template>
  <q-layout view="lHh Lpr lFf">

 <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)



defineOptions({
  name: 'MainLayout'
})
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
