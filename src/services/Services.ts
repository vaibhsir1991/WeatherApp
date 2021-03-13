import axios from 'axios';
import { apiEndPoints } from './endPoint';

export const getWeatherData = (city: string) => {
  return axios.get(apiEndPoints.openWeatherApi(city));
};

export const getCity = (lat: number, long: number) => {
  return axios.get(apiEndPoints.googleGeocodeAPI(lat, long));
};
