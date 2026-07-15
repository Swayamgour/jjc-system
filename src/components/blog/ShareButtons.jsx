// src/components/blog/ShareButtons.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Check, Send, Mail } from "lucide-react";

export default function ShareButtons({ title }) {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined" ? window.location.href : "";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // clipboard unavailable — ignore silently
        }
    };

    const links = [
        {
            label: "LinkedIn",
            icon: Send,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
        {
            label: "Email",
            icon: Mail,
            href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
        },
    ];

    return (
        <div className="share-buttons-row">
            <span className="share-label">Share this article</span>
            <div className="share-icons">
                {links.map(({ label, icon: Icon, href }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-icon-btn"
                        aria-label={`Share via ${label}`}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon size={16} />
                    </motion.a>
                ))}
                <motion.button
                    className="share-icon-btn"
                    onClick={handleCopy}
                    aria-label="Copy link"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {copied ? <Check size={16} /> : <Link2 size={16} />}
                </motion.button>
            </div>
        </div>
    );
}
