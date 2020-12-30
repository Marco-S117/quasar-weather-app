<template>
  <div class="flex column flex-center current-day-weather-container">
    <div class="text-caption text-secondary">
      {{ weather.location.region }}, {{ weather.location.country }}
    </div>
    <div class="text-h4 text-primary">
      {{ weather.location.name }}
    </div>
    <div class="text-subtitle1 text-info">
      {{ weather.current.condition.text }}
    </div>
    <ConditionIcon
      :code="weather.current.condition.code"
      :isDay="weather.current.is_day"
      :width="120"
      :height="120"
      class="q-my-sm"
    />
    <div class="conditions-info-container q-px-xl">
      <div class="flex items-center justify-between q-my-sm">
        <q-img
          :src="ThermometerSvg"
          width="50px"
          height="50px"
          no-default-spinner
        />
        <span>{{ Math.round(weather.current.temp_c ) }} °C</span>
        <span>{{ Math.round(weather.current.temp_f ) }} °F</span>
        <span> {{ weather.current.humidity }}%</span>
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
      return date.formatDate((timeStamp * 1000), 'HH:mm, YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss">
.current-day-weather-container {
  height: calc(100vh - 234px);
  @media (max-width: $breakpoint-xs-max) {
    height: calc(100vh - 196px);
  }
}

.conditions-info-container {
  width: 100%;
  max-width: 600px;
}
</style>
