<template>
  <q-page padding>
    <h1>Events Page - {{ location }}</h1>
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
      this.getLocationEvents()
    }
  },
  methods: {
    getLocationEvents () {
      console.log('Calling events API')
    }
  },
  watch: {
    location: function (value) {
      console.log(value)
      if (!!value) {
        console.log(`[${this.$route.name} Page] New weather API call with location: ${value}`)
        this.getLocationEvents()
      }
    }
  }
}
</script>
