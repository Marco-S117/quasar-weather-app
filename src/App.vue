<template>
  <div id="q-app">
    <router-view :location="position" />
  </div>
</template>
<script>
import axios from 'axios'

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
    this.checkAccessDevicePosition()
  },
  data: () => ({
    position: ''
  }),
  methods: {
    checkAccessDevicePosition () {
      if (!this.position) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.onAccessAllowed, this.onAccessDenied)
        }
      }
    },
    onAccessAllowed (location) {
      console.log(`Location access allowed! Current location:\nLat [${location.coords.latitude}] Lon [${location.coords.longitude}]`)
      this.getCurrentLocationName(location.coords.latitude, location.coords.longitude)
    },
    onAccessDenied (data) {
      console.log('Location access denied, set default location.', data)
      this.position = 'Barrafranca'
    },
    getCurrentLocationName (lat, lon) {
      this.$q.loading.show()
      this.errored = false

      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: `${lat},${lon}`
      }

      axios
        .get('https://api.weatherapi.com/v1/current.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.position = response.data.location.name
        })
        .catch(error => {
          console.log('Go to location error page')
        })
        .finally(() => this.$q.loading.hide())
    },
    onLocationSearch (place) {
      if (!!place) {
        this.position = place
      }
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
