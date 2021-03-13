import React from 'react';
import { PageHeader } from './App.styles';
import { Provider } from 'react-redux';
import { AppState } from '../redux/locationStateReducer';
import GeoLocation from './_utils/GeoLocation/GeoLocation';

const API_KEY = 'AIzaSyB_SEpGJP4yx0KrT2PUjAVdHJTN28bseJg';

const App = (): React.ReactElement => {
  return (
    <Provider store={AppState}>
      <GeoLocation />
      <PageHeader>
        This is to test {API_KEY} {}
      </PageHeader>
    </Provider>
  );
};

export default App;
