import styles from './ProcessSteps.module.css';
import { ArrowRight } from 'lucide-react';

/**
 * ProcessSteps — numbered/iconed step sequence connected by arrows.
 * Props:
 *  eyebrow, heading
 *  steps: [{ icon, title, description }]
 */
const ProcessSteps = ({ eyebrow, heading, steps = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.timeline}>

          <div className={styles.line}>
            <div className={styles.movingArrow}></div>
          </div>

          <div className={styles.row}>
            {steps.map((step, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.icon}>
                  {step.icon}
                </div>

                <h3 className={styles.title}>
                  {step.title}
                </h3>

                <p className={styles.description}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;