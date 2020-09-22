import axios, { AxiosResponse } from 'axios';

export const fetchWeather = async (city: string): Promise<AxiosResponse<any>> => {
  const token = 'cfc1d8587427854554ad253dc5f5d4e7';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}`;

  return axios.get(apiUrl).catch((e) => { throw e; });
};
