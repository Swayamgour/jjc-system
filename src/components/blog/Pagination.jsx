// src/components/blog/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./blog-shared.css";

export default function Pagination({ page, totalPages, onChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="blog-pagination">
            <button disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="Previous page">
                <ChevronLeft size={16} />
            </button>

            {pages.map((p) => (
                <button
                    key={p}
                    className={p === page ? "active" : ""}
                    onClick={() => onChange(p)}
                >
                    {p}
                </button>
            ))}

            <button disabled={page === totalPages} onClick={() => onChange(page + 1)} aria-label="Next page">
                <ChevronRight size={16} />
            </button>
        </div>
    );
}
