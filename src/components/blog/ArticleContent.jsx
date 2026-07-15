// src/components/blog/ArticleContent.jsx
import { Info, TriangleAlert, Lightbulb, Copy, Check } from "lucide-react";
import { useState } from "react";

const CALLOUT_ICONS = {
    info: Info,
    warning: TriangleAlert,
    tip: Lightbulb,
};

function CodeBlock({ language, code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // clipboard unavailable — ignore silently
        }
    };

    return (
        <div className="article-code-block">
            <div className="article-code-header">
                <span>{language || "code"}</span>
                <button onClick={handleCopy} aria-label="Copy code">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
            </div>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}

export default function ArticleContent({ blocks }) {
    if (!blocks) return null;

    return (
        <div className="article-content">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "paragraph":
                        return <p key={i}>{block.text}</p>;

                    case "heading2":
                        return <h2 key={i} id={`section-${i}`}>{block.text}</h2>;

                    case "heading3":
                        return <h3 key={i} id={`section-${i}`}>{block.text}</h3>;

                    case "list":
                        return block.ordered ? (
                            <ol key={i}>
                                {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ol>
                        ) : (
                            <ul key={i}>
                                {block.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        );

                    case "quote":
                        return (
                            <blockquote key={i}>
                                <p>{block.text}</p>
                                {block.author && <cite>— {block.author}</cite>}
                            </blockquote>
                        );

                    case "image":
                        return (
                            <figure key={i} className="article-image">
                                <img src={block.src} alt={block.caption || ""} loading="lazy" />
                                {block.caption && <figcaption>{block.caption}</figcaption>}
                            </figure>
                        );

                    case "code":
                        return <CodeBlock key={i} language={block.language} code={block.code} />;

                    case "callout": {
                        const Icon = CALLOUT_ICONS[block.variant] || Info;
                        return (
                            <div key={i} className={`article-callout ${block.variant || "info"}`}>
                                <Icon size={18} className="callout-icon" />
                                <div>
                                    {block.title && <div className="callout-title">{block.title}</div>}
                                    <p>{block.text}</p>
                                </div>
                            </div>
                        );
                    }

                    case "table":
                        return (
                            <div key={i} className="article-table-wrap">
                                <table>
                                    <thead>
                                        <tr>
                                            {block.headers.map((h, j) => (
                                                <th key={j}>{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {block.rows.map((row, r) => (
                                            <tr key={r}>
                                                {row.map((cell, c) => (
                                                    <td key={c}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
