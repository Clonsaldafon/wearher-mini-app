import styles from './TodayWeather.module.css';

import { formatDate } from '../../utils/formatDate';

import HourWeather from '../hour_weather/HourWeather';

function TodayWeather({ data, forecast, theme }) {
    if (!forecast) return '';

    const description = data.weather[0].description;

    const todayKey = Object.keys(forecast.daily)[0];
    const todayForecast = forecast.daily[todayKey];

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h2 className={`${styles.date} ${styles[theme]}`}>{formatDate(String(new Date()))}</h2>
            <div className={styles.content}>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather}
                    className={styles.icon}
                />
                <div className={styles.temperature}>
                    <p className={styles.degrees}>{Math.round(data.main.temp)}°</p>
                    <p className={`${styles.conditions} ${styles[theme]}`}>{description.charAt(0).toUpperCase()}{description.slice(1)}</p>
                </div>
            </div>
            <div className={`${styles.more} ${styles[theme]}`}>
                <div>
                    <p>
                        Ощущается <span>{Math.round(data.main.feels_like)}°C</span>
                    </p>
                    <p>
                        Ветер <span>{data.wind.speed} м/с</span>
                    </p>
                </div>
                <div>
                    <p>
                        Влажность <span>{data.main.humidity}%</span>
                    </p>
                    <p>
                        Облачность <span>{data.clouds.all}%</span>
                    </p>
                </div>
            </div>
            <div className={styles.separator} />

            <HourWeather forecast={todayForecast} theme={theme} />
        </div>
    );
}

export default TodayWeather;