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
          <q-btn
            :to="{ path: '/' }"
            flat
            dense
          >
            <q-icon name="home" class="q-mr-sm" />
            <h4 class="q-ma-none">Quasar Weather App</h4>
          </q-btn>
        </q-toolbar-title>

        <q-toggle v-model="darkTheme" label="Dark Mode" color="dark" left-label />
      </q-toolbar>
    </q-header>

    <AppDrawer :showDrawer="showDrawer" />
  </div>
</template>

<script>
import { Dark } from 'quasar'
import AppDrawer from 'components/partials/AppDrawer'

export default {
  components: {
    AppDrawer
  },
  data: () => ({
    showDrawer: true,
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
