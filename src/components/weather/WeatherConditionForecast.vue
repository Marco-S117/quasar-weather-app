<template>
  <div>
    <p>{{ day }}</p>
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
    day: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log('Day forecast', this.day)
  }
}
</script>

<style>

</style>
