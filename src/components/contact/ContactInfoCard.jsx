// components/contact/ContactInfoCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Dark navy sidebar card displaying:
//   • Contact details (address, phone, email, hours)
//   • Response-time badge
//   • Social media links
// Uses lucide-react icons (already a project dependency).
// ─────────────────────────────────────────────────────────────────────────────

import { MapPin, Phone, Mail, Clock,     Zap } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/contactData';
import styles from './ContactInfoCard.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// FaLinkedin
// FaInstagram
// FaTwitter
// 


// Map icon string name → Lucide component
const ICON_MAP = { MapPin, Phone, Mail, Clock, FaLinkedin, FaFacebook, FaInstagram, FaTwitter };

const Icon = ({ name, size = 20, className }) => {
  const LucideIcon = ICON_MAP[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

// ── Sub-component: single info row ──────────────────────────────────────────

const InfoRow = ({ item }) => {
  const content = (
    <div className={styles.infoRow}>
      <span className={styles.iconBox}>
        <Icon name={item.icon} size={18} className={styles.icon} />
      </span>
      <div className={styles.infoText}>
        <span className={styles.infoLabel}>{item.label}</span>
        {item.lines.map((line, i) => (
          <span key={i} className={styles.infoValue}>{line}</span>
        ))}
      </div>
    </div>
  );

  return item.link ? (
    <a href={item.link} className={styles.infoLink}>{content}</a>
  ) : (
    content
  );
};

// ── Sub-component: social links row ─────────────────────────────────────────

const SocialLinks = () => (
  <div className={styles.socialSection}>
    <span className={styles.socialLabel}>Follow Us</span>
    <div className={styles.socialRow}>
      {SOCIAL_LINKS.map(({ id, icon, href, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
          aria-label={label}
        >
          <Icon name={icon} size={16} />
        </a>
      ))}
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const ContactInfoCard = () => (
  <aside className={styles.card} aria-label="Contact information">

    <h2 className={styles.cardTitle}>Contact Information</h2>
    <p className={styles.cardSubtitle}>
      Reach out through any channel — we're here to help.
    </p>

    <div className={styles.infoList}>
      {CONTACT_INFO.map((item) => (
        <InfoRow key={item.id} item={item} />
      ))}
    </div>

    {/* Response-time badge */}
    <div className={styles.responseBadge}>
      <span className={styles.badgeIcon}><Zap size={14} /></span>
      <div>
        <span className={styles.badgeTitle}>Typical response time</span>
        <span className={styles.badgeValue}>Within 1 business day</span>
      </div>
    </div>

    <SocialLinks />
  </aside>
);

export default ContactInfoCard;
