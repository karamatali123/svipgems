import {
  DEPOSIT_TABLE,
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
    "How to withdraw from SVIP Gems to Easypaisa or JazzCash in Pakistan. Minimum PKR 200+, typical processing 10–30 minutes, failure fixes, and fees.",
  intro: [
    "SVIP Gems withdrawals send winnings back to the Easypaisa or JazzCash number on your profile. Minimum withdrawal is typically PKR 200 or more. Processing usually takes 10–30 minutes after account verification — first cash-outs may take longer.",
    "For deposit steps see our deposit guide. This page covers withdrawal only: limits, timing, failure reasons, and how to contact support.",
  ],
  withdrawSteps: WITHDRAW_TABLE,
  withdrawIntro: WITHDRAW_INTRO,
  limitsTable: [
    { label: "Minimum withdrawal", value: "PKR 200+ (check in-app for exact limit)" },
    { label: "Typical processing time", value: "10–30 minutes after verification" },
    { label: "First withdrawal", value: "May require extra KYC — allow up to 2 hours" },
    { label: "Payment methods", value: "Easypaisa, JazzCash" },
    { label: "Fees observed", value: "No fee observed in August 2026 testing" },
  ],
  failureReasons: [
    { issue: "Wrong wallet number", fix: "Confirm digits match your registered Easypaisa/JazzCash account name and number before submitting." },
    { issue: "First-time verification", fix: "Complete any KYC prompts in-app. First withdrawal often takes longer than repeat cash-outs." },
    { issue: "Peak hours / weekends", fix: "Wait 30–60 minutes. Contact in-app support with transaction ID if still pending." },
    { issue: "Bonus wagering not met", fix: "Check promotions tab — some bonus balances require play-through before withdrawal." },
    { issue: "Account name mismatch", fix: "Wallet holder name must match profile. Update profile or use the wallet registered to your SIM." },
  ],
  faqs: [
    {
      question: "What is the minimum withdrawal on SVIP Gems?",
      answer:
        "The minimum SVIP Gems withdrawal is typically PKR 200 or more. Check the withdraw screen in your app for the exact limit before submitting.",
    },
    {
      question: "How long does SVIP Gems withdrawal take?",
      answer:
        "Easypaisa and JazzCash withdrawals usually process in 10 to 30 minutes after verification. First cash-outs or large amounts may take longer.",
    },
    {
      question: "Can I withdraw via Easypaisa?",
      answer:
        "Yes. Open Wallet → Withdraw → Easypaisa, enter an amount above the minimum, and submit. Payouts typically land in 10–30 minutes.",
    },
    {
      question: "Why is my SVIP Gems withdrawal delayed?",
      answer:
        "Common causes include first-time verification, wrong wallet number, or peak traffic. Contact support with your transaction ID and screenshot.",
    },
    {
      question: "Does SVIP Gems support JazzCash withdrawal?",
      answer:
        "Yes. Enter your JazzCash number in the withdraw section. Confirm digits match your registered name. First cash-out may need verification.",
    },
  ],
} as const;

export const DEPOSIT_PAGE = {
  title: "SVIP Gems Minimum Deposit – Easypaisa & JazzCash Guide (2026)",
  description:
    "SVIP Gems deposit guide for Pakistan. Minimum PKR 100–500, Easypaisa and JazzCash steps, merchant transfer tips, and deposit-not-credited fixes.",
  intro: [
    "Adding money to SVIP Gems starts in the Wallet → Deposit section. Minimum deposit is typically PKR 100 to PKR 500 depending on promotions. Deposits through Easypaisa and JazzCash usually credit within a few minutes.",
    "Always verify the merchant number shown in the app before sending. Save your transaction screenshot until your balance updates.",
  ],
  depositSteps: DEPOSIT_TABLE,
  limitsTable: [
    { label: "Minimum deposit", value: "PKR 100–500 (varies by promotion)" },
    { label: "Typical credit time", value: "2–15 minutes" },
    { label: "Payment methods", value: "Easypaisa, JazzCash" },
    { label: "Proof required", value: "Screenshot or transaction ID if balance does not update" },
  ],
  failureReasons: [
    { issue: "Sent to wrong merchant number", fix: "Double-check digits in the app before transferring. Do not send twice — contact support first." },
    { issue: "Balance not updated after 15 min", fix: "Refresh wallet, then contact support with transaction ID and screenshot." },
    { issue: "Amount below minimum", fix: "Check deposit screen for current minimum — often PKR 100 or higher." },
    { issue: "Wrong wallet app used", fix: "Send from the same Easypaisa/JazzCash account registered on your profile." },
  ],
  faqs: [
    {
      question: "What is the minimum deposit on SVIP Gems?",
      answer:
        "Most builds allow deposits from PKR 100 to PKR 500 depending on promotions. Check the wallet deposit screen for the exact limit.",
    },
    {
      question: "Does SVIP Gems support JazzCash deposits?",
      answer:
        "Yes. Transfer to the merchant number shown in the deposit section and double-check every digit before sending.",
    },
    {
      question: "My deposit is not credited — what should I do?",
      answer:
        "Wait 10–15 minutes, refresh your balance, then contact support with transaction ID and screenshot. Do not send a second payment.",
    },
    {
      question: "How long does a SVIP Gems deposit take?",
      answer:
        "Easypaisa and JazzCash deposits usually credit within 2 to 15 minutes. Peak times may take slightly longer.",
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
