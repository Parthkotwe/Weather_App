Weather App 
Overview
This Weather App provides real-time weather information for any city by utilizing data from the OpenWeatherMap API. Users can access key details such as the current temperature, weather conditions, humidity, wind speed, and a 5-day forecast. The app also offers a customizable user experience with the option to toggle between light and dark modes.

Features
1) Search for Weather Data by City: Users can enter the name of a city to retrieve weather details.
2)Display Current Weather: The app shows the current temperature, humidity, wind speed, and weather condition.
3)5-Day Forecast: Displays the weather forecast for the next five days, including daily temperature and conditions.
4)Toggle Dark Mode/Light Mode: Users can switch between light and dark modes for an improved viewing experience.
5)Real-Time Weather Updates: The app fetches live weather data from the OpenWeatherMap API.

Technologies Used
React: JavaScript library for building the user interface.
Axios: Promise-based HTTP client for making API requests to fetch weather data.
Tailwind CSS: Utility-first CSS framework used for styling the components.
OpenWeatherMap API: External API used to fetch real-time weather data.

Prerequisites
Node.js: Required to run the React project.
npm/yarn: Required to install project dependencies.

Installation
Clone the Repository:

git clone https://github.com/yourusername/weather-app.git
Navigate to the Project Directory:

cd weather-app
Install the Dependencies:

npm install
Set Up the API Key:

Create an account on OpenWeatherMap and get an API key.
Replace the API_KEY constant in the code with your API key:

javascript
const API_KEY = "your_api_key_here";
Start the Development Server:

npm start
Open the app in your browser at http://localhost:3000.

Usage
Search for Weather
Enter the name of a city in the search box and click the "Search" button.

The app will display:

Current Weather: Temperature, maximum and minimum temperature, weather condition, wind speed, and humidity.

5-Day Forecast: A forecast showing the date, temperature, and condition for each day.

Toggle Dark Mode
Click the "Dark Mode" button to switch to dark mode or "Light Mode" to revert to light mode.

The app will switch between dark and light modes to enhance usability in different environments.

Example Output
For a city like London, the app will display:
Weather in London:
Temperature: 15°C
Max Temp: 18°C
Min Temp: 12°C
Weather: Clear Sky

It will also show a 5-day forecast with the following example:
Day 1: 16°C, Cloudy
Day 2: 17°C, Partly Cloudy
Day 3: 14°C, Rain
Day 4: 18°C, Clear Sky
Day 5: 16°C, Overcast

This ensures users can get both current and future weather data at a glance.
