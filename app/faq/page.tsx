"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FiChevronRight,
  FiChevronDown,
  FiSearch,
  FiPackage,
  FiTruck,
  FiFileText,
  FiShield,
  FiHelpCircle,
  FiArrowRight,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";

const categories = [
  { id: "all", label: "General Information", icon: FiHelpCircle },
  { id: "distribution", label: "Distribution & Logistics", icon: FiTruck },
  { id: "wholesale", label: "Wholesale Accounts", icon: FiFileText },
  { id: "products", label: "Sourcing & Quality", icon: FiShield },
];

const faqs = [
  {
    category: "wholesale",
    question: "How do I become a distribution partner?",
    answer:
      "Simply submit our Trade Account Application form. Our team will review your business details and reach out within 24-48 hours to discuss pricing and partnership terms.",
  },
  {
    category: "distribution",
    question: "What are your lead times for bulk orders?",
    answer:
      "Lead times vary by product category and volume. Typically, orders are processed within 2-3 business days. For large-scale freight, we provide specific timelines during the quoting process.",
  },
  {
    category: "distribution",
    question: "Do you handle international shipping?",
    answer:
      "Yes, we manage global distribution. We handle the logistics and documentation for over 25 countries to ensure seamless cross-border delivery.",
  },
  {
    category: "wholesale",
    question: "What are the payment terms for partners?",
    answer:
      "We operate on a professional invoice basis. Verified trade partners may qualify for NET 15 or NET 30 terms following an initial review.",
  },
  {
    category: "products",
    question: "Can you source products not listed on the site?",
    answer:
      "Yes. As a primary distributor, we have an extensive global network. You can submit a 'Sourcing Request' through our contact page for items not currently in our catalog.",
  },
  {
    category: "products",
    question: "Are your products verified for quality?",
    answer:
      "Every item in our inventory undergoes a strict quality control process. We only distribute authentic products sourced directly from authorized manufacturers.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
          Distribution Help Center
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          Information for our wholesale and trade partners regarding logistics and sourcing.
        </p>
      </div>

      {/* Modern Search Bar */}
      <div className="max-w-2xl mx-auto px-6 mb-16">
        <div className="relative group">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-sky-500 transition-colors" />
          <input
            type="text"
            placeholder="Search our logistics and policy details..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-gray-900"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12 pb-24">
        {/* Simple Category Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenItems([]); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                activeCategory === cat.id ? "bg-gray-900 text-white shadow-lg shadow-gray-200" : "text-gray-400 hover:text-gray-900"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="lg:col-span-3 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div key={index} className="border-b border-gray-100 last:border-none">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className={`text-lg font-bold transition-colors ${isOpen ? "text-sky-500" : "text-gray-900 group-hover:text-sky-500"}`}>
                      {faq.question}
                    </span>
                    <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-sky-500" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                    <p className="text-gray-500 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-20 text-center text-gray-400">No matching information found.</div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-sky-500/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tight mb-2">Ready to distribute?</h2>
            <p className="text-gray-400">Join our network of professional trade partners today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="/trade-form" className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all text-center">
              Apply for Trade Account
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-center">
              Message Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}