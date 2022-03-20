import React, { useState } from "react";

import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
   
}
  if (loaded && props.city === forecast.city.name) {
  return (
    <div className="WeatherForecast row">
     
      <ForecastPreview data={forecast.list[0]} />
      <ForecastPreview data={forecast.list[1]} />
      <ForecastPreview data={forecast.list[2]} />
      <ForecastPreview data={forecast.list[3]} />
      <ForecastPreview data={forecast.list[5]} />
      </div>
    );
} else {
  let apiKey = "1e983fc1289e5b13249048fafebff087";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecast);

  return ( 
    <div className="WeatherForecast">
      {props.city}
    </div>

  );
}
}