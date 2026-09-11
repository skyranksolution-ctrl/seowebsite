import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LeadPopupModal from "@/components/LeadPopupModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyRank Solution - AI-Powered SEO Agency & SaaS Platform",
  description: "Rank Higher. Grow Faster. Dominate Google search results with our next-generation AI SEO audit crawler, keyword tracker engines, and expert consultants.",
  keywords: ["AI SEO", "SEO Agency", "Rank Tracker", "SEO SaaS", "Keyword Research", "Technical SEO", "SkyRank"],
  openGraph: {
    title: "SkyRank Solution - AI-Powered SEO Agency & SaaS",
    description: "Rank Higher. Grow Faster. Automated keyword tracking, instant audits, and context analysis.",
    url: "https://skyrank.io",
    siteName: "SkyRank Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyRank Solution - AI-Powered SEO",
    description: "Rank Higher. Grow Faster. Automated search intelligence platform.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <LeadPopupModal />
      </body>
    </html>
  );
}
