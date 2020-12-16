<template>
  <q-page padding>
    <h1>Events Page - {{ location }}</h1>
  </q-page>
</template>

<script>
export default {
  name: 'EventsPage',
  props: {
    location: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
