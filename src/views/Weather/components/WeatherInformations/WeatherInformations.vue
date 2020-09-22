<template>
  <div>
    <div v-if="!isError" class="weather-informations-parent">
      <div class="temp-value">
        <div class="integer">
        {{ weatherConditionsDisplayed().temp.integer }}
        </div>
         <div class="symbol">
        °
        </div>
      </div>
        <div class="date-and-location">
          <div class="city">
            {{ weatherConditionsDisplayed().city }}
          </div>
          <div class="date">
            {{ weatherConditionsDisplayed().date }}
          </div>
        </div>
      <div class="conditions">
        <div class="icon">
          <img
            class="box-shadow-icon"
            :src="require(`${weatherConditionsDisplayed().weatherIcon}`)"
          />
          <img
            :src="require(`${weatherConditionsDisplayed().weatherIcon}`)"
          />
        </div>
        <div class="text">
        {{ weatherConditionsDisplayed().conditions }}
        </div>
      </div>
    </div>
    <div v-else class="weather-informations-parent">
      <div class="date-and-location">
        <div class="city">
          City not found
        </div>
        <div class="date">
          Please retype another city
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import {
  IWeather,
} from 'src/store/modules/weather/types';
import moment from 'moment';

@Component({})
export default class WeatherInformations extends Vue {
  @Prop({ type: Object, default: {} })
  private weatherConditions: IWeather;

  @Prop({ type: Boolean })
  private isError!: boolean;

  private dateFormat = 'HH:mm:ss - dddd DD/MM/YYYY';

  public convertKelvinToCelcius = (temp: number): {
    integer: string,
    symbol: string,
  } => {
    const absoluteKelvinCelciusDiff = 273.15;
    const fixedTemp = (temp - absoluteKelvinCelciusDiff).toFixed(2);

    return {
      integer: parseFloat(fixedTemp).toFixed(),
      symbol: '°',
    };
  }

  public capitalizeString = (sentence: string): string => (sentence.length > 1
    ? `${sentence.charAt(0).toUpperCase()}${sentence.substring(1, sentence.length)}`
    : sentence.charAt(0).toUpperCase())

  public weatherConditionsDisplayed = () => ({
    temp: this.weatherConditions.main
      ? this.convertKelvinToCelcius(this.weatherConditions.main.temp)
      : '--°',
    city: (this.weatherConditions
        && this.weatherConditions.name)
      ? this.weatherConditions.name
      : 'N/A',
    date: this.weatherConditions.dt
      ? moment(this.weatherConditions.dt * 1000).format(this.dateFormat)
      : '------- --/--/---- --:--:--',
    conditions: (
      this.weatherConditions
          && this.weatherConditions.weather
          && this.weatherConditions.weather[0]
    ) ? this.capitalizeString(this.weatherConditions.weather[0].description)
      : 'N/A',
    weatherIcon: (this.weatherConditions
          && this.weatherConditions.weather
          && this.weatherConditions.weather[0]
    ) ? `./assets/weatherIcons/${this.weatherConditions.weather[0].icon}.svg`
      : './assets/weatherIcons/01d.svg',
  })
}
</script>

<style lang="scss">
  @import url('./styles/weather-informations.scss');
</style>
