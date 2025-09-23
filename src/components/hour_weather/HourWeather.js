import styles from './HourWeather.module.css';

function HourWeather({ forecast, theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            {forecast.map((f, i) => (
                <div key={i} className={styles.hour}>
                    <p className={styles.time}>{f.time}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
                        alt={f.weather}
                        className={styles.icon}
                    />
                    <p className={styles.temperature}>{Math.round(f.temp)}°</p>
                </div>
            ))}
        </div>
    );
}

export default HourWeather;