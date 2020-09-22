<template>
  <div>
    <WeatherBackground
      :weatherConditions="getWeatherCondition"
      :isError="getIsRequestError"
    />
    <WeatherLayout>
      <WeatherInformations
        :weatherConditions="getWeatherCondition"
        slot="weatherInformations"
        :isError="getIsRequestError"
      />
      <WeatherCitySelection
        slot="weatherCitySelection"
        :defaultLocation="defaultLocation"
        :savedCities="getSavedCities"
        @submitCity="onSumbitCity"
      />
    </WeatherLayout>
  </div>
</template>

<script lang="ts">
import {
  store,
  IWeather,
} from 'src/store/modules/weather/types';

import { Vue, Component } from 'vue-property-decorator';
import WeatherLayout from './components/WeatherLayout/WeatherLayout.vue';
import WeatherBackground from './components/WeatherBackground/WeatherBackground.vue';
import WeatherInformations from './components/WeatherInformations/WeatherInformations.vue';
import WeatherCitySelection from './components/WeatherCitySelection/WeatherCitySelection.vue';

@Component({
  components: {
    WeatherLayout,
    WeatherBackground,
    WeatherInformations,
    WeatherCitySelection,
  },
})
export default class Weather extends Vue {
  @store.Action
  private fetchWeather: (city: string) => IWeather;

  @store.Getter
  private getWeatherCondition!: IWeather;

  @store.Getter
  private getIsRequestError!: boolean;

  @store.Getter
  private getSavedCities!: string[];

  private defaultLocation = 'Toulouse';

  private created() {
    this.fetchWeather(this.defaultLocation);
  }

  private onSumbitCity(city: string) {
    this.fetchWeather(city);
  }
}
</script>
