Weather App
Overview
This weather app provides real-time weather information for any city. The app fetches weather data through the OpenWeatherMap API and displays details such as the current temperature, weather conditions, and a 5-day forecast. The app also allows users to toggle between light and dark modes for a better user experience.

Features
Search for weather data by city name.

Display current weather information such as temperature, humidity, wind speed, and weather condition.

Show a 5-day weather forecast.

Toggle between dark mode and light mode.

Real-time weather updates from OpenWeatherMap API.

Technologies Used
React: JavaScript library for building the user interface.

Axios: Promise-based HTTP client for fetching weather data.

Tailwind CSS: Utility-first CSS framework used for styling the components.

OpenWeatherMap API: External API used to fetch weather data.

Prerequisites
Node.js: Required to run the React project.

npm/yarn: Required to install project dependencies.

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/weather-app.git
Navigate to the project directory:

bash
Copy
Edit
cd weather-app
Install the dependencies:

bash
Copy
Edit
npm install
Set up the API key:

Create an account on OpenWeatherMap and get an API key.

Replace the API_KEY constant in the code with your API key.

js
Copy
Edit
const API_KEY = "your_api_key_here";
Start the development server:

bash
Copy
Edit
npm start
Open the app in your browser at http://localhost:3000.

Usage
Search for Weather
Enter the name of a city in the search box and click the "Search" button.

The app will fetch the weather data for the entered city and display:

The current temperature, maximum and minimum temperature, weather condition, wind speed, and humidity.

A 5-day weather forecast with the date, temperature, and condition for each day.

Toggle Dark Mode
Click the "Dark Mode" button to switch to dark mode, or "Light Mode" to switch back to light mode.

The app will toggle between dark and light modes, making it easier to use in different environments.

Example Output
For a city like London, the app will show:

mathematica
Copy
Edit
Weather in London:
- Temperature: 15°C
- Max Temp: 18°C
- Min Temp: 12°C
- Weather: Clear Sky
It will also display a 5-day forecast with temperatures and weather conditions.
