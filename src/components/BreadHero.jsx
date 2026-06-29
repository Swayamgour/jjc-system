import styles from '../BreadHero.module.css';
import { ArrowRight } from 'lucide-react';

/**
 * HeroBanner — reusable top-of-page hero with breadcrumb eyebrow, heading,
 * description, up to 2 CTAs, and a right-side visual slot.
 *
 * Props:
 *  eyebrow:     string  -> small uppercase label e.g. "ABOUT JJC SYSTEMS"
 *  title:       string | ReactNode -> supports multi-line via \n
 *  description: string
 *  primaryCta:  { label, onClick, href }
 *  secondaryCta:{ label, onClick, href }
 *  visual:      ReactNode -> image, illustration, or custom JSX placed on the right
 *  variant:     'photo' | 'illustration' | 'plain' -> affects right panel background
 */
const BreadHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
  variant = 'photo',
}) => {
  const titleLines = typeof title === 'string' ? title.split('\n') : null;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {eyebrow && (
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {eyebrow}
            </span>
          )}

          <h1 className={styles.title}>
            {titleLines
              ? titleLines.map((line, i) => (
                <span className={styles.titleLine} key={i}>
                  {line}
                </span>
              ))
              : title}
          </h1>

          {description && <p className={styles.description}>{description}</p>}

          {(primaryCta || secondaryCta) && (
            <div className={styles.ctaRow}>
              {primaryCta && (
                <a
                  className={styles.btnPrimary}
                  href={primaryCta.href || '#'}
                  onClick={primaryCta.onClick}
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  className={styles.btnSecondary}
                  href={secondaryCta.href || '#'}
                  onClick={secondaryCta.onClick}
                >
                  {secondaryCta.label}
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className={`${styles.visualPanel} ${styles[variant]}`}>
          <img src={visual} />
        </div>
      </div>

      {/* bottom decorative curve, matches brand pattern across pages */}
      <svg
        className={styles.curve}
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C320,90 1120,0 1440,48 L1440,90 L0,90 Z"
          fill="var(--white)"
        />
      </svg>
    </section>
  );
};

export default BreadHero;