import { Category } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full py-6">
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {categories.map((category, index) => (
          <Link
            href={`/${category.id}`}
            key={index}
            className="group flex flex-col items-center gap-3 w-20 md:w-28 transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Circle Container */}
            <div className="relative size-16 md:size-24 rounded-full p-[2px] border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <div className="relative size-full rounded-full overflow-hidden bg-gray-50">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Label */}
            <h3 className="text-[11px] md:text-sm font-medium text-center text-zinc-700 group-hover:text-primary truncate w-full px-1 font-inter transition-colors">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;