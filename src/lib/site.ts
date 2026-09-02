export const site = {
  name: "Emergent AI",
  tagline: "Build complete applications with AI.",
  description:
    "Describe what you want to build, and let AI transform your idea into a beautiful, functional application.",
  year: 2026,
};

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#enterprise" },
];

export type PreviewKind = "sneakers" | "dashboard" | "crm" | "portfolio";

export const promptChips: { label: string; kind: PreviewKind }[] = [
  { label: "Build a SaaS dashboard", kind: "dashboard" },
  { label: "Create an ecommerce store", kind: "sneakers" },
  { label: "Build a CRM platform", kind: "crm" },
  { label: "Create a portfolio website", kind: "portfolio" },
];

export const buildSteps = [
  "Creating project structure",
  "Designing interface",
  "Building components",
  "Creating product pages",
  "Optimizing responsive layout",
];
