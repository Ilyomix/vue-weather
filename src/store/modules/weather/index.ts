import { Module } from 'vuex';
import { WeatherState } from './types';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export { namespace } from './types';

export const state: WeatherState = {
  weatherConditions: {
    requestStatus: 'unset',
  },
  savedCities: [],
};

const namespaced: boolean = true;

export const module: Module<WeatherState, {}> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
