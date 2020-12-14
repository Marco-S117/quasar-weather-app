<template>
  <q-list padding>
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
    <q-separator spaced inset />
  </q-list>
</template>

<script>
export default {
  name: 'DrawerRoutesList',
  computed: {
    appRoutes () {
      return this.$router.options.routes.filter(route => !!route.routeName && route.routeName !== 'Home')
    }
  }
}
</script>

<style>

</style>
