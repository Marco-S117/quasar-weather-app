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
              @click.stop="clearSearchBar"
              class="cursor-pointer"
            />
          </template>
        </q-input>

        <div class="autocomplete q-px-md">
          <transition name="autocomplete" mode="out-in">
            <div
              v-if="showAutocomplete"
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
    </q-header>

    <AppDrawer
      :showDrawer="showDrawer"
      @onInput="updateDrawerState"
    />
  </div>
</template>

<script>
import AppDrawer from 'components/layout/AppDrawer'

export default {
  name: 'AppHeader',
  components: {
    AppDrawer,
  },
  data: () => ({
    showDrawer: false,
    showAutocomplete: false,
    isLoadingSuggestedLocations: false,
    location: '',
    suggestedLocations: [],
    isSuggestedLocationClicked: false
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
      this.$axios
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
      this.location = location
      this.showAutocomplete = false
      this.isSuggestedLocationClicked = true
      this.$root.$emit('onPlaceSearch', location)
    },
    clearSearchBar () {
      if (this.location) {
        this.location = null
        this.showAutocomplete = false
      }
    }
  },
  watch: {
    location: function (search) {
      if (!!(!this.isSuggestedLocationClicked && search && search.length > 3)) {
        this.searchLocation(search)
      } else {
        this.isSuggestedLocationClicked = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
