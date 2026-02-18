"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const DISPLAY_PRODUCTS = PRODUCTS.slice(0, 20);

export default function ProductsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
      }
    );
    const cards = gridRef.current?.querySelectorAll(".prod-card");
    if (cards) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.04,
          scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        }
      );
    }
  }, []);

  return (
    <section className="w-full bg-[#F5F2EE] py-20 md:py-28 relative overflow-hidden">

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A378]/40 to-transparent" />

      {/* Faint watermark */}
      <div
        className="absolute left-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] leading-none"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "26vw", fontWeight: 900, color: "#1A1612" }}
      >
        PRO
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full">

        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-px bg-[#C4A378]" />
              <span
                className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace" }}
              >
                Wholesale Catalog
              </span>
            </div>
            <h2
              className="text-[36px] md:text-[52px] font-black leading-none tracking-[-0.025em] text-[#0E0C0A]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Featured{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>
                Products
              </span>
            </h2>
          </div>
          <Link
            href="/product"
            className="hidden md:inline-flex items-center gap-2 text-[#0E0C0A]/40 hover:text-[#C4A378] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 group"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View all products
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[#0E0C0A]/[0.07]"
        >
          {DISPLAY_PRODUCTS.map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="prod-card group relative bg-white flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F0EDE8]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0E0C0A]/0 group-hover:bg-[#0E0C0A]/20 transition-all duration-300" />

                {/* Index badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className="text-[9px] text-[#0E0C0A]/25 tabular-nums"
                    style={{ fontFamily: "monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-2.5 right-2.5 size-7 bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-3.5 text-[#C4A378]" />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 p-3 border-t border-[#0E0C0A]/[0.06]">
                <h3
                  className="text-[12px] md:text-[13px] font-bold text-[#0E0C0A] leading-tight line-clamp-1 group-hover:text-[#C4A378] transition-colors duration-200"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[10px] text-[#0E0C0A]/40 leading-snug line-clamp-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {product.description}
                </p>
              </div>

              {/* Gold bottom sweep on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C4A378] group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#0E0C0A]/[0.08] pt-8">
          <p
            className="text-[11px] text-[#0E0C0A]/30 tracking-[0.18em] uppercase"
            style={{ fontFamily: "monospace" }}
          >
            Showing 20 of {PRODUCTS.length}+ products
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/product"
              className="inline-flex items-center gap-2.5 bg-[#0E0C0A] text-white px-7 py-3.5 text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-[#C4A378] transition-colors duration-300 group"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Browse Full Catalog
              <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/trade-form"
              className="inline-flex items-center gap-2 text-[#0E0C0A]/40 hover:text-[#C4A378] text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 border-b border-[#0E0C0A]/20 hover:border-[#C4A378] pb-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply for Trade Account
            </Link>
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-6 md:hidden">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-[#0E0C0A]/40 hover:text-[#C4A378] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 group"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View all products <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}