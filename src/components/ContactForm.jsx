import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSplitText } from "../hooks/useSplitText";
import "../pages/ServicePage.css";
// import { Reveal } from "../components";
// import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle } from "lucide-react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    User,
    Building,
    MessageSquare,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import contact from "../assets/contact.png";
// import "./ContactForm.css";

const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ContactForm({ s }) {
    const titleRef = useRef(null);
    useSplitText(titleRef);

    return (
        <section className="split-panel-section">
            <div className="container">
                <Reveal className="section-header-center">
                    {s?.tag && <div className="section-tag">{s.tag}</div>}
                    <h2 ref={titleRef} className="section-title">{s?.title}</h2>
                    {s?.subtitle && <p className="section-subtitle">{s.subtitle}</p>}
                </Reveal>

                <div className="split-panel">
                    {/* LEFT - Form */}
                    <Reveal variants={slideLeft}>
                        <div className="contact-form-card">
                            <div className="form-header">
                                <h3>Send Us a Message</h3>
                                <p>Fill in the details below and our team will get back to you within 24 hours.</p>
                            </div>

                            <form className="contact-form">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>
                                            <User size={16} />
                                            {s?.fields?.fullName?.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={s?.fields?.fullName?.placeholder}
                                            className="form-input"
                                        />
                                        <span className="input-focus-ring"></span>
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            <Building size={16} />
                                            {s?.fields?.companyName?.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={s?.fields?.companyName?.placeholder}
                                            className="form-input"
                                        />
                                        <span className="input-focus-ring"></span>
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            <Mail size={16} />
                                            {s?.fields?.email?.label}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder={s?.fields?.email?.placeholder}
                                            className="form-input"
                                        />
                                        <span className="input-focus-ring"></span>
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            <Phone size={16} />
                                            {s?.fields?.phone?.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={s?.fields?.phone?.placeholder}
                                            className="form-input"
                                        />
                                        <span className="input-focus-ring"></span>
                                    </div>

                                    <div className="form-group full">
                                        <label>
                                            <MessageSquare size={16} />
                                            {s?.fields?.service?.label}
                                        </label>
                                        <div className="select-wrapper">
                                            <select defaultValue="" className="form-select">
                                                <option value="" disabled>
                                                    {s?.fields?.service?.placeholder}
                                                </option>
                                                {s?.fields?.service?.options?.map((item, i) => (
                                                    <option key={i} value={item}>{item}</option>
                                                ))}
                                            </select>
                                            <svg className="select-arrow" width="12" height="8" viewBox="0 0 12 8">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="form-group full">
                                        <label>
                                            <MessageSquare size={16} />
                                            {s?.fields?.message?.label}
                                        </label>
                                        <textarea
                                            rows={6}
                                            placeholder={s?.fields?.message?.placeholder}
                                            className="form-textarea"
                                        />
                                        <span className="input-focus-ring"></span>
                                    </div>
                                </div>

                                <button type="submit" className="split-panel-btn">
                                    <span>{s?.buttonText}</span>
                                    <ArrowRight size={18} />
                                    <span className="btn-shimmer"></span>
                                </button>
                            </form>
                        </div>
                    </Reveal>

                    {/* RIGHT - Image & Info */}
                    <Reveal variants={slideRight}>
                        <div className="contact-side-content">
                            <div className="contact-side-image-wrapper">
                                <div className="contact-image-glow"></div>
                                <img src={contact} alt={s?.title} className="contact-side-image" />
                            </div>

                            <div className="contact-side-info">
                                <div className="info-badge">Available 24/7</div>
                                <h4>We're Here to Help</h4>
                                <p>Our team of experts is ready to assist you with any IT challenges.</p>

                                <div className="info-items">
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <span>Email</span>
                                            <a href="mailto:info@jjcsystems.com">info@jjcsystems.com</a>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <span>Phone</span>
                                            <a href="tel:+18883290625">+1 (888) 329-0625</a>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span>Office</span>
                                            <span>Houston · Chicago · Atlanta · Riyadh · Hyderabad</span>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <Clock size={18} />
                                        </div>
                                        <div>
                                            <span>Support</span>
                                            <span>24/7 Available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-stats">
                                    <div className="stat">
                                        <span className="stat-number">2 min</span>
                                        <span className="stat-label">Response Time</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat">
                                        <span className="stat-number">99%</span>
                                        <span className="stat-label">Satisfaction</span>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat">
                                        <span className="stat-number">15+</span>
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                </div>

                                <div className="info-trust">
                                    <CheckCircle size={16} />
                                    <span>Your data is secure with us</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}




function Reveal({ children, variants , className, style, as: Tag = motion.div, delay = 0, once = true }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, margin: "-60px" });
    return (
        <Tag
            ref={ref}
            className={className}
            style={style}
            // variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay }}
        >
            {children}
        </Tag>
    );
}