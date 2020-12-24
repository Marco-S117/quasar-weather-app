<template>
  <q-img
    :src="iconPath"
    no-default-spinner
    transition="fade-transition"
    width="100px"
    height="100px"
  />
</template>

<script>
export default {
  name: 'ConditionIcon',
  props: {
    code: {
      type: Number,
      required: true
    },
    isDay: {
      type: Number,
      required: true
    }
  },
  computed: {
    iconPath () {
      if (this.code === 1000) {
        let isDay = this.isDay === 1 ? 'day' : 'night'
        return require(`../../assets/conditions_icons/${this.code}-${isDay}.svg`)
      } else {
        return require(`../../assets/conditions_icons/${this.code}.svg`)
      }
    }
  }
}
</script>

<style>
</style>
