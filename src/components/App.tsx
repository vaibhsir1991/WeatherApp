import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { AppState } from '../redux/reducer';
import { Container } from './App.styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const GeoLocation = React.lazy(
  () => import('./_utils/GeoLocation/GeoLocation')
);

const WeatherAppContainer = React.lazy(
  () => import('./WeatherAppContainer/WeatherAppContainer')
);

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={AppState}>
        <Container>
          <Suspense fallback={<h1>'Loading,PLease Wait...'</h1>}>
            <GeoLocation />
            <Switch>
              <Route path="" component={WeatherAppContainer} />
            </Switch>
          </Suspense>
        </Container>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
