<template>
  <q-list>
    <q-item-label header>Settings</q-item-label>
    <q-item>
      <q-item-section
        @click="changeTheme"
        top
        avatar
        class="pointer"
      >
        <q-avatar
          icon="palette"
          color="white"
          text-color="primary"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>App Theme</q-item-label>
        <q-item-label caption lines="2">Change theme color</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'DrawerAppSettings',
  data: () => ({
    geoLocation: false,
    themes: ['sky', 'moon', 'nature'],
    themeIndex: 0
  }),
  methods: {
    changeTheme () {
      this.themeIndex++
      if (this.themeIndex > (this.themes.length - 1)) {
        this.themeIndex = 0
      }
      this.$root.$emit('onThemeChange', this.themes[this.themeIndex])
    }
  }
}
</script>

<style>
</style>
