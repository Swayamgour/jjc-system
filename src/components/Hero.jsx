
import { motion } from "framer-motion";
import image from "../assets/banner.jpeg";
import { Icons, stats, floatingCards } from "../utils/data";

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 }
    }
};

export default function Hero() {
    return (
        <section className="hero">

            <div className="container hero-container">

                {/* Left */}

                <motion.div
                    className="hero-content"
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                >
                    <span className="hero-tag">
                        SMART SOLUTIONS. REAL IMPACT.
                    </span>

                    <h1 className="hero-title">
                        Microsoft Consulting
                        <br />
                        Services for
                        <span className="highlight"> Modern</span>
                        <br />
                        Business Operations
                    </h1>

                    <p className="hero-description">
                        JJC Partners helps enterprises unlock the full potential
                        of Microsoft technologies to drive efficiency,
                        agility, and growth.
                    </p>

                    <div className="hero-actions">

                        <button className="btn-primary">
                            Schedule a Consultation
                            <Icons.Arrow />
                        </button>

                        <button className="btn-secondary">
                            Explore Microsoft Solutions
                        </button>

                    </div>

                    <div className="hero-partners">

                        <div className="partner-item">
                            <Icons.M365 />
                            <div className="partner-services-span">

                                <span>Microsoft </span>
                                <span style={{fontSize:'10px'}}>Microsoft </span>
                            </div>
                        </div>

                        <div className="partner-item">
                            <Icons.M365 />
                            <span>Microsoft 365</span>
                        </div>

                        <div className="partner-item">
                            <Icons.Azure />
                            <span>Azure</span>
                        </div>

                        <div className="partner-item">
                            <Icons.Dynamics />
                            <span>Dynamics 365</span>
                        </div>

                    </div>
                </motion.div>

                {/* Right */}

                <motion.div
                    className="hero-image-area"
                    variants={fadeRight}
                    initial="hidden"
                    animate="show"
                >

                    <div className="hero-team-card">
                        <img src={image} alt="team" />
                    </div>

                    {floatingCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`floating-card floating-card-${index}`}
                            initial={{
                                opacity: 0,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.2
                            }}
                        >
                            <div className="floating-icon">
                                {card.icon}
                            </div>

                            <div className="floating-value">
                                {card.value}
                            </div>

                            <div className="floating-label">
                                {card.label}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>

            </div>

            {/* <div className="container">

                <div className="hero-stats">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="hero-stat"
                        >
                            <div className="hero-stat-value">
                                {item.value}
                            </div>

                            <div className="hero-stat-label">
                                {item.label}
                            </div>
                        </div>
                    ))}

                </div>

            </div> */}

        </section>
    );
}