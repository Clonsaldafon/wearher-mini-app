import styles from './GreetingMessage.module.css';

function GreetingMessage({ user, theme }) {
    if (!user) {
        return (
            <div className={styles.container}>
                <p className={`${styles.greeting} ${styles[theme]}`}>Привет!</p>
                <img src='/default-avatar.jpg' alt='avatar' className={styles.avatar} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <p className={`${styles.greeting} ${styles[theme]}`}>Привет, {user.first_name}!</p>
            <img src={user.photo_url || '/default-avatar.jpg'} alt='avatar' className={styles.avatar} />
        </div>
    );
}

export default GreetingMessage;