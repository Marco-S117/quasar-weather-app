<template>
  <q-list padding>
    <q-separator spaced inset />
    <q-item
      @click="modal = !modal"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>
      <q-item-section>
        Settings
      </q-item-section>
    </q-item>

    <q-dialog v-model="modal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Settings</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-toggle v-model="darkTheme" label="Dark Mode" left-label />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-list>
</template>

<script>
import { Dark } from 'quasar'

export default {
  data: () => ({
    modal: false,
    darkTheme: true
  }),
  watch: {
    darkTheme: function () {
      Dark.toggle()
    }
  }
}
</script>

<style>

</style>
