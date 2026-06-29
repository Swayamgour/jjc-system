import styles from './IndustrieGrid.module.css';

/**
 * IndustriesGrid — row of icon+label chips.
 * Props:
 *  eyebrow, heading
 *  industries: [{ icon, label }]
 */
const IndustriesGrid = ({ eyebrow, heading, industries = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {heading && <h2 className={styles.heading}>{heading}</h2>}
        </div>

        <div className={styles.grid}>
          {industries.map((item, i) => (
            <div className={styles.item} key={i}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;