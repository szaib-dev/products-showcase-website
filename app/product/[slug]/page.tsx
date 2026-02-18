import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ShieldCheck,
  Truck,
  Package,
  Share2,
  MessageSquare,
  FileText,
  Phone,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/constants";

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-body text-[#1C1917]">
      {/* --- Breadcrumb --- */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#E7DFD5] sticky top-0 z-20">
        <div className="max-w-[1300px] mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#A8A29E] overflow-x-auto no-scrollbar">
            <Link
              href="/"
              className="hover:text-[#C4A378] transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#D6C8B8] flex-shrink-0" />

            {category && (
              <>
                <Link
                  href={`/product?category=${category.id}`}
                  className="hover:text-[#C4A378] transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-[#D6C8B8] flex-shrink-0" />
              </>
            )}
            <span className="text-[#1C1917] truncate max-w-[150px] md:max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* --- LEFT COLUMN: Gallery (Span 7) --- */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] w-full bg-[#F5F0EB] rounded-3xl overflow-hidden border border-[#E7DFD5] group">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur text-[#1C1917] text-[10px] font-bold uppercase tracking-[0.15em] rounded-full shadow-sm font-body">
                  {category?.name || "Premium"}
                </span>
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full hover:text-[#C4A378] transition-colors shadow-sm z-10">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                      idx === 0
                        ? "border-[#C4A378] ring-2 ring-[#C4A378]/20"
                        : "border-[#E7DFD5] hover:border-[#C4A378]/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* --- Ordering Process --- */}
            <div className="mt-12 pt-12 border-t border-[#E7DFD5]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-[#C4A378]/10 rounded-xl text-[#C4A378]">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] font-display">
                  Ordering Process
                </h3>
              </div>

              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 w-full h-[2px] bg-[#E7DFD5] hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      step: "01",
                      title: "Submit Request",
                      desc: "Send us your order details via the inquiry form.",
                    },
                    {
                      step: "02",
                      title: "Receive Quote",
                      desc: "We'll send a custom price within 24 hours.",
                    },
                    {
                      step: "03",
                      title: "Dispatch",
                      desc: "Fast global shipping upon quote approval.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white p-6 rounded-2xl border border-[#E7DFD5] hover:border-[#C4A378]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C4A378]/5 z-10 group/step"
                    >
                      <span className="text-4xl font-black text-[#F5F0EB] group-hover/step:text-[#C4A378]/15 transition-colors absolute top-4 right-4 font-display">
                        {item.step}
                      </span>
                      <div className="size-8 rounded-full bg-[#C4A378] flex items-center justify-center text-white text-xs font-bold font-body mb-3">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-[#1C1917] mb-1.5 relative z-10 font-body">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#A8A29E] relative z-10 font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Sticky Info (Span 5) --- */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1C1917] mb-4 tracking-tight leading-[1.1] font-display">
                  {product.name}
                </h1>
                <p className="text-base md:text-lg text-[#78716C] leading-relaxed font-body">
                  {product.description}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4A378]/10 border border-[#C4A378]/20 text-[#8B7042] rounded-full text-sm font-semibold font-body">
                  <ShieldCheck className="w-4 h-4" /> Verified
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full text-sm font-semibold font-body">
                  <Package className="w-4 h-4" /> In Stock
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F0EB] border border-[#E7DFD5] text-[#78716C] rounded-full text-sm font-semibold font-body">
                  <Truck className="w-4 h-4" /> Fast Ship
                </div>
              </div>

              {/* Primary Actions Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-[#1C1917]/5 border border-[#E7DFD5]">
                <h3 className="font-bold text-[#1C1917] mb-2 font-body">
                  Interested in this product?
                </h3>
                <p className="text-sm text-[#A8A29E] mb-6 font-body">
                  We offer competitive wholesale pricing. Contact us for a quote
                  today.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/trade-form"
                    className="flex w-full items-center justify-center gap-2 px-8 py-4 bg-[#1C1917] hover:bg-[#44372A] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#1C1917]/10 active:scale-[0.98] font-body tracking-wide"
                  >
                    <FileText className="w-5 h-5" />
                    Submit Your Order
                  </Link>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#E7DFD5] hover:border-[#C4A378] text-[#78716C] hover:text-[#1C1917] font-bold rounded-full transition-all duration-300 font-body"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Sales
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-[#A8A29E] font-body">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Response time: &lt; 24 Hours</span>
                </div>
              </div>

              {/* Specs */}
              <div className="bg-[#FDF9F4] rounded-2xl p-6 border border-[#E7DFD5]">
                <h4 className="font-bold text-[#1C1917] mb-4 text-xs uppercase tracking-[0.15em] font-body">
                  Product Specs
                </h4>
                <dl className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm font-body">
                  <div>
                    <dt className="text-[#A8A29E] mb-1">SKU</dt>
                    <dd className="font-mono font-semibold text-[#1C1917]">
                      {product.id}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#A8A29E] mb-1">Category</dt>
                    <dd className="font-semibold text-[#1C1917]">
                      {category?.name}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[#A8A29E] mb-1">Availability</dt>
                    <dd className="font-semibold text-[#1C1917]">
                      Global Shipping Available
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* --- Related Products --- */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] font-display">
                  Similar Products
                </h2>
                <p className="text-[#A8A29E] mt-2 font-body">
                  More options from the {category?.name} collection.
                </p>
              </div>
              <Link
                href={`/product?category=${category?.id}`}
                className="hidden md:flex items-center gap-2 text-[#C4A378] font-bold hover:gap-3 transition-all font-body"
              >
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="group bg-white rounded-2xl p-4 border border-[#E7DFD5] hover:border-[#C4A378]/40 hover:shadow-xl hover:shadow-[#C4A378]/10 transition-all duration-300"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F5F0EB] mb-4">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-[#C4A378]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1C1917] truncate mb-1 group-hover:text-[#C4A378] transition-colors font-body">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#A8A29E] font-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    In Stock
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link
                href={`/product?category=${category?.id}`}
                className="inline-flex items-center gap-2 text-[#C4A378] font-bold font-body"
              >
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}