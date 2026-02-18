"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, SlidersHorizontal, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const PER_PAGE = 50;

export default function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCat, setActiveCat] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const prevFiltered = useRef<string>("");

  // Sync URL params
  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    const pg = parseInt(searchParams.get("page") || "1");
    const q = searchParams.get("search") || "";
    setActiveCat(cat);
    setPage(pg);
    setSearchQuery(q);
  }, [searchParams]);

  // Filtered products
  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCat === "all" || p.categoryId === activeCat;
    const matchQ = searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const updateURL = useCallback((cat: string, pg: number, q: string) => {
    const params = new URLSearchParams();
    if (cat !== "all") params.set("category", cat);
    if (pg > 1) params.set("page", String(pg));
    if (q) params.set("search", q);
    router.push(`/product?${params.toString()}`, { scroll: false });
  }, [router]);

  const handleCatChange = (cat: string) => {
    setActiveCat(cat);
    setPage(1);
    updateURL(cat, 1, searchQuery);
  };

  const handlePageChange = (pg: number) => {
    setPage(pg);
    updateURL(activeCat, pg, searchQuery);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage(1);
    updateURL(activeCat, 1, q);
  };

  // GSAP: header entrance
  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  // GSAP: grid cards animate on filter/page change
  useEffect(() => {
    const key = `${activeCat}-${page}-${searchQuery}`;
    if (prevFiltered.current === key) return;
    prevFiltered.current = key;

    const cards = gridRef.current?.querySelectorAll(".prod-card");
    if (!cards || cards.length === 0) return;

    gsap.fromTo(cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.03 }
    );
  }, [activeCat, page, searchQuery, paginated.length]);

  const activeCatName = CATEGORIES.find(c => c.id === activeCat)?.name || "All Products";

  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-30">

      {/* Page Header */}
      <div ref={headerRef} className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-20 overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "20vw", fontWeight: 900, color: "#fff" }}
        >
          SHOP
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              Wholesale Catalog
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1
              className="text-[40px] md:text-[60px] font-black leading-none tracking-[-0.025em] text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {activeCat === "all" ? (
                <>All <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>Products</span></>
              ) : (
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>{activeCatName}</span>
              )}
            </h1>
            <p className="text-[12px] text-white/20 tracking-[0.15em]" style={{ fontFamily: "monospace" }}>
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full py-10">

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">

          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-[13px] px-4 py-2.5 outline-none focus:border-[#C4A378]/50 transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {searchQuery && (
              <button onClick={() => handleSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="size-3.5 text-white/30 hover:text-white transition-colors" />
              </button>
            )}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 border border-white/[0.08] px-4 py-2.5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200 text-[12px] tracking-[0.12em] uppercase w-fit"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <SlidersHorizontal className="size-3.5" />
            Filter
            {activeCat !== "all" && <span className="size-1.5 rounded-full bg-[#C4A378] ml-1" />}
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {[{ id: "all", name: "All" }, ...CATEGORIES].map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCatChange(cat.id)}
                className={`text-[11px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCat === cat.id
                    ? "bg-[#C4A378] border-[#C4A378] text-[#0E0C0A] font-bold"
                    : "border-white/[0.08] text-white/35 hover:border-white/20 hover:text-white/60"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {filterOpen && (
          <div className="md:hidden mb-6 border border-white/[0.08] bg-white/[0.02] p-4">
            <p className="text-[10px] text-white/20 tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "monospace" }}>
              Filter by Category
            </p>
            <div className="flex flex-wrap gap-2">
              {[{ id: "all", name: "All" }, ...CATEGORIES].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { handleCatChange(cat.id); setFilterOpen(false); }}
                  className={`text-[11px] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
                    activeCat === cat.id
                      ? "bg-[#C4A378] border-[#C4A378] text-[#0E0C0A] font-bold"
                      : "border-white/[0.08] text-white/35"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active filter badge */}
        {activeCat !== "all" && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] text-white/20 tracking-[0.18em] uppercase" style={{ fontFamily: "monospace" }}>
              Filtered:
            </span>
            <button
              onClick={() => handleCatChange("all")}
              className="flex items-center gap-1.5 bg-[#C4A378]/10 border border-[#C4A378]/30 text-[#C4A378] text-[11px] px-3 py-1 hover:bg-[#C4A378]/20 transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {activeCatName}
              <X className="size-3" />
            </button>
          </div>
        )}

        {/* Products Grid */}
        {paginated.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-12 h-px bg-white/10" />
            <p className="text-white/20 text-[13px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              No products found
            </p>
            <button
              onClick={() => { handleCatChange("all"); handleSearch(""); }}
              className="text-[#C4A378] text-[11px] tracking-[0.15em] uppercase border-b border-[#C4A378]/30 hover:border-[#C4A378] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/[0.04]"
          >
            {paginated.map((product, i) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="prod-card group relative bg-black/30 m-1 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-white">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-2 opacity-80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#0E0C0A]/0 group-hover:bg-[#0E0C0A]/10 transition-all duration-300" />

                  {/* Index */}
                  <span
                    className="absolute top-2.5 left-2.5 text-[9px] text-white/15 tabular-nums"
                    style={{ fontFamily: "monospace" }}
                  >
                    {String((page - 1) * PER_PAGE + i + 1).padStart(2, "0")}
                  </span>

                  {/* Arrow */}
                  <div className="absolute top-2.5 right-2.5 size-7 bg-white/0 group-hover:bg-[#C4A378] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-3.5 text-[#0E0C0A]" />
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-[9px] text-white/60 bg-[#0E0C0A]/70 px-2 py-0.5 tracking-[0.1em] uppercase"
                      style={{ fontFamily: "monospace" }}
                    >
                      {CATEGORIES.find(c => c.id === product.categoryId)?.name}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 p-3 border-t border-white/[0.05]">
                  <h3
                    className="text-[12px] md:text-[13px] font-bold text-white/70 leading-tight line-clamp-1 group-hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-[10px] text-white/25 leading-snug line-clamp-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Gold bottom sweep */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C4A378] group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-between border-t border-white/[0.06] pt-8">
            <p
              className="text-[11px] text-white/20 tracking-[0.15em]"
              style={{ fontFamily: "monospace" }}
            >
              Page {page} of {totalPages} · {filtered.length} products
            </p>

            <div className="flex items-center gap-1">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="size-9 border border-white/[0.08] flex items-center justify-center text-white/30 hover:border-[#C4A378]/40 hover:text-[#C4A378] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(pg => pg === 1 || pg === totalPages || Math.abs(pg - page) <= 1)
                .reduce<(number | string)[]>((acc, pg, idx, arr) => {
                  if (idx > 0 && (pg as number) - (arr[idx - 1] as number) > 1) acc.push("...");
                  acc.push(pg);
                  return acc;
                }, [])
                .map((pg, idx) =>
                  pg === "..." ? (
                    <span key={`ellipsis-${idx}`} className="w-9 text-center text-white/15 text-[12px]" style={{ fontFamily: "monospace" }}>
                      ···
                    </span>
                  ) : (
                    <button
                      key={pg}
                      onClick={() => handlePageChange(pg as number)}
                      className={`size-9 border text-[12px] transition-all duration-200 ${
                        page === pg
                          ? "bg-[#C4A378] border-[#C4A378] text-[#0E0C0A] font-bold"
                          : "border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/60"
                      }`}
                      style={{ fontFamily: "monospace" }}
                    >
                      {pg}
                    </button>
                  )
                )
              }

              {/* Next */}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="size-9 border border-white/[0.08] flex items-center justify-center text-white/30 hover:border-[#C4A378]/40 hover:text-[#C4A378] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}