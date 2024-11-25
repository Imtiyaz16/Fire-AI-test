import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome back, Alex</h1>
      <div className={styles.actions}>
        <button className={styles.button}>Request Payout</button>
        <button className={styles.button}>Share Matrices</button>
      </div>
    </header>
  );
};

export default Header;
