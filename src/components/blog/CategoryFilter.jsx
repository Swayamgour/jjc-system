// src/components/blog/CategoryFilter.jsx
import "./blog-shared.css";

export default function CategoryFilter({ categories, active, onChange }) {
    return (
        <div className="blog-filter-bar">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`blog-filter-pill ${active === cat ? "active" : ""}`}
                    onClick={() => onChange(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
