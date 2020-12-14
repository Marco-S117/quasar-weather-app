<template>
  <div>
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="showDrawer = !showDrawer"
        />
        <q-toolbar-title>
          <q-btn
            :to="{ path: '/' }"
            flat
            dense
          >
            <q-icon name="home" class="q-mr-sm" />
            <h4 class="q-ma-none">Quasar Weather App</h4>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>

      <div class="q-pt-lg q-pb-md">
        <q-input
          v-model="location"
          :loading="!!location"
          placeholder="Find your location"
          label-color="#fff"
          debounce="500"
          filled
          dense
          class="q-px-md"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:append v-if="!!location">
            <q-icon
              name="cancel"
              @click.stop="location=null"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </div>

      <q-img
        :src="HeaderBg"
        class="header-image absolute-top"
        position="bottom"
      />
    </q-header>

    <AppDrawer
      :showDrawer="showDrawer"
      @onInput="updateDrawerState"
    />
  </div>
</template>

<script>
import AppDrawer from 'components/layout/AppDrawer'
import HeaderBg from 'assets/images/header-bg.jpg'

export default {
  name: 'AppHeader',
  components: {
    AppDrawer
  },
  data: () => ({
    HeaderBg,
    showDrawer: false,
    location: ''
  }),
  methods: {
    updateDrawerState (state) {
      this.showDrawer = state
    }
  },
  watch: {
    location: function (place) {
      if (place) {
        console.log('Search for', place)
        this.$root.$emit('onPlaceSearch', place)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-image {
  z-index: -1;
  height: 100%;
  opacity: 0.4;
  filter: brightness(70%);
}
</style>
