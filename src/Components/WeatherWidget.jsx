import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'cdb61d1e4d6235ea35ec42d60757699e';
      const city = 'Bengaluru';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget-container">
      {weather ? (
        <>
          <h4>{weather.name}</h4>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
