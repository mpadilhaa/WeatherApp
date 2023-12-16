export async function apiWeatherCall(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b32c61e6740d29e46f5ac6611825048&units=metric&lang=pt_br`
  );

  const detailsWeather = await response.json();

  return detailsWeather;
}
