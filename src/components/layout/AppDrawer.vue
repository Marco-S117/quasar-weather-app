<template>
  <q-drawer
    v-model="drawer"
    @input="onInput"
    :width="250"
    :breakpoint="600"
    bordered
    content-class="column justify-between"
  >
    <div>
      <DrawerRoutesList />
      <DrawerAppSettings />
    </div>
    <DrawerApiLinkBack />
  </q-drawer>
</template>

<script>
import DrawerAppSettings from 'components/partials/DrawerAppSettings'
import DrawerRoutesList from 'components/partials/DrawerRoutesList'
import DrawerApiLinkBack from 'components/partials/DrawerApiLinkBack'

export default {
  name: 'AppDrawer',
  props: {
    showDrawer: {
      type: Boolean,
      required: false
    }
  },
  components: {
    DrawerAppSettings,
    DrawerRoutesList,
    DrawerApiLinkBack
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
