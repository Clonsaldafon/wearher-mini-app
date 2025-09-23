import logo from './logo.svg';
import './App.css';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

import Header from './components/header/Header';
import NavBar from './components/nav_bar/NavBar';
import ErrorMessage from './components/ErrorMessage';

import { getWeather, get5DayForecast } from './services/WeatherService';

function App() {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [nowWeather, setNowWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        WebApp.ready();
        WebApp.expand();

        setUser(WebApp.initDataUnsafe?.user || null);

        const isDark = WebApp.themeParams?.bg_color && WebApp.themeParams.bg_color !== '#ffffff';
        setTheme(isDark ? 'dark' : 'light');
        // setTheme('dark');

        loadData('Челябинск')
    }, []);

    const loadData = async (city) => {
        setLoading(true);
        setError(null);

        try {
            setError('');
            const data = await getWeather(city);
            setNowWeather(data);

            const forecast = await get5DayForecast(city);
            setForecast(forecast);

            setLoading(false);
        } catch (err) {
            setError(err.message);
            setNowWeather(null);
            setForecast(null);
            setLoading(false);
        }
    };

    return (
        <div className={`App ${theme}`}>
            <Header user={user} city={loading ? '' : nowWeather?.name} theme={theme} />
            <NavBar nowWeather={nowWeather} forecast={forecast} theme={theme} />

            {loading ? <p>Загрузка...</p> : ''}

            {error && <ErrorMessage message={error} theme={theme} />}
        </div>
    );
}

export default App;
