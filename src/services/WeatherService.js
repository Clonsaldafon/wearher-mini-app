const API_KEY = '591655fd154a22efecf283f4cea6f9d4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(city) {
    const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`
    );

    if (!response.ok) throw new Error('Город не найден');

    return response.json();
}

export async function get5DayForecast(city) {
    const response = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`
    );

    if (!response.ok) throw new Error('Город не найден');

    const data = await response.json();

    const dailyForecast = {};

    if (!data.list || !Array.isArray(data.list)) throw new Error('Прогноз недоступен');

    data.list.forEach(item => {
        if (!item.dt_txt || !item.main || !item.weather?.[0]) return;

        const date = item.dt_txt.split(' ')[0];
        if (!dailyForecast[date]) dailyForecast[date] = [];

        dailyForecast[date].push({
            time: item.dt_txt.split(' ')[1].slice(0, 5),
            temp: item.main.temp,
            weather: item.weather[0].description,
            icon: item.weather[0].icon,
        });
    });

    return { city: data.city, daily: dailyForecast };
}