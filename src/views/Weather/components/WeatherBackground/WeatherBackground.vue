<template>
  <div>
    <img
      v-if="getWeatherBackgroundUrl() !== 'noImage' && !isError"
      :src='require(`${getWeatherBackgroundUrl()}`)'
      class="weather-background-assets"
    />
    <div v-else class="weather-background-error" />
  </div>
</template>

<script lang="ts">
import {
  IWeather,
} from 'src/store/modules/weather/types';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class WeatherBackground extends Vue {
  @Prop({ type: Object })
  private weatherConditions!: IWeather;

  @Prop({ type: Boolean })
  private isError!: boolean;

  protected getWeatherBackgroundUrl = (): string => {
    let weatherCode = (
      this.weatherConditions
      && this.weatherConditions.weather
    )
      ? this.weatherConditions.weather[0].id : 0;

    if (weatherCode <= 800) {
      weatherCode = Math.round(weatherCode / 100) * 100;
    } else if (weatherCode > 802) {
      weatherCode = 801;
    }
    const weatherAssetsBaseUrl = './styles/assets/conditions/';

    return weatherCode ? `${weatherAssetsBaseUrl}${weatherCode}.jpeg` : 'noImage';
  }
}
</script>

<style scoped>
  @import url('./styles/weather-background.scss');
</style>
