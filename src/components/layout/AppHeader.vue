<template>
  <div>
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="showDrawer = !showDrawer"
        />
        <q-toolbar-title>
          <h4 class="q-ma-none">Quasar Weather App</h4>
        </q-toolbar-title>
      </q-toolbar>

      <div class="q-pt-lg q-pb-md">
        <q-input
          v-model="location"
          placeholder="Find your location"
          debounce="750"
          dark
          filled
          dense
          class="q-px-md"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:append v-if="!!location">
            <q-icon
              name="cancel"
              @click.stop="location=null"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:after>
           <q-btn
             @click="$root.$emit('onPlaceSearch', location)"
             round
             dense
             flat
             icon="send"
           />
          </template>
        </q-input>
      </div>

      <q-img
        :src="HeaderBg"
        class="header-image absolute-top"
        position="bottom"
      />
    </q-header>

    <AppDrawer
      :showDrawer="showDrawer"
      @onInput="updateDrawerState"
    />
  </div>
</template>

<script>
import axios from 'axios'

import AppDrawer from 'components/layout/AppDrawer'
import HeaderBg from 'assets/images/header-bg.jpg'

export default {
  name: 'AppHeader',
  components: {
    AppDrawer
  },
  data: () => ({
    HeaderBg,
    showDrawer: false,
    location: ''
  }),
  methods: {
    updateDrawerState (state) {
      this.showDrawer = state
    },
    searchLocation (location) {
      console.log('Calling API, search:', location)
      const AXIOS_PARAMS = {
        key: '45129826589045a4a67172834201512',
        q: location
      }
      axios
        .get('https://api.weatherapi.com/v1/search.json', {
          params: AXIOS_PARAMS
        })
        .then(response => {
          console.log('Autocomplete', response.data)
        })
        .catch(error => {
          console.log('Go to location error page')
        })
    }
  },
  watch: {
    location: function (search) {
      if (!!(search && search.length > 3)) {
        this.searchLocation(search)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-image {
  z-index: -1;
  height: 100%;
  opacity: 0.4;
  filter: brightness(70%);
}
</style>
