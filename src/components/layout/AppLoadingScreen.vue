<template>
  <q-img
    :placeholder-src="bgImage"
    :src="bgImage"
    :ratio="16/9"
    no-default-spinner
    img-class="filter"
    class="fixed-full absolute-full"
  >
    <div class="absolute-center text-center rounded-borders bg-transparent">
      <q-avatar
        size="80px"
        font-size="80px"
        class="q-my-md"
      >
        <q-img :src="logo" class="fit rotating" />
      </q-avatar>
      <h1 class="q-px-md">WeatherApp</h1>
      <p>Loading</p>
    </div>
  </q-img>
</template>

<script>
import bgImage from 'assets/images/bg.jpg'
import logo from 'assets/images/quasar-logo.svg'

export default {
  data: () => ({
    bgImage,
    logo
  })
}
</script>

<style lang="scss">
.filter {
  filter: brightness(0.4);
}
.rotating {
  animation: rotate 2s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
