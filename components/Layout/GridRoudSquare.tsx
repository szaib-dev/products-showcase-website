import { Product } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface GridRoundSquareProps {
  products: Product[];
}

function GridRoundSquare({ products }: GridRoundSquareProps) {
  const limitedProducts = products.slice(0, 20);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14 w-full py-8">
      {limitedProducts.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="group block relative no-underline"
        >
          {/* Image Container: Using a subtle border instead of heavy shadows for a cleaner look */}
          <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden rounded-xl md:rounded-2xl bg-[#F8F8F8] border border-gray-100 transition-all duration-500 group-hover:border-gray-300 group-hover:-translate-y-1">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-4 md:p-6 transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            
            {/* Minimal Status Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-md border border-gray-100 shadow-sm">
               <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tight">Ready</span>
            </div>

            {/* Hover Action: Only visible on larger screens for cleaner mobile UI */}
            <div className="hidden md:flex absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <div className="size-10 bg-black text-white rounded-full flex items-center justify-center shadow-xl">
                  <FiArrowUpRight className="text-lg" />
               </div>
            </div>
          </div>

          {/* Typography: Balanced and scannable */}
          <div className="space-y-1 px-1">
            <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight tracking-tight line-clamp-2 transition-colors group-hover:text-black">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between pt-1 border-t border-transparent group-hover:border-gray-100 transition-all">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                SKU: {product.id.slice(0, 6)}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity">
                Details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GridRoundSquare;