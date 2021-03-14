import React from 'react';
import { PageHeader } from './App.styles';
import { Provider } from 'react-redux';
import { AppState } from '../redux/locationStateReducer';
import GeoLocation from './_utils/GeoLocation/GeoLocation';

const App = (): React.ReactElement => {
  return (
    <Provider store={AppState}>
      <GeoLocation />
      <PageHeader>This is to test</PageHeader>
    </Provider>
  );
};

export default App;
