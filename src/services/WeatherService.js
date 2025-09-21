const API_KEY = '591655fd154a22efecf283f4cea6f9d4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(city) {
    const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`
    );

    if (!response.ok) {
        throw new Error('Город не найден');
    }

    return response.json();
}