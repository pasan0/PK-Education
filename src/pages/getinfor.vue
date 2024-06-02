<template>
  <div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { firestore } from 'src/firebase/index.js'; // Import firestore from firebase

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    const onSubmit = async () => {
      if (accept.value !== true) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        });
        return;
      }

      try {
        // Add form data to Firestore
        await firestore.collection('formData').add({
          name: name.value,
          age: age.value,
          acceptedTerms: accept.value
        });
        // Reset form after submission
        onReset();
        // Notify user of successful submission
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Form submitted successfully'
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: `An error occurred: ${error.message}`
        });
      }
    };

    const onReset = () => {
      name.value = null
      age.value = null
      accept.value = false
    };

    return {
      name,
      age,
      accept,
      onSubmit,
      onReset
    }
  }
}
</script>
