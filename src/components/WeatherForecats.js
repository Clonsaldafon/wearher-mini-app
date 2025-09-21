import styles from './WeatherForecast.module.css';

function WeatherForecast({ data, theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h2>{data.name}, {data.sys.country}</h2>
            <p>Температура: {data.main.temp}°C</p>
            <p>Погодные условия: {data.weather[0].description}</p>
            <p>Ветер: {data.wind.speed} м/с</p>
        </div>
    );
}

export default WeatherForecast;