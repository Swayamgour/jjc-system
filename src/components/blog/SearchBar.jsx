// src/components/blog/SearchBar.jsx
import { Search, X } from "lucide-react";
import "./blog-shared.css";

export default function SearchBar({ value, onChange, placeholder = "Search articles..." }) {
    return (
        <div className="blog-search-bar">
            <Search size={16} className="search-icon" />
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <span className="clear-icon" onClick={() => onChange("")}>
                    <X size={15} />
                </span>
            )}
        </div>
    );
}
