import { createStore } from 'redux';

const initialState = {
  latitude: '',
  longitude: '',
  city: ''
};

const countReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        latitude: action.payload.lat,
        longitude: action.payload.long
      };
    case 'SET_CITY':
      return { ...state, city: action.payload.city };
    case 'RESET':
      return { ...initialState };
    default:
      return { ...state };
  }
};

export const AppState = createStore(countReducer);

interface Location {
  lat: number;
  long: number;
}

export const setLocation = (location: Location) =>
  AppState.dispatch({
    type: 'SET_LOCATION',
    payload: { location }
  });
