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
          <Loading v-if="isLoading" />
          <router-view v-else-if="!!(content && !isLoading)" :content="content" />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/layout/AppHeader.vue'
import AppDrawer from 'components/layout/AppDrawer'
import AppFooter from 'components/layout/AppFooter.vue'
import Loading from 'components/layout/AppLoadingScreen'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppDrawer,
    AppFooter,
    Loading
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isLoading: false
  }),
  mounted () {
    this.$root.$on('onAPILoadingStart', () => { this.isLoading = true })
    this.$root.$on('onAPILoadingEnd', () => { this.isLoading = false })
  }
}
</script>

<style lang="scss">
</style>
