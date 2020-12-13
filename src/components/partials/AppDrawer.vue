<template>
  <q-drawer
    v-model="drawer"
    :mini="mini"
    @mouseover="mini = false"
    @mouseout="mini = true"
    show-if-above
    mini-to-overlay
    :width="350"
    :breakpoint="500"
  >
    <q-scroll-area class="fit">
      <q-list>

        <template v-for="(route, index) in appRoutes">
          <q-item
            :key="index"
            :active="route.path === $route.path"
            :to="{ path: route.path }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon :name="route.icon" />
            </q-item-section>
            <q-item-section>
              {{ route.routeName }}
            </q-item-section>
          </q-item>
        </template>

      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  props: {
    showDrawer: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    drawer: true,
    mini: true
  }),
  computed: {
    appRoutes () {
      return this.$router.options.routes.filter(route => !!route.routeName && route.routeName !== 'Home')
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
