import React, { useState, useEffect, useRef } from 'react';
import Cloudy from './cloudy.png';
import axios from 'axios';

const WeatherApp = () => {
  const inputref = useRef();
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const API_KEY = "410bd85926a9c9d723995eef0fedd39c";

  const search = async (search) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
      console.log(weatherResponse);
      const data = weatherResponse;
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${API_KEY}`);
      setWeather({
        humidity: data.data.main.humidity,
        temp: data.data.main.temp,
        maxTemp: data.data.main.temp_max,
        minTemp: data.data.main.temp_min,
        location: data.data.name,
        weatherr: data.data.weather[0].main,
        windSpeed: data.data.wind.speed,
      });

      setForecast(forecastResponse.data.list.slice(0, 5)); // Get the next 5 days forecast
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    search("Indore"); // Default search
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center rounded-2xl border shadow-2xl overflow-hidden w-auto mt-16 pt-8 pb-16 sm:p-6  ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center">
        <button onClick={toggleMode} className="px-4 py-1 text-xl border">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="flex mt-10 border">
        <input ref={inputref} className="px-2 md:px-4 py-1 text-xl" type="text" name="name" placeholder="Search city"/>
        <button onClick={() => search(inputref.current.value)} className="px-3 py-1 bg-blue-600 text-white">Search</button>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 mb-2">
      <p className="text-4xl md:text-6xl font-bold text-center mb-6">{weather.location}</p>
        <img className="w-full h-32 mb-6" src={Cloudy} alt="weather icon" />
        <p className="text-4xl md:text-6xl font-bold text-center mb-3">{weather.temp}°C</p>
        <div className="flex justify-between gap-14 mb-8">
          <p className="text-xl">Max: {weather.maxTemp}°C</p>
          <p className="text-xl">Min: {weather.minTemp}°C</p>
        </div>
        <p className='text-3xl md:text-5xl font-bold text-center'>{weather.weatherr}</p>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex justify-between gap-10 mb-6 px-4">
          <p className="text-lg md:text-xl">Humidity: {weather.humidity}%</p>
          <p className="text-lg md:text-xl">
            <i className="fa-solid fa-wind"></i> WindSpeed: {weather.windSpeed} km/hr
          </p>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="mt-4 w-full">
        <h2 className="text-2xl mb-4">5-Day Forecast</h2>
        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          {forecast.map((day, index) => (
            <div key={index} className="flex flex-row justify-center gap-4 mb-4 md:flex-col items-center mx-4">
              <p className="font-bold">{new Date(day.dt_txt).toLocaleDateString()}</p>
              <p>{Math.round(day.main.temp)}°C</p>
              <p>{day.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
