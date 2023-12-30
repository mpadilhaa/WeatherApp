import { createClient } from "pexels";
import CardError from "../components/CardError/CardError";

export async function apiWeatherCall(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b32c61e6740d29e46f5ac6611825048&units=metric&lang=pt_br`
  );
  const detailsWeather = await response.json();

  return detailsWeather;
}
export async function apiPexelsCall(city, photo) {
  const client = createClient(
    "m9GXfnNt6RRq8219EtFZxevyIBTXPholawTumBti0QkG3JmbNWxu4SWX"
  );
  const query = city;

  return client.photos.search({ query, per_page: 3 });
}
