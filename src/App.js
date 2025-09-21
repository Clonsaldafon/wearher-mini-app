import logo from './logo.svg';
import './App.css';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

import GreetingMessage from './components/GreetingMessage';

function App() {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        WebApp.ready();
        WebApp.expand();

        if (WebApp.initDataUnsafe?.user) {
            setUser(WebApp.initDataUnsafe.user);
        }

        if (WebApp.themeParams?.bg_color) {
            const isDark = WebApp.themeParams.bg_color !== '#ffffff';
            setTheme(isDark ? 'dark' : 'light');
        }
    }, []);

    return (
        <div className='App'>
            <GreetingMessage user={user} theme={theme} />
        </div>
    );
}

export default App;
