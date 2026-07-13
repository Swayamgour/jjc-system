// components/contact/ContactFAQ.jsx
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import SplitType from 'split-type';
import styles from './ContactFAQ.module.css';

// ── Single FAQ item ──────────────────────────────────────────────────────────
const FAQItem = ({ item, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.fromTo(contentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        className={styles.question}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-btn-${item.id}`}
        onClick={onToggle}
      >
        <span className={styles.questionText}>{item.q}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        ref={contentRef}
        className={styles.answerWrapper}
        style={{ overflow: 'hidden', height: 0, opacity: 0 }}
      >
        <p className={styles.answer}>{item.a}</p>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const ContactFAQ = ({
  faqs,
  tag = "FAQ",
  title = "Frequently Asked Questions",
  description = "Can't find what you're looking for? Send us a message through the form above and we'll get back to you.",
  ready = true,
}) => {
  const [openId, setOpenId] = useState(faqs?.[0]?.id ?? null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const accordionRef = useRef(null);

  // Keep the first item open once dynamic FAQ data replaces the fallback list
  useEffect(() => {
    if (faqs?.length) setOpenId(faqs[0].id);
  }, [faqs]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  useLayoutEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      // Split text for title
      const split = new SplitType(titleRef.current, {
        types: 'chars'
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Animate eyebrow
      tl.from(eyebrowRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6
      })
        // Animate title characters
        .from(split.chars, {
          x: 150,
          opacity: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'power4.out'
        }, '-=0.2')
        // Animate description
        .from(descRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6
        }, '-=0.3')
        // Animate accordion items
        .from(accordionRef.current.children, {
          x: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.out'
        }, '-=0.3');

      // Hover animations for questions
      const questions = accordionRef.current.querySelectorAll(`.${styles.question}`);
      questions.forEach((q) => {
        q.addEventListener('mouseenter', () => {
          gsap.to(q, {
            scale: 1.02,
            duration: 0.2,
            ease: 'power2.out'
          });
        });
        q.addEventListener('mouseleave', () => {
          gsap.to(q, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          });
        });
      });

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>
        {/* Left: heading */}
        <div className={styles.headingCol}>
          <span ref={eyebrowRef} className={styles.eyebrow}>{tag}</span>
          <h2 ref={titleRef} id="faq-heading" className={styles.heading}>
            {title}
          </h2>
          <p ref={descRef} className={styles.description}>
            {description}
          </p>
        </div>

        {/* Right: accordion */}
        <div ref={accordionRef} className={styles.accordionCol}>
          {faqs.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;