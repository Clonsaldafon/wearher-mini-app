import styles from './GreetingMessage.module.css';

function GreetingMessage({ user, theme }) {
    if (!user) {
        return <p className={`${styles.greeting} ${styles[theme]}`}>Привет!</p>;
    }

    return (
        <p className={`${styles.greeting} ${styles[theme]}`}>
            Привет, {user.first_name}!
        </p>
    );
}

export default GreetingMessage;