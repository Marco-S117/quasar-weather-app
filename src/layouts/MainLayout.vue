<template>
  <q-layout view="hHh Lpr fFf">
    <AppHeader />
    <AppDrawer />
    <AppFooter />
    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <keep-alive>
          <router-view :content="content" />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/layout/AppHeader.vue'
import AppDrawer from 'components/layout/AppDrawer'
import AppFooter from 'components/layout/AppFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppDrawer,
    AppFooter
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>
