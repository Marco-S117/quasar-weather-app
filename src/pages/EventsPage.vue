<template>
  <q-page v-if="!!(events && content.location.country)" padding>
    <EventsCountry :country="content.location.country" :events="events" />
  </q-page>
</template>

<script>
import EventsCountry from 'components/events/EventsCountry'

export default {
  name: 'EventsPage',
  components: {
    EventsCountry
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  beforeMount () {
    if (!!(this.content && this.content.location.country)) {
      this.getLocationEvents()
    }
  },
  data: () => ({
    events: null
  }),
  methods: {
    getLocationEvents () {
      this.$root.$emit('onAPILoadingStart')
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.country
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/sports.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          // console.log('Go to location error page')
        })
        .finally(() => {
          this.$root.$emit('onAPILoadingEnd')
        })
    }
  },
  watch: {
    content: function (value) {
      if (!!value) {
        this.getLocationEvents()
      }
    }
  }
}
</script>
