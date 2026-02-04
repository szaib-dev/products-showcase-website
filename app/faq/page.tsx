"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FiChevronRight,
  FiChevronDown,
  FiSearch,
  FiPackage,
  FiTruck,
  FiCreditCard,
  FiRefreshCw,
  FiShield,
  FiHelpCircle,
  FiArrowRight,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";

const categories = [
  { id: "all", label: "All Questions", icon: FiHelpCircle },
  { id: "orders", label: "Orders & Shipping", icon: FiPackage },
  { id: "payment", label: "Payment", icon: FiCreditCard },
  { id: "returns", label: "Returns & Refunds", icon: FiRefreshCw },
  { id: "products", label: "Products", icon: FiShield },
];

const faqs = [
  {
    category: "orders",
    question: "How do I place an order?",
    answer:
      "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Alternatively, you can submit a quick order request through our Quick Order form, and our team will process it for you.",
  },
  {
    category: "orders",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You can also check your order status in your account dashboard.",
  },
  {
    category: "orders",
    question: "What are the shipping options available?",
    answer:
      "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping for urgent orders. Shipping costs vary based on your location and the shipping method selected.",
  },
  {
    category: "orders",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 25 countries worldwide. International shipping times vary by destination, typically ranging from 7-21 business days. Additional customs fees may apply depending on your country.",
  },
  {
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and various local payment methods. For bulk orders, we also offer invoice-based payment with NET 30 terms for qualified businesses.",
  },
  {
    category: "payment",
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use industry-standard SSL encryption to protect your payment information. We are PCI DSS compliant and never store your full credit card details on our servers.",
  },
  {
    category: "payment",
    question: "Can I get an invoice for my order?",
    answer:
      "Yes, an invoice is automatically generated and sent to your email after each purchase. You can also download invoices from your account dashboard under Order History.",
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and accompanied by the receipt. Some items like personalized products or perishables may not be eligible for return.",
  },
  {
    category: "returns",
    question: "How do I initiate a return?",
    answer:
      "To initiate a return, log into your account, go to Order History, select the order, and click 'Request Return'. You can also contact our support team, and they'll guide you through the process.",
  },
  {
    category: "returns",
    question: "How long does it take to receive a refund?",
    answer:
      "Once we receive and inspect your returned item, refunds are processed within 3-5 business days. The amount will be credited to your original payment method. Bank processing times may add 2-5 additional days.",
  },
  {
    category: "products",
    question: "Are all products authentic?",
    answer:
      "Yes, we only source products from verified suppliers and authorized distributors. Every product goes through our quality assurance process to ensure authenticity before being listed on our platform.",
  },
  {
    category: "products",
    question: "Can I request a product that's not listed?",
    answer:
      "Absolutely! Use our Quick Order form or contact our team with your product requirements. We have an extensive supplier network and can source most products upon request.",
  },
  {
    category: "products",
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we offer competitive bulk pricing for wholesale orders. Contact our sales team with your requirements, and we'll provide a custom quote based on quantity and product type.",
  },
];

// Highlight matching text
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-sky-100 text-sky-700 px-0.5 rounded">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <FiChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-sky-600 font-medium">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How Can We Help?
            </h1>
            <p className="text-sky-100 text-base sm:text-lg mb-8">
              Find answers to frequently asked questions about orders, shipping,
              payments, and more.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <div
                className={`relative bg-white rounded-xl shadow-lg transition-all ${
                  isSearchFocused ? "ring-2 ring-white/50" : ""
                }`}
              >
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type your question here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border-0 text-gray-900 placeholder:text-gray-400 outline-none text-base"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <FiX className="w-3.5 h-3.5 text-gray-500" />
                  </button>
                )}
              </div>

              {/* Search Status */}
              {isSearching && (
                <div className="mt-3 text-sky-100 text-sm">
                  Found{" "}
                  <span className="font-semibold text-white">
                    {filteredFaqs.length}
                  </span>{" "}
                  {filteredFaqs.length === 1 ? "result" : "results"} for "
                  <span className="font-semibold text-white">{searchQuery}</span>
                  "
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 lg:sticky lg:top-4">
              <h3 className="font-bold text-gray-900 mb-4 px-2">Categories</h3>
              <nav className="space-y-1">
                {categories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? faqs.length
                      : faqs.filter((f) => f.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setOpenItems([]);
                        setSearchQuery("");
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        activeCategory === cat.id
                          ? "bg-sky-50 text-sky-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon className="w-5 h-5" />
                        <span className="font-medium text-sm">{cat.label}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          activeCategory === cat.id
                            ? "bg-sky-100 text-sky-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {isSearching
                    ? "Search Results"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {filteredFaqs.length}{" "}
                  {filteredFaqs.length === 1 ? "question" : "questions"}
                </p>
              </div>

              {isSearching && (
                <button
                  onClick={clearSearch}
                  className="text-sm text-sky-500 hover:text-sky-600 font-medium flex items-center gap-1"
                >
                  Clear search
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* FAQ Items */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openItems.includes(index);
                  const categoryInfo = categories.find(
                    (c) => c.id === faq.category
                  );

                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${
                        isOpen ? "border-sky-200" : "border-gray-100"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          {isSearching && categoryInfo && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                              <categoryInfo.icon className="w-3.5 h-3.5" />
                              {categoryInfo.label}
                            </span>
                          )}
                          <h3 className="font-semibold text-gray-900">
                            <HighlightText
                              text={faq.question}
                              query={searchQuery}
                            />
                          </h3>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? "bg-sky-500 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <FiChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      <div
                        className={`grid transition-all duration-200 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">
                                <HighlightText
                                  text={faq.answer}
                                  query={searchQuery}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSearch className="w-7 h-7 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  We couldn't find any questions matching "{searchQuery}"
                </p>
                <button
                  onClick={clearSearch}
                  className="text-sky-500 hover:text-sky-600 font-medium text-sm"
                >
                  Clear search and show all
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-gray-100">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-5">
                <FiMessageCircle className="w-7 h-7 text-sky-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-gray-600">
                Can't find the answer you're looking for? Our support team is
                here to help you with any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                Contact Support
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/trade-form"
                className="px-6 py-3.5 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
              >
                Submit Trade Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}