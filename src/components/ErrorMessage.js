import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, theme }) {
    return <p className={`${styles.error} ${styles[theme]}`}>{message}</p>;
}

export default ErrorMessage;