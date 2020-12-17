<template>
  <q-page padding>
    <h1>Astronomy Page - {{ content.location.name }}</h1>
    {{ astronomy }}
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  beforeMount () {
    if (!!(this.content && this.content.location.name)) {
      this.getLocationAstronomy()
    }
  },
  data: () => ({
    astronomy: null
  }),
  methods: {
    getLocationAstronomy () {
      console.log('Calling astronomy API')
      this.$q.loading.show()
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.name
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/astronomy.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.astronomy = response.data
        })
        .catch(error => {
          console.log('Go to location error page')
        })
        .finally(() => this.$q.loading.hide())
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
