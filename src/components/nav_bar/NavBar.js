import styles from './NavBar.module.css';

import { useState } from "react";

import Content from '../content/Content';

function NavBar({ nowWeather, forecast, theme }) {
    const [activeTab, setActiveTab] = useState('today');

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.tabs}>
                <button
                    className={activeTab === 'today' ? styles.active : ''}
                    onClick={() => setActiveTab('today')}
                >
                    Сегодня
                </button>
                <button
                    className={activeTab === 'forecast' ? styles.active : ''}
                    onClick={() => setActiveTab('forecast')}
                >
                    Прогноз
                </button>
            </div>

            <Content activeTab={activeTab} weather={nowWeather} forecast={forecast} theme={theme}/>
        </div>
    );
}

export default NavBar;