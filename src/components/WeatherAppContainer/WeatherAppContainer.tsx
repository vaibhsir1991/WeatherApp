import React from 'react';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import { useLocation } from 'react-router-dom';
import {
  getWeatherDataByCity,
  getWeatherDataByCoordinates
} from '../../services/Services';
import { AxiosError, AxiosResponse } from 'axios';

interface StateProps {
  latitude: number;
  longitude: number;
}

const WeatherAppContainer = ({
  latitude,
  longitude
}: StateProps): React.ReactElement | null => {
  let params = useLocation().search;
  let city = new URLSearchParams(params).get('city');
  let [weatherData, setWeatherData] = React.useState();

  React.useEffect(() => {
    if (city !== null && city) {
      getWeatherDataByCity(city)
        .then((res: AxiosResponse) => {
          setWeatherData(res.data);
        })
        // eslint-disable-next-line no-alert
        .catch((e: AxiosError) => alert(e.message));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherDataByCoordinates(
          position.coords.latitude,
          position.coords.longitude
        )
          .then((res: AxiosResponse) => {
            setWeatherData(res.data);
          })
          // eslint-disable-next-line no-alert
          .catch((e: AxiosError) => alert(e.message));
      });
    }
  }, []);

  return weatherData ? <WeatherDetails weatherData={weatherData} /> : null;
};

const mapStateToProps = (state: {
  latitude: number;
  longitude: number;
}): StateProps => ({
  latitude: state.latitude,
  longitude: state.longitude
});

export default connect(mapStateToProps, null)(WeatherAppContainer);
