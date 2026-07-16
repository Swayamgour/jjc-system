// src/utils/blogData.js
// Static dummy data for the Blog Listing & Blog Detail pages.
// Mirrors the shape used elsewhere in the app (theme, icon strings, etc.)
// so it slots into the existing design system without new patterns.

export const categories = [
    "All",
    "Microsoft 365",
    "Azure",
    "Dynamics 365",
    "Power Platform",
    "SharePoint",
    "Cyber Security",
    "AI",
    "Cloud",
];

const img = (seed) => `https://picsum.photos/seed/${seed}/1000/620`;
const avatar = (seed) => `https://i.pravatar.cc/150?u=${seed}`;

export const blogs = [
    {
        id: 1,
        slug: "modernizing-enterprise-with-microsoft-365-copilot",
        title: "Modernizing the Enterprise with Microsoft 365 Copilot",
        category: "Microsoft 365",
        coverImage: img("m365-copilot"),
        author: { name: "Aditya Rao", role: "Principal Consultant", avatar: avatar("aditya") },
        publishDate: "2026-06-18",
        readingTime: 7,
        featured: true,
        tags: ["Copilot", "Productivity", "Microsoft 365", "AI"],
        description:
            "How JJC Systems helps enterprises roll out Microsoft 365 Copilot the right way — from readiness assessment to org-wide adoption.",
        content: [
            { type: "paragraph", text: "Microsoft 365 Copilot is no longer an experiment sitting on the innovation team's roadmap — it is becoming a default expectation for knowledge workers. The organizations getting real value from it are the ones that treated the rollout as a change program, not a license assignment." },
            { type: "heading2", text: "Start with data readiness, not licensing" },
            { type: "paragraph", text: "Copilot is only as useful as the data it can see. Before enabling it broadly, we run a readiness assessment across SharePoint permissions, Teams sprawl, and stale content that would otherwise surface in Copilot answers." },
            { type: "list", ordered: false, items: [
                "Audit oversharing in SharePoint and OneDrive",
                "Retire or archive stale sites and libraries",
                "Apply sensitivity labels to protect regulated content",
                "Baseline Microsoft Purview data governance policies",
            ] },
            { type: "callout", variant: "info", title: "Why this matters", text: "A Copilot pilot without data hygiene tends to produce impressive demos and disappointing production results — the gap between the two is almost always permissions and content sprawl." },
            { type: "heading2", text: "Pilot with a measurable use case" },
            { type: "paragraph", text: "We recommend starting with two or three high-friction workflows — meeting recaps, proposal drafting, or customer email triage — and measuring time saved per user per week before expanding further." },
            { type: "quote", text: "The teams that saw the fastest ROI weren't the most technical ones — they were the ones with the most repetitive writing work.", author: "Aditya Rao, Principal Consultant" },
            { type: "heading3", text: "Sample pilot scorecard" },
            { type: "table", headers: ["Workflow", "Avg. time saved / week", "Adoption after 30 days"], rows: [
                ["Meeting recap drafting", "2.4 hrs", "78%"],
                ["Proposal first drafts", "3.1 hrs", "64%"],
                ["Inbox triage", "1.6 hrs", "82%"],
            ] },
            { type: "heading2", text: "Govern before you scale" },
            { type: "paragraph", text: "Once the pilot proves value, governance becomes the bottleneck to scaling. We pair every rollout with a lightweight Copilot usage policy and a Purview-based monitoring dashboard so IT isn't flying blind." },
            { type: "code", language: "powershell", code: "Get-MgUserInsightsSharedInsight -UserId $userId |\n  Where-Object { $_.LastAccessedDateTime -gt (Get-Date).AddDays(-90) }" },
            { type: "paragraph", text: "The script above is a starting point for identifying content that's actively surfacing in Copilot interactions — useful when you need to explain to a compliance team exactly what the assistant can and cannot see." },
        ],
        relatedBlogs: ["securing-hybrid-work-with-microsoft-defender", "power-platform-governance-at-scale", "sharepoint-intranet-that-employees-actually-use"],
    },
    {
        id: 2,
        slug: "azure-landing-zones-explained",
        title: "Azure Landing Zones, Explained for Business Leaders",
        category: "Azure",
        coverImage: img("azure-landing-zone"),
        author: { name: "Priya Menon", role: "Cloud Architect", avatar: avatar("priya") },
        publishDate: "2026-06-05",
        readingTime: 6,
        featured: false,
        tags: ["Azure", "Cloud", "Architecture"],
        description:
            "A plain-English walkthrough of Azure Landing Zones — why they exist, what they solve, and when your organization actually needs one.",
        content: [
            { type: "paragraph", text: "\"Landing zone\" is one of those Azure terms that sounds more complicated than it is. At its core, a landing zone is a pre-configured, governed environment that a workload lands into — with identity, networking, security, and cost controls already in place." },
            { type: "heading2", text: "Why not just create a subscription and go?" },
            { type: "paragraph", text: "You can, and many teams do — right up until the second or third subscription, when naming conventions drift, nobody owns the network design, and cost allocation becomes guesswork." },
            { type: "list", ordered: true, items: [
                "Define a management group hierarchy",
                "Standardize identity and RBAC patterns",
                "Establish hub-and-spoke or vWAN networking",
                "Bake in policy-as-code guardrails",
                "Set up centralized logging and cost management",
            ] },
            { type: "callout", variant: "tip", title: "Rule of thumb", text: "If you expect more than two Azure subscriptions within 12 months, invest in a landing zone now — retrofitting governance later is dramatically more expensive." },
            { type: "heading2", text: "The Microsoft Cloud Adoption Framework baseline" },
            { type: "paragraph", text: "We build every landing zone on Microsoft's Cloud Adoption Framework reference architecture, then tailor the policy set to the client's regulatory footprint — healthcare and financial services clients typically need a stricter baseline than a mid-size manufacturer." },
            { type: "image", src: img("azure-diagram"), caption: "A simplified hub-and-spoke landing zone topology." },
            { type: "heading2", text: "What good looks like after 90 days" },
            { type: "paragraph", text: "By day 90, a well-run landing zone engagement leaves the client with self-service subscription vending, automated policy enforcement, and a cost dashboard the finance team actually trusts." },
        ],
        relatedBlogs: ["cloud-cost-optimization-playbook", "modernizing-enterprise-with-microsoft-365-copilot", "securing-hybrid-work-with-microsoft-defender"],
    },
    {
        id: 3,
        slug: "dynamics-365-sales-implementation-mistakes",
        title: "7 Dynamics 365 Sales Implementation Mistakes We Keep Seeing",
        category: "Dynamics 365",
        coverImage: img("dynamics-sales"),
        author: { name: "Karan Malhotra", role: "CRM Solutions Lead", avatar: avatar("karan") },
        publishDate: "2026-05-22",
        readingTime: 8,
        featured: false,
        tags: ["Dynamics 365", "CRM", "Sales"],
        description:
            "Patterns from dozens of Dynamics 365 Sales rollouts — and how to avoid the mistakes that quietly kill CRM adoption.",
        content: [
            { type: "paragraph", text: "Most failed CRM rollouts aren't failed because of the software. They're failed because of decisions made in the first four weeks of the project, long before a single seller logs in." },
            { type: "heading2", text: "1. Mirroring the old system instead of the sales process" },
            { type: "paragraph", text: "Teams migrating from spreadsheets or a legacy CRM tend to recreate every existing field and stage, rather than asking what the sales process should look like today." },
            { type: "heading2", text: "2. Skipping a data cleanup pass" },
            { type: "paragraph", text: "Importing duplicate, stale contact records into a shiny new system just moves the mess somewhere newer. We run a dedupe and enrichment pass before any migration." },
            { type: "heading2", text: "3. Over-customizing the form" },
            { type: "callout", variant: "warning", title: "Common trap", text: "Every mandatory field you add is a small tax on adoption. If a field isn't used in a report or an automation, question whether it needs to be mandatory at all." },
            { type: "heading2", text: "4. No executive sponsor for adoption" },
            { type: "paragraph", text: "CRM adoption lives or dies on whether sales leadership actually looks at the pipeline inside the tool during forecast calls — not in a side spreadsheet." },
            { type: "heading2", text: "5–7: Automation, training, and reporting" },
            { type: "list", ordered: false, items: [
                "Automating too much too early, before reps trust the base workflow",
                "One-time training with no refresher cadence",
                "Building reports nobody asked for instead of the three the VP actually reads",
            ] },
            { type: "quote", text: "The best Dynamics 365 rollouts we've run felt boring — the team didn't relearn how to sell, the tool just got out of the way.", author: "Karan Malhotra, CRM Solutions Lead" },
        ],
        relatedBlogs: ["power-platform-governance-at-scale", "modernizing-enterprise-with-microsoft-365-copilot"],
    },
    {
        id: 4,
        slug: "power-platform-governance-at-scale",
        title: "Power Platform Governance at Scale: A Practical Framework",
        category: "Power Platform",
        coverImage: img("power-platform"),
        author: { name: "Neha Kapoor", role: "Power Platform Lead", avatar: avatar("neha") },
        publishDate: "2026-05-10",
        readingTime: 6,
        featured: false,
        tags: ["Power Platform", "Governance", "Automation"],
        description:
            "Citizen development is a superpower until it isn't. Here's the governance framework we deploy for clients scaling Power Platform past a few hundred apps.",
        content: [
            { type: "paragraph", text: "The appeal of Power Platform is that business users can build real solutions without waiting on IT. The risk is the same thing — hundreds of ungoverned apps and flows touching production data with nobody accountable for them." },
            { type: "heading2", text: "Environment strategy first" },
            { type: "paragraph", text: "We separate environments by purpose — default, personal productivity, department sandboxes, and a governed production tier with Data Loss Prevention policies enforced at the tenant level." },
            { type: "heading3", text: "A typical environment map" },
            { type: "table", headers: ["Environment", "Purpose", "DLP policy"], rows: [
                ["Default", "Ad-hoc personal apps", "Business-only connectors"],
                ["Dept Sandbox", "Team prototyping", "Business + some non-business"],
                ["Production", "Approved, monitored apps", "Strict allow-list"],
            ] },
            { type: "heading2", text: "Center of Excellence, not Center of Control" },
            { type: "paragraph", text: "The goal isn't to slow makers down — it's to give them guardrails and visibility. Our CoE starter kit deployments typically surface 3-4x more apps and flows than the client's own inventory believed existed." },
            { type: "callout", variant: "info", title: "Where to start", text: "Deploy the Power Platform CoE Starter Kit before writing a single governance policy — you need the inventory data to make good decisions." },
        ],
        relatedBlogs: ["dynamics-365-sales-implementation-mistakes", "sharepoint-intranet-that-employees-actually-use"],
    },
    {
        id: 5,
        slug: "sharepoint-intranet-that-employees-actually-use",
        title: "Building a SharePoint Intranet Employees Actually Use",
        category: "SharePoint",
        coverImage: img("sharepoint-intranet"),
        author: { name: "Rohan Iyer", role: "Modern Work Consultant", avatar: avatar("rohan") },
        publishDate: "2026-04-28",
        readingTime: 5,
        featured: false,
        tags: ["SharePoint", "Intranet", "Employee Experience"],
        description:
            "Most intranets die within a year of launch. Here's the content and information-architecture approach that keeps ours alive.",
        content: [
            { type: "paragraph", text: "An intranet launch is easy. Keeping people coming back six months later is the hard part — and it's rarely a technology problem." },
            { type: "heading2", text: "Design for the Monday morning question" },
            { type: "paragraph", text: "Every intranet home page should answer one question fast: 'what do I need to know today?' We design the hub page around news, not navigation." },
            { type: "heading2", text: "Give every department real ownership" },
            { type: "list", ordered: false, items: [
                "Department site owners trained on page authoring, not just IT",
                "A lightweight content calendar per department",
                "Analytics reviewed monthly, not just at launch",
            ] },
            { type: "callout", variant: "tip", title: "Adoption tip", text: "Retire the old intranet's URL entirely on launch day. A soft cutover where both systems run in parallel quietly kills adoption of the new one." },
            { type: "heading2", text: "Search has to actually work" },
            { type: "paragraph", text: "We invest early in metadata and managed properties so SharePoint search returns useful results from day one, rather than bolting search relevance tuning on as an afterthought." },
        ],
        relatedBlogs: ["power-platform-governance-at-scale", "modernizing-enterprise-with-microsoft-365-copilot"],
    },
    {
        id: 6,
        slug: "securing-hybrid-work-with-microsoft-defender",
        title: "Securing Hybrid Work with Microsoft Defender XDR",
        category: "Cyber Security",
        coverImage: img("defender-security"),
        author: { name: "Simran Chadha", role: "Security Practice Lead", avatar: avatar("simran") },
        publishDate: "2026-04-14",
        readingTime: 9,
        featured: false,
        tags: ["Cyber Security", "Defender", "Zero Trust"],
        description:
            "A practical look at rolling out Microsoft Defender XDR across a hybrid workforce without drowning the security team in alerts.",
        content: [
            { type: "paragraph", text: "Hybrid work widened the attack surface faster than most security teams could widen their headcount. Microsoft Defender XDR's value isn't just detection — it's correlation across identity, endpoint, email, and cloud apps into a single incident." },
            { type: "heading2", text: "Start with identity" },
            { type: "paragraph", text: "Nearly every incident we've investigated in the last two years started with a compromised identity, not a compromised device. Conditional Access and phishing-resistant MFA come before anything else on our rollout plan." },
            { type: "heading2", text: "Tune before you trust automation" },
            { type: "callout", variant: "warning", title: "Alert fatigue is real", text: "Enabling automated investigation and response on day one, before baselining normal behavior, is the fastest way to get Defender turned off by a frustrated SOC team." },
            { type: "heading2", text: "A phased rollout that works" },
            { type: "list", ordered: true, items: [
                "Weeks 1–2: Deploy in audit/monitor mode, no blocking",
                "Weeks 3–4: Review alert volume, tune detection rules",
                "Weeks 5–6: Enable automated response for high-confidence detections only",
                "Week 7+: Expand automation coverage gradually",
            ] },
            { type: "quote", text: "Zero Trust isn't a product you buy — it's a set of decisions you keep making about who and what to verify, forever.", author: "Simran Chadha, Security Practice Lead" },
            { type: "heading2", text: "Measuring success" },
            { type: "paragraph", text: "We track mean time to detect and mean time to respond monthly, alongside analyst-reported alert fatigue — a security tool that's technically effective but operationally exhausting won't stay effective for long." },
        ],
        relatedBlogs: ["azure-landing-zones-explained", "modernizing-enterprise-with-microsoft-365-copilot"],
    },
    {
        id: 7,
        slug: "responsible-ai-adoption-checklist",
        title: "A Responsible AI Adoption Checklist for Mid-Size Enterprises",
        category: "AI",
        coverImage: img("responsible-ai"),
        author: { name: "Aditya Rao", role: "Principal Consultant", avatar: avatar("aditya") },
        publishDate: "2026-03-30",
        readingTime: 6,
        featured: false,
        tags: ["AI", "Governance", "Copilot", "Responsible AI"],
        description:
            "Before your organization ships its first AI-powered workflow, work through this checklist covering data, transparency, and human oversight.",
        content: [
            { type: "paragraph", text: "AI adoption is moving faster than most governance functions can keep up with. This checklist is the one we walk clients through before any generative AI feature goes into production." },
            { type: "heading2", text: "Data & privacy" },
            { type: "list", ordered: false, items: [
                "Confirm what data the model or Copilot can access",
                "Classify and label sensitive content before enabling AI features",
                "Document data residency and retention for any AI-generated content",
            ] },
            { type: "heading2", text: "Transparency & human oversight" },
            { type: "list", ordered: false, items: [
                "Disclose to end users when they're interacting with AI-generated content",
                "Keep a human in the loop for high-stakes decisions",
                "Provide a clear feedback channel for incorrect AI output",
            ] },
            { type: "callout", variant: "info", title: "Microsoft's framework", text: "We align every engagement with Microsoft's Responsible AI Standard — fairness, reliability, privacy, inclusiveness, transparency, and accountability." },
            { type: "heading2", text: "Start small, measure honestly" },
            { type: "paragraph", text: "The organizations we've seen succeed treat their first AI use case as a controlled experiment with a rollback plan — not a company-wide announcement." },
        ],
        relatedBlogs: ["modernizing-enterprise-with-microsoft-365-copilot", "securing-hybrid-work-with-microsoft-defender"],
    },
    {
        id: 8,
        slug: "cloud-cost-optimization-playbook",
        title: "The Cloud Cost Optimization Playbook We Use with Every Client",
        category: "Cloud",
        coverImage: img("cloud-cost"),
        author: { name: "Priya Menon", role: "Cloud Architect", avatar: avatar("priya") },
        publishDate: "2026-03-12",
        readingTime: 7,
        featured: false,
        tags: ["Cloud", "Azure", "FinOps"],
        description:
            "Cloud bills rarely spike overnight — they drift. Here's the recurring playbook that keeps client Azure spend predictable.",
        content: [
            { type: "paragraph", text: "Cost optimization isn't a one-time project — it's a monthly discipline. Clients who treat it as a project tend to see savings evaporate within two quarters as new workloads land without the same scrutiny." },
            { type: "heading2", text: "The three levers we pull first" },
            { type: "list", ordered: true, items: [
                "Right-sizing — matching VM and database SKUs to actual utilization",
                "Reservations & savings plans — for predictable, steady-state workloads",
                "Waste elimination — orphaned disks, idle public IPs, unattached NICs",
            ] },
            { type: "heading3", text: "Typical savings by lever" },
            { type: "table", headers: ["Lever", "Typical savings", "Effort"], rows: [
                ["Right-sizing", "15–25%", "Medium"],
                ["Reservations", "20–40%", "Low"],
                ["Waste elimination", "5–10%", "Low"],
            ] },
            { type: "callout", variant: "tip", title: "Quick win", text: "Orphaned managed disks from deleted VMs are one of the most common — and easiest to fix — sources of silent Azure spend." },
            { type: "heading2", text: "Make FinOps a monthly ritual" },
            { type: "paragraph", text: "We set up a recurring cost review with engineering and finance in the room together — cost conversations that only happen in finance meetings rarely change engineering behavior." },
        ],
        relatedBlogs: ["azure-landing-zones-explained", "power-platform-governance-at-scale"],
    },
];

export const getBlogBySlug = (slug) => blogs.find((b) => b.slug === slug);

export const getFeaturedBlog = () => blogs.find((b) => b.featured) || blogs[0];

// export const getRelatedBlogs = (blog) => {
//     if (!blog) return [];
//     return blog.relatedBlogs
//         .map((slug) => blogs.find((b) => b.slug === slug))
//         .filter(Boolean);
// };

export const getRelatedBlogs = (blogs, blog) => {
    if (!blog) return [];

    return blogs
        .filter(
            (item) =>
                item._id !== blog._id &&
                item.category?._id === blog.category?._id
        )
        .slice(0, 3);
};

// export const getRecentBlogs = (excludeSlug, count = 5) =>
//     blogs.filter((b) => b.slug !== excludeSlug).slice(0, count);

// export const getRecentBlogs = (blogs, excludeSlug, count = 5) =>
//     blogs
//         .filter((b) => b.slug !== excludeSlug)
//         .slice(0, count);

export const getRecentBlogs = (blogs = [], excludeSlug, count = 5) =>
    blogs
        .filter((b) => b.slug !== excludeSlug)
        .sort(
            (a, b) =>
                new Date(b.blogDate) -
                new Date(a.blogDate)
        )
        .slice(0, count);

export const getAllTags = () => {
    const tagSet = new Set();
    blogs.forEach((b) => b.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
};

export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

export const stripHtml = (html = "") => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

export const getReadingTime = (html = "") => {
    const words = stripHtml(html).trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
};
