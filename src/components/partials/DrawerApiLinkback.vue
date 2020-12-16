<template>
  <q-list>
    <q-item-label header>{{ $t('poweredBy') }}</q-item-label>
    <template>
      <q-item
        clickable
        v-ripple
      >
        <q-item-section>
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com">
          </a>
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script>
export default {
}
</script>

<style>

</style>
