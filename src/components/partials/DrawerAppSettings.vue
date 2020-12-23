<template>
  <q-list>
    <!-- General Settings -->
    <q-item-label header>Settings</q-item-label>
    <q-item>
      <q-item-section
        @click="themeColors = !themeColors"
        top
        avatar
        class="pointer"
      >
        <q-avatar
          color="primary"
          icon="palette"
          text-color="white"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>App Theme</q-item-label>
        <q-item-label caption lines="2">Change theme color</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { colors } from 'quasar'
const { setBrand } = colors

export default {
  name: 'DrawerAppSettings',
  data: () => ({
    geoLocation: false,
    themeColors: true
  }),
  watch: {
    /* Testing change app theme */
    themeColors: function (state) {
      if (state) {
        this.$root.$emit('onThemeChange', 'sky')
        setBrand('primary', '#2e5486')
        // setBrand('secondary', '#948C96')
        // setBrand('accent', '#a672c9')
        setBrand('dark', '#2d3e57')
        // setBrand('positive', '#50afe6')
        // setBrand('negative', '#b34c58')
        setBrand('info', '#84dbec')
        // setBrand('warning', '#F2C037')
      } else {
        this.$root.$emit('onThemeChange', 'moon')
        setBrand('primary', '#C04D68')
        // setBrand('secondary', '#948C96')
        // setBrand('accent', '#a672c9')
        setBrand('dark', '#382037')
        // setBrand('positive', '#50afe6')
        // setBrand('negative', '#b34c58')
        setBrand('info', '#7de085')
        // setBrand('warning', '#F2C037')
      }
    }
  }
}
</script>

<style>
</style>
