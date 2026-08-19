export const GUIDE_PAGES = [
  {
    path: "/download",
    label: "Download APK",
    shortLabel: "Download",
    description: "Step-by-step SVIP Gems APK download and install guide for Android in Pakistan.",
  },
  {
    path: "/login",
    label: "Login & Registration",
    shortLabel: "Login",
    description: "How to register and log in to SVIP Gems with OTP verification in Pakistan.",
  },
  {
    path: "/deposit",
    label: "Deposit Guide",
    shortLabel: "Deposit",
    description: "Minimum deposit limits, Easypaisa and JazzCash funding steps for SVIP Gems.",
  },
  {
    path: "/withdrawal",
    label: "Withdrawal Guide",
    shortLabel: "Withdrawal",
    description: "Easypaisa and JazzCash withdrawal steps, limits, and timing for SVIP Gems.",
  },
  {
    path: "/review",
    label: "Review & Real or Fake",
    shortLabel: "Review",
    description: "Honest SVIP Gems review, user feedback, and real-or-fake analysis for Pakistan.",
  },
] as const;

export const TRUST_PAGES = [
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Use" },
] as const;

export type GuidePagePath = (typeof GUIDE_PAGES)[number]["path"];

export type TrustPagePath = (typeof TRUST_PAGES)[number]["path"];

export const ALL_INDEXABLE_PATHS = [
  "/",
  ...GUIDE_PAGES.map((p) => p.path),
  ...TRUST_PAGES.map((p) => p.path),
] as const;

export function getGuidePage(path: GuidePagePath) {
  return GUIDE_PAGES.find((page) => page.path === path);
}

export function getOtherGuidePages(currentPath: GuidePagePath) {
  return GUIDE_PAGES.filter((page) => page.path !== currentPath);
}
