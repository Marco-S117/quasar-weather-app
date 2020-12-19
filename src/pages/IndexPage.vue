<template>
  <q-page padding>
    <transition name="simple-fade" mode="out-in">
      <div v-if="!!weather">
        <h1>{{ weather.location.name }}</h1>
        <ConditionIcon :code="weather.current.condition.code" :isDay="weather.current.is_day" />
      </div>
      <div v-else>
        <q-card style="max-width: 300px">
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton height="200px" square />

          <q-card-actions align="right" class="q-gutter-md">
            <q-skeleton type="QBtn" />
            <q-skeleton type="QBtn" />
          </q-card-actions>
        </q-card>
      </div>
    </transition>
  </q-page>
</template>

<script>
import ConditionIcon from 'components/partials/ConditionIcon'

export default {
  name: 'IndexPage',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: {
    ConditionIcon
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
      console.log('Calling weather API')
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
          console.log(this.weather)
        })
        .catch(error => {
          console.log('Go to location error page')
        })
    }
  },
  watch: {
    content: function (value) {
      if (value) {
        console.log(`[${this.$route.name} Page] New weather API call with location: ${value}`)
        this.getLocationWeather()
      }
    }
  }
}
</script>
