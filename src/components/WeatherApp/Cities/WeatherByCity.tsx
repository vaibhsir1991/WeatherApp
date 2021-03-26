import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import { countries } from 'testing/mockCountries';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import {
  getCountriesAndCity,
  getWeatherDataByCity
} from 'services/weatherServices';

const WeatherDetails = React.lazy(
  () => import('../CurrentLocationWeather/WeatherDetails')
);

interface StateProps {
  latitude: number;
  longitude: number;
}

interface CountryAndCity {
  country: string;
  cities: Array<string>;
}

const WeatherAppContainer = ({
  latitude,
  longitude
}: StateProps): React.ReactElement | null => {
  let params = useLocation().search;
  let city = new URLSearchParams(params).get('city');
  let [countryList, setCountryList] = React.useState<Array<CountryAndCity>>();
  let [weatherData, setWeatherData] = React.useState();
  let [selectedCountry, setSelectedCountry] = React.useState<string>();
  let [cityList, setCityList] = React.useState<Array<string>>();
  let [selectedCity, setSelectedCity] = React.useState<string>();

  React.useEffect(() => {
    getCountriesAndCity()
      .then((res: AxiosResponse) => {
        setCountryList(res.data.data);
      })
      .catch((e: AxiosError) => alert(e.message));
  }, []);

  React.useEffect(() => {
    if (countryList && selectedCountry) {
      const country = countryList.find(
        (item) => item.country === selectedCountry
      );
      setCityList(country?.cities || []);
    }
  }, [selectedCountry]);

  React.useEffect(() => {
    if (selectedCity) {
      getWeatherDataByCity(selectedCity)
        .then((res: AxiosResponse) => {
          setWeatherData(res.data);
        })
        .catch((e: AxiosError) => alert(e.message));
    }
  }, [selectedCity]);

  return (
    <Container maxWidth="sm">
      <FormControl fullWidth>
        <InputLabel id="country">Country</InputLabel>
        <Select
          fullWidth
          labelId="country"
          id="country"
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          disabled={!countryList}
        >
          {countryList &&
            countryList.map((listItem) => (
              <MenuItem key={listItem.country} value={listItem.country}>
                {listItem.country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="city">City</InputLabel>
        <Select
          fullWidth
          labelId="city"
          id="city"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
          disabled={!cityList}
        >
          {cityList &&
            cityList.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {weatherData && <WeatherDetails weatherData={weatherData} />}
    </Container>
  );
};

const mapStateToProps = (state: {
  latitude: number;
  longitude: number;
}): StateProps => ({
  latitude: state.latitude,
  longitude: state.longitude
});

export default connect(mapStateToProps, null)(WeatherAppContainer);
