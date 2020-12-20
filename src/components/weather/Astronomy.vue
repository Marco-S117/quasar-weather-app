<template>
  <div>
    <h1>Astronomy Page - {{ astronomy.location.name }}</h1>
    {{ astronomy }}
  </div>
</template>

<script>
export default {
  name: 'Astronomy',
  props: {
    astronomy: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
