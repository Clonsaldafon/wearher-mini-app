import styles from './Forecast.module.css';

import { formatDate } from '../../utils/formatDate';

import HourWeather from '../hour_weather/HourWeather';

function Forecast({ data, theme }) {
    if (!data) return null;

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h2>Прогноз на 5 дней</h2>
            {Object.entries(data.daily).map(([date, forecasts]) => (
                <div key={date} className={styles.day}>
                    <h3>{formatDate(date)}</h3>
                    <HourWeather forecast={forecasts} theme={theme} />
                </div>
            ))}
        </div>
    );
}

export default Forecast;