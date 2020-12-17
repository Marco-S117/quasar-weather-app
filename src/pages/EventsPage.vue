<template>
  <q-page padding>
    <h1>Sports Page - {{ content.location.country }}</h1>
    {{ events }}
  </q-page>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'EventsPage',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  beforeMount () {
    if (!!(this.content && this.content.location.country)) {
      this.getLocationEvents()
    }
  },
  data: () => ({
    events: null
  }),
  methods: {
    getLocationEvents () {
      console.log('Calling events API')
      this.$q.loading.show()
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.country
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/sports.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          console.log('Go to location error page')
        })
        .finally(() => this.$q.loading.hide())
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
