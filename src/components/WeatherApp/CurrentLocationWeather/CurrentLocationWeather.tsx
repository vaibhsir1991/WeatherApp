import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import {
  getWeatherDataByCity,
  getWeatherDataByCoordinates
} from 'services/weatherServices';
import { Container, Link } from '@material-ui/core';
import WeatherDetails from './WeatherDetails';

interface Props {
  latitude: number;
  longitude: number;
}

const WeatherAppContainer = (props: Props): React.ReactElement | null => {
  let params = useLocation().search;
  let city = new URLSearchParams(params).get('city');
  let [weatherData, setWeatherData] = React.useState();

  React.useEffect(() => {
    if (city !== null && city) {
      getWeatherDataByCity(city)
        .then((res: AxiosResponse) => {
          setWeatherData(res.data);
        })
        .catch((e: AxiosError) => alert(e.message));
    } else {
      getWeatherDataByCoordinates(props.latitude, props.longitude)
        .then((res: AxiosResponse) => {
          setWeatherData(res.data);
        })
        .catch((e: AxiosError) => alert(e.message));
    }
  }, []);

  return weatherData ? (
    <Container maxWidth="sm">
      <Link href="/">Go Back</Link>
      <WeatherDetails weatherData={weatherData} />
    </Container>
  ) : null;
};

const mapStateToProps = (state: {
  location: { latitude: number; longitude: number };
}) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude
});

export default connect(mapStateToProps, null)(WeatherAppContainer);
