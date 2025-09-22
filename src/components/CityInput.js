import { useState } from "react";

import styles from './CityInput.module.css';

function CityInput({ onCitySubmit, theme }) {
    const [city, setCity] = useState('Челябинск');

    const handleSubmit = () => {
        if (city.trim() !== '') onCitySubmit(city.trim());
        setCity('');
    };

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                className={`${styles.input} ${styles[theme]}`}
                placeholder="Введите город"
            />
            <button onClick={handleSubmit} className={`${styles.button} ${styles[theme]}`}>
                Посмотреть прогноз
            </button>
        </div>
    )
}

export default CityInput;