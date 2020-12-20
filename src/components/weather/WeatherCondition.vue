<template>
  <div>
    <h1>{{ weather.location.name }}</h1>
    <ConditionIcon
      :code="weather.current.condition.code"
      :isDay="weather.current.is_day"
    />
  </div>
</template>

<script>
import ConditionIcon from 'components/partials/ConditionIcon'

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
  }
}
</script>

<style>

</style>
