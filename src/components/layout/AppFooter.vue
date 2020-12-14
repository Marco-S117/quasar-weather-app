<template>
  <q-footer reveal class="q-pa-sm text-center">
    <span>{{ today }}</span>
  </q-footer>
</template>

<script>
import { date } from 'quasar'

export default {
  computed: {
    today () {
      let timestamp = new Date()
      return date.formatDate(timestamp, 'dddd D MMMM YYYY')
    }
  }
}
</script>

<style>

</style>
