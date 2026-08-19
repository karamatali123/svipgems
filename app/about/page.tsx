import { TrustPageLayout, createTrustMetadata } from "@/components/svipgems/TrustPageLayout";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createTrustMetadata(
  "About SVIP Gems Guide",
  "Who runs this independent Pakistan guide, how we test apps, and our affiliate disclosure.",
  "/about",
);

export default function AboutPage() {
  return (
    <TrustPageLayout
      title="About SVIP Gems Guide"
      description="Independent information site for Pakistan users researching SVIP Gems download, login, and payments."
      path="/about"
    >
      <p>
        {SITE_CONFIG.name} is an independent informational website for Pakistan users who want
        clear, honest guidance on the SVIP Gems Android app — not the app itself.
      </p>
      <h2>What we cover</h2>
      <p>
        APK download and installation, registration and login, Easypaisa and JazzCash deposits and
        withdrawals, bonuses, and whether the platform is real or fake. We publish specific numbers
        (PKR limits, timing, Android requirements) so you can decide with facts.
      </p>
      <h2>How we test</h2>
      <p>
        Our editor tests deposit and withdrawal flows on real Android devices before publishing
        payment guides. We document dates, amounts, and outcomes in our review content. Results may
        vary by account and time of day — we never guarantee earnings or payouts.
      </p>
      <h2>Affiliate disclosure</h2>
      <p>
        Download links on this site may earn a commission at no extra cost to you. This funds the
        guide but does not change our editorial approach. SVIP Gems involves real financial risk —
        only use money you can afford to lose. 18+ only.
      </p>
      <h2>Editor</h2>
      <p>
        <strong>{SITE_CONFIG.author.name}</strong> — {SITE_CONFIG.author.role}.{" "}
        {SITE_CONFIG.author.bio}
      </p>
    </TrustPageLayout>
  );
}
