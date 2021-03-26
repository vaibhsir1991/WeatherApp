/* eslint-disable space-infix-ops */
import { mapClassToWeatherType } from 'components/_utils/mapClassToWeatherType';
import React from 'react';
import * as Styled from './WeatherDetails.styles';

const FormattedTempreture = React.lazy(
  () => import('components/_shared/FormattedTempreture/FormattedTempreture')
);

interface Props {
  weatherData: any;
}

const WeatherDetails = ({ weatherData }: Props): React.ReactElement => {
  const weatherType = weatherData.weather[0].main;
  const classForWeatherType = `wi ${mapClassToWeatherType(weatherType)}`;

  return (
    <Styled.Wrapper color={Styled.getBackgroundColor(weatherData.main.temp)}>
      <Styled.CityName>{weatherData.name}</Styled.CityName>
      <Styled.Icon className={classForWeatherType} />
      <Styled.Sperator />
      <Styled.Details>
        <Styled.TempretureDiv>
          <FormattedTempreture tempreture={weatherData.main.temp} unit="C" />
        </Styled.TempretureDiv>
        <Styled.HumidityWindDiv>
          <Styled.HumidityWind>
            <i className="wi wi-humidity" />
            &nbsp;&nbsp;
            {weatherData.main.humidity} %
          </Styled.HumidityWind>
          <Styled.HumidityWind>
            <i className="wi wi-small-craft-advisory" />
            &nbsp;&nbsp; {weatherData.wind.speed.toFixed(2)} km/hr
          </Styled.HumidityWind>
        </Styled.HumidityWindDiv>
      </Styled.Details>
    </Styled.Wrapper>
  );
};

export default WeatherDetails;
