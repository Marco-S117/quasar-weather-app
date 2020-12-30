<template>
  <div id="q-app">
    <q-img
      :placeholder-src="currentThemeImage"
      :src="currentThemeImage"
      :ratio="16/9"
      :position="currenteThemeImagePosition"
      no-default-spinner
      img-class="filter"
      class="fixed-full bg-image"
    />
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view v-if="!!position" :content="position" />
    </transition>
  </div>
</template>

<script>
import { colors } from 'quasar'
const { setBrand } = colors

export default {
  name: 'App',
  created () {
    this.$q.dark.set(true)
  },
  beforeMount () {
    this.$root.$on('onThemeChange', this.changeTheme)
    this.$root.$on('onPlaceSearch', this.onLocationSearch)
  },
  beforeDestroy () {
    this.$root.$off('onPlaceSearch')
  },
  mounted () {
    this.checkAccessDevicePosition()
  },
  data: () => ({
    themesData: {
      sky: {
        primary: '#1C72B5',
        secondary: '#7ca5c4',
        dark: '#0D1A24',
        info: '#7dc9e0',
        bgImagePositionDesktop: 'left',
        bgImagePositionMobile: '50%'
      },
      moon: {
        primary: '#C04D68',
        secondary: '#c28392',
        dark: '#382037',
        info: '#907894',
        bgImagePositionDesktop: '50%',
        bgImagePositionMobile: '50%'
      },
      nature: {
        primary: '#7ABA8B',
        secondary: '#608B84',
        dark: '#0F292B',
        info: '#BADB94',
        bgImagePositionDesktop: 'right',
        bgImagePositionMobile: '65%'
      }
    },
    activeTheme: 'sky',
    position: null
  }),
  computed: {
    currentThemeImage () {
      return require(`assets/images/bg-${this.activeTheme}.jpg`)
    },
    currenteThemeImagePosition () {
      return this.$q.screen.xs || this.$q.screen.sm
        ? this.themesData[this,this.activeTheme].bgImagePositionMobile
        : this.themesData[this,this.activeTheme].bgImagePositionDesktop
    }
  },
  methods: {
    checkAccessDevicePosition () {
      if (!this.position) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.onAccessAllowed, this.onAccessDenied)
        }
      }
    },
    onAccessAllowed (location) {
      // console.log(`Location access allowed! Current location:\nLat [${location.coords.latitude}] Lon [${location.coords.longitude}]`)
      this.getCurrentLocationName(location.coords.latitude, location.coords.longitude)
    },
    onAccessDenied (data) {
      // console.log('Location access denied, set default location.', data)
      this.getCurrentLocationName(null, null, 'Barrafranca')
    },
    getCurrentLocationName (lat, lon, place) {
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: place ? place : `${lat},${lon}`
      }

      this.$axios
        .get('https://api.weatherapi.com/v1/current.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.position = response.data
        })
        .catch(error => {
          // console.log('Go to location error page')
        })
    },
    onLocationSearch (place) {
      if (!!place) {
        this.getCurrentLocationName(null, null, place)
      }
    },
    changeTheme (theme) {
      this.activeTheme = theme
      setBrand('primary', this.themesData[this.activeTheme].primary)
      setBrand('secondary', this.themesData[this.activeTheme].secondary)
      setBrand('dark', this.themesData[this.activeTheme].dark)
      setBrand('info', this.themesData[this.activeTheme].info)
    }
  }
}
</script>
<style lang="scss">
/* Global rules */
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
}

h1 {
  font-size: $h1-size;
  line-height: $h1-size;
}
h2 {
  font-size: $h2-size;
  line-height: $h2-size;
}
h3 {
  font-size: $h3-size;
  line-height: $h3-size;
}
h4 {
  font-size: $h4-size;
  line-height: $h4-size;
}
h5 {
  font-size: $h5-size;
  line-height: $h5-size;
}
h6 {
  font-size: $h6-size;
  line-height: $h6-size;
}
p,
span {
  font-size: $text-size;
  line-height: $text-size;
}

/* Global Helper Classes */
.pointer {
  cursor: pointer;
}

.bg-image {
  z-index: -1;
  height: 100%;
  opacity: 0.4;
  filter: brightness(0.6);
}
</style>
