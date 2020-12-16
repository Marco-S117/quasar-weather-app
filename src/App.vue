<template>
  <div id="q-app">
    <router-view :location="position" />
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: 'App',
  created () {
    this.$q.dark.set(true)
  },
  beforeMount () {
    this.$root.$on('onPlaceSearch', this.onLocationSearch)
  },
  beforeDestroy () {
    this.$root.$off('onPlaceSearch')
  },
  mounted () {
    this.getUserLocation()
  },
  data: () => ({
    // axiosDisabled: true,
    // errored: false,
    // errorMessage: '',
    position: 'Barrafranca'
  }),
  methods: {
    getUserLocation () {
      if (!this.place) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((location) => {
            console.log(location);
            console.log(`Current location:\nLat [${location.coords.latitude}] Lon [${location.coords.longitude}]`)
            // this.getCurrentWeather(location.coords.latitude, location.coords.longitude)
          })
        }
      }
    },
    // getCurrentWeather (lat, lon) {
    //   if (!this.axiosDisabled) {
    //     this.$q.loading.show()
    //     this.errored = false

    //     const AXIOS_PARAMS = {
    //       key: '45129826589045a4a67172834201512',
    //       q: this.position ? this.position : `${lat},${lon}`
    //     }

    //     // axios
    //     //   .get('https://api.weatherapi.com/v1/current.json', {
    //     //     params: AXIOS_PARAMS
    //     //   })
    //     //   .then(response => {
    //     //     console.log(response)
    //     //     this.currentWeather = response.data
    //     //   })
    //     //   .catch(error => {
    //     //     this.errorMessage = error
    //     //     this.errored = true
    //     //   })
    //     //   .finally(() => this.$q.loading.hide())
    //   }
    // },
    onLocationSearch (place) {
      console.log('New place from search:', place)
      this.position = place
      // this.getCurrentWeather()
    }
  }
}
</script>
<style lang="scss">
/* Global rules */
html,
body {
  overflow: hidden;
}

.pointer {
  cursor: pointer;
}

/* Transitions */
.page-change-enter-active {
  transition: all 0.2s ease;
}
.page-change-leave-active {
  transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-change-enter, .page-change-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.simple-fade-enter-active {
  transition: opacity 0.2s ease;
}
.simple-fade-leave-active {
  transition: opacity 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.simple-fade-enter, .simple-fade-leave-to {
  opacity: 0;
}
</style>
