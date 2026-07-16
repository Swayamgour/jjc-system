// src/components/blog/BlogCard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { formatDate,stripHtml, getReadingTime } from "../../utils/blogData";
import "./blog-shared.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};



export default function BlogCard({ blog, variants }) {
    const navigate = useNavigate();
    if (!blog) return null;
    
    const readingTime = getReadingTime(blog.description);

    return (
        <motion.div
            variants={variants || fadeUp}
            className="blog-card"
            onClick={() => navigate(`/blog/${blog.slug}`)}
            whileTap={{ scale: 0.98 }}
        >
            <div className="blog-card-image-wrap">
                {/* <img src={blog.coverImage} alt={blog.title} loading="lazy" /> */}
                {/* <span className="blog-badge on-image">{blog.category}</span> */}
                <img
                    src={blog.image}
                    alt={blog.imageAlt || blog.title}
                    loading="lazy"
                />
                
                <span className="blog-badge on-image">
                    {blog.category?.name}
                </span>
                
            </div>

            <div className="blog-card-body">
                <div className="blog-meta-row">
                    {/* <span className="blog-meta-item dot">{formatDate(blog.publishDate)}</span> */}
                    
                    <span className="blog-meta-item dot">
                        {formatDate(blog.blogDate)}
                    </span>

                    <span className="blog-meta-item">
                        {/* <Clock size={13} /> {blog.readingTime} min read */}
                        <Clock size={13} /> {readingTime} min read
                    </span>
                </div>

                <h3 className="blog-card-title">{blog.title}</h3>
                {/* <p className="blog-card-desc">{blog.description}</p> */}
                
                <p className="blog-card-desc">
                    {stripHtml(blog.description).slice(0, 150)}
                    {stripHtml(blog.description).length > 150 ? "..." : ""}
                </p>

                <div className="blog-card-footer">
                    {/* <span className="blog-meta-item" style={{ fontWeight: 600, color: "var(--text-heading)" }}>
                        {blog.author.name}
                    </span> */}
                    <span
                        className="blog-meta-item"
                        style={{
                            fontWeight: 600,
                            color: "var(--text-heading)",
                        }}
                    >
                        JJC Systems
                    </span>
                    <span className="blog-card-arrow">
                        <ArrowRight size={16} />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
