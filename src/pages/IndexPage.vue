<template>
  <q-page padding class="row justify-center items-center content-center">
    <div>
      <p>
        This location is passed by global event.<br>
        Try to search something using header searchbar.
      </p>
      <span>Search Location:</span>
      <q-badge
        color="primary"
        text-color="white"
        :label="place"
        class="q-pa-sm q-ml-md"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeMount () {
    this.$root.$on('onPlaceSearch', this.onSearchLocation)
  },
  beforeDestroy () {
    this.$root.$off('onPlaceSearch')
  },
  data: () => ({
    place: 'Default place'
  }),
  computed: {
    currentLocation () {
      return this.place
    }
  },
  methods: {
    onSearchLocation (place) {
      console.log('Place event in home page', place)
      this.place = place
    }
  }
}
</script>
