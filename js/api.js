const API_KEY = 'aae88898005a299957a258c86f16390f'; // Replace with your key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        return {
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            condition: data.weather[0].main.toLowerCase()
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

export { fetchWeather };