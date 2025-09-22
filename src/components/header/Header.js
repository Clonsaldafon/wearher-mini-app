import styles from './Header.module.css';

function Header({ user, city, theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <button className={`${styles.menu_button} ${styles[theme]}`} />
            <p className={`${styles.city} ${styles[theme]}`}>{city}</p>
            <img src={user?.photo_url || '/default-avatar.jpg'} alt='avatar' className={styles.avatar}/>
        </div>
    );
}

export default Header;