import styles from './Content.module.css';

import TodayWeather from '../../components/today_weather/TodayWeather';
import Forecast from '../../components/forecast/Forecast';

function Content({ activeTab, weather, forecast, theme }) {
    return (
        <div className={styles.container}>
            {activeTab === 'today' && weather && <TodayWeather data={weather} forecast={forecast} theme={theme} />}
            {activeTab === 'forecast' && forecast && <Forecast data={forecast} theme={theme} />}
        </div>
    );
}

export default Content;