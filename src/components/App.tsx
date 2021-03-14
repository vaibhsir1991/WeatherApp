import React from 'react';
import { Provider } from 'react-redux';
import { AppState } from '../redux/reducer';
import GeoLocation from './_utils/GeoLocation/GeoLocation';
import { Container } from './App.styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import WeatherAppContainer from './WeatherAppContainer/WeatherAppContainer';

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={AppState}>
        <Container>
          <GeoLocation />
          <Switch>
            <Route path="" component={WeatherAppContainer} />
          </Switch>
        </Container>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
