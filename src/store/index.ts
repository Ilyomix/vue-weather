import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { module as weather } from 'src/store/modules/weather';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    weather,
  },
};

export default new Vuex.Store<{}>(store);
