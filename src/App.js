import logo from './logo.svg';
import './App.css';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

import GreetingMessage from './components/GreetingMessage';
import CityInput from './components/CityInput';
import WeatherForecast from './components/WeatherForecats';
import ErrorMessage from './components/ErrorMessage';

import { getWeather } from './services/WeatherService';

function App() {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        WebApp.ready();
        WebApp.expand();

        setUser(WebApp.initDataUnsafe?.user || null);

        const isDark = WebApp.themeParams?.bg_color && WebApp.themeParams.bg_color !== '#ffffff';
        setTheme(isDark ? 'dark' : 'light');
    }, []);

    const handleCitySubmit = async (city) => {
        try {
            setError('');
            const data = await getWeather(city);
            setWeather(data);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    return (
        <div className='App'>
            <GreetingMessage user={user} theme={theme} />
            <CityInput onCitySubmit={handleCitySubmit} theme={theme} />
            {error && <ErrorMessage message={error} theme={theme} />}
            {weather && <WeatherForecast data={weather} theme={theme} />}
        </div>
    );
}

export default App;
