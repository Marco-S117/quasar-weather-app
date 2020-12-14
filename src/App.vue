<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    this.$q.dark.set(true)
  }
}
</script>
<style lang="scss" scoped>
html,
body {
  overflow: hidden;
}
</style>
