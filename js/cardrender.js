import { createSunRays, createRaindrops /*, createSnowflakes, createWindElements */ } from './animations.js';

function renderWeatherCard(weatherData) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ''; // Clear previous card

    const card = document.createElement('div');
    card.className = 'weather-card';

    const content = `
        <div class="card-content">
            <div>
                <div class="card-title">${weatherData.condition.charAt(0).toUpperCase() + weatherData.condition.slice(1)}</div>
                <div class="card-temp">${Math.round(weatherData.temp)}°C</div>
            </div>
            <div class="card-details">
                <p>${weatherData.condition}</p>
                <p>Humidity: ${weatherData.humidity}%</p>
                <p>Wind: ${weatherData.windSpeed} km/h</p>
            </div>
        </div>
    `;
    card.innerHTML = content;

    // Add animation based on condition
    if (weatherData.condition === 'clear') {
        card.innerHTML += '<div class="sun"></div>';
        createSunRays(card);
    } else if (weatherData.condition === 'rain') {
        card.innerHTML += '<div class="cloud"></div>';
        createRaindrops(card);
    } /* Add snow and wind conditions similarly */

    container.appendChild(card);
}

export { renderWeatherCard };