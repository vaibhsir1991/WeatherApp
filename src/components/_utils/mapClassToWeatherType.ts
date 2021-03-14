export const mapClassToWeatherType = (weatherType: string) => {
  switch (weatherType.toLowerCase()) {
    case 'clouds':
      return 'wi-cloud';
    case 'rain':
      return 'wi-rain';
    case 'snow':
      return 'wi-snow';
    case 'haze':
      return 'wi-day-haze';
    case 'extreme':
      return 'wi-thunderstorm';
    case 'smoke':
      return 'wi-smoke';
    case 'mist':
      return 'wi-fog';
    case 'sunny':
    case 'clear':
    default:
      return 'wi-day-sunny';
  }
};
