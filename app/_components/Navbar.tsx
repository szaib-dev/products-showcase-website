"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { ArrowRight } from "lucide-react";
import { FiSearch, FiX, FiTruck, FiMapPin, FiTag } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/constants";
import { X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Logo from "@/components/Logo";

interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  images: string[];
}

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    ).slice(0, 5);
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
    setIsSearchOpen(false);
  };

  return (
    <nav className="flex flex-col fixed top-0 right-0 w-full z-30">
      {/* Announcement bar */}
      <Header />

      {/* Sidebar */}
      <Sidebar isSidebar={isSidebarOpen} setIsSidebar={setIsSidebarOpen} />

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="h-screen w-full bg-black/60 backdrop-blur-sm fixed inset-0 z-20"
        />
      )}

      {/* Main Navbar */}
      <div
        className={cn(
          "h-16 sticky top-0 z-30 transition-all duration-500",
          scrolled
            ? "bg-[#0E0C0A]/95 backdrop-blur-md border-b border-white/[0.06] shadow-[0_1px_0_rgba(196,163,120,0.1)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1300px] mx-auto w-full h-full flex justify-between items-center px-6 md:px-10">

          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex flex-col gap-[5px] p-2 group"
                aria-label="Open menu"
              >
                <span className="block w-5 h-[1.5px] bg-[#C4A378] transition-all duration-300 group-hover:w-6" />
                <span className="block w-3.5 h-[1.5px] bg-white/40 transition-all duration-300 group-hover:w-6" />
              </button>
            )}
            <div className="w-60 h-50">
              <Logo />
            </div>
          </div>

          {/* Center: Search (Desktop) */}
          <div ref={searchRef} className="hidden md:block flex-1 max-w-md mx-10 relative">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 py-2.5 bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#C4A378]/50 focus:bg-white/[0.08] outline-none transition-all duration-200 text-sm tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <FiX className="w-4 h-4 text-white/40 hover:text-white transition-colors" />
                </button>
              )}
            </div>

            {/* Search Results */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#0E0C0A] border border-white/[0.08] shadow-2xl z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <>
                    <div className="px-4 py-2 border-b border-white/[0.06]">
                      <p className="text-[10px] text-white/30 tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.04] transition-colors border-b border-white/[0.04] last:border-0 group"
                        >
                          <div className="w-10 h-10 bg-white/[0.06] overflow-hidden flex-shrink-0 relative">
                            <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white/80 text-sm truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              {product.name}
                            </h4>
                            <p className="text-white/30 text-xs truncate mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              {product.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C4A378] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/product?search=${encodeURIComponent(searchQuery)}`}
                      onClick={handleResultClick}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] text-[#C4A378] text-xs tracking-[0.1em] uppercase hover:bg-white/[0.06] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      View all results <ArrowRight className="w-3 h-3" />
                    </Link>
                  </>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-white/30 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      No products found
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-1.5 text-white/50 hover:text-white transition-colors"
            >
              {isSearchOpen ? <FiX className="w-5 h-5" /> : <FiSearch className="w-5 h-5" />}
            </button>

            <UserButton />
            <SignedOut>
              <SignInButton>
                <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200">
                  <GoPerson className="w-5 h-5" />
                  <span
                    className="text-[12px] tracking-[0.08em] hidden sm:inline"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Sign In
                  </span>
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden bg-[#0E0C0A] border-b border-white/[0.06] px-6 py-3">
          <div ref={searchRef} className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResults(true)}
              placeholder="Search products..."
              autoFocus
              className="w-full pl-9 pr-9 py-2.5 bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#C4A378]/40 outline-none text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {searchQuery && (
              <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
                <FiX className="w-4 h-4 text-white/40" />
              </button>
            )}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#0E0C0A] border border-white/[0.08] shadow-2xl z-50">
                {searchResults.length > 0 ? (
                  <div className="max-h-56 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={handleResultClick}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.04] border-b border-white/[0.04] last:border-0"
                      >
                        <div className="w-9 h-9 bg-white/[0.06] overflow-hidden flex-shrink-0 relative">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <p className="text-white/70 text-sm truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {product.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-white/30 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>No products found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

/* ---- Header ---- */
function Header() {
  return (
    <header className="w-full bg-[#0A0806] border-b border-white/[0.04] overflow-hidden px-6">
      {/* Mobile marquee */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="animate-marquee inline-flex items-center gap-8 min-w-max py-2">
          {[
            { icon: <FiMapPin className="w-3 h-3" />, text: "Worldwide Shipping" },
            { icon: <FiTruck className="w-3 h-3" />, text: "Bulk Order Discounts" },
            { icon: <FiTag className="w-3 h-3" />, text: "Trade Accounts Available" },
            { icon: null, text: "Avelon MFG" },
          ].flatMap((item, i) => [
            <span
              key={`a-${i}`}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-white/40"
              style={{ fontFamily: "monospace" }}
            >
              {item.icon}
              {item.text}
            </span>,
            <span key={`dot-a-${i}`} className="text-white/10 text-xs">·</span>,
          ])}
          {/* Duplicate for seamless loop */}
          {[
            { icon: <FiMapPin className="w-3 h-3" />, text: "Worldwide Shipping" },
            { icon: <FiTruck className="w-3 h-3" />, text: "Bulk Order Discounts" },
            { icon: <FiTag className="w-3 h-3" />, text: "Trade Accounts Available" },
            { icon: null, text: "Avelon MFG" },
          ].flatMap((item, i) => [
            <span
              key={`b-${i}`}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-white/40"
              style={{ fontFamily: "monospace" }}
            >
              {item.icon}
              {item.text}
            </span>,
            <span key={`dot-b-${i}`} className="text-white/10 text-xs">·</span>,
          ])}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-8 py-2">
        {[
          { icon: <FiMapPin className="w-3 h-3" />, text: "Worldwide Shipping" },
          { icon: <FiTruck className="w-3 h-3" />, text: "Bulk Order Discounts" },
          { icon: <FiTag className="w-3 h-3" />, text: "Trade Accounts Available" },
        ].map((item, i, arr) => (
          <React.Fragment key={i}>
            <span
              className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-white/35 hover:text-[#C4A378] transition-colors cursor-default"
              style={{ fontFamily: "monospace" }}
            >
              {item.icon}
              {item.text}
            </span>
            {i < arr.length - 1 && <span className="text-white/10">|</span>}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}

/* ---- Sidebar ---- */
function Sidebar({
  setIsSidebar,
  isSidebar,
}: {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}) {
  const menuCategories = [
    {
      title: "Discover",
      items: [
        { href: "/", label: "Home" },
        { href: "/product", label: "All Products" },
        { href: "/about", label: "Our Story" },
      ],
    },
    {
      title: "Business",
      items: [{ href: "/trade-form", label: "Trade Application" }],
    },
    {
      title: "Support",
      items: [
        { href: "/contact", label: "Contact Us" },
        { href: "/faq", label: "Help Center" },
      ],
    },
    {
      title: "Legal",
      items: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
  ];

  return (
    <aside
      className={cn(
        "top-0 left-0 h-screen fixed z-50 w-full bg-[#0A0806] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden",
        isSidebar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C4A378 1px, transparent 1px), linear-gradient(90deg, #C4A378 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto w-full py-10 px-6 md:px-12 flex flex-col h-full">

        {/* Top row */}
        <div className="flex justify-between items-center mb-16 shrink-0">
          <div className="w-60 h-50">
            <Logo />
          </div>
          <button
            onClick={() => setIsSidebar(false)}
            className="group size-11 border border-white/10 flex items-center justify-center hover:border-[#C4A378]/50 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="text-white/60 group-hover:text-[#C4A378] size-5 transition-colors duration-200" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-10">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <p
                  className="text-[10px] text-[#C4A378]/40 tracking-[0.3em] uppercase"
                  style={{ fontFamily: "monospace" }}
                >
                  {category.title}
                </p>
                <div className="flex flex-col gap-3">
                  {category.items.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSidebar(false)}
                      className="group flex items-center gap-0 w-fit overflow-hidden"
                    >
                      <span
                        className="text-2xl md:text-3xl font-bold text-white/70 group-hover:text-white transition-all duration-300 group-hover:translate-x-2"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {link.label}
                      </span>
                      <ArrowRight className="ml-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-[#C4A378] transition-all duration-300 size-5 mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom watermark */}
        <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
          <span
            className="text-[18vw] font-black text-white/[0.02] leading-none tracking-tighter"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            AVELON
          </span>
        </div>

        {/* Bottom left — subtle tagline */}
        <div className="shrink-0 pt-6 border-t border-white/[0.04]">
          <p
            className="text-[10px] text-white/20 tracking-[0.2em] uppercase"
            style={{ fontFamily: "monospace" }}
          >
            Quality · Scale · Worldwide
          </p>
        </div>
      </div>
    </aside>
  );
}