import { TrustPageLayout, createTrustMetadata } from "@/components/svipgems/TrustPageLayout";

export const metadata = createTrustMetadata(
  "Terms of Use – SVIP Gems Guide",
  "Terms for using the SVIP Gems Guide website at svipgems.com.pk.",
  "/terms",
);

export default function TermsPage() {
  return (
    <TrustPageLayout
      title="Terms of Use"
      description="Rules for using this informational website."
      path="/terms"
    >
      <h2>Informational purpose only</h2>
      <p>
        SVIP Gems Guide provides information about the SVIP Gems app. We are not the app developer,
        operator, or official support channel. Content is for education — not financial advice.
      </p>
      <h2>Real-money risk</h2>
      <p>
        SVIP Gems and similar apps involve gambling-style real-money gameplay. You can lose deposits.
        Never play with money you cannot afford to lose. Users must be 18 or older.
      </p>
      <h2>Accuracy</h2>
      <p>
        We update guides regularly but app features, limits, and bonuses change. Verify critical
        details inside the app before transferring money.
      </p>
      <h2>External links</h2>
      <p>
        We link to third-party download and support URLs. We are not responsible for third-party
        content or policies.
      </p>
    </TrustPageLayout>
  );
}
