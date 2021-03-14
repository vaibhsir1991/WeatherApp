export const apiEndPoints = {
  googleGeocodeAPI: (lat: number, long: number) =>
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_API_KEY}`,
  openWeatherApiByCity: (city: string) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`,
  openWeatherApiByCoordinates: (lat: number, long: number) =>
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_KEY}`
};
