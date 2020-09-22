import { AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { fetchWeather } from './callers';
import {
  WeatherState,
  FETCH_WEATHER,
} from './types';

const actions: ActionTree<WeatherState, {}> = {
  async [FETCH_WEATHER]({ commit }, city: string): Promise<AxiosResponse<any>> {
    commit(FETCH_WEATHER, {
      requestStatus: 'loading',
    });

    return fetchWeather(city)
      .then((res: AxiosResponse<any>) => {
        commit(FETCH_WEATHER, {
          requestStatus: 'success',
          ...res.data,
        });

        return res;
      }).catch((err: Error) => {
        commit(FETCH_WEATHER, {
          requestStatus: 'error',
          requestMessage: err.message,
        });

        throw new Error(err.message);
      });
  },
};

export default actions;
