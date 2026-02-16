import { Category } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((category, index) => (
          <Link
            href={`/product?category=${category.id}`}
            key={index}
            className="group flex flex-col items-center gap-4 w-24 md:w-32"
          >
            {/* Circle Container with Modern Shadow/Border */}
            <div className="relative size-20 md:size-28">
              {/* Decorative Outer Ring (appears on hover) */}
              <div className="absolute inset-0 rounded-full border border-gray-100 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />
              
              {/* Main Image Container */}
              <div className="relative size-full rounded-full overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* Label with Modern Spacing */}
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-xs md:text-[13px] font-bold tracking-tight text-gray-900 group-hover:text-sky-500 transition-colors duration-300 uppercase">
                {category.name}
              </h3>
              {/* Animated underline */}
              <div className="h-[2px] w-0 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;