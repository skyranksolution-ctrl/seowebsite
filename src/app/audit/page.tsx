"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditForm from "@/components/AuditForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function FreeAuditPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free AI SEO Audit - SkyRank Solution",
    "description": "Scan your website for index crawl errors, meta tags, and Core Web Vitals speed issues in 60 seconds."
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative flex flex-col justify-center min-h-[80vh]">
        {/* Glow Spheres */}
        <div className="glow-sphere bg-[#005FFF] w-[400px] h-[400px] top-1/4 left-1/4 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <h1 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">Instant AI Rank Crawler</h1>
            <p className="text-zinc-700 text-sm font-medium leading-relaxed max-w-md mx-auto">
              Crawl your target domain, evaluate metadata configurations, and discover speed bottlenecks holding back search presence.
            </p>
          </div>

          <AuditForm />
        </div>
      </main>

      <Footer />
    </>
  );
}

