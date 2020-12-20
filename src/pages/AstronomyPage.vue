<template>
  <q-page padding>
    <transition name="simple-fade" mode="out-in">
      <Astronomy
        v-if="!!astronomy"
        :astronomy="astronomy"
      />
      <AstronomySkeleton v-else />
    </transition>
  </q-page>
</template>

<script>
import Astronomy from 'components/weather/Astronomy'
import AstronomySkeleton from 'components/loaders/AstronomySkeleton'

export default {
  name: 'IndexPage',
  components: {
    Astronomy,
    AstronomySkeleton
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  beforeMount () {
    if (!!(this.content && this.content.location.name)) {
      this.getLocationAstronomy()
    }
  },
  data: () => ({
    astronomy: null
  }),
  methods: {
    getLocationAstronomy () {
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: this.content.location.name
      }
      this.$axios
        .get('https://api.weatherapi.com/v1/astronomy.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          this.astronomy = response.data
        })
        .catch(error => {
          console.log('Go to location error page')
        })
    }
  },
  watch: {
    content: function (value) {
      if (!!value) {
        this.getLocationAstronomy()
      }
    }
  }
}
</script>
