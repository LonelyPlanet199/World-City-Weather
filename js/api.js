async function fetchWeather(city) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}?city=${city}`);
      if (!response.ok) throw new Error('Failed to fetch weather');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }
  
  export { fetchWeather };