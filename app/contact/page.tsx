import { TrustPageLayout, createTrustMetadata } from "@/components/svipgems/TrustPageLayout";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createTrustMetadata(
  "Contact SVIP Gems Guide",
  "Contact the SVIP Gems Guide team for corrections, questions, or feedback.",
  "/contact",
);

export default function ContactPage() {
  return (
    <TrustPageLayout
      title="Contact Us"
      description="Reach the SVIP Gems Guide team for content corrections or general questions."
      path="/contact"
    >
      <p>
        We are an independent guide site — not official SVIP Gems customer support. For deposit,
        withdrawal, or login issues inside the app, use in-app chat or the official support
        channels listed in our FAQ.
      </p>
      <h2>Email</h2>
      <p>
        For guide corrections, feedback, or partnership inquiries:{" "}
        <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>
      </p>
      <h2>Response time</h2>
      <p>We aim to reply within 2–3 business days. We cannot help with individual wallet or account disputes.</p>
    </TrustPageLayout>
  );
}
