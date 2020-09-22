import { GetterTree } from 'vuex';

import {
  WeatherState,
  IWeather,
} from './types';

const getters: GetterTree<WeatherState, {}> = {
  getWeatherCondition(state: WeatherState): IWeather {
    return state.weatherConditions;
  },
  getIsRequestError(state: WeatherState): boolean {
    return state.weatherConditions.requestStatus === 'error';
  },
  getSavedCities(state: WeatherState): string[] {
    return state.savedCities;
  },
};

export default getters;
