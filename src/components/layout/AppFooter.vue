<template>
  <q-footer reveal>
    <!-- <span>{{ today }}</span> -->
    <q-tabs>
      <q-route-tab
        v-for="route in tabRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        :name="route.name"
        :icon="route.icon"
        :label="$q.screen.md ? route.name : null"
        exact
        replace
      />
    </q-tabs>
  </q-footer>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'AppFooter',
  computed: {
    // today () {
    //   let timestamp = new Date()
    //   return date.formatDate(timestamp, 'dddd D MMMM YYYY')
    // },
    tabRoutes () {
      return this.$router.options.routes[1].children
    }
  }
}
</script>

<style>

</style>
