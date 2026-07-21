import {
    HeartPulse,
    Scale,
    BriefcaseBusiness,
    Landmark,
    Factory,
    ShoppingCart,
    HandHeart,
    GraduationCap,
    Building2,
    HardHat,
    Building,
    CircleHelp,
} from "lucide-react";

const industryIconMap = {
    "Healthcare": HeartPulse,
    "Legal": Scale,
    "Professional Services & Rental": BriefcaseBusiness,
    "Financial Services": Landmark,
    "Manufacturing": Factory,
    "Retail & Distribution": ShoppingCart,
    "Nonprofits & Associations": HandHeart,
    "Education": GraduationCap,
    "Public Sector": Building2,
    "Construction & Field Services": HardHat,
    "Small & Mid-Market Enterprises": Building,
};

export const getIndustryIcon = (label) => {
    return industryIconMap[label] || CircleHelp;
};