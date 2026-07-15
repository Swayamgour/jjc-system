// src/components/blog/RelatedArticles.jsx
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import "./blog-shared.css";

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function RelatedArticles({ blogs }) {
    if (!blogs || blogs.length === 0) return null;

    return (
        <section className="related-articles-section">
            <div className="blog-section-header-center">
                <div className="blog-section-tag">Keep Reading</div>
                <h2 className="blog-section-title" style={{ fontSize: 28 }}>Related Articles</h2>
            </div>

            <motion.div
                className="blog-cards-grid"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {blogs.map((b) => (
                    <BlogCard key={b.slug} blog={b} />
                ))}
            </motion.div>
        </section>
    );
}
