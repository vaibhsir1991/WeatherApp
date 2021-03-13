export const apiEndPoints = {
  googleGeocodeAPI: (lat: number, long: number) =>
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}key=${process.env.GOOGLE_API_KEY}`,
  openWeatherApi: (city: string) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`
};
