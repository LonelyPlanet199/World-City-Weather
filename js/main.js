import { fetchWeather } from './api.js';
import { renderWeatherCard } from './cardRenderer.js';

document.addEventListener('DOMContentLoaded', async () => {
    const citySelect = document.getElementById('citySelect');
    const cityInput = document.getElementById('cityInput');
    const addCityBtn = document.getElementById('addCityBtn');
    const removeCityBtn = document.getElementById('removeCityBtn');

    if (!citySelect || !cityInput || !addCityBtn || !removeCityBtn) {
        console.error('Required DOM elements not found');
        return;
    }

    // 初始化城市列表
    let cities = JSON.parse(localStorage.getItem('cities')) || [
        'London,UK',
        'New York,US',
        'Tokyo,JP',
        'Sydney,AU',
        'Beijing,CN',
        'Miami,US',
        'Delhi,IN',
        'Reykjavik,IS'
    ];
    console.log('Initial cities:', cities);

    // 填充下拉菜单
    function populateCitySelect() {
        citySelect.innerHTML = '<option value="">选择城市</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city.split(',')[0];
            citySelect.appendChild(option);
        });
        console.log('Dropdown populated with', cities.length, 'cities');
    }
    populateCitySelect();

    // 添加城市事件
    addCityBtn.addEventListener('click', async () => {
        const newCity = cityInput.value.trim();
        if (!newCity) {
            alert('请输入城市名（如 Paris,FR）');
            return;
        }
        const weatherData = await fetchWeather(newCity);
        if (!weatherData) {
            alert(`无法找到 ${newCity} 的天气数据，请检查输入格式（如 Paris,FR）`);
            return;
        }
        if (!cities.includes(newCity)) {
            cities.push(newCity);
            localStorage.setItem('cities', JSON.stringify(cities));
            populateCitySelect();
            cityInput.value = '';
            alert(`${newCity} 已添加成功！`);
        } else {
            alert(`${newCity} 已存在！`);
        }
    });

    // 删除城市事件
    removeCityBtn.addEventListener('click', () => {
        const selectedCity = citySelect.value;
        if (!selectedCity) {
            alert('请先选择一个城市！');
            return;
        }
        if (confirm(`确定删除 ${selectedCity.split(',')[0]} 吗？`)) {
            cities = cities.filter(city => city !== selectedCity);
            localStorage.setItem('cities', JSON.stringify(cities));
            populateCitySelect();
            document.getElementById('cardContainer').innerHTML = ''; // 清空卡片
            alert(`${selectedCity.split(',')[0]} 已成功删除！`);
        }
    });

    // 选择城市事件
    citySelect.addEventListener('change', async (e) => {
        const city = e.target.value;
        if (city) {
            console.log(`Fetching weather for ${city}...`);
            const weatherData = await fetchWeather(city);
            if (weatherData) {
                weatherData.city = city.split(',')[0];
                renderWeatherCard(weatherData);
            } else {
                alert(`无法获取 ${city.split(',')[0]} 的天气数据`);
            }
        }
    });
});