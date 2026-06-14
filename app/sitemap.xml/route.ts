import { getSitemapXml } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  return new Response(getSitemapXml(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
