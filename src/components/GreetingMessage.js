import styles from './GreetingMessage.module.css';

function GreetingMessage({ user, theme }) {
    const themeClass = theme === 'dark' ? styles.dark : styles.light;

    if (!user) {
        return <p className={`${styles.greeting} ${themeClass}`}>Привет!</p>;
    }

    return (
        <p className={`${styles.greeting} ${themeClass}`}>
            Привет, {user.first_name}!
        </p>
    );
}

export default GreetingMessage;