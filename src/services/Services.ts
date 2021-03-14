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

export const getWeatherData = (city: string) => {
  return api.get(apiEndPoints.openWeatherApi(city));
};

export const getCity = (lat: number, long: number) => {
  return api.get(apiEndPoints.googleGeocodeAPI(lat, long));
};
