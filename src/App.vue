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

/* Transitions */
.page-change-enter-active {
  transition: all 0.2s ease;
}
.page-change-leave-active {
  transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-change-enter, .page-change-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.simple-fade-enter-active {
  transition: opacity 0.2s ease;
}
.simple-fade-leave-active {
  transition: opacity 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.simple-fade-enter, .simple-fade-leave-to {
  opacity: 0;
}
</style>
