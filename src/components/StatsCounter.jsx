import styles from '../StatsCounter.module.css';

const StatsCounter = ({ stats = [] }) => {
  return (
    <div className={styles.bar}>
      {stats.map((stat, i) => (
        <div className={styles.item} key={i}>
          {stat.icon && <span className={styles.icon}>{stat.icon}</span>}
          <div className={styles.values}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
          {i < stats.length - 1 && <span className={styles.divider} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;