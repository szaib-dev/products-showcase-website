"use client";

import React, { useMemo, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/constants';
import GridRoundSquare from '@/components/Layout/GridRoudSquare';
import { SlidersHorizontal, ShoppingBag } from 'lucide-react';

type SortOption = 'newest' | 'price-low-high' | 'price-high-low';

function ProductContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategoryId = searchParams.get('category') || 'All';
  const sortBy = (searchParams.get('sort') as SortOption) || 'newest';

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'All' || value === 'newest') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (selectedCategoryId !== 'All') {
      result = result.filter((p) => p.categoryId === selectedCategoryId);
    }

    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.cPrice - b.cPrice);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.cPrice - a.cPrice);
        break;
      default:
        break;
    }
    return result;
  }, [selectedCategoryId, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* --- Header & Summary --- */}
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Our Collection
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Showing {filteredProducts.length} premium pieces curated for you.
        </p>
      </header>

      {/* --- Controls: Horizontal Category Chips + Sort --- */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md py-4 mb-8 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Scrollable Categories (Modern Mobile UX) */}
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button
              onClick={() => updateQuery('category', 'All')}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${selectedCategoryId === 'All' 
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateQuery('category', cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${selectedCategoryId === cat.id 
                    ? 'bg-black text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="min-h-[400px]">
        {filteredProducts.length > 0 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <GridRoundSquare products={filteredProducts} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              <ShoppingBag className="h-10 w-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Nothing found</h3>
            <p className="text-gray-500 mt-2 max-w-xs mx-auto">
              We couldn't find any items in this category. Try switching filters or check back later.
            </p>
            <button
              onClick={() => updateQuery('category', 'All')}
              className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-48 bg-gray-200 rounded-lg mb-4" />
          <div className="h-6 w-32 bg-gray-100 rounded-lg" />
        </div>
      </div>
    }>
      <ProductContent />
    </Suspense>
  );
}