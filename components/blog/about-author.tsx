"use client";

import React from "react";

interface AboutAuthorProps {
  language?: "en" | "ja";
}

export function AboutAuthor({ language = "en" }: AboutAuthorProps) {
  const isJa = language === "ja";

  const heading = isJa ? "著者について: AKRIN" : "About the Author: AKRIN";
  const body = isJa
    ? "AKRINは日本を拠点とするITソリューション企業です。マネージドITサービス、サイバーセキュリティ、クラウド移行、ネットワーク設計/運用など、エンタープライズ企業向けに包括的なサービスを提供しています。確かな実績と高品質なサポートで、お客様のビジネス変革を支援します。"
    : "AKRIN is a Japan-based IT solutions firm providing managed IT services, cybersecurity, cloud migration, and enterprise network design and operations. We help organizations modernize securely with reliable delivery and high‑quality support tailored to Japan’s business environment.";

  return (
    <section role="complementary" aria-label={heading} className="bg-white border-t border-gray-200 py-8 md:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] items-start gap-4 md:gap-5">
          <div className="shrink-0 mt-0.5 md:mt-0">
            <img
              src="/favicon-192x192.v3.png"
              alt="AKRIN"
              width={56}
              height={56}
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 mb-1 md:mb-1.5">{heading}</h3>
            <p className="text-sm md:text-[15px] text-gray-700 leading-6 md:leading-7 max-w-[62ch]">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


