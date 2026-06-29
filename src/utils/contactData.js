// ─── Contact Page Static Data ─────────────────────────────────────────────
// All static content for the Contact page lives here so components stay
// logic-free and easy to update without touching JSX.

export const CONTACT_INFO = [
  {
    id: 'address',
    icon: 'MapPin',
    label: 'Our Office',
    lines: ['123 Business Avenue, Suite 400', 'New York, NY 10001, USA'],
    link: null,
  },
  {
    id: 'phone',
    icon: 'Phone',
    label: 'Phone',
    lines: ['+1 (800) 555-0199'],
    link: 'tel:+18005550199',
  },
  {
    id: 'email',
    icon: 'Mail',
    label: 'Email',
    lines: ['hello@jjcsystems.com'],
    link: 'mailto:hello@jjcsystems.com',
  },
  {
    id: 'hours',
    icon: 'Clock',
    label: 'Business Hours',
    lines: ['Mon – Fri: 9 AM – 6 PM EST', 'Sat – Sun: Closed'],
    link: null,
  },
];

export const SOCIAL_LINKS = [
  { id: 'linkedin', icon: 'Linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { id: 'facebook', icon: 'Facebook', href: 'https://facebook.com', label: 'Facebook' },
  { id: 'instagram', icon: 'Instagram', href: 'https://instagram.com', label: 'Instagram' },
  { id: 'twitter', icon: 'Twitter', href: 'https://twitter.com', label: 'Twitter' },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service…' },
  { value: 'microsoft-365', label: 'Microsoft 365' },
  { value: 'azure', label: 'Azure Cloud' },
  { value: 'dynamics-365', label: 'Dynamics 365' },
  { value: 'power-platform', label: 'Power Platform' },
  { value: 'security', label: 'Security & Compliance' },
  { value: 'other', label: 'Other / Not sure' },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How quickly will I hear back after submitting this form?',
    answer:
      'Our team typically responds within one business day. For urgent matters, please call us directly at +1 (800) 555-0199.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer a free initial consultation?',
    answer:
      'Yes — we offer a complimentary 30-minute discovery call for all new clients. Use the form above to schedule yours.',
  },
  {
    id: 'faq-3',
    question: 'Can JJC Systems work with companies outside the US?',
    answer:
      'Absolutely. We serve clients across North America, Europe, and the Asia-Pacific region. Most of our delivery is remote-first.',
  },
  {
    id: 'faq-4',
    question: 'What information should I have ready for the first call?',
    answer:
      'A brief overview of your current tech stack, the challenge you want to solve, and your preferred timeline is plenty to get started.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide ongoing support after a project ends?',
    answer:
      'Yes. We offer flexible managed-services and support retainer plans so you always have access to expert help post-launch.',
  },
];

// Map embed coordinates (NYC placeholder — replace with real office coords)
export const MAP_CONFIG = {
  // Using OpenStreetMap embed — no API key required
  embedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9960%2C40.7228&layer=mapnik&marker=40.7178%2C-74.0010',
  linkUrl: 'https://maps.google.com/?q=123+Business+Avenue+New+York+NY',
};
