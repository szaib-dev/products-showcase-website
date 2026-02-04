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
  HelpCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/constants";

// --- Types ---
interface Product {
  id: string;
  categoryId: string;
  name: string;
  cPrice: number;
  dPrice: number;
  description: string;
  images: string[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  // Get related products from same category (max 4)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  // Get category name
  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href="/products"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="text-gray-500 hover:text-sky-500 transition-colors"
                >
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </>
            )}
            <span className="text-sky-600 font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image Gallery */}
            <div className="relative bg-gray-50 p-6">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-md hover:bg-sky-50 hover:text-sky-600 transition-all z-10">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center">
                  {product.images.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === 0
                          ? "border-sky-500 ring-2 ring-sky-200"
                          : "border-gray-200 hover:border-sky-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="p-8 lg:p-10 flex flex-col">
              {/* Category Badge */}
              {category && (
                <Link
                  href={`/category/${category.id}`}
                  className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-700 font-medium mb-3 w-fit"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  {category.name}
                </Link>
              )}

              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {product.description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Supplier</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                  <Package className="w-4 h-4" />
                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium">
                  <Truck className="w-4 h-4" />
                  <span>Fast Delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  href="/request"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  Submit Request
                </Link>
              </div>

              {/* Quick Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Need help? Our team responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Order Guide */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-500 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                How to Order This Product?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-white text-sky-600 flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <h3 className="font-semibold text-white">Submit a Request</h3>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Fill out our quick order form with product details, quantity,
                  and your contact information.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-white text-sky-600 flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <h3 className="font-semibold text-white">We Review & Quote</h3>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Our team reviews your request and sends you a detailed quote
                  within 24 hours.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-white text-sky-600 flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <h3 className="font-semibold text-white">Confirm & Ship</h3>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Approve the quote, complete payment, and we'll process your
                  order for fast delivery.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Have Questions?
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Related Products in{" "}
                  <span className="text-sky-500">{category?.name}</span>
                </h2>
                <Link
                  href={`/category/${category?.id}`}
                  className="text-sky-500 hover:text-sky-600 text-sm font-medium flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all">
                      <div className="relative aspect-square">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-sky-600 transition-colors">
                          {item.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-xs text-gray-500">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}