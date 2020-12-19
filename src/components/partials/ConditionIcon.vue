<template>
  <div>
    <q-img
      :src="iconPath"
      :ratio="1"
      width="80px"
      height="80px"
      no-default-spinner
    />
  </div>
</template>

<script>
export default {
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
      let isDay = this.isDay === 1 ? 'day' : 'night'
      return require('../../assets/conditions_icons/' + this.code + '-' + isDay + '.svg')
    }
  }
}
</script>

<style>

</style>
