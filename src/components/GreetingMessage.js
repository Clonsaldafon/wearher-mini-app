import styles from './GreetingMessage.module.css';

function GreetingMessage({ user, theme }) {
    if (!user) {
        return (
            <div className={styles.container}>
                <p className={`${styles.greeting} ${styles[theme]}`}>Привет!</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <p className={`${styles.greeting} ${styles[theme]}`}>Привет, {user.first_name}!</p>
        </div>
    );
}

export default GreetingMessage;