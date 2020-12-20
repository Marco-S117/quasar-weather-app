<template>
  <q-drawer
    v-model="drawer"
    @input="toggleDrawer"
    :width="250"
    :breakpoint="600"
    bordered
    content-class="column justify-between"
  >
    <div>
      <DrawerRoutesList />
      <DrawerAppSettings />
      <DrawerLangSelector />
    </div>
    <DrawerApiLinkBack />
  </q-drawer>
</template>

<script>
import DrawerAppSettings from 'components/partials/DrawerAppSettings'
import DrawerRoutesList from 'components/partials/DrawerRoutesList'
import DrawerApiLinkBack from 'components/partials/DrawerApiLinkBack'
import DrawerLangSelector from 'components/partials/DrawerLangSelector'

export default {
  name: 'AppDrawer',
  components: {
    DrawerAppSettings,
    DrawerRoutesList,
    DrawerApiLinkBack,
    DrawerLangSelector
  },
  beforeMount () {
    this.$root.$on('ToggleDrawer', this.toggleDrawer)
  },
  data: () => ({
    drawer: false,
    mini: true
  }),
  methods: {
    toggleDrawer (state) {
      this.drawer = state
    }
  }
}
</script>

<style>
</style>
