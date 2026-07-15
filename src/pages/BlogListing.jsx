// src/pages/BlogListing.jsx
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import "./BlogListing.css";
import "../components/blog/blog-shared.css";

import FeaturedBlogCard from "../components/blog/FeaturedBlogCard";
import BlogCard from "../components/blog/BlogCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import SearchBar from "../components/blog/SearchBar";
import Pagination from "../components/blog/Pagination";
import { Newsletter } from "../components/blog/Newsletter";

import { blogs, categories, getFeaturedBlog } from "../utils/blogData";
import ServiceHero from "../components/ServiceHero";

const PAGE_SIZE = 6;

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function BlogListing() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
    const [search, setSearch] = useState(searchParams.get("q") || "");
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        setPage(1);
    }, [activeCategory, search]);

    const featuredBlog = getFeaturedBlog();

    const filteredBlogs = useMemo(() => {
        return blogs
            .filter((b) => b.slug !== featuredBlog.slug)
            .filter((b) => (activeCategory === "All" ? true : b.category === activeCategory))
            .filter((b) => {
                if (!search.trim()) return true;
                const q = search.toLowerCase();
                return (
                    b.title.toLowerCase().includes(q) ||
                    b.description.toLowerCase().includes(q) ||
                    b.tags.some((t) => t.toLowerCase().includes(q))
                );
            });
    }, [activeCategory, search, featuredBlog.slug]);

    const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
    const paginatedBlogs = filteredBlogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        const next = new URLSearchParams(searchParams);
        cat === "All" ? next.delete("category") : next.set("category", cat);
        setSearchParams(next, { replace: true });
    };

    const handleSearchChange = (value) => {
        setSearch(value);
        const next = new URLSearchParams(searchParams);
        value ? next.set("q", value) : next.delete("q");
        setSearchParams(next, { replace: true });
    };


     const blogPageData = {
        title: "Microsoft Consulting Insights & Perspectives",

        badge: "BLOG",

        breadcrumb: [
            "Home",
            "Resources",
            "Blog"
        ],

        exploreLabel: "Browse Articles",

        hero: {
            description:
                "Stay ahead with expert insights on Microsoft 365, Azure, Dynamics 365, Power Platform, SharePoint, AI, and Cyber Security. Our consultants share practical knowledge, implementation strategies, and industry best practices to help organizations maximize the value of Microsoft technologies.",

            subDescription:
                "Discover real-world case studies, migration strategies, cloud optimization techniques, Microsoft product updates, and actionable advice designed for business leaders, IT managers, and technology professionals.",

            badges: [
                "Microsoft 365",
                "Azure",
                "Cyber Security",
                "Power Platform",
                "Dynamics 365",
                "Cloud Migration"
            ],

            image: {
                url: "https://res.cloudinary.com/sakshichak1/image/upload/v1783428245/jjc-systems/fbxeeyjucyvcxmm2srjt.jpg"
            }
        }
    };


    return (
        <div className="blog-page">
            {/* ============ HERO ============ */}

            <ServiceHero d={blogPageData} />


            {/* ============ FILTER + GRID ============ */}
            <section className="blog-listing-section bg-section">
                <div className="container">
                    <div className="blog-section-header-center">
                        <div className="blog-section-tag">Browse</div>
                        <h2 className="blog-section-title">Latest Articles</h2>
                        <p className="blog-section-subtitle">
                            Filter by platform to find the insights most relevant to your team.
                        </p>
                    </div>

                    <div className="blog-toolbar">
                        <CategoryFilter categories={categories} active={activeCategory} onChange={handleCategoryChange} />
                        <div className="blog-toolbar-search">
                            <SearchBar value={search} onChange={handleSearchChange} />
                        </div>
                    </div>

                    {paginatedBlogs.length > 0 ? (
                        <motion.div
                            className="blog-cards-grid"
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                        >
                            {paginatedBlogs.map((blog) => (
                                <BlogCard key={blog.slug} blog={blog} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="blog-results-empty">
                            No articles match your search. Try a different keyword or category.
                        </div>
                    )}

                    <div className="blog-listing-pagination-wrap">
                        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
                    </div>
                </div>
            </section>

            {/* ============ NEWSLETTER CTA ============ */}
            <section className="blog-listing-section">
                <div className="container">
                    <Newsletter />
                </div>
            </section>
        </div>
    );
}
