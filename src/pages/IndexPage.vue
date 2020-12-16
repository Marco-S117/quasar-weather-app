<template>
  <q-page padding>
    <h1>Index Page</h1>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {
    location: {
      type: String,
      required: true
    }
  }
}
</script>
