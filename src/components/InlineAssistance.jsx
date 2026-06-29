import styles from './InlineAssistance.module.css';
import { Phone, Headphones } from 'lucide-react';

/**
 * InlineAssistance — light-blue inline banner, e.g. "Need Immediate Assistance?"
 * Props:
 *  title, description
 *  phone: string
 *  cta: { label, onClick }
 */
const InlineAssistance = ({ title, description, phone, cta }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.actions}>
        {cta && (
          <button className={styles.callBtn} onClick={cta.onClick}>
            <Phone size={15} />
            {cta.label}
          </button>
        )}
        {phone && <span className={styles.phone}>{phone}</span>}
      </div>

      <span className={styles.iconBubble}>
        <Headphones size={26} />
      </span>
    </div>
  );
};

export default InlineAssistance;