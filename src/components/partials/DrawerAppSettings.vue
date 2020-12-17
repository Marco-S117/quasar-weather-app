<template>
  <q-list>
    <!-- General Settings -->
    <q-item-label header>Settings</q-item-label>
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
        <q-item-label caption lines="2">Change theme color</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'DrawerAppSettings',
  data: () => ({
    geoLocation: false,
    darkTheme: true
  }),
  watch: {
    darkTheme: function () {
      Dark.toggle()
    }
  }
}
</script>

<style>
</style>
