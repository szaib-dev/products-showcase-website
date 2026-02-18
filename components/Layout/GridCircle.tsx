"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function CategoriesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const posRef = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number | null>(null);
  const isVisible = useRef(false);

  // Smooth cursor follow via RAF
  const loop = useCallback(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, {
        x: posRef.current.x,
        y: posRef.current.y,
        xPercent: -50,
        yPercent: -50,
      });
    }
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [loop]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // On section enter: hide real cursor, show custom
  const handleSectionEnter = () => {
    document.body.style.cursor = "none";
  };

  // On section leave: restore real cursor, hide custom
  const handleSectionLeave = () => {
    document.body.style.cursor = "";
    setActiveIndex(null);
    gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    isVisible.current = false;
  };

  const handleRowEnter = (i: number) => {
    setActiveIndex(i);
    if (!isVisible.current) {
      gsap.fromTo(cursorRef.current,
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.5)" }
      );
      isVisible.current = true;
    }
  };

  const handleRowLeave = () => {
    setActiveIndex(null);
    gsap.to(cursorRef.current, { scale: 0.2, opacity: 0, duration: 0.3, ease: "power2.in" });
    isVisible.current = false;
  };

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" } }
    );
    const rows = listRef.current?.querySelectorAll(".cat-row");
    if (rows) {
      gsap.fromTo(rows,
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.07,
          scrollTrigger: { trigger: listRef.current, start: "top 82%" } }
      );
    }
  }, []);

  return (
    <section
      className="w-full bg-[#0E0C0A] py-20 md:py-28 relative overflow-hidden"
      onMouseEnter={handleSectionEnter}
      onMouseLeave={handleSectionLeave}
    >
      {/* Watermark */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.018] leading-none"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "28vw", fontWeight: 900, color: "#fff" }}
      >
        CAT
      </div>

      {/* Custom cursor — fixed, follows real mouse position */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 scale-0 will-change-transform"
      >
        <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden ring-2 ring-[#C4A378]/70 shadow-[0_0_40px_rgba(196,163,120,0.15)]">
          {activeIndex !== null ? (
            <Image
              key={activeIndex}
              src={CATEGORIES[activeIndex].imageUrl}
              alt={CATEGORIES[activeIndex].name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#1A1612]" />
          )}
          <div className="absolute inset-0 bg-[#0A0806]/25" />
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-px bg-[#C4A378]" />
              <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
                Collections
              </span>
            </div>
            <h2
              className="text-[36px] md:text-[52px] font-black leading-none tracking-[-0.025em] text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What we{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>
                carry
              </span>
            </h2>
          </div>
          <p className="text-[13px] text-white/25 max-w-[240px] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Five categories. Thousands of SKUs. One wholesale partner.
          </p>
        </div>

        {/* List */}
        <div ref={listRef} className="flex flex-col divide-y divide-white/[0.06]">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/product?category=${cat.id}`}
              className="cat-row group flex items-center justify-between py-5 md:py-7 select-none"
              onMouseEnter={() => handleRowEnter(i)}
              onMouseLeave={handleRowLeave}
            >
              <div className="flex items-center gap-5 md:gap-10">
                <span
                  className="text-[11px] tabular-nums w-5 text-white/15 group-hover:text-[#C4A378]/60 transition-colors duration-300"
                  style={{ fontFamily: "monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-[24px] md:text-[38px] lg:text-[46px] font-black leading-none tracking-[-0.025em] text-white/55 group-hover:text-white transition-all duration-300 group-hover:translate-x-3"
                  style={{ fontFamily: "'Syne', sans-serif", transitionProperty: "color, transform" }}
                >
                  {cat.name}
                </h3>
              </div>
              <div className="flex items-center gap-4 md:gap-6 shrink-0">
                <span
                  className="hidden sm:block text-[10px] text-white/15 group-hover:text-white/35 tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{ fontFamily: "monospace" }}
                >
                  {cat.products.length} items
                </span>
                <div className="size-8 md:size-10 border border-white/[0.07] group-hover:border-[#C4A378]/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C4A378]/10">
                  <ArrowUpRight className="size-3.5 text-white/20 group-hover:text-[#C4A378] transition-colors duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-10 flex items-center justify-between border-t border-white/[0.06] pt-6">
          <p className="text-[10px] text-white/15 tracking-[0.2em] uppercase" style={{ fontFamily: "monospace" }}>
            {CATEGORIES.reduce((acc, c) => acc + c.products.length, 0)}+ total products
          </p>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-white/30 hover:text-[#C4A378] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 group"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={() => { document.body.style.cursor = ""; }}
            onMouseLeave={() => { document.body.style.cursor = "none"; }}
          >
            Browse all
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}