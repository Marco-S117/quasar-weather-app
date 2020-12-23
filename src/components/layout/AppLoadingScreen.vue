<template>
  <div class="absolute-full fit text-center rounded-borders loading-overlay">
    <div class="absolute-center">
      <q-avatar
        size="80px"
        font-size="80px"
        class="q-mb-sm"
      >
        <transition-group name="icon-transition" tag="div" class="fixed-full absolute-full">
          <q-img
            v-for="(icon, i) in icons"
            :key="`key-${i}`"
            :src="icon.component"
            no-default-spinner
            v-show="currentIndex === i"
            class="icon"
          />
        </transition-group>
      </q-avatar>
      <span class="block text-h4 q-my-sm">Loading</span>
      <transition name="string-change" mode="out-in">
        <span :key="currentIndex" class="block">{{ loadingString }}</span>
      </transition>
    </div>
  </div>
</template>

<script>

import DaySvg from 'assets/images/day.svg'
import NightSvg from 'assets/images/night.svg'
import CloudsSvg from 'assets/images/cloudy-day-1.svg'
import RainSvg from 'assets/images/rainy-1.svg'
import ThunderSvg from 'assets/images/thunder.svg'

const ICONS = [
  { component: DaySvg, string: 'Brighten up the day' },
  { component: NightSvg, string: 'Calm before the storm' },
  { component: CloudsSvg, string: 'To be on cloud nine' },
  { component: RainSvg, string: 'As right as the rain' },
  { component: ThunderSvg, string: 'Tempest in a teapot' }
]

export default {
  name: 'AppLoadingScreen',
  data: () => ({
    icons: ICONS,
    currentIndex: 0
  }),
  mounted () {
    const MIN = 0, MAX = (this.icons.length - 1)
    this.currentIndex = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
  },
  computed: {
    loadingString () {
      return this.icons[this.currentIndex].string
    }
  }
}
</script>

<style lang="scss">
.loading-overlay {
  background-color: rgba(46, 84, 134, 0.4);
}
.icon {
  transform: scale(1.5);
}
</style>
