"use client";

import React, { useMemo, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/constants';
import GridRoundSquare from '@/components/Layout/GridRoudSquare';
import { Filter, SlidersHorizontal } from 'lucide-react';

type SortOption = 'newest' | 'price-low-high' | 'price-high-low';

function ProductContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- Source of Truth: URL Params ---
  const selectedCategoryId = searchParams.get('category') || 'All';
  const sortBy = (searchParams.get('sort') as SortOption) || 'newest';

  // --- Helper: Update URL ---
  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // If value is default ('All' or 'newest'), remove param to keep URL clean
    if (value === 'All' || value === 'newest') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // --- Logic: Filter & Sort ---
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by Category ID
    if (selectedCategoryId !== 'All') {
      result = result.filter((p) => p.categoryId === selectedCategoryId);
    }

    // 2. Sort
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.cPrice - b.cPrice);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.cPrice - a.cPrice);
        break;
      default:
        // Default (Newest - assuming original array order is newest)
        break;
    }

    return result;
  }, [selectedCategoryId, sortBy]);

  // --- UI State (Mobile Toggle) ---
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* --- Top Bar --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Shop Products <span className="text-sm font-normal text-gray-500">({filteredProducts.length} items)</span>
        </h1>
        
        <div className="flex gap-4 w-full md:w-auto">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter size={20} /> Filters
          </button>

          {/* Sort Dropdown */}
          <select 
            value={sortBy}
            onChange={(e) => updateQuery('sort', e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8 items-start relative">
        {/* --- Sidebar (Filters) --- */}
        <aside className={`
          ${isMobileFilterOpen ? 'block' : 'hidden'} 
          md:block w-full md:w-64 flex-shrink-0 space-y-6
          bg-white p-6 md:p-0 rounded-lg md:bg-transparent 
          absolute md:static z-20 top-0 left-0 shadow-xl md:shadow-none border md:border-none
        `}>
          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Categories</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => updateQuery('category', 'All')}
                  className={`text-sm flex items-center gap-2 w-full text-left transition-colors
                    ${selectedCategoryId === 'All' ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${selectedCategoryId === 'All' ? 'bg-blue-600' : 'bg-gray-300'}`} />
                  All Products
                </button>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button 
                    onClick={() => updateQuery('category', cat.id)}
                    className={`text-sm flex items-center gap-2 w-full text-left transition-colors
                      ${selectedCategoryId === cat.id ? 'font-bold text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedCategoryId === cat.id ? 'bg-blue-600' : 'bg-gray-300'}`} />
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* --- Product Grid --- */}
        <main className="flex-1 w-full min-h-[600px]">
          {filteredProducts.length > 0 ? (
            <GridRoundSquare products={filteredProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-lg">
              <SlidersHorizontal className="h-12 w-12 text-gray-300 mb-2" />
              <p className="text-gray-500">No products match your filters.</p>
              <button 
                onClick={() => updateQuery('category', 'All')}
                className="mt-2 text-blue-600 text-sm font-medium hover:underline"
              >
                Reset Category
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Required: Wrap in Suspense for useSearchParams in Next.js App Router
export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
}