<template>
  <div class="weather-layout-wrapper">
    <div class="weather-informations-wrapper">
      <slot
        name="weatherInformations"
      />
    </div>
    <div class="weather-city-selection-wrapper">
      <slot
        name="weatherCitySelection"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class WeatherLayout extends Vue {
}
</script>

<style lang="scss">
  @import url("./styles/weather-layout.scss");
</style>
