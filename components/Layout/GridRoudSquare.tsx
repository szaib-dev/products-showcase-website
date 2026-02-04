import { Product } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GridRoundSquareProps {
  products: Product[];
}

function GridRoundSquare({ products }: GridRoundSquareProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 w-full px-2 sm:px-0">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl active:scale-[0.98] shadow-sm"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-center p-2.5 sm:p-3 md:p-4 min-h-[55px] sm:min-h-[60px] md:min-h-[70px]">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-black transition-colors">
              {product.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GridRoundSquare;