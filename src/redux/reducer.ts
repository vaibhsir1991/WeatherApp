import { createStore } from 'redux';

interface State {
  latitude: number;
  longitude: number;
  city: string;
}

const initialState: State = {
  latitude: 0,
  longitude: 0,
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
