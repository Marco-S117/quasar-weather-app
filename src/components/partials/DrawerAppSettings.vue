<template>
  <q-list>
    <!-- General Settings -->
    <q-item-label header>Settings</q-item-label>
    <q-item>
      <q-item-section
        @click="geoLocation = !geoLocation"
        top
        avatar
        class="pointer"
      >
        <q-avatar
          :color="geoLocation ? 'positive' : 'negative'"
          :icon="geoLocation ? 'gps_fixed' : 'gps_off'"
          text-color="white"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>Device Position</q-item-label>
        <q-item-label caption lines="2">Detect your position.</q-item-label>
      </q-item-section>
    </q-item>
    <!-- Color Settings -->
    <q-item>
      <q-item-section
        @click="darkTheme = !darkTheme"
        top
        avatar
        class="pointer"
      >
        <q-avatar
          :color="darkTheme ? 'positive' : 'negative'"
          icon="palette"
          text-color="white"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>Dark Mode</q-item-label>
        <q-item-label caption lines="2">Change theme color.</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { Dark } from 'quasar'

export default {
  data: () => ({
    geoLocation: false,
    darkTheme: true
  }),
  methods: {
    toogleGeoLocation () {
      this.geoLocation = !this.geoLocation
    }
  },
  watch: {
    darkTheme: function () {
      Dark.toggle()
    },
    geoLocation: function (state) {
      console.log('Toogle location', state)
    }
  }
}
</script>

<style>
</style>
