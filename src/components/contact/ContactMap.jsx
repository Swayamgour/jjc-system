// components/contact/ContactMap.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Map section with:
//   • Section heading + description
//   • Embedded OpenStreetMap iframe (no API key needed; swap for Google Maps
//     iframe src when you have a key by updating MAP_CONFIG.embedUrl)
//   • "Get Directions" CTA link
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navigation } from 'lucide-react';
import { MAP_CONFIG } from '../../utils/contactData';
import styles from './ContactMap.module.css';

const ContactMap = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact-map"
      className={styles.section}
      aria-labelledby="map-heading"
      ref={ref}
    >
      <div className={styles.inner}>
        {/* Header row */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className={styles.eyebrow}>Our Location</span>
            <h2 id="map-heading" className={styles.heading}>
              Find Us on the Map
            </h2>
            <p className={styles.description}>
              We're based in the heart of New York City. Walk-in visits are
              welcome — just give us a heads-up beforehand!
            </p>
          </div>

          <a
            href={MAP_CONFIG.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
            aria-label="Open directions in Google Maps"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </motion.div>

        {/* Map iframe */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <iframe
            src={MAP_CONFIG.embedUrl}
            className={styles.iframe}
            title="JJC Systems office location on OpenStreetMap"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {/* Overlay address pill */}
          <div className={styles.addressPill}>
            <Navigation size={14} />
            <span>123 Business Avenue, Suite 400, New York, NY 10001</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
