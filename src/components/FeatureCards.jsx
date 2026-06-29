import styles from '../FeatureCards.module.css';
import { ArrowRight } from 'lucide-react';

/**
 * FeatureCards — reusable section with eyebrow + heading + responsive card grid.
 * Props:
 *  eyebrow: string
 *  heading: string
 *  columns: number (3 or 4) -> sets desktop grid columns
 *  cards: [{ icon: ReactNode, title, description, link: { label, href } }]
 *  background: 'white' | 'gray'
 */
const FeatureCards = ({ eyebrow, heading, columns = 4, cards = [], background = 'white' }) => {
  return (
    <section className={`${styles.section} ${styles[background]}`}>
      <div className={styles.inner}>
        {(eyebrow || heading) && (
          <div className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {heading && <h2 className={styles.heading}>{heading}</h2>}
          </div>
        )}

        <div className={styles.grid} style={{ '--cols': columns }}>
          {cards.map((card, i) => (
            <div className={styles.card} key={i}>
              {card.icon && <span className={styles.cardIcon}>{card.icon}</span>}
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              {card.link && (
                <a className={styles.cardLink} href={card.link.href || '#'}>
                  {card.link.label}
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;