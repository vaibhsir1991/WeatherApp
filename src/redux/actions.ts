import { AppState } from './reducer';

interface Location {
  lat: number;
  long: number;
}

export const setLocation = (location: Location) =>
  AppState.dispatch({
    type: 'SET_LOCATION',
    payload: { location }
  });
