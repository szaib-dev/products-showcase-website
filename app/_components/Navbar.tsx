"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { VscThreeBars } from "react-icons/vsc";
import {
  FiSearch,
  FiX,
  FiClock,
  FiTruck,
  FiMapPin,
  FiTag,
} from "react-icons/fi";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/constants";
import { X } from "lucide-react";

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
  const searchRef = useRef<HTMLDivElement>(null);

  // Search products
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    ).slice(0, 5);

    setSearchResults(results);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
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
    <nav className="flex flex-col relative">
      {/* Top Header Bar */}
      <Header />

      {/* Sidebar */}
      <Sidebar isSidebar={isSidebarOpen} setIsSidebar={setIsSidebarOpen} />

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="h-screen w-full bg-black/50 fixed inset-0 z-20"
        />
      )}

      {/* Main Navbar */}
      <div className="h-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center px-4">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-2">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <VscThreeBars className="w-6 h-6 text-sky-500" />
              </button>
            )}
            <Link
              href="/"
              className="text-sky-500 font-bold text-xl md:text-2xl"
            >
              MegaMart.
            </Link>
          </div>

          {/* Center: Search (Desktop) */}
          <div
            ref={searchRef}
            className="hidden md:block flex-1 max-w-xl mx-8 relative"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                placeholder="Search products..."
                className="w-full pl-11 pr-10 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <FiX className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <>
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                      <p className="text-xs text-gray-500">
                        {searchResults.length} result
                        {searchResults.length !== 1 ? "s" : ""} found
                      </p>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 relative">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm truncate">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 truncate">
                              {product.description}
                            </p>
                          </div>
                          <FiSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/products?search=${encodeURIComponent(searchQuery)}`}
                      onClick={handleResultClick}
                      className="block px-4 py-3 bg-gray-50 text-center text-sm text-sky-500 hover:text-sky-600 font-medium hover:bg-gray-100 transition-colors"
                    >
                      View all results
                    </Link>
                  </>
                ) : (
                  <div className="p-6 text-center">
                    <FiSearch className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">No products found</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Try a different search term
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Search Icon (Mobile) + Sign In */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSearchOpen ? (
                <FiX className="w-5 h-5 text-gray-600" />
              ) : (
                <FiSearch className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Sign In */}
            <Link
              href="/login"
              className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              <GoPerson className="w-5 h-5 text-sky-500" />
              <span className="text-sm text-gray-600">
                Sign <span className="hidden sm:inline">Up/</span>In
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
          <div ref={searchRef} className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResults(true)}
              placeholder="Search products..."
              autoFocus
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:bg-white outline-none"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <FiX className="w-4 h-4 text-gray-500" />
              </button>
            )}

            {/* Mobile Search Results */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={handleResultClick}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm truncate">
                            {product.name}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-gray-500 text-sm">No products found</p>
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

function Header() {
  return (
    <header className="w-full bg-sky-500 text-white overflow-hidden px-4">
     {/* Mobile: Infinite Scroll */}
<div className="md:hidden w-full overflow-hidden">
  <div className="animate-marquee inline-flex items-center gap-8 min-w-max">
    <span className="flex items-center gap-2">
      <FiMapPin className="w-4 h-4" />
      Location
    </span>
    <span>•</span>
    <span className="flex items-center gap-2">
      <FiTruck className="w-4 h-4" />
      Deliver to
    </span>
    <span>•</span>
    <span className="flex items-center gap-2">
      <FiTag className="w-4 h-4" />
      All Offers
    </span>
    <span>•</span>
    <span className="font-medium">Welcome to worldwide MegaMart!</span>
    <span>•</span>
    {/* Duplicate for seamless loop */}
    <span className="flex items-center gap-2">
      <FiMapPin className="w-4 h-4" />
      Location
    </span>
    <span>•</span>
    <span className="flex items-center gap-2">
      <FiTruck className="w-4 h-4" />
      Deliver to
    </span>
    <span>•</span>
    <span className="flex items-center gap-2">
      <FiTag className="w-4 h-4" />
      All Offers
    </span>
    <span>•</span>
    <span className="font-medium">Welcome to worldwide MegaMart!</span>
    <span>•</span>
  </div>
</div>
    </header>
  );
}

function Sidebar({
  setIsSidebar,
  isSidebar,
}: {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
   <aside
  className={cn(
    "top-0 right-0 h-[400px] transform absolute z-30 transition-all duration-300 w-full bg-primary px-3",
    isSidebar ? "translate-y-0" : "-translate-y-full"
  )}
>
  <div className="max-w-[1300px] mx-auto w-full py-10 flex flex-col gap-8">
    <div className="w-full flex justify-between items-center">
      <Link
        href="/"
        className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold font-montserrat"
      >
        MegaMart.
      </Link>

      <button
        onClick={() => setIsSidebar(false)}
        className="size-10 hover:bg-white transition-all cursor-pointer group duration-150 border border-white rounded-full flex justify-center items-center"
      >
        <X className="text-white group-hover:text-primary" />
      </button>
    </div>

    <div className="flex flex-col gap-2 md:gap-3 mt-5">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsSidebar(false)}
          className="text-xl md:text-2xl  text-white font-inter font-light hover:underline w-fit"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
</aside>
  );
}