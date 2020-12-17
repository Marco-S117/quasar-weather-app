<template>
  <q-list>
    <q-item-label header>Language</q-item-label>
    <q-item>
      <q-item-section
        top
        avatar
        class="pointer"
      >
        <q-avatar
          @click="$i18n.locale = otherLang"
          color="secondary"
          icon="translate"
          text-color="white"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label>Switch to "{{ otherLang }}"</q-item-label>
        <q-item-label caption lines="2">Change current language</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'DrawerLangSelector',
  computed: {
    otherLang () {
      return this.$i18n.availableLocales.filter(lang => lang !== this.$i18n.locale)[0]
    }
  }
}
</script>

<style>

</style>
