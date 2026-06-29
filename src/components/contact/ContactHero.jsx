// components/contact/ContactHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Hero banner at the top of the Contact page.
// Reuses the existing BreadHero component and brand CSS variables.
// ─────────────────────────────────────────────────────────────────────────────

import BreadHero from '../BreadHero';
import breadContactImg from '../../assets/bread-contact.webp';

const ContactHero = () => (
  <BreadHero
    eyebrow="GET IN TOUCH"
    title={"Let's Start a\nConversation"}
    description="Have a question about Microsoft solutions, a project in mind, or just want to explore how JJC Systems can help? We'd love to hear from you."
    primaryCta={{ label: 'Jump to Form', href: '#contact-form' }}
    secondaryCta={{ label: 'View Locations', href: '#contact-map' }}
    visual={breadContactImg}
    variant="photo"
  />
);

export default ContactHero;
