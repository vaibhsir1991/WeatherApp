import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { Container } from './App.styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const GeoLocation = React.lazy(
  () => import('./_utils/GeoLocation/GeoLocation')
);

const CurrentLocationWeather = React.lazy(
  () => import('./WeatherApp/CurrentLocationWeather/CurrentLocationWeather')
);

const WeatherByCity = React.lazy(
  () => import('./WeatherApp/Cities/WeatherByCity')
);

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Suspense fallback={<CircularProgress />}>
            <GeoLocation />
            <Switch>
              <Route path="/home" component={CurrentLocationWeather} />
              <Route exact path="/" component={WeatherByCity} />
            </Switch>
          </Suspense>
        </Container>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
