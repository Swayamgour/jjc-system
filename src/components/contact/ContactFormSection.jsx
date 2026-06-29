// components/contact/ContactFormSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Layout section: 2-column grid (form | info card).
// Collapses to single column on mobile.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import styles from './ContactFormSection.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const ContactFormSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className={styles.section} aria-labelledby="contact-section-title" ref={ref}>
      <div className={styles.inner}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={styles.formCol}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          custom={0.12}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={styles.infoCol}
        >
          <ContactInfoCard />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
