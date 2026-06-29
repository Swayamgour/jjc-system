// components/contact/ContactFAQ.jsx
// ─────────────────────────────────────────────────────────────────────────────
// FAQ accordion:
//   • Single open item at a time (or all collapsed)
//   • Animated expand/collapse via framer-motion
//   • Keyboard accessible (Enter/Space toggles, role="button")
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../../utils/contactData';
import styles from './ContactFAQ.module.css';

// ── Single FAQ item ──────────────────────────────────────────────────────────

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
    <button
      className={styles.question}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${item.id}`}
      id={`faq-btn-${item.id}`}
      onClick={onToggle}
    >
      <span className={styles.questionText}>{item.question}</span>
      <span className={styles.icon} aria-hidden="true">
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`faq-answer-${item.id}`}
          role="region"
          aria-labelledby={`faq-btn-${item.id}`}
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className={styles.answerWrapper}
        >
          <p className={styles.answer}>{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const ContactFAQ = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id); // first open by default
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section} aria-labelledby="faq-heading" ref={ref}>
      <div className={styles.inner}>
        {/* Left: heading */}
        <motion.div
          className={styles.headingCol}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>FAQ</span>
          <h2 id="faq-heading" className={styles.heading}>
            Frequently Asked Questions
          </h2>
          <p className={styles.description}>
            Can't find what you're looking for? Send us a message through the
            form above and we'll get back to you.
          </p>
        </motion.div>

        {/* Right: accordion */}
        <motion.div
          className={styles.accordionCol}
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
