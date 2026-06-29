import styles from '../BottomCTA.module.css';
import { ArrowRight } from 'lucide-react';

/**
 * BottomCTA — reusable closing call-to-action banner.
 * Props:
 *  title: string
 *  description: string (optional)
 *  cta: { label, onClick, href }
 */
const BottomCTA = ({ title, description, cta }) => {
  return (
    <section className={styles.cta}>
      <svg
        className={styles.curve}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,80 C400,0 1040,80 1440,10 L1440,0 L0,0 Z" fill="var(--white)" />
      </svg>

      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {cta && (
          <a className={styles.btn} href={cta.href || '#'} onClick={cta.onClick}>
            {cta.label}
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
};

export default BottomCTA;