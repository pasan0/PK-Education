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
