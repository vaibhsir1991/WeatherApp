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
import FormattedTempreture from '../_utils/FormattedTempreture/FormattedTempreture';
import { mapClassToWeatherType } from '../_utils/mapClassToWeatherType';

interface Props {
  weatherData: any;
}

const WeatherDetails = ({ weatherData }: Props): React.ReactElement => {
  const weatherType = weatherData.weather[0].main;
  const classForWeatherType = `wi ${mapClassToWeatherType(weatherType)}`;

  return (
    <Wrapper>
      <CityName>{weatherData.name}</CityName>
      <Icon className={classForWeatherType} />
      <Sperator />
      <Details>
        <TempretureDiv>
          <FormattedTempreture tempreture={weatherData.main.temp} unit="C" />
        </TempretureDiv>
        <HumidityWindDiv>
          <HumidityWind>
            <i className="wi wi-humidity" />
            &nbsp;&nbsp;
            {weatherData.main.humidity} %
          </HumidityWind>
          <HumidityWind>
            <i className="wi wi-small-craft-advisory" />
            &nbsp;&nbsp; {weatherData.wind.speed.toFixed(2)} km/hr
          </HumidityWind>
        </HumidityWindDiv>
      </Details>
    </Wrapper>
  );
};

export default WeatherDetails;
