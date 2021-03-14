import React from 'react';
import { Provider } from 'react-redux';
import { AppState } from '../redux/locationStateReducer';
import GeoLocation from './_utils/GeoLocation/GeoLocation';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import { Container } from './App.styles';

const App = (): React.ReactElement => {
  return (
    <Provider store={AppState}>
      <GeoLocation />
      <Container>
        <WeatherDetails />
      </Container>
    </Provider>
  );
};

export default App;
