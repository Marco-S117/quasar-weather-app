<template>
  <q-page padding class="row justify-center items-center content-center">
    <transition name="simple-fade" mode="out-in">
      <div v-if="!errored && !!(currentWeather.location && currentWeather.current)" class="bg-grey-9 q-pa-md">
        <div class="row items-center justify-between">
          <div class="row items-center">
            <q-img :src="`${currentWeather.current.condition.icon}`" width="40px" height="40px" />
            <span>{{ currentWeather.current.condition.text }}</span>
          </div>
          <span>{{ currentWeather.current.temp_c }} °C</span>
        </div>
        <h3>{{ currentWeather.location.name }}</h3>
        <p>{{ currentWeather.location.region }}, {{ currentWeather.location.country }}</p>
        <p>Last update: {{ currentWeather.location.localtime }}</p>
      </div>
      <div v-else>Something not work, error: {{ errored }} - {{ errorMessage }}</div>
    </transition>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  beforeMount () {
    this.$root.$on('onPlaceSearch', this.onSearchLocation)
  },
  beforeDestroy () {
    this.$root.$off('onPlaceSearch')
  },
  mounted () {
    this.getLocation()
  },
  data: () => ({
    errored: false,
    errorMessage: '',
    place: '',
    currentWeather: {}
  }),
  computed: {
    currentLocation () {
      return this.place
    }
  },
  methods: {
    getLocation() {
      if (!this.place) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((location) => {
            console.log(`Current location:\nLat [${location.coords.latitude}] Lon [${location.coords.longitude}]`)
            this.getCurrentWeather(location.coords.latitude, location.coords.longitude)
          })
        }
      }
    },
    getCurrentWeather (lat, lon) {
      this.$q.loading.show()
      this.errored = false

      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.place ? this.place : `${lat},${lon}`
      }

      axios
        .get('https://api.weatherapi.com/v1/current.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          console.log(response)
          this.currentWeather = response.data
        })
        .catch(error => {
          this.errorMessage = error
          this.errored = true
        })
        .finally(() => this.$q.loading.hide())
    },
    onSearchLocation (place) {
      console.log('Place event in home page', place)
      this.place = place
      this.getCurrentWeather()
    }
  }
}
</script>
