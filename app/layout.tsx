import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { getStructuredDataGraph } from "@/lib/svipgems/schema";
import { rootLayoutMetadata, siteViewport } from "@/lib/svipgems/metadata";
import "./globals.css";

const structuredDataJson = JSON.stringify(getStructuredDataGraph());

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootLayoutMetadata;

export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        <Script
          id="site-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        {children}
      </body>
    </html>
  );
}
