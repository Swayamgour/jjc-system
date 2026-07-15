// src/components/blog/Newsletter.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import "./blog-shared.css";

export function Newsletter({ title = "Never miss an insight", description = "Get Microsoft consulting best practices, product updates, and case studies delivered to your inbox — no spam." }) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <motion.div
            className="blog-newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="blog-newsletter-text">
                <div className="blog-newsletter-title">{title}</div>
                <p className="blog-newsletter-desc">{description}</p>
            </div>

            {submitted ? (
                <div className="blog-newsletter-success">
                    <CheckCircle2 size={18} /> Thanks — you're subscribed!
                </div>
            ) : (
                <form className="blog-newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <motion.button type="submit" className="blog-btn-primary" whileTap={{ scale: 0.95 }}>
                        Subscribe <ArrowRight size={16} />
                    </motion.button>
                </form>
            )}
        </motion.div>
    );
}

export function NewsletterCard() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <div className="blog-newsletter-card">
            <h4>
                <Mail size={16} style={{ marginRight: 6, verticalAlign: "-2px" }} />
                Weekly Digest
            </h4>
            <p>Microsoft consulting insights, straight to your inbox every week.</p>
            {submitted ? (
                <div className="blog-newsletter-success">
                    <CheckCircle2 size={16} /> Subscribed!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <motion.button type="submit" className="blog-btn-primary" whileTap={{ scale: 0.95 }}>
                        Subscribe
                    </motion.button>
                </form>
            )}
        </div>
    );
}

export default Newsletter;
