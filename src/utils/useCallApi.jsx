import React, { useEffect, useState } from "react";

const useCallApi = ({ city }) => {
  const IMG_API = `https://api.unsplash.com/search/photos?&query=${city}`;
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b32c61e6740d29e46f5ac6611825048&units=metric&lang=pt_br`;

  useEffect;

  return <div>useCallApi</div>;
};

export default useCallApi;
