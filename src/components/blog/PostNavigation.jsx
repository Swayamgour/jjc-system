// src/components/blog/PostNavigation.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PostNavigation({ prevBlog, nextBlog }) {
    const navigate = useNavigate();
    if (!prevBlog && !nextBlog) return null;

    return (
        <div className="post-nav-grid">
            {prevBlog ? (
                <motion.div
                    className="post-nav-card prev"
                    whileHover={{ y: -4 }}
                    onClick={() => navigate(`/blog/${prevBlog.slug}`)}
                >
                    <span className="post-nav-label">
                        <ArrowLeft size={14} /> Previous Post
                    </span>
                    <span className="post-nav-title">{prevBlog.title}</span>
                </motion.div>
            ) : (
                <div />
            )}

            {nextBlog ? (
                <motion.div
                    className="post-nav-card next"
                    whileHover={{ y: -4 }}
                    onClick={() => navigate(`/blog/${nextBlog.slug}`)}
                >
                    <span className="post-nav-label">
                        Next Post <ArrowRight size={14} />
                    </span>
                    <span className="post-nav-title">{nextBlog.title}</span>
                </motion.div>
            ) : (
                <div />
            )}
        </div>
    );
}
