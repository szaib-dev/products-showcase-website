"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { VscThreeBars } from "react-icons/vsc";
import { ArrowRight, Phone } from "lucide-react"; 
import {
  FiSearch,
  FiX,
  FiTruck,
  FiMapPin,
  FiTag,
} from "react-icons/fi";
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
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    ).slice(0, 5);
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
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
    <nav className="flex flex-col relative z-50">
      <Header />

      <Sidebar isSidebar={isSidebarOpen} setIsSidebar={setIsSidebarOpen} />

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="h-screen w-full bg-black/20 backdrop-blur-sm fixed inset-0 z-40 transition-opacity"
        />
      )}

      {/* Main Navbar: Clean White Design */}
      <div className="h-20 bg-white border-b border-gray-100 sticky top-0">
        <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center px-6">
          
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
            >
              <VscThreeBars className="w-6 h-6 text-gray-900 group-hover:text-sky-500" />
            </button>
            <div className="w-28 flex items-center">
              <Logo />
            </div>
          </div>

          {/* Center: Search (Desktop) - Modern Gray Pill */}
          <div ref={searchRef} className="hidden lg:block flex-1 max-w-md mx-8 relative">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                placeholder="Search premium products..."
                className="w-full pl-11 pr-10 py-2.5 rounded-full border-none bg-gray-100 text-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-sky-500/20 focus:bg-white outline-none transition-all"
              />
              {searchQuery && (
                <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Dropdown */}
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl border border-gray-100 shadow-xl z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="flex flex-col">
                    {searchResults.map((product) => (
                      <Link key={product.id} href={`/product/${product.id}`} onClick={handleResultClick} className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 relative overflow-hidden">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* Right Section: Call Button + Account */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Call Button - Desktop */}
            <a 
              href="tel:8886801834" 
              className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(888) 680-1834</span>
            </a>

            <div className="h-8 w-[1px] bg-gray-100 hidden md:block" />

            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="p-2 md:px-4 md:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-full transition-colors flex items-center gap-2">
                    <GoPerson className="w-5 h-5 text-gray-400" />
                    <span className="hidden sm:inline">Sign In</span>
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
            
            {/* Mobile Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="lg:hidden p-2 text-gray-600">
              <FiSearch className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Expansion */}
      {isSearchOpen && (
        <div className="lg:hidden bg-white px-4 py-3 border-b border-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 bg-gray-100 rounded-xl outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

function Header() {
  return (
    <header className="w-full bg-sky-500 py-2 text-white overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><FiMapPin /> Global Shipping</span>
            <span>•</span>
            <span className="flex items-center gap-2"><FiTruck /> Fast Delivery</span>
            <span>•</span>
            <span className="flex items-center gap-2"><FiTag /> Exclusive Trade Deals</span>
            <span>•</span>
            <span className="font-extrabold text-white">Avelon MFG LLC Worldwide</span>
            <span>•</span>
          </div>
        ))}
      </div>
    </header>
  );
}

function Sidebar({ setIsSidebar, isSidebar }: { setIsSidebar: any; isSidebar: boolean }) {
  const menuCategories = [
    { title: "Discover", items: [{ href: "/", label: "Home" }, { href: "/product", label: "Products" }, { href: "/about", label: "Our Story" }] },
    { title: "Business", items: [{ href: "/trade-form", label: "Trade Application", highlight: true }] },
    { title: "Support", items: [{ href: "/contact", label: "Contact Us" }, { href: "/faq", label: "Help Center" }] },
  ];

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-[60] w-full md:w-[400px] bg-white shadow-2xl transition-transform duration-500 ease-in-out px-8 py-10",
      isSidebar ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex justify-between items-center mb-12">
        <Logo />
        <button onClick={() => setIsSidebar(false)} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      <div className="space-y-10">
        {menuCategories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{cat.title}</h3>
            <div className="flex flex-col gap-4">
              {cat.items.map((item, j) => (
                <Link 
                  key={j} 
                  href={item.href} 
                  onClick={() => setIsSidebar(false)}
                  className="group flex items-center justify-between text-2xl font-semibold text-gray-900 hover:text-sky-500 transition-colors"
                >
                  {item.label}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-8 right-8">
        <a href="tel:8886801834" className="flex items-center justify-center gap-3 bg-gray-900 text-white p-5 rounded-2xl font-bold">
          <Phone className="w-5 h-5" /> Call Support
        </a>
      </div>
    </aside>
  );
}