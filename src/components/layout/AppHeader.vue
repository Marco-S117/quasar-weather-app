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
      </q-toolbar>
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
    AppDrawer
  },
  data: () => ({
    showDrawer: false
  }),
  methods: {
    updateDrawerState (state) {
      this.showDrawer = state
    }
  }
}
</script>

<style>

</style>
