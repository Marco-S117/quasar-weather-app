<template>
  <div>
    <h1>Sports today in {{ country }}</h1>
    {{ countryFootballEvents }}
    <hr>
    {{ countryCricketEvents }}
    <hr>
    {{ countryGolfEvents }}
  </div>
</template>

<script>
export default {
  props:{
    country: {
      type: String,
      required: true
    },
    events: {
      type: Object,
      required: true
    }
  },
  computed: {
    countryFootballEvents () {
      return this.events.football.filter(event => event.country === this.country)
    },
    countryCricketEvents () {
      return this.events.cricket.filter(event => event.country === this.country)
    },
    countryGolfEvents () {
      return this.events.golf.filter(event => event.country === this.country)
    }
  }
}
</script>

<style>

</style>
