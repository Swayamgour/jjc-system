// src/components/blog/BlogSidebar.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import { NewsletterCard } from "./Newsletter";
import { formatDate } from "../../utils/blogData";
import { useGetBlogCategoriesQuery } from "../../redux/api";

export default function BlogSidebar({ recentBlogs, tags, search, onSearchChange }) {
    const navigate = useNavigate();

    const handleSearchSubmit = (value) => {
        onSearchChange(value);
        navigate(`/blog${value ? `?q=${encodeURIComponent(value)}` : ""}`);
    };
    
    const { data: categoryData } = useGetBlogCategoriesQuery();

    const categories = categoryData?.data ?? [];

    return (
        <aside className="blog-sidebar">
            {/* <div className="sidebar-block">
                <h4 className="sidebar-heading">Search</h4>
                <SearchBar value={search} onChange={handleSearchSubmit} />
            </div>

            <div className="sidebar-block">
                <h4 className="sidebar-heading">Categories</h4>
                <ul className="sidebar-category-list">
                    
                    {categories.map((cat) => (
    <li
        key={cat._id}
        onClick={() =>
            navigate(`/blog?category=${encodeURIComponent(cat.slug || cat.name)}`)
        }
    >
        <span>{cat.name}</span>
    </li>
))}
                </ul>
            </div> */}

            <div className="sidebar-block">
                <h4 className="sidebar-heading">Recent Posts</h4>
                <div className="sidebar-recent-list">
                    {recentBlogs.map((b) => (
                        <motion.div
                            key={b.slug}
                            className="sidebar-recent-item"
                            whileHover={{ x: 4 }}
                            onClick={() => navigate(`/blog/${b.slug}`)}
                        >
                            {/* <img src={b.coverImage} alt={b.title} /> */}
                            <img
    src={b.image}
    alt={b.imageAlt || b.title}
/>
                            <div>
                                <span className="sidebar-recent-title">{b.title}</span>
                                <span className="sidebar-recent-date">{formatDate(b.blogDate)}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* <div className="sidebar-block">
                <h4 className="sidebar-heading">Popular Tags</h4>
                <div className="sidebar-tags">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="sidebar-tag"
                            onClick={() => navigate(`/blog?q=${encodeURIComponent(tag)}`)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div> */}

            <div className="sidebar-block">
                <NewsletterCard />
            </div>
        </aside>
    );
}
