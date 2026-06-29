// components/contact/ContactForm.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Contact form with:
//   • Controlled inputs + inline validation
//   • Success banner (replaces the form on submit)
//   • Error banner (shown while keeping the form editable)
//   • Accessible labels, aria-invalid, aria-describedby
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICE_OPTIONS } from '../../utils/contactData';
import styles from './ContactForm.module.css';

// ── Validation helpers ───────────────────────────────────────────────────────
const VALIDATORS = {
  firstName: (v) => v.trim().length >= 2 ? '' : 'First name must be at least 2 characters.',
  lastName:  (v) => v.trim().length >= 2 ? '' : 'Last name must be at least 2 characters.',
  email:     (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.',
  company:   (v) => v.trim().length >= 2 ? '' : 'Please enter your company name.',
  service:   (v) => v ? '' : 'Please select a service area.',
  message:   (v) => v.trim().length >= 20 ? '' : 'Message must be at least 20 characters.',
};

const INITIAL_VALUES = {
  firstName: '', lastName: '', email: '',
  phone: '', company: '', service: '', message: '',
};

// ── Sub-components ───────────────────────────────────────────────────────────

const Field = ({ id, label, required, error, children }) => (
  <div className={styles.field}>
    <label className={styles.label} htmlFor={id}>
      {label}
      {required && <span className={styles.required} aria-hidden="true"> *</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.span
          className={styles.errorMsg}
          id={`${id}-error`}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
        >
          {error}
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [values, setValues]   = useState(INITIAL_VALUES);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus]   = useState('idle'); // idle | submitting | success | error

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Re-validate field as user types (after first blur)
    if (touched[name] && VALIDATORS[name]) {
      setErrors((er) => ({ ...er, [name]: VALIDATORS[name](value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (VALIDATORS[name]) {
      setErrors((er) => ({ ...er, [name]: VALIDATORS[name](value) }));
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(VALIDATORS).forEach(([field, fn]) => {
      const err = fn(values[field] ?? '');
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    setTouched(Object.keys(VALIDATORS).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      // ── Replace with your real endpoint ──────────────────────────────
      await new Promise((res, rej) =>
        setTimeout(() => (Math.random() > 0.1 ? res() : rej()), 1500)
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  // ── Input props helper ─────────────────────────────────────────────────────
  const inputProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `${styles.input} ${errors[name] ? styles.inputError : ''}`,
  });

  // ── Success State ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <motion.div
        className={styles.successCard}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <CheckCircle size={48} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successText}>
          Thanks for reaching out. A member of our team will get back to you
          within one business day.
        </p>
        <button className={styles.resetBtn} onClick={handleReset}>
          Send Another Message
        </button>
      </motion.div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <form
      id="contact-form"
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <h2 className={styles.formTitle}>Send Us a Message</h2>
      <p className={styles.formSubtitle}>
        Fill in the details below and we'll be in touch shortly.
      </p>

      {/* Error banner */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            className={styles.errorBanner}
            role="alert"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <AlertCircle size={18} />
            <span>Something went wrong. Please try again or email us directly.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row 1: First + Last name */}
      <div className={styles.row}>
        <Field id="firstName" label="First Name" required error={errors.firstName}>
          <input
            {...inputProps('firstName')}
            type="text"
            placeholder="Jane"
            autoComplete="given-name"
          />
        </Field>
        <Field id="lastName" label="Last Name" required error={errors.lastName}>
          <input
            {...inputProps('lastName')}
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
          />
        </Field>
      </div>

      {/* Row 2: Email + Phone */}
      <div className={styles.row}>
        <Field id="email" label="Work Email" required error={errors.email}>
          <input
            {...inputProps('email')}
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </Field>
        <Field id="phone" label="Phone (optional)" error={errors.phone}>
          <input
            {...inputProps('phone')}
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
          />
        </Field>
      </div>

      {/* Row 3: Company + Service */}
      <div className={styles.row}>
        <Field id="company" label="Company" required error={errors.company}>
          <input
            {...inputProps('company')}
            type="text"
            placeholder="Acme Corp"
            autoComplete="organization"
          />
        </Field>
        <Field id="service" label="Service Area" required error={errors.service}>
          <select
            {...inputProps('service')}
            className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
          >
            {SERVICE_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          {...inputProps('message')}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          rows={5}
          placeholder="Tell us about your project, goals, or questions…"
        />
      </Field>

      {/* Submit */}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
