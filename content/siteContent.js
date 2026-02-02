// content/siteContent.js
// Single source of truth for OPS Online Support site copy + structure.
// Pages can be .jsx and read from this file.
// 3D hero stays in TSX and is simply toggled via hero.visual flags.

export const SITE = {
  brand: "OPS Online Support",
  shortTagline: "Structured remote support for consistent execution.",
  longTagline:
    "Operations, customer handling, IT continuity, and professional support — organized, documented, and reliable.",
};

export const ROUTES = {
  home: "/",
  operations: "/operations",
  callCenter: "/call-center",
  itSupport: "/it-support",
  professionals: "/professionals",
  us: "/us",
  contact: "/contact-us",
  join: "/join-us",
  // Optional fallback route if you decide to add it later:
  // chatFallback: "/chat",
};

export const NAV = {
  // Keep header clean: Contact/Join/Chat belong to FABs (not nav).
  items: [
    { label: "Home", href: ROUTES.home },
    { label: "Operations", href: ROUTES.operations },
    { label: "Call Center", href: ROUTES.callCenter },
    { label: "IT Support", href: ROUTES.itSupport },
    { label: "Professionals", href: ROUTES.professionals },
    { label: "Us", href: ROUTES.us },
  ],
  optionalIcons: {
    enableSearchIcon: true,
    enableThemeToggle: true,
  },
};

export const CHAT = {
  // Replace with your real Chattia URL (pop-up target)
  url: "https://YOUR-CHATTIA-URL-HERE",
  popup: {
    name: "ChattiaChat",
    // Feel free to tweak sizes; keep it “app-like”
    features:
      "width=420,height=720,resizable=yes,scrollbars=yes,noopener,noreferrer",
  },
  blockedMessage: {
    title: "Pop-up blocked",
    body:
      "Your browser blocked the chat pop-up. Use the button below to open chat in a new tab.",
    openInNewTabLabel: "Open Chat",
  },
};

export const FAB = {
  position: { bottomPx: 25, rightPx: 15 },
  spacingPx: 12,
  // If you implement “collapse on small screens”, this label becomes the “+” opener.
  collapse: {
    enabled: true,
    breakpointPx: 420,
    openerLabel: "Menu",
  },
  items: [
    { id: "fab-contact", label: "Contact Us", type: "route", href: ROUTES.contact },
    { id: "fab-join", label: "Join Us", type: "route", href: ROUTES.join },
    { id: "fab-chat", label: "Chat", type: "popup", popupUrl: CHAT.url },
  ],
};

export const FOOTER = {
  columns: [
    {
      title: "Services",
      links: [
        { label: "Operations", href: ROUTES.operations },
        { label: "Call Center", href: ROUTES.callCenter },
        { label: "IT Support", href: ROUTES.itSupport },
        { label: "Professionals", href: ROUTES.professionals },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Us", href: ROUTES.us },
        { label: "Contact Us", href: ROUTES.contact },
        { label: "Join Us", href: ROUTES.join },
      ],
    },
    {
      title: "Help",
      links: [
        // This is intentionally “chat action”, not a route.
        { label: "Chat with Chattia", href: "#chat", type: "popup", popupUrl: CHAT.url },
      ],
    },
  ],
  bottomLine: {
    // Keep this honest and non-claiming.
    note:
      "Remote support built for organization, consistency, and clear execution — without inflated promises.",
  },
};

// Reusable “pillars” so Home + other pages can reference same definitions.
export const PILLARS = {
  operations: {
    id: "operations",
    title: "Operations",
    oneLine: "Keep workflows organized and moving.",
    bullets: ["SOPs & routines", "Coordination & follow-through", "Documentation discipline"],
    cta: { label: "View Operations", href: ROUTES.operations },
  },
  callCenter: {
    id: "call-center",
    title: "Call Center",
    oneLine: "Customer communication with consistency.",
    bullets: ["Intake & triage", "Follow-ups", "Scripts & standards"],
    cta: { label: "View Call Center", href: ROUTES.callCenter },
  },
  itSupport: {
    id: "it-support",
    title: "IT Support",
    oneLine: "Continuity-focused support that reduces friction.",
    bullets: ["Setup guidance", "Troubleshooting", "Secure habits"],
    cta: { label: "View IT Support", href: ROUTES.itSupport },
  },
  professionals: {
    id: "professionals",
    title: "Professionals",
    oneLine: "Remote professionals aligned to your workflow.",
    bullets: ["Admin support", "Coordination", "Documentation"],
    cta: { label: "View Professionals", href: ROUTES.professionals },
  },
};

export const FORMS = {
  contact: {
    title: "Send a message",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "company", label: "Company (optional)", type: "text", required: false },
      { name: "message", label: "Message", type: "textarea", required: true, rows: 6 },
      {
        name: "preferredContact",
        label: "Preferred contact method (optional)",
        type: "select",
        required: false,
        options: ["Email", "Phone", "WhatsApp", "Other"],
      },
    ],
    helperTitle: "For a faster, clearer response",
    helperBullets: [
      "Which lane: Operations / Call Center / IT / Professionals",
      "What you want improved (organization, consistency, follow-through, documentation)",
      "Team size (optional)",
    ],
  },

  join: {
    title: "Application",
    fields: [
      {
        name: "roleCategory",
        label: "Role category",
        type: "select",
        required: true,
        options: [
          "Operations Support",
          "Call Center Support",
          "IT Support (basic)",
          "Admin / Coordination",
          "Documentation / Process",
          "Other",
        ],
      },
      { name: "experience", label: "Experience summary", type: "textarea", required: true, rows: 6 },
      { name: "languages", label: "Languages (optional)", type: "text", required: false },
      { name: "availability", label: "Availability", type: "text", required: true },
      { name: "timezone", label: "Timezone", type: "text", required: true },
      { name: "portfolio", label: "Link / portfolio (optional)", type: "url", required: false },
    ],
  },
};

// PAGES: each page defines hero + ordered sections.
// Render strategy:
// - PageHero reads `hero`
// - Then loop `sections` in order and render by `kind`.
export const PAGES = {
  [ROUTES.home]: {
    seo: {
      title: "OPS Online Support",
      description: SITE.longTagline,
    },
    hero: {
      headline: "OPS Online Support",
      subline: SITE.longTagline,
      primaryCta: { label: "Explore Services", action: "scrollTo", targetId: "pillars" },
      secondaryLink: { label: "How we work", href: ROUTES.us },
      // Home-only visual accent (3D lives in TSX; you toggle it here)
      visual: {
        type: "hero3d", // your TSX component can switch on this
        enabled: true,
        fallbackType: "staticGlow", // always keep a fast fallback
      },
    },
    sections: [
      {
        kind: "pillars",
        id: "pillars",
        title: "Choose your support lane",
        items: [PILLARS.operations, PILLARS.callCenter, PILLARS.itSupport, PILLARS.professionals],
      },
      {
        kind: "steps",
        title: "How OPS works",
        steps: [
          { title: "Discover", body: "Understand your workflow and define support scope." },
          { title: "Standardize", body: "Create structure: SOPs, checklists, and routines." },
          { title: "Support", body: "Execute consistently and refine over time." },
        ],
        cta: { label: "Learn our method", href: ROUTES.us },
      },
      {
        kind: "bullets",
        title: "What this support is built for",
        bullets: [
          "Operational clarity and organization",
          "Consistent execution and follow-through",
          "Better documentation and repeatability",
          "Cleaner communication and handoffs",
        ],
        cta: { label: "Contact Us", href: ROUTES.contact },
      },
      {
        kind: "trust",
        title: "Governance-first habits",
        bullets: [
          "Minimal data collection mindset",
          "Clear boundaries and escalation rules",
          "Documentation-first delivery",
        ],
        cta: { label: "Read how we operate", href: ROUTES.us },
      },
      {
        kind: "ctaBand",
        headline: "Tell us what needs support — we’ll propose a clean structure.",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
        secondaryCta: { label: "Or chat now", action: "openChatPopup" },
      },
    ],
  },

  [ROUTES.operations]: {
    seo: {
      title: "Operations | OPS Online Support",
      description: "Remote operations support focused on structure, coordination, and consistent execution.",
    },
    hero: {
      headline: "Operations support that stays organized under pressure",
      subline:
        "Remote support focused on structure, coordination, and consistent execution — built to reduce chaos and keep workflows clear.",
      primaryCta: { label: "Contact Us", href: ROUTES.contact },
    },
    sections: [
      {
        kind: "bullets",
        title: "Built for operational consistency",
        bullets: [
          "Clear routines for recurring work",
          "Fewer missed handoffs and follow-ups",
          "Documentation that stays current",
        ],
      },
      {
        kind: "capabilityGrid",
        title: "What we support",
        items: [
          "Workflow coordination & follow-through",
          "SOPs, checklists, operating notes",
          "Scheduling and recurring routines",
          "Admin/vendor coordination",
          "Operational summaries (non-financial)",
          "Quality checks for completeness",
        ],
      },
      {
        kind: "cards",
        title: "Common reasons teams reach out",
        items: [
          { title: "Things fall through the cracks", body: "We help bring structure to handoffs and follow-through." },
          { title: "We need routines that stick", body: "We build simple routines that teams can maintain." },
          {
            title: "We want documentation that gets used",
            body: "We keep SOPs practical, current, and easy to follow.",
          },
          {
            title: "We need clean coordination without hiring a full ops team",
            body: "Scope-defined support that fits your workflow.",
          },
        ],
      },
      {
        kind: "deliverables",
        title: "What you receive",
        items: [
          "SOP pack + checklists",
          "Routine plan (weekly/daily cadence)",
          "Escalation boundaries (what goes to you vs handled)",
          "Operating notes (what changed, what’s next)",
        ],
      },
      {
        kind: "ctaBand",
        headline: "Describe your workflow — we’ll structure support around it.",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
      },
    ],
  },

  [ROUTES.callCenter]: {
    seo: {
      title: "Call Center | OPS Online Support",
      description: "Remote support for intake, follow-ups, scripts, FAQs, and service standards.",
    },
    hero: {
      headline: "Customer handling built on clarity and consistency",
      subline:
        "Remote support for intake, follow-ups, scripts, FAQs, and service standards — designed to keep customer communication organized.",
      primaryCta: { label: "Contact Us", href: ROUTES.contact },
    },
    sections: [
      {
        kind: "bullets",
        title: "Built for consistency",
        bullets: [
          "Cleaner intake and triage",
          "Stronger follow-up discipline",
          "More consistent responses and handoffs",
        ],
      },
      {
        kind: "capabilityGrid",
        title: "What we support",
        items: [
          "Intake & triage",
          "Follow-ups and open-loop tracking",
          "Escalation rules",
          "Script + FAQ maintenance",
          "Quality standards (tone, completeness, accuracy)",
          "Multi-channel support (if applicable)",
        ],
      },
      {
        kind: "bullets",
        title: "Our service standards approach",
        bullets: ["Script discipline", "Escalation boundaries", "Documentation-first updates", "Consistency checks"],
      },
      {
        kind: "deliverables",
        title: "What you receive",
        items: ["Script set + FAQ structure", "Follow-up routine and rules", "Summary notes (optional, non-ROI)"],
      },
      {
        kind: "ctaBand",
        headline: "Want consistent customer handling without losing your brand voice?",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
      },
    ],
  },

  [ROUTES.itSupport]: {
    seo: {
      title: "IT Support | OPS Online Support",
      description: "Remote assistance for setup, troubleshooting, continuity, and security-minded habits.",
    },
    hero: {
      headline: "IT support that keeps work moving",
      subline:
        "Remote assistance focused on setup, troubleshooting, continuity, and security-minded habits — with clear boundaries and documentation.",
      primaryCta: { label: "Contact Us", href: ROUTES.contact },
    },
    sections: [
      {
        kind: "bullets",
        title: "Built for continuity",
        bullets: [
          "Reduced friction for recurring issues",
          "Clear recovery steps and repeatable processes",
          "Better setup consistency across devices/accounts",
        ],
      },
      {
        kind: "capabilityGrid",
        title: "What we support",
        items: [
          "Setup and configuration guidance",
          "Troubleshooting and recovery steps",
          "Account/access hygiene habits",
          "Device/software support (scope-defined)",
          "Backup guidance + recovery playbooks",
          "Documentation for repeatability",
        ],
      },
      {
        kind: "bullets",
        title: "How we handle access and information",
        bullets: [
          "Minimum access mindset",
          "Prefer documented steps + controlled handoffs",
          "Avoid sensitive collection unless necessary",
        ],
      },
      {
        kind: "deliverables",
        title: "What you receive",
        items: ["Setup checklists", "Troubleshooting playbooks", "Standard operating documentation"],
      },
      {
        kind: "ctaBand",
        headline: "Tell us your stack — we’ll tell you how we can support it.",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
      },
    ],
  },

  [ROUTES.professionals]: {
    seo: {
      title: "Professionals | OPS Online Support",
      description: "Remote professionals for admin, coordination, documentation, and support tasks — structured and reliable.",
    },
    hero: {
      headline: "Professional support aligned to your workflow",
      subline:
        "Remote professionals for admin, coordination, documentation, and support tasks — structured, reliable, and standards-driven.",
      primaryCta: { label: "Contact Us", href: ROUTES.contact },
      secondaryLink: { label: "Join Us", href: ROUTES.join },
    },
    sections: [
      {
        kind: "splitLane",
        title: "Two ways to engage",
        left: {
          title: "Need support",
          body: "We match your scope to a support lane and standards.",
          cta: { label: "Contact Us", href: ROUTES.contact },
        },
        right: {
          title: "Want to join",
          body: "Apply to the network with your role and availability.",
          cta: { label: "Join Us", href: ROUTES.join },
        },
      },
      {
        kind: "capabilityGrid",
        title: "Typical support roles",
        items: [
          "Administrative support",
          "Operations coordination",
          "Customer relations support",
          "Documentation and organization",
          "Basic project coordination",
        ],
      },
      {
        kind: "bullets",
        title: "How matching works",
        bullets: ["Scope → fit → start", "Communication standards", "Clear boundaries and handoffs"],
      },
      {
        kind: "bullets",
        title: "Standards we prioritize",
        bullets: ["Professional tone", "Documentation discipline", "Security awareness habits", "Consistent follow-through"],
      },
      {
        kind: "ctaBand",
        headline: "Need professional support or want to join the network?",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
        secondaryCta: { label: "Join Us", href: ROUTES.join },
      },
    ],
  },

  [ROUTES.us]: {
    seo: {
      title: "Us | OPS Online Support",
      description: "How we operate: documentation-first, clear routines, disciplined execution, governance-minded habits.",
    },
    hero: {
      headline: "Built on structure, clarity, and disciplined execution",
      subline:
        "OPS Online Support is designed to make remote support feel organized and dependable — without noise, clutter, or inflated claims.",
      primaryCta: { label: "Contact Us", href: ROUTES.contact },
    },
    sections: [
      {
        kind: "bullets",
        title: "Operating principles",
        bullets: [
          "Documentation-first",
          "Clear routines",
          "Boundaries and escalation",
          "Minimal data collection mindset",
          "Consistency over chaos",
        ],
      },
      {
        kind: "steps",
        title: "How we work",
        steps: [
          { title: "Discover", body: "Understand your workflow and define scope." },
          { title: "Standardize", body: "Create SOPs, checklists, and routines." },
          { title: "Support", body: "Execute consistently and refine over time." },
        ],
      },
      {
        kind: "bullets",
        title: "Governance-first habits",
        bullets: [
          "Disciplined handling of information",
          "Reduced unnecessary access",
          "Documented processes and clear boundaries",
        ],
      },
      {
        kind: "bullets",
        title: "Best fit",
        bullets: [
          "Teams that want consistent support",
          "Founders/operators who need structure",
          "SMBs scaling operations without adding chaos",
        ],
      },
      {
        kind: "ctaBand",
        headline: "Tell us what needs support — we’ll propose a clean structure.",
        primaryCta: { label: "Contact Us", href: ROUTES.contact },
      },
    ],
  },

  [ROUTES.contact]: {
    seo: {
      title: "Contact Us | OPS Online Support",
      description: "Tell us what you need supported. We’ll respond with a clear next step.",
    },
    hero: {
      headline: "Contact OPS Online Support",
      subline: "Tell us what you need supported. We’ll respond with a clear next step.",
      primaryCta: { label: "Send message", action: "scrollTo", targetId: "contactForm" },
    },
    sections: [
      {
        kind: "form",
        id: "contactForm",
        title: FORMS.contact.title,
        fields: FORMS.contact.fields,
      },
      {
        kind: "bullets",
        title: FORMS.contact.helperTitle,
        bullets: FORMS.contact.helperBullets,
      },
      {
        kind: "ctaBand",
        headline: "Prefer chat?",
        primaryCta: { label: "Open Chat", action: "openChatPopup" },
      },
    ],
  },

  [ROUTES.join]: {
    seo: {
      title: "Join Us | OPS Online Support",
      description: "Apply to join a disciplined remote support network with clear standards and communication.",
    },
    hero: {
      headline: "Join OPS Online Support",
      subline: "We’re building a disciplined remote support network with clear standards and strong communication.",
      primaryCta: { label: "Apply", action: "scrollTo", targetId: "joinForm" },
    },
    sections: [
      {
        kind: "bullets",
        title: "What matters most",
        bullets: [
          "Clear communication",
          "Documentation discipline",
          "Reliable follow-through",
          "Professional tone",
          "Security awareness habits",
        ],
      },
      {
        kind: "form",
        id: "joinForm",
        title: FORMS.join.title,
        fields: FORMS.join.fields,
      },
      {
        kind: "bullets",
        title: "What happens next",
        bullets: ["Review", "Fit call (if aligned)", "Onboarding steps (scope + standards)"],
      },
    ],
  },
};
