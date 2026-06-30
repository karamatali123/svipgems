import {
  DEPOSIT_TABLE,
  DEPOSIT_WITHDRAW_INTRO,
  DEVICE_REQUIREMENTS_TABLE,
  DOWNLOADING_TABLE,
  DOWNLOAD_INTRO,
  INSTALLATION_TABLE,
  LOGIN_STEPS,
  LOGIN_STEPS_INTRO,
  PROS,
  CONS,
  REGISTRATION_LOGIN_INTRO,
  REGISTRATION_STEPS,
  WITHDRAW_TABLE,
  WITHDRAW_INTRO,
} from "@/lib/svipgems/article-content";
import { REAL_OR_FAKE, REVIEWS } from "@/lib/svipgems/content";

export const DOWNLOAD_PAGE = {
  title: "SVIP Gems APK Download (2026) – Install Guide for Pakistan",
  description:
    "Download SVIP Gems APK for Android in Pakistan. Official install steps, device requirements, unknown sources setup, and safety tips for 2026.",
  intro: [
    DOWNLOAD_INTRO,
    "This page focuses only on downloading and installing the SVIP Gems APK. If you need help with login, deposits, or withdrawals, use the linked guides below.",
  ],
  deviceRequirements: DEVICE_REQUIREMENTS_TABLE,
  downloadSteps: DOWNLOADING_TABLE,
  installSteps: INSTALLATION_TABLE,
  faqs: [
    {
      question: "Is SVIP Gems available on Google Play?",
      answer:
        "No. SVIP Gems is distributed as an APK outside Google Play. Download only from official or verified links on this site.",
    },
    {
      question: "Why does Android block the APK install?",
      answer:
        "Android blocks apps from unknown sources by default. Go to Settings → Security → enable installs from your browser, then try again.",
    },
    {
      question: "What Android version do I need?",
      answer: "Android 8.0 or higher with at least 200 MB free storage and 2 GB RAM recommended.",
    },
    {
      question: "Is the SVIP Gems APK file safe?",
      answer:
        "The APK is safe when downloaded from official sources. Avoid modified files shared in WhatsApp or Telegram groups.",
    },
  ],
} as const;

export const LOGIN_PAGE = {
  title: "SVIP Gems Login & Registration Guide (2026) – Pakistan",
  description:
    "SVIP Gems login and registration help for Pakistan. OTP signup steps, password reset, and account security tips for Android users.",
  intro: [
    REGISTRATION_LOGIN_INTRO,
    "This guide covers account creation and daily login only. For APK installation see the download guide; for wallet payments see the withdrawal guide.",
  ],
  registrationSteps: REGISTRATION_STEPS,
  loginSteps: LOGIN_STEPS,
  loginIntro: LOGIN_STEPS_INTRO,
  faqs: [
    {
      question: "How does SVIP Gems login work?",
      answer:
        "Enter your registered Pakistani mobile number and password. New users tap Register, verify OTP, and set a password first.",
    },
    {
      question: "I forgot my SVIP Gems password — what now?",
      answer:
        "Use Forgot Password inside the app and verify with OTP. Never use third-party login pages or share your OTP with anyone.",
    },
    {
      question: "Can I register without a referral code?",
      answer: "Yes. Referral code is optional during signup. Enter one only if a friend invited you.",
    },
    {
      question: "Why am I not receiving the OTP SMS?",
      answer:
        "Check signal strength, wait 60 seconds, and confirm your SIM is active. Avoid VPNs that block Pakistani numbers.",
    },
  ],
} as const;

export const WITHDRAWAL_PAGE = {
  title: "SVIP Gems Withdrawal Guide – Easypaisa & JazzCash (2026)",
  description:
    "SVIP Gems deposit and withdrawal guide for Pakistan. Easypaisa and JazzCash steps, minimum limits, processing times, and delay fixes.",
  intro: [
    DEPOSIT_WITHDRAW_INTRO,
    "This page explains wallet deposits and cash-outs in detail. Minimum deposit is typically PKR 100–500; minimum withdrawal is usually PKR 200 or more.",
  ],
  depositSteps: DEPOSIT_TABLE,
  withdrawSteps: WITHDRAW_TABLE,
  withdrawIntro: WITHDRAW_INTRO,
  paymentComparison: [
    { method: "Easypaisa", deposit: "Merchant transfer", withdrawal: "To Easypaisa account", time: "10–30 min" },
    { method: "JazzCash", deposit: "Merchant transfer", withdrawal: "To JazzCash account", time: "10–30 min" },
  ],
  faqs: [
    {
      question: "What is the minimum withdrawal on SVIP Gems?",
      answer: "Typically PKR 200 or more. Check the withdraw screen in your app for the exact limit.",
    },
    {
      question: "How long does Easypaisa withdrawal take?",
      answer:
        "Usually 10–30 minutes after verification. First cash-outs or weekend requests may take longer.",
    },
    {
      question: "My deposit is not showing — what should I do?",
      answer:
        "Wait 10–15 minutes, refresh your balance, then contact support with transaction ID and screenshot. Do not pay twice.",
    },
    {
      question: "Why is my withdrawal delayed?",
      answer:
        "Common causes: first-time verification, wrong wallet number, or peak traffic. Contact in-app support with proof.",
    },
  ],
} as const;

export const REVIEW_PAGE = {
  title: "SVIP Gems Review Pakistan (2026) – Real or Fake Analysis",
  description:
    "Honest SVIP Gems review for Pakistan users. Real or fake analysis, regional user feedback, pros and cons, and safety verdict for 2026.",
  intro: [
    "SVIP Gems is a widely used real-money gaming APK in Pakistan, but it is not regulated by SECP or any government gambling authority. This review summarizes what Pakistan users report about deposits, withdrawals, gameplay, and overall trustworthiness.",
    "We collected feedback from players across Punjab, Sindh, KPK, Gilgit-Baltistan, and Balochistan. Results are mixed — some users praise fast JazzCash payouts; others report first-withdrawal delays. Read the full breakdown below.",
  ],
  realOrFake: REAL_OR_FAKE,
  reviews: REVIEWS,
  pros: PROS,
  cons: CONS,
  verdict: [
    "SVIP Gems is a real app with real-money gameplay — not a scam in the sense of a fake APK that steals installs. Payouts do work for most users, but they are not guaranteed and delays happen. The platform carries financial risk like any unregulated gaming app.",
    "Our recommendation: download from official links only, register with your own number, test with a small PKR 100–200 deposit, and verify one withdrawal before committing larger amounts. If the risk feels uncomfortable, do not play.",
  ],
  faqs: [
    {
      question: "Is SVIP Gems real or fake?",
      answer:
        "Real-money gaming app used by many Pakistan players. Not government-regulated. Payouts happen but are not guaranteed. Play responsibly.",
    },
    {
      question: "Do SVIP Gems withdrawals actually work?",
      answer:
        "Most users report successful Easypaisa and JazzCash withdrawals in 10–30 minutes. First cash-outs may need extra verification.",
    },
    {
      question: "Is SVIP Gems safe to use?",
      answer:
        "Uses OTP login and trusted wallet payments, but it is unregulated. Start with a small test deposit and never share your OTP.",
    },
    {
      question: "What do Pakistan users say about SVIP Gems?",
      answer:
        "Feedback is mixed. Lahore and Karachi users often mention easy deposits; some report withdrawal delays on first cash-out or weekends.",
    },
  ],
} as const;
