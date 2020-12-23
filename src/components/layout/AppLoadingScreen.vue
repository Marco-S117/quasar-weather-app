<template>
  <div class="absolute-center text-center rounded-borders bg-transparent">
    <q-avatar
      size="80px"
      font-size="80px"
      class="q-my-md"
    >
      <transition-group name="icon-transition" tag="div" class="fixed-full absolute-full">
        <q-img
          v-for="(icon, i) in icons"
          :key="`key-${i}`"
          :src="icon.component"
          no-default-spinner
          v-show="currentIndex === i"
          :class="{
            'icon': currentIndex !== (icons.length - 1)
          }"
        />
      </transition-group>
    </q-avatar>
    <span class="block text-h4 q-my-sm">WeatherApp</span>
    <transition name="string-change" mode="out-in">
      <span :key="currentIndex" class="block">{{ loadingString }}</span>
    </transition>
  </div>
</template>

<script>

import DaySvg from 'assets/images/day.svg'
import NightSvg from 'assets/images/night.svg'
import CloudsSvg from 'assets/images/cloudy-day-1.svg'
import RainSvg from 'assets/images/rainy-1.svg'
import ThunderSvg from 'assets/images/thunder.svg'
import Logo from 'assets/images/quasar-logo.svg'

const ICONS = [
  { component: DaySvg, string: 'Brighten up the day' },
  { component: NightSvg, string: 'Calm before the storm' },
  { component: CloudsSvg, string: 'To be on cloud nine' },
  { component: RainSvg, string: 'As right as the rain' },
  { component: ThunderSvg, string: 'Tempest in a teapot' },
  { component: Logo, string: 'App loaded' }
]

export default {
  name: 'AppLoadingScreen',
  data: () => ({
    icons: ICONS,
    loadingStrings: [],
    currentIndex: 0
  }),
  mounted () {
    let interval = setInterval(() => {
      if (this.currentIndex < (this.icons.length - 1)) {
        this.currentIndex++
      }
    }, 1500)
  },
  computed: {
    loadingString () {
      return this.icons[this.currentIndex].string
    }
  }
}
</script>

<style lang="scss">
.icon {
  transform: scale(2);
}

.icon-transition {
  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
  &-enter-active {
    transition-delay: 0.2s;
  }
  &-enter {
    opacity: 0;
    transform: translateX(100px) scale(0.4);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-100px) scale(0.4);
  }
}

.string-change-enter-active,
.string-change-leave-active {
  transition: all 0.1s ease-in-out;
}
.string-change-enter, .string-change-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
