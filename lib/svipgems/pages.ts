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
    path: "/withdrawal",
    label: "Deposit & Withdrawal",
    shortLabel: "Withdrawal",
    description: "Easypaisa and JazzCash deposit and withdrawal guide for SVIP Gems users.",
  },
  {
    path: "/review",
    label: "Review & Real or Fake",
    shortLabel: "Review",
    description: "Honest SVIP Gems review, user feedback, and real-or-fake analysis for Pakistan.",
  },
] as const;

export type GuidePagePath = (typeof GUIDE_PAGES)[number]["path"];

export function getGuidePage(path: GuidePagePath) {
  return GUIDE_PAGES.find((page) => page.path === path);
}

export function getOtherGuidePages(currentPath: GuidePagePath) {
  return GUIDE_PAGES.filter((page) => page.path !== currentPath);
}
