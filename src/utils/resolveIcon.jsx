import React from "react";
import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import { Icons as BrandIcons } from "./data";

/**
 * Resolves an icon *name* string (as stored in MongoDB, e.g. "Users",
 * "ShieldCheck", "FaBolt", "Disconnect") to a renderable React icon.
 *
 * Lookup order:
 *  1. react-icons/fa  -> keys starting with "Fa" (e.g. "FaUsers")
 *  2. Brand icons     -> the hand-drawn SVG set in utils/data.jsx
 *  3. lucide-react     -> everything else (Lucide's PascalCase names)
 *  4. fallback         -> a generic sparkle icon so the UI never breaks
 */
export function resolveIcon(name, props = {}) {
    const key = typeof name === "string" ? name.trim() : "";

    if (!key) {
        const Fallback = LucideIcons.Sparkles;
        return <Fallback {...props} />;
    }

    if (key.startsWith("Fa") && FaIcons[key]) {
        const FaIcon = FaIcons[key];
        return <FaIcon {...props} />;
    }

    if (BrandIcons[key]) {
        const BrandIcon = BrandIcons[key];
        return <BrandIcon {...props} />;
    }

    if (LucideIcons[key]) {
        const LucideIcon = LucideIcons[key];
        return <LucideIcon {...props} />;
    }

    const Fallback = LucideIcons.Sparkles;
    return <Fallback {...props} />;
}

export default resolveIcon;
