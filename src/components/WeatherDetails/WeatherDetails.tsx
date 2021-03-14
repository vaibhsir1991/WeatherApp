/* eslint-disable space-infix-ops */
import React from 'react';
import {
  CityName,
  Details,
  HumidityWind,
  HumidityWindDiv,
  Icon,
  Sperator,
  TempretureDiv,
  Wrapper
} from './WeatherDetails.styles';
import '../../css/weather-icons.css';
import { weatherData } from '../../testing/mockWeatherData';
import FormattedTempreture from '../_utils/FormattedTempreture/FormattedTempreture';

const WeatherDetails = (): React.ReactElement => {
  const tempretureDetails = weatherData;
  return (
    <Wrapper>
      <CityName>{tempretureDetails.name}</CityName>
      <Icon className="wi wi-day-lightning" />
      <Sperator />
      <Details>
        <TempretureDiv>
          <FormattedTempreture
            tempreture={tempretureDetails.main.temp}
            unit="C"
          />
        </TempretureDiv>
        <HumidityWindDiv>
          <HumidityWind>
            <i className="wi wi-humidity" />
            &nbsp;&nbsp;
            {tempretureDetails.main.humidity} %
          </HumidityWind>
          <HumidityWind>
            <i className="wi wi-small-craft-advisory" />
            &nbsp;&nbsp; {tempretureDetails.wind.speed.toFixed(2)} km/hr
          </HumidityWind>
        </HumidityWindDiv>
      </Details>
    </Wrapper>
  );
};

export default WeatherDetails;
