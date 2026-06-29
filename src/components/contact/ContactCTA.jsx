// components/contact/ContactCTA.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Bottom CTA banner for the Contact page.
// Wraps the shared BottomCTA component with contact-page-specific copy.
// ─────────────────────────────────────────────────────────────────────────────

import BottomCTA from '../BottomCTA';

const ContactCTA = () => (
  <BottomCTA
    title="Ready to Modernize Your Business with Microsoft?"
    description="Schedule a free 30-minute discovery call with one of our certified consultants."
    cta={{
      label: 'Schedule a Free Call',
      href: '#contact-form',
    }}
  />
);

export default ContactCTA;
