<template>
  <q-page v-if="!!weather" padding>
    <h1>Current Day</h1>
    <WeatherCondition :weather="weather" />
    <div v-if="false">
      <h1>Forecast</h1>
      <WeatherConditionForecast
        v-for="(day, index) in weather.forecast.forecastday"
        :key="index"
        :day="day"
        class="q-my-xl"
      />
    </div>
  </q-page>
</template>

<script>
import WeatherCondition from 'components/weather/WeatherCondition'
import WeatherConditionForecast from 'components/weather/WeatherConditionForecast'

export default {
  name: 'IndexPage',
  components: {
    WeatherCondition,
    WeatherConditionForecast
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
      this.$root.$emit('onAPILoadingStart')
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.name,
        days: 4
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/forecast.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.weather = response.data
        })
        .catch(error => {
          console.log('Go to location error page')
        })
        .finally(() => {
          this.$root.$emit('onAPILoadingEnd')
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
