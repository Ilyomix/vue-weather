import { namespace as createVuexClass } from 'vuex-class';

export const namespace = 'weather';
export const store = createVuexClass(namespace);

export const FETCH_WEATHER = 'fetchWeather';

export interface IWeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherTemperature {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  requestStatus: string;
  requestMessage?: string;
  coord?: {
    lon: number;
    lat: number;
  };
  weather?: IWeatherConditions[];
  base?: string;
  main?: IWeatherTemperature;
  visibility?: number;
  wind?: {
    speed: number,
    deg: number,
  };
  clouds?: {
    all: number,
  };
  dt?: number;
  sys?: IWeatherSys;
  id?: number;
  name?: string;
  cod?: number;
}

export interface WeatherState {
  weatherConditions: IWeather;
  savedCities: string[];
}
