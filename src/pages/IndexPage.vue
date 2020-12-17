<template>
  <q-page padding>
    <h1>Weather Page - {{ content.location.name }}</h1>
    {{ weather }}
  </q-page>
</template>

<script>
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
      this.getLocationWeather()
    }
  },
  data: () => ({
    weather: null
  }),
  methods: {
    getLocationWeather () {
      console.log('Calling weather API')
      this.$q.loading.show()
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.name
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/current.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.weather = response.data
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
        this.getLocationWeather()
      }
    }
  }
}
</script>
