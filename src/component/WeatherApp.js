import React, { useState, useEffect } from 'react';
import Cloudy from './cloudy.png';
import axios from 'axios';

const API_KEY = "410bd85926a9c9d723995eef0fedd39c";

const WeatherSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex mt-10 border">
      <input 
        className="px-2 md:px-4 py-1 text-xl"
        type="text"
        placeholder="Search city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => onSearch(searchTerm)} className="px-3 py-1 bg-blue-600 text-white">Search</button>
    </div>
  );
};

const WeatherInfo = ({ weather }) => (
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
);

const Forecast = ({ forecast }) => (
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
);

const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const search = async (searchTerm) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${API_KEY}`);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&units=metric&appid=${API_KEY}`);
      
      setWeather({
        humidity: weatherResponse.data.main.humidity,
        temp: weatherResponse.data.main.temp,
        maxTemp: weatherResponse.data.main.temp_max,
        minTemp: weatherResponse.data.main.temp_min,
        location: weatherResponse.data.name,
        weatherr: weatherResponse.data.weather[0].main,
        windSpeed: weatherResponse.data.wind.speed,
      });

      setForecast(forecastResponse.data.list.slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    search("Indore"); // Default search
  }, []);

  return (
    <div className={`flex flex-col justify-center items-center rounded-2xl border shadow-2xl overflow-hidden w-auto mt-16 pt-8 pb-16 sm:p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="px-4 py-1 text-xl border">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <WeatherSearch onSearch={search} />
      <WeatherInfo weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default WeatherApp;
