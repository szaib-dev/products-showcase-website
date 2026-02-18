"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "orders", label: "Orders & Shipping" },
  { id: "payment", label: "Payment" },
  { id: "returns", label: "Returns & Refunds" },
  { id: "products", label: "Products" },
];

const faqs = [
  {
    category: "orders",
    question: "How do I place an order?",
    answer: "Browse our products, add items to your cart, and proceed to checkout. You can also submit a trade account application and our team will process bulk orders directly.",
  },
  {
    category: "orders",
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive a tracking number via email. Use it on our website or the carrier's site. You can also check your order status in your account dashboard.",
  },
  {
    category: "orders",
    question: "What shipping options are available?",
    answer: "We offer standard shipping (5–7 business days), express shipping (2–3 business days), and overnight shipping for urgent orders. Costs vary by location and method.",
  },
  {
    category: "orders",
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. International shipping times vary by destination. Additional customs fees may apply depending on your country.",
  },
  {
    category: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For bulk orders, we offer invoice-based payment with NET 30 terms for qualified businesses.",
  },
  {
    category: "payment",
    question: "Is my payment information secure?",
    answer: "Yes. All data transmission is protected with SSL encryption. We are PCI DSS compliant and never store full card details on our servers.",
  },
  {
    category: "payment",
    question: "Can I get an invoice for my order?",
    answer: "An invoice is automatically sent to your email after each purchase. You can also download invoices from your account dashboard under Order History.",
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and accompanied by proof of purchase. Some items may not be eligible.",
  },
  {
    category: "returns",
    question: "How do I initiate a return?",
    answer: "Log into your account, go to Order History, select the order, and click Request Return. You can also contact our support team directly.",
  },
  {
    category: "returns",
    question: "How long does a refund take?",
    answer: "Once we receive and inspect your return, refunds are processed within 3–5 business days to your original payment method. Bank processing may add additional days.",
  },
  {
    category: "products",
    question: "Are all products authentic?",
    answer: "Yes. We only source from verified suppliers and authorized distributors. Every product goes through a quality assurance process before being listed.",
  },
  {
    category: "products",
    question: "Can I request a product not listed?",
    answer: "Yes. Contact our team with your product requirements. We have an extensive supplier network and can source most products upon request.",
  },
  {
    category: "products",
    question: "Do you offer bulk discounts?",
    answer: "Yes. Contact our sales team with your requirements and quantity. We will provide a custom quote based on the order.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCat = activeCategory === "all" || faq.category === activeCategory;
      const matchesQ =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-30">

      {/* Header */}
      <div className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-20 overflow-hidden">
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "18vw", fontWeight: 900, color: "#fff" }}
        >
          FAQ
        </div>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              Help Center
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[60px] font-black leading-none tracking-[-0.025em] text-white mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Frequently Asked
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>
              Questions
            </span>
          </h1>

          {/* Search */}
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-[13px] px-4 py-3 outline-none focus:border-[#C4A378]/50 transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="size-3.5 text-white/30 hover:text-white transition-colors" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-[11px] text-white/25 tracking-[0.1em]" style={{ fontFamily: "monospace" }}>
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-14">

          {/* Sidebar */}
          <aside className="lg:w-52 shrink-0">
            <div className="lg:sticky lg:top-24 flex flex-col gap-1">
              <p
                className="text-[10px] text-[#C4A378]/40 tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "monospace" }}
              >
                Categories
              </p>
              {categories.map((cat) => {
                const count = cat.id === "all" ? faqs.length : faqs.filter((f) => f.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setOpenItems([]); setSearchQuery(""); }}
                    className={`flex items-center justify-between text-left py-2.5 border-l pl-4 transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "border-[#C4A378] text-white"
                        : "border-white/[0.06] text-white/25 hover:text-white/50 hover:border-white/20"
                    }`}
                  >
                    <span className="text-[12px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cat.label}
                    </span>
                    <span
                      className={`text-[10px] tabular-nums mr-2 ${activeCategory === cat.id ? "text-[#C4A378]" : "text-white/15"}`}
                      style={{ fontFamily: "monospace" }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* FAQ list */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-7 h-px bg-[#C4A378]" />
                <h2
                  className="text-[18px] font-black text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {searchQuery
                    ? "Search Results"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </h2>
              </div>
              <span
                className="text-[10px] text-white/15 tracking-[0.15em]"
                style={{ fontFamily: "monospace" }}
              >
                {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
              </span>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="flex flex-col divide-y divide-white/[0.05]">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openItems.includes(index);
                  return (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-start justify-between gap-6 py-5 text-left"
                      >
                        <h3
                          className={`text-[14px] md:text-[15px] font-bold leading-snug transition-colors duration-200 ${
                            isOpen ? "text-white" : "text-white/50 group-hover:text-white/80"
                          }`}
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {faq.question}
                        </h3>
                        <div className={`size-7 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                          isOpen ? "border-[#C4A378]/50 bg-[#C4A378]/10" : "border-white/[0.08]"
                        }`}>
                          <ChevronDown
                            className={`size-3.5 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#C4A378]" : "text-white/25"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Answer */}
                      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden">
                          <p
                            className="text-[13px] text-white/35 leading-[1.85] pb-6 max-w-2xl"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-24">
                <div className="w-12 h-px bg-white/10" />
                <p className="text-white/20 text-[13px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  No results found for &quot;{searchQuery}&quot;
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#C4A378] text-[11px] tracking-[0.15em] uppercase border-b border-[#C4A378]/30 hover:border-[#C4A378] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-20 relative border border-white/[0.06] p-10 md:p-14 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#C4A378 1px, transparent 1px), linear-gradient(90deg, #C4A378 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-md">
              <h2
                className="text-[26px] md:text-[32px] font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Still have questions?
              </h2>
              <p
                className="text-[13px] text-white/30 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Can not find the answer you are looking for? Our team is here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#C4A378] hover:bg-white text-[#0E0C0A] text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-4 transition-all duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Support
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/trade-form"
                className="inline-flex items-center gap-2 text-white/30 hover:text-[#C4A378] text-[11px] tracking-[0.15em] uppercase border-b border-white/10 hover:border-[#C4A378] pb-0.5 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Apply for Trade Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}