

import { useEffect } from 'react';
import ContactHero       from '../../components/contact/ContactHero';
import ContactFormSection from '../../components/contact/ContactFormSection';
import ContactMap        from '../../components/contact/ContactMap';
import ContactFAQ        from '../../components/contact/ContactFAQ';
import ContactCTA        from '../../components/contact/ContactCTA';

// ── SEO hook ──────────────────────────────────────────────────────────────────
const useSEO = ({ title, description }) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    const prevContent = meta.content;
    meta.content = description;

    return () => {
      document.title = prev;
      meta.content = prevContent;
    };
  }, [title, description]);
};

// ── Page component ─────────────────────────────────────────────────────────────

const ContactUs = () => {
  useSEO({
    title: 'Contact Us | JJC Systems – Microsoft Solutions Partner',
    description:
      'Get in touch with JJC Systems. We help businesses transform with Microsoft 365, Azure, and Dynamics 365. Schedule a free consultation today.',
  });

  return (
    <main aria-label="Contact page">
      {/* 1 — Hero banner with breadcrumb eyebrow */}
      <ContactHero />

      {/* 2 — Contact form + info card */}
      <ContactFormSection />

      {/* 3 — Interactive map */}
      <ContactMap />

      {/* 4 — FAQ accordion */}
      <ContactFAQ />

      {/* 5 — Bottom CTA strip */}
      <ContactCTA />
    </main>
  );
};

export default ContactUs;
