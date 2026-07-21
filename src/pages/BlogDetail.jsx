// src/pages/BlogDetail.jsx
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

import "./BlogDetail.css";
import "../components/blog/blog-shared.css";

import ArticleContent from "../components/blog/ArticleContent";
import ShareButtons from "../components/blog/ShareButtons";
import PostNavigation from "../components/blog/PostNavigation";
import RelatedArticles from "../components/blog/RelatedArticles";
import BlogSidebar from "../components/blog/BlogSidebar";
import { Newsletter } from "../components/blog/Newsletter";

import {
    getRelatedBlogs,
    getRecentBlogs,
    getAllTags,
    formatDate,
    getReadingTime 
} from "../utils/blogData";

import { useGetBlogBySlugQuery, useGetPublishedBlogsQuery} from "../redux/api";
import Loader from "../components/Loader";

export default function BlogDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const { data, isLoading } = useGetBlogBySlugQuery(slug);
    const { data: blogsData } = useGetPublishedBlogsQuery();
    
    
    const blog = data?.blog;
    const blogs = blogsData?.data || [];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);
    
    

    if (isLoading) {
    return (
       <Loader />
    );
}
    
    if (!blog) {
        return (
            <div className="blog-page">
                <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
                    <h2 className="blog-section-title">Article not found</h2>
                    <p className="blog-section-subtitle" style={{ margin: "16px auto 28px" }}>
                        The article you're looking for doesn't exist or may have been moved.
                    </p>
                    <button className="blog-btn-primary" onClick={() => navigate("/blog")}>
                        Back to Blog
                    </button>
                </div>
            </div>
        );
    }
    

    // const relatedBlogs = getRelatedBlogs(blog);
    // const recentBlogs = getRecentBlogs(blog.slug, 4);
    // const tags = getAllTags();
    
    const relatedBlogs = getRelatedBlogs(blogs, blog);
    const recentBlogs = getRecentBlogs(blogs, blog.slug, 4);
    const tags = getAllTags(blogs);
    const readingTime = getReadingTime(blog.description);
    

    const currentIndex = blogs.findIndex((b) => b.slug === blog.slug);
    const prevBlog = blogs[currentIndex - 1] || null;
    const nextBlog = blogs[currentIndex + 1] || null;

    return (
        <div className="blog-page">
            {/* ============ HERO ============ */}
            <section className="blog-detail-hero">
                <div className="container">
                    <div className="blog-detail-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/blog">Blog</Link>
                        <span>/</span>
                        <span style={{ color: "#fff" }}>{blog.category?.name}</span>
                    </div>

                    <div className="blog-detail-hero-content">
                        {/* <span className="blog-badge on-image">{blog.category}</span> */}
                        
                        <span className="blog-badge on-image">
    {blog.category?.name}
</span>

                        <motion.h1
                            className="blog-detail-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {blog.title}
                        </motion.h1>

                        <div className="blog-detail-hero-meta">
                            {/* <div className="blog-detail-author">
                                <img src={blog.author.avatar} alt={blog.author.name} />
                                <span>
                                    <span className="blog-detail-author-name">{blog.author.name}</span>
                                    <span className="blog-detail-author-role">{blog.author.role}</span>
                                </span>
                            </div> */}
                            <span className="blog-detail-meta-item">
                                <Calendar size={14} /> {formatDate(blog.blogDate)}
                            </span>
                            <span className="blog-detail-meta-item">
                                {/* <Clock size={14} /> {blog.readingTime} min read */}
                                <Clock size={14} /> {readingTime} min read
                            </span>
                        </div>
                    </div>
                </div>

                <div className="blog-detail-cover-wrap">
                    {/* <img src={blog.coverImage} alt={blog.title} /> */}
                    <img
    src={blog.image}
    alt={blog.imageAlt || blog.title}
/>
                </div>
            </section>

            {/* ============ BODY ============ */}
            <section className="blog-detail-body">
                <div className="container">
                    <div className="blog-detail-layout">
                        <div>
                            {/* <ArticleContent blocks={blog.content} /> */}
                            <ArticleContent html={blog.description} />

                            {/* <div className="article-tags-row">
                                {blog.tags.map((tag) => (
                                    <span key={tag} className="article-tag-pill">
                                        #{tag}
                                    </span>
                                ))}
                            </div> */}

                            <ShareButtons title={blog.title} />

                            <PostNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
                        </div>

                        <BlogSidebar recentBlogs={recentBlogs} tags={tags} search="" onSearchChange={() => {}} />
                    </div>
                </div>
            </section>

            {/* ============ RELATED ============ */}
            <div className="container">
                <RelatedArticles blogs={relatedBlogs} />
            </div>

            {/* ============ CTA ============ */}
            <section className="blog-detail-cta-section">
                <div className="container">
                    <Newsletter
                        title="Ready to modernize your Microsoft stack?"
                        description="Talk to a JJC Systems consultant about your Microsoft 365, Azure, or Dynamics 365 roadmap."
                    />
                </div>
            </section>
        </div>
    );
}
