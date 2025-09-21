import styles from './Forecast5Days.module.css';

function Forecast5Days({ data, theme }) {
    if (!data) return null;

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h2>{data.city.name}, {data.city.country} - Прогноз на 5 дней</h2>
            {Object.entries(data.daily).map(([date, forecasts]) => (
                <div key={date} className={styles.day}>
                    <h3>{date}</h3>
                    <div className={styles.hours}>
                        {forecasts.map((f, i) => (
                            <div key={i} className={styles.hour}>
                                <p>{f.time}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
                                    alt={f.weather}
                                    className={styles.icon}
                                />
                                <p>{f.temp}°C</p>
                                <p>{f.weather}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Forecast5Days;