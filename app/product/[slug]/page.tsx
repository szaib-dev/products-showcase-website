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

  // Related Products Logic
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      
      {/* --- Breadcrumb --- */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-20 backdrop-blur-md bg-white/80">
        <div className="max-w-[1300px] mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 overflow-x-auto no-scrollbar">
            <Link href="/" className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
           
            {category && (
              <>
                <Link href={`/category/${category.id}`} className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap">
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
              </>
            )}
            <span className="text-slate-900 truncate max-w-[150px] md:max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* --- LEFT COLUMN: Immersive Gallery (Span 7) --- */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {category?.name || "Premium"}
                </span>
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full hover:text-[#0EA5E9] transition-colors shadow-sm z-10">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails Grid */}
            {product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div key={idx} className={`relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${idx === 0 ? 'border-[#0EA5E9] ring-2 ring-sky-100' : 'border-transparent hover:border-slate-200'}`}>
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* --- "How to Order" Visual Section (Moved here for flow) --- */}
            <div className="mt-12 pt-12 border-t border-slate-200">
               <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-sky-50 rounded-lg text-[#0EA5E9]">
                    <Info className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Ordering Process</h3>
               </div>
               
               <div className="relative">
                 {/* Connecting Line */}
                 <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-100 hidden md:block" />
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Submit Request", desc: "Send us your order details via the form." },
                      { step: "02", title: "Receive Quote", desc: "We'll send a custom price within 24h." },
                      { step: "03", title: "Dispatch", desc: "Fast shipping upon quote approval." }
                    ].map((item, idx) => (
                      <div key={idx} className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm z-10">
                        <span className="text-4xl font-black text-slate-100 absolute top-4 right-4">{item.step}</span>
                        <h4 className="font-bold text-slate-900 mb-2 relative z-10">{item.title}</h4>
                        <p className="text-sm text-slate-500 relative z-10">{item.desc}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Sticky Info & Actions (Span 5) --- */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              
              {/* Title Header */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c4a6e] mb-4 tracking-tight leading-[1.1]">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Modern Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 text-[#0EA5E9] rounded-full text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Verified
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
                  <Package className="w-4 h-4" /> In Stock
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                  <Truck className="w-4 h-4" /> Fast Ship
                </div>
              </div>

              {/* Primary Actions Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Interested in this product?</h3>
                <p className="text-sm text-slate-500 mb-6">
                  We offer competitive wholesale pricing. Contact us for a quote today.
                </p>
                
                <div className="space-y-3">
                  <Link
                    href="/trade-form"
                    className="flex w-full items-center justify-center gap-2 px-8 py-4 bg-[#0c4a6e] hover:bg-[#0a3f5e] text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-900/10 hover:shadow-sky-900/20 transform active:scale-95"
                  >
                    <FileText className="w-5 h-5" />
                     Submit Your Order
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#0EA5E9] text-slate-700 hover:text-[#0EA5E9] font-bold rounded-xl transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Sales
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Response time: &lt; 24 Hours</span>
                </div>
              </div>

              {/* Specs / Mini Details */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Product Specs</h4>
                <dl className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm">
                  <div>
                    <dt className="text-slate-500 mb-1">SKU</dt>
                    <dd className="font-mono font-semibold text-slate-900">{product.id}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Category</dt>
                    <dd className="font-semibold text-slate-900">{category?.name}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-slate-500 mb-1">Availability</dt>
                    <dd className="font-semibold text-slate-900">Global Shipping Available</dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>
        </div>

        {/* --- Related Products Section --- */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c4a6e]">Similar Products</h2>
                <p className="text-slate-500 mt-2">More options from the {category?.name} collection.</p>
              </div>
              <Link href={`/category/${category?.id}`} className="hidden md:flex items-center gap-2 text-[#0EA5E9] font-bold hover:gap-3 transition-all">
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`} className="group bg-white rounded-2xl p-4 border border-slate-100 hover:border-[#0EA5E9] hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 mb-4">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Floating Action Button */}
                    <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 truncate mb-1 group-hover:text-[#0EA5E9] transition-colors">{item.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    In Stock
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 md:hidden text-center">
               <Link href={`/category/${category?.id}`} className="inline-flex items-center gap-2 text-[#0EA5E9] font-bold">
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}