interface Location {
  lat: number;
  long: number;
}

export const setLocation = (location: Location) => ({
  type: 'SET_LOCATION',
  payload: { location }
});
