async function fetchWeather(city) {
    try {
      const response = await fetch(`http://127.0.0.1:3000/weather?city=${city}`);
      if (!response.ok) throw new Error('Failed to fetch weather');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }
  
  export { fetchWeather };