import { createSunRays, createRaindrops, createSnowflakes, createWindElements, createLightning, createMist, createDust, createTornado } from './animations.js';

function renderWeatherCard(weatherData) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'card';

    console.log('Weather Data:', weatherData);

    let conditionClass = 'default-card';
    let animationElement = '';
    
    if (weatherData.condition.includes('clear')) {
        conditionClass = 'sun-card';
        animationElement = '<div class="sun"></div>';
    } else if (weatherData.condition.includes('rain') || weatherData.condition.includes('drizzle')) {
        conditionClass = 'rain-card';
        animationElement = '<div class="cloud"></div>';
    } else if (weatherData.condition.includes('snow')) {
        conditionClass = 'snow-card';
        animationElement = '<div class="cloud"></div>';
    } else if (weatherData.condition.includes('wind') || weatherData.windSpeed > 20) {
        conditionClass = 'wind-card';
    } else if (weatherData.condition.includes('cloud')) {
        conditionClass = 'cloud-card';
        animationElement = '<div class="cloud"></div>';
    } else if (weatherData.condition.includes('thunderstorm')) {
        conditionClass = 'thunderstorm-card';
        animationElement = '<div class="cloud"></div>';
    } else if (weatherData.condition.includes('mist') || weatherData.condition.includes('fog')) {
        conditionClass = 'mist-card';
    } else if (weatherData.condition.includes('haze') || weatherData.condition.includes('smoke')) {
        conditionClass = 'haze-card';
    } else if (weatherData.condition.includes('dust') || weatherData.condition.includes('sand')) {
        conditionClass = 'dust-card';
    } else if (weatherData.condition.includes('ash')) {
        conditionClass = 'ash-card';
    } else if (weatherData.condition.includes('squall') || weatherData.condition.includes('tornado')) {
        conditionClass = 'tornado-card';
    }

    card.classList.add(conditionClass);
    card.innerHTML = `
        ${animationElement}
        <div class="card-content">
            <div>
                <div class="card-title">${weatherData.city}</div>
                <div class="card-temp">${Math.round(weatherData.temp)}°C</div>
            </div>
            <div class="card-details">
                <p>${weatherData.condition}</p>
                <p>湿度: ${weatherData.humidity}%</p>
                <p>风速: ${weatherData.windSpeed} km/h</p>
            </div>
        </div>
    `;

    container.appendChild(card);

    if (weatherData.condition.includes('clear')) {
        createSunRays(card);
    } else if (weatherData.condition.includes('rain') || weatherData.condition.includes('drizzle')) {
        createRaindrops(card);
    } else if (weatherData.condition.includes('snow')) {
        createSnowflakes(card);
    } else if (weatherData.condition.includes('wind') || weatherData.windSpeed > 20) {
        createWindElements(card);
    } else if (weatherData.condition.includes('thunderstorm')) {
        createLightning(card);
        createRaindrops(card); // 雷暴通常伴随雨
    } else if (weatherData.condition.includes('mist') || weatherData.condition.includes('fog')) {
        createMist(card);
    } else if (weatherData.condition.includes('haze') || weatherData.condition.includes('smoke')) {
        createMist(card); // 复用雾动画
    } else if (weatherData.condition.includes('dust') || weatherData.condition.includes('sand')) {
        createDust(card);
    } else if (weatherData.condition.includes('ash')) {
        createSnowflakes(card); // 复用雪花动画，模拟灰烬
    } else if (weatherData.condition.includes('squall') || weatherData.condition.includes('tornado')) {
        createTornado(card);
        createWindElements(card);
    }
}

export { renderWeatherCard };