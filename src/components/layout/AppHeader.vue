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
            <q-btn
              v-show="!!(location && location.length > 3)"
              @click="searchLocation(location)"
              :loading="isLoadingSuggestedLocations"
              round
              dense
              flat
              icon="send"
            />
          </template>
        </q-input>

        <div class="autocomplete q-px-md">
          <transition name="autocomplete" mode="out-in">
            <div
              v-if="!!(showAutocomplete && suggestedLocations)"
              class="autocomplete-list"
            >
              <p
                v-for="(location, index) in suggestedLocations"
                :key="index"
                class="q-ma-none q-pa-sm q-pl-md"
              >
                <span
                  @click="onSuggestedLocationClick(location.name)"
                  class="pointer"
                >
                  {{ location.name }}
                </span>
              </p>
            </div>
          </transition>
        </div>
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
    AppDrawer,
  },
  data: () => ({
    HeaderBg,
    showDrawer: false,
    showAutocomplete: false,
    isLoadingSuggestedLocations: false,
    location: '',
    suggestedLocations: []
  }),
  methods: {
    updateDrawerState (state) {
      this.showDrawer = state
    },
    searchLocation (location) {
      this.isLoadingSuggestedLocations = true
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
          this.suggestedLocations = response.data.slice(0, 4)
          this.showAutocomplete = true
        })
        .catch(error => {
          console.log('Go to location error page')
        })
        .finally(() => {
          this.isLoadingSuggestedLocations = false
        })
    },
    onSuggestedLocationClick (location) {
      this.location = null
      this.$root.$emit('onPlaceSearch', location)
    }
  },
  watch: {
    location: function (search) {
      if (search === null) {
        this.showAutocomplete = false
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

.autocomplete-list {
  height: 130px;
  border-radius: 0 0 4px 4px;
  background: rgba(255, 255, 255, 0.07);
  padding-left: 8px;

  span:hover {
    color: red;
  }
}

.autocomplete-enter-active,
.autocomplete-leave-active {
  transition: all 0.2s ease;
  opacity: 1;
  max-height: 130px;
}

.autocomplete-enter,
.autocomplete-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
