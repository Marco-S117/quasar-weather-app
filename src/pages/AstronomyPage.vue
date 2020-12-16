<template>
  <q-page padding>
    <h1>Astronomy Page - {{ location }}</h1>
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
  },
  beforeMount () {
    if (!!this.location) {
      this.getLocationAstronomy()
    }
  },
  methods: {
    getLocationAstronomy () {
      console.log('Calling astronomy API')
    }
  },
  watch: {
    location: function (value) {
      if (!!value) {
        console.log(`[${this.$route.name} Page] New weather API call with location: ${value}`)
        this.getLocationAstronomy()
      }
    }
  }
}
</script>
