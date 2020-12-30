<template>
  <div class="flex column flex-center current-day-weather-container">
    <div class="text-h6">{{ weather.location.region }}, {{ weather.location.country }}</div>
    <div class="text-h4">{{ weather.location.name }}</div>
    <div class="text-h6">{{ weather.current.condition.text }}</div>
    <!-- <div class="text-caption">{{ weather.location.localtime_epoch | formatDate }}</div> -->
    <ConditionIcon
      :code="weather.current.condition.code"
      :isDay="weather.current.is_day"
      :width="120"
      :height="120"
    />
    <!-- <q-separator spaced inset /> -->
    <div class="text-left full-width q-px-xl">
      <div class="flex items-center justify-between q-my-sm">
        <q-img
          :src="ThermometerSvg"
          width="50px"
          height="50px"
          no-default-spinner
        />
        <span>
          {{ Math.round(weather.current.temp_c ) }} °C
        </span>
        <span>
          {{ Math.round(weather.current.temp_f ) }} °F
        </span>
        <span>
          {{ weather.current.humidity }}%
        </span>
      </div>
      <div class="flex items-center justify-between q-my-sm">
        <q-img
          :src="WindSvg"
          width="50px"
          height="50px"
          no-default-spinner
        />
        <span>{{ weather.current.wind_dir }}</span>
        <span>{{ weather.current.wind_kph }} kph</span>
        <span>{{ weather.current.wind_mph }} mph</span>
      </div>
    </div>
    <div class="q-my-md">Last upadate: {{ weather.current.last_updated_epoch | formatDate }}</div>
  </div>
</template>

<script>
import { date } from 'quasar'
import ConditionIcon from 'components/partials/ConditionIcon'
import ThermometerSvg from '../../assets/conditions_icons/thermometer.svg'
import WindSvg from '../../assets/conditions_icons/wind.svg'

export default {
  name: 'WeatherCondition',
  components: {
    ConditionIcon
  },
  props: {
    weather: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    ThermometerSvg,
    WindSvg
  }),
  mounted() {
    console.log(this.weather);
  },
  filters: {
    formatDate (timeStamp) {
      return date.formatDate((timeStamp * 1000), 'HH:mm')
      // return date.formatDate((timeStamp * 1000), 'HH:mm, YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss">
.current-day-weather-container {
  height: calc(100vh - 196px);
}
</style>
