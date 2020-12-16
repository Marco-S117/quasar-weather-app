<template>
  <q-page padding>
    <h1>Astronomy Page - {{ location }}</h1>
  </q-page>
</template>

<script>
export default {
  name: 'AstronomyPage',
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
