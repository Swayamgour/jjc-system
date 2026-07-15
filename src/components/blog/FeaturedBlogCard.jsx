// src/components/blog/FeaturedBlogCard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { formatDate } from "../../utils/blogData";
import "./blog-shared.css";

export default function FeaturedBlogCard({ blog }) {
    const navigate = useNavigate();
    if (!blog) return null;

    return (
        <motion.div
            className="blog-featured-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => navigate(`/blog/${blog.slug}`)}
        >
            <div className="blog-featured-image-wrap">
                <img src={blog.coverImage} alt={blog.title} />
                <span className="blog-badge on-image">{blog.category}</span>
            </div>

            <div className="blog-featured-body">
                <div className="blog-meta-row">
                    <span className="blog-meta-item dot">{formatDate(blog.publishDate)}</span>
                    <span className="blog-meta-item">
                        <Clock size={13} /> {blog.readingTime} min read
                    </span>
                </div>

                <h2 className="blog-featured-title">{blog.title}</h2>
                <p className="blog-featured-desc">{blog.description}</p>

                <motion.button
                    className="blog-btn-primary"
                    style={{ alignSelf: "flex-start", marginTop: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${blog.slug}`);
                    }}
                >
                    Read More <ArrowRight size={16} />
                </motion.button>
            </div>
        </motion.div>
    );
}
