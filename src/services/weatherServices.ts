import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { apiEndPoints } from './endPoint';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter
});

export const getWeatherDataByCity = (city: string) => {
  return api.get(apiEndPoints.openWeatherApiByCity(city));
};

export const getWeatherDataByCoordinates = (lat: number, long: number) => {
  return api.get(apiEndPoints.openWeatherApiByCoordinates(lat, long));
};

export const getCity = (lat: number, long: number) => {
  return api.get(apiEndPoints.googleGeocodeAPI(lat, long));
};

export const getCountriesAndCity = () => {
  return api.get(apiEndPoints.countriesAndCities);
};
