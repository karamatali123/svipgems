import { TrustPageLayout, createTrustMetadata } from "@/components/svipgems/TrustPageLayout";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createTrustMetadata(
  "Privacy Policy – SVIP Gems Guide",
  "How SVIP Gems Guide collects and uses data on svipgems.com.pk.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <TrustPageLayout
      title="Privacy Policy"
      description={`Privacy practices for ${SITE_CONFIG.url}.`}
      path="/privacy-policy"
    >
      <p>Last updated: {SITE_CONFIG.dateModified}</p>
      <h2>Information we collect</h2>
      <p>
        This site is mostly static. We do not require account registration. Standard server logs
        (IP address, browser type, pages visited) may be collected by our hosting provider for
        security and analytics.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        We may use privacy-friendly analytics to understand page traffic. You can block cookies in
        your browser settings.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Download buttons link to third-party domains. Those sites have their own privacy policies.
        We mark affiliate links with rel=&quot;sponsored nofollow&quot;.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions: <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>
      </p>
    </TrustPageLayout>
  );
}
