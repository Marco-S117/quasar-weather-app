<template>
  <q-drawer
    v-model="drawer"
    :mini="mini"
    @mouseover="mini = false"
    @mouseout="mini = true"
    @input="onInput"
    mini-to-overlay
    :width="250"
    :breakpoint="600"
    bordered
    content-class="column justify-between"
  >
    <DrawerRoutesList />
    <DrawerAppSettings />
  </q-drawer>
</template>

<script>
import DrawerRoutesList from 'components/partials/DrawerRoutesList'
import DrawerAppSettings from 'components/partials/DrawerAppSettings'

export default {
  name: 'AppDrawer',
  props: {
    showDrawer: {
      type: Boolean,
      required: false
    }
  },
  components: {
    DrawerRoutesList,
    DrawerAppSettings
  },
  data: () => ({
    drawer: false,
    mini: true
  }),
  methods: {
    onInput (state) {
      this.$emit('onInput', state)
    }
  },
  watch: {
    showDrawer: function (state) {
      this.drawer = state
    }
  }
}
</script>

<style>
</style>
