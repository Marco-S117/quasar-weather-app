<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <WeatherCondition
        v-if="!!weather"
        :weather="weather"
      />
      <WeatherConditionSkeleton v-else />
    </transition>
  </q-page>
</template>

<script>
import WeatherCondition from 'components/weather/WeatherCondition'
import WeatherConditionSkeleton from 'components/loaders/WeatherConditionSkeleton'

export default {
  name: 'IndexPage',
  components: {
    WeatherCondition,
    WeatherConditionSkeleton
  },
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
    }
  },
  watch: {
    content: function (value) {
      if (!!value) {
        this.getLocationWeather()
      }
    }
  }
}
</script>
