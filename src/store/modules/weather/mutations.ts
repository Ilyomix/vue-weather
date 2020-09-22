import { AxiosResponse } from 'axios';
import { MutationTree } from 'vuex';
import {
  WeatherState,
  FETCH_WEATHER,
} from './types';

const mutations: MutationTree<WeatherState> = {
  [FETCH_WEATHER](state: WeatherState, res: {
    requestStatus: string,
    requestMessage?: string,
    name?: string,
    response: AxiosResponse<any>,
  }) {
    const { savedCities } = state;

    if (res && res.name) {
      savedCities.push(res.name);
    }
    const uniqSavedCities = new Set(savedCities);
    state.savedCities = [...uniqSavedCities];
    state.weatherConditions = { ...res };
  },
};

export default mutations;
