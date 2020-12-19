<template>
  <q-layout view="hHh Lpr fFf">
    <AppHeader />
    <AppFooter />
    <q-page-container>
      <transition name="page-change" mode="out-in" appear leave-absolute>
        <keep-alive>
          <router-view :content="content" />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/layout/AppHeader.vue'
import AppFooter from 'components/layout/AppFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
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
