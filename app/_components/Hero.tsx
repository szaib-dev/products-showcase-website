"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, stagger: 0.1 }
    )
      .fromTo(paraRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(imgWrapRef.current, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }, "-=1.4")
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0E0C0A] overflow-hidden flex flex-col"
    >
      {/* Full-bleed background image with strong overlay */}
      <div ref={imgWrapRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1800&q=90"
          alt="Warehouse"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A]/95 via-[#0E0C0A]/70 to-[#0E0C0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-[1300px] mx-auto px-6 md:px-12 w-full pt-32 pb-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-[#C4A378]" />
          <span
            className="text-[11px] text-[#C4A378] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono, monospace)" }}
          >
            Global Wholesale Partner
          </span>
        </div>

        {/* Headline — full width, large, clipped lines */}
        <h1 className="overflow-hidden flex flex-col gap-1 mb-10">
          <div className="overflow-hidden">
            <div
              ref={line1Ref}
              className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] xl:text-[7.5vw] font-black leading-[0.92] tracking-[-0.03em] text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              PREMIUM
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              ref={line2Ref}
              className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] xl:text-[7.5vw] font-black leading-[0.92] tracking-[-0.03em] text-transparent"
              style={{
                fontFamily: "'Syne', sans-serif",
                WebkitTextStroke: "1.5px #C4A378",
              }}
            >
              PRODUCTS
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              ref={line3Ref}
              className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] xl:text-[7.5vw] font-black leading-[0.92] tracking-[-0.03em] text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              WHOLESALE.
            </div>
          </div>
        </h1>

        {/* Bottom row: para + cta */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 max-w-[900px]">
          <p
            ref={paraRef}
            className="text-[15px] text-white/50 leading-[1.8] max-w-[360px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Manufacturing and distribution for businesses that demand quality.
            From bulk orders to custom solutions — delivered worldwide.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Link
              href="/product"
              className="group inline-flex items-center gap-3 bg-[#C4A378] text-[#0E0C0A] px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:bg-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Browse Products
              <svg className="size-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/trade-form"
              className="inline-flex items-center gap-2 text-white/60 text-[13px] font-medium tracking-wide hover:text-[#C4A378] transition-colors duration-200 border-b border-white/20 hover:border-[#C4A378] pb-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply for Trade Account
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="relative z-10 flex items-center gap-3 px-6 md:px-12 pb-8"
      >
        <div className="flex flex-col gap-[3px]">
          <div className="w-4 h-[1.5px] bg-white/30" />
          <div className="w-2.5 h-[1.5px] bg-white/20" />
        </div>
        <span
          className="text-[10px] text-white/30 tracking-[0.2em] uppercase"
          style={{ fontFamily: "monospace" }}
        >
          Scroll to explore
        </span>
      </div>

      {/* Right side vertical text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-white/10" />
        <span
          className="text-[10px] text-white/25 tracking-[0.3em] uppercase"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "monospace",
          }}
        >
          Quality · Scale · Worldwide
        </span>
        <div className="w-px h-16 bg-white/10" />
      </div>
    </section>
  );
}