export const TRUST_BADGES = [
  "Fast Withdrawal",
  "Secure Payments",
  "Pakistan Users",
  "Referral Rewards",
  "Android Supported",
] as const;

export const QUICK_INFO = [
  { label: "App Name", value: "SVIP Gems (SVIPGEMS)" },
  { label: "Version", value: "Latest stable APK (2026)" },
  { label: "Category", value: "Color prediction, slots & casino-style games" },
  { label: "Platform", value: "Android APK" },
  { label: "Minimum Deposit", value: "PKR 100 – 500" },
  { label: "Minimum Withdrawal", value: "PKR 200+" },
  { label: "Withdrawal Time", value: "10 – 30 minutes (typical)" },
  { label: "Bonus System", value: "Welcome, daily & VIP rewards" },
  { label: "Referral System", value: "Commission on invited users" },
  { label: "Payment Methods", value: "Easypaisa, JazzCash" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Register",
    content: `Download the SVIP Gems APK, tap Register, enter your mobile number, verify OTP, and set a password. Optional referral code at signup. Takes about 2 minutes.`,
  },
  {
    step: 2,
    title: "Deposit",
    content: `Open Wallet, pick Easypaisa or JazzCash, send PKR 100–500 to the merchant number shown, and upload proof if asked. Balance usually updates within minutes.`,
  },
  {
    step: 3,
    title: "Play",
    content: `Choose color prediction, Teen Patti, Dragon Tiger, Fortune Tiger, or slots. Rounds run 1–3 minutes. Bet only what you can afford to lose.`,
  },
  {
    step: 4,
    title: "Withdraw",
    content: `Go to Withdraw, select Easypaisa or JazzCash, enter amount (min PKR 200+), and submit. Most payouts land in 10–30 minutes. First withdrawal may need extra verification.`,
  },
] as const;

export const GAMES = [
  {
    name: "Teen Patti",
    gameplay: "Three-card poker against dealer or players.",
    risk: "Medium",
    duration: "2–3 min",
    suitable: "Card game fans.",
  },
  {
    name: "Poker",
    gameplay: "Standard poker tables and hand rankings.",
    risk: "Medium–High",
    duration: "2–3 min",
    suitable: "Experienced players.",
  },
  {
    name: "Rummy",
    gameplay: "Form sets and sequences before opponents.",
    risk: "Medium",
    duration: "2–3 min",
    suitable: "Skill-based card players.",
  },
  {
    name: "Dragon Tiger",
    gameplay: "Bet on Dragon or Tiger — higher card wins.",
    risk: "Low–Medium",
    duration: "1 min",
    suitable: "Beginners.",
  },
  {
    name: "Roulette",
    gameplay: "Bet on numbers, colors, or groups on the wheel.",
    risk: "Medium–High",
    duration: "1–2 min",
    suitable: "Casino-style players.",
  },
  {
    name: "Euro Roulette",
    gameplay: "Single-zero roulette variant.",
    risk: "Medium–High",
    duration: "1–2 min",
    suitable: "Roulette regulars.",
  },
  {
    name: "Fortune Tiger",
    gameplay: "Slot reels with multipliers and bonus rounds.",
    risk: "High",
    duration: "1–2 min",
    suitable: "Slot players.",
  },
  {
    name: "Fortune Rabbit",
    gameplay: "Rabbit-themed slot with free spins.",
    risk: "High",
    duration: "1–2 min",
    suitable: "Casual slot fans.",
  },
  {
    name: "Fortune Gems",
    gameplay: "Gem slot with cascading wins.",
    risk: "High",
    duration: "1–2 min",
    suitable: "Quick session players.",
  },
] as const;

export const PAYMENT_COMPARISON = [
  {
    method: "Easypaisa",
    deposit: "Merchant transfer or payment link",
    withdrawal: "To Easypaisa mobile account",
    time: "10–30 min",
    notes: "Verify merchant number before sending.",
  },
  {
    method: "JazzCash",
    deposit: "Transfer to displayed account",
    withdrawal: "To JazzCash on profile",
    time: "10–30 min",
    notes: "First withdrawal may take longer.",
  },
  {
    method: "Bank Transfer",
    deposit: "Sometimes for large amounts",
    withdrawal: "Rare; 24–48 hours",
    time: "Varies",
    notes: "Check in-app availability.",
  },
] as const;

export const FEATURES = [
  {
    title: "Fast Withdrawals",
    content: `Easypaisa and JazzCash cash-outs typically process in 10–30 minutes. First withdrawal or peak hours may take longer.`,
  },
  {
    title: "Low Deposit Entry",
    content: `Start from PKR 100–500. Check the wallet screen for current limits before transferring.`,
  },
  {
    title: "Referral System",
    content: `Share your invite code — earn ~0.5% commission when friends deposit and play. Not guaranteed income.`,
  },
  {
    title: "Daily Bonus",
    content: `Login rewards and deposit matches available. Most bonuses have wagering requirements before withdrawal.`,
  },
  {
    title: "Mobile Compatibility",
    content: `Android APK for Samsung, Xiaomi, Oppo, Vivo, and similar phones. Needs ~200 MB free storage.`,
  },
  {
    title: "Urdu / English Interface",
    content: `Menus and support in English and Urdu. Switch language in settings if needed.`,
  },
  {
    title: "Secure Login",
    content: `Mobile number + OTP + password. Never share OTP or password with anyone claiming to be support.`,
  },
  {
    title: "Customer Support",
    content: `In-app chat, Telegram, or WhatsApp. Keep transaction screenshots ready for deposit or withdrawal issues.`,
  },
  {
    title: "Promotions",
    content: `Seasonal and Eid bonuses, cashback, and VIP tiers. Read terms before claiming any offer.`,
  },
] as const;

export const DOWNLOAD_STEPS = [
  "Open the official SVIP Gems download page.",
  "Tap Download APK and save the file.",
  "Enable Unknown Sources in Android Settings → Security.",
  "Open the APK from Downloads and tap Install.",
  "Launch the app and register or log in.",
] as const;

export const REGISTRATION_STEPS = [
  {
    title: "Phone Number",
    detail: "Enter active Pakistani SIM for OTP.",
  },
  {
    title: "Verify OTP",
    detail: "Enter SMS code before it expires.",
  },
  {
    title: "Set Password",
    detail: "Use a unique password — not your wallet PIN.",
  },
  {
    title: "Referral Code",
    detail: "Optional — enter if a friend invited you.",
  },
  {
    title: "Complete Profile",
    detail: "Add display name or wallet details if prompted.",
  },
] as const;

export const BONUSES = [
  {
    title: "Welcome Bonus",
    range: "PKR 30 – 500",
    detail: "Signup credits or first-deposit match. Varies by campaign.",
  },
  {
    title: "Referral Commission",
    range: "~0.5%",
    detail: "Earn from referred users' activity.",
  },
  {
    title: "Daily Rewards",
    range: "Credits / spins",
    detail: "Login streaks with wagering requirements.",
  },
  {
    title: "VIP Bonuses",
    range: "Tier-based",
    detail: "Better cashback for frequent depositors.",
  },
] as const;

export const REAL_OR_FAKE = {
  pros: [
    "Easy UI and fast OTP signup",
    "Easypaisa & JazzCash supported",
    "Wide game selection",
    "Low minimum deposit",
  ],
  cons: [
    "Withdrawal delays at peak times",
    "Not SECP-regulated",
    "Real financial risk",
    "APK outside Google Play",
  ],
} as const;

export const REVIEWS = [
  {
    name: "Ahmed R.",
    region: "Punjab (Lahore)",
    rating: 4,
    text: "Easypaisa deposits work fine. Withdrawals in ~20 min. One Sunday delay, support fixed it next day.",
  },
  {
    name: "Fatima K.",
    region: "Sindh (Karachi)",
    rating: 3,
    text: "Login is easy, app runs smooth. JazzCash withdrawal took 45 min once. Bonus terms could be clearer.",
  },
  {
    name: "Usman H.",
    region: "KPK (Peshawar)",
    rating: 4,
    text: "Good game variety. PKR 200 start, small referral bonus. Entertainment only — not fixed income.",
  },
  {
    name: "Zainab M.",
    region: "Gilgit-Baltistan",
    rating: 2,
    text: "First withdrawal needed verification — took 2 hours. Start small to test.",
  },
  {
    name: "Bilal S.",
    region: "Balochistan (Quetta)",
    rating: 3,
    text: "Easy download. Won some, lost some. Easypaisa deposit in 5 min. Don't over-deposit.",
  },
  {
    name: "Sana T.",
    region: "Punjab (Multan)",
    rating: 5,
    text: "Daily bonus is nice. JazzCash withdrawals under 25 min. Low minimum deposit.",
  },
] as const;

export const RELATED_LINKS = [
  { href: "/#screenshots-heading", label: "App Screenshots", description: "SVIP Gems Android app screens." },
  { href: "/#login", label: "Login Help", description: "Register and access your account." },
  { href: "/#withdrawal", label: "Withdrawal Guide", description: "Easypaisa & JazzCash cash-out." },
  { href: "/#bonuses", label: "Bonus 2026", description: "Welcome, referral, and daily rewards." },
  { href: "/#real-or-fake-heading", label: "Real or Fake Review", description: "Pros, cons, and risks." },
  { href: "/#reviews-heading", label: "SVIP Gems User Reviews", description: "Pakistan user feedback by region." },
  { href: "/#faq", label: "FAQ", description: "Common questions answered." },
  { href: "/#games", label: "Games List", description: "All available titles." },
  { href: "/#features", label: "Features", description: "Payments, bonuses, support." },
] as const;

export const FAQS = [
  {
    question: "How do I download SVIP Gems APK?",
    answer: "Tap Download APK, enable Unknown Sources in settings, install the file, and open the app. Use official links only.",
  },
  {
    question: "How does SVIP Gems login work?",
    answer: "Enter mobile number and password. New users tap Register → verify OTP → set password. Use Forgot Password if needed.",
  },
  {
    question: "Can I withdraw via Easypaisa?",
    answer: "Yes. Wallet → Withdraw → Easypaisa → enter amount (min PKR 200+). Usually 10–30 minutes.",
  },
  {
    question: "Does SVIP Gems support JazzCash?",
    answer: "Yes for deposits and withdrawals. Transfer to the in-app merchant number and double-check digits.",
  },
  {
    question: "What is the minimum deposit?",
    answer: "Typically PKR 100–500. Check the deposit screen for the current limit.",
  },
  {
    question: "How long does withdrawal take?",
    answer: "10–30 minutes normally. First withdrawal or weekends may take longer. Contact support with transaction ID if delayed.",
  },
  {
    question: "Is SVIP Gems real or fake?",
    answer: "Real-money gaming app used by many Pakistan players. Not government-regulated. Payouts happen but aren't guaranteed. Play responsibly.",
  },
  {
    question: "What games are available?",
    answer: "Color prediction, Teen Patti, Poker, Rummy, Dragon Tiger, Roulette, Fortune Tiger, Fortune Rabbit, and Fortune Gems.",
  },
  {
    question: "What welcome bonus is available in 2026?",
    answer: "PKR 30–500 signup or first-deposit bonus. Amount varies. Wagering required before withdrawal.",
  },
  {
    question: "How does the referral system work?",
    answer: "Share invite code at signup. Earn ~0.5% from referred users' activity. Rates vary by promotion.",
  },
  {
    question: "Why is my withdrawal delayed?",
    answer: "Common causes: first-time verification, wrong wallet number, or peak traffic. Contact support with screenshots.",
  },
  {
    question: "Is it on Google Play Store?",
    answer: "No — download APK directly from official sources. Avoid cracked versions.",
  },
  {
    question: "Can I use SVIP Gems on iPhone?",
    answer: "Android only. Unofficial iOS builds exist but aren't recommended.",
  },
  {
    question: "Deposit not credited?",
    answer: "Wait 10–15 minutes. Then contact support with transaction ID and screenshot. Don't send twice.",
  },
  {
    question: "Is SVIP Gems safe?",
    answer: "Standard OTP login, but real-money risk applies. No SECP regulation. Use official APK, strong password, small test deposits.",
  },
  {
    question: "What is the SVIP Gems customer care number?",
    answer: "Support is usually via in-app chat, Telegram, or WhatsApp — not a public phone line. Check the official app or website for current contact details. Avoid agents on random social media.",
  },
  {
    question: "What is the minimum withdrawal on JazzCash?",
    answer: "Minimum withdrawal is typically PKR 200 or more. Enter your JazzCash number in the withdraw section. First cash-out may need verification and take longer than usual.",
  },
  {
    question: "Why is SVIP Gems not working today?",
    answer: "Common fixes: check internet connection, update the APK, clear app cache, or wait during server maintenance. If login or payments fail for hours, contact official support with screenshots.",
  },
  {
    question: "How do I contact SVIP Gems support?",
    answer: "Use in-app live chat first. Official Telegram or WhatsApp links may be listed on the download page. Keep your user ID and transaction screenshots ready when reporting deposit or withdrawal issues.",
  },
] as const;

export const HERO_INTRO =
  "SVIP Gems, also written as SVIPGEMS, is a widely used Android gaming app in Pakistan. Whether you want to download the APK, set up your login, deposit through Easypaisa or JazzCash, or understand how withdrawals and bonuses work, this guide walks you through each step for Pakistan users in 2026.";

export const CONCLUSION = [
  "SVIP Gems offers a straightforward way for Pakistan users to access color prediction, slots, and casino-style games on Android. With Easypaisa and JazzCash support, low minimum deposits, and withdrawals that typically process within 10 to 30 minutes, it remains a popular choice among mobile gamers in 2026.",
  "Before you start, download the APK from a trusted source, register with your mobile number, and test with a small deposit first. Read bonus terms carefully, avoid sharing your OTP with anyone, and never treat SVIP Gems as a source of guaranteed income. Play responsibly and only use money you can afford to lose.",
] as const;

export const WHAT_IS_CONTENT = [
  `SVIP Gems (SVIPGEMS) is an Android gaming APK popular in Pakistan. It offers color prediction, slots, and casino-style games like Teen Patti, Dragon Tiger, and Fortune Tiger. Download the APK, register with your mobile number, deposit via Easypaisa or JazzCash, play, and withdraw winnings.`,
  `Minimum deposit is PKR 100–500, minimum withdrawal PKR 200+, and typical cash-out time is 10–30 minutes. The app supports English and Urdu. It's real-money entertainment — not a guaranteed income source. Only deposit what you can afford to lose.`,
] as const;

export const DISCLAIMER =
  "For informational purposes only. SVIP Gems involves real financial risk. All amounts in PKR. Never deposit more than you can afford to lose. Play responsibly.";
