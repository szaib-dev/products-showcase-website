import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Phone, FileText, CheckCircle2 } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) return notFound();

  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  
  // Logic to fetch 4 related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- Avelon Status Bar --- */}
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900">{category?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Avelon Verified Stock</span>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-20">
          
          {/* --- LEFT: Contained Product Image --- */}
          <div className="w-full md:w-[400px] lg:w-[480px] flex-shrink-0">
            <div className="relative aspect-square w-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-12"
                priority
              />
            </div>
          </div>

          {/* --- RIGHT: Product Information --- */}
          <div className="flex flex-col flex-1 max-w-xl justify-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Avelon Professional Actions */}
            <div className="flex flex-col gap-3 mt-10">
              <Link
                href="/trade-form"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Submit Trade Inquiry
              </Link>
              
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest rounded-xl hover:border-black transition-all"
              >
                <Phone className="w-4 h-4" />
                Contact Avelon Sales
              </Link>
            </div>

            {/* Distribution Meta */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex gap-12">
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Stock Code</span>
                <span className="text-sm font-semibold text-gray-900">AVL-{product.id.toUpperCase()}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fulfillment</span>
                <span className="text-sm font-semibold text-gray-900">Global Logistics</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Related Products Section --- */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-gray-100">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Related Inventory</h2>
              <Link href="/product" className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`} className="group">
                  <div className="relative aspect-square w-full bg-gray-50 rounded-xl border border-gray-100 overflow-hidden mb-4 transition-all group-hover:border-gray-300">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:underline">{item.name}</h3>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mt-1 tracking-wider">AVL-{item.id.slice(0,6)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}