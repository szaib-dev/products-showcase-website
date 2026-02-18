"use client";

import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

function Grid2Images() {
  const ref = useStaggerReveal<HTMLDivElement>({
    y: 40,
    stagger: 0.15,
    duration: 0.7,
  });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 md:gap-4 h-[120px] md:h-[220px]">
      {/* FIRST IMAGE */}
      <div className="relative group flex cursor-pointer justify-center items-center rounded-2xl overflow-hidden border border-[#E7DFD5]/50">
        <Image
          src="/a.jpg"
          height={300}
          width={600}
          alt="Special Offers"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="size-full absolute bg-gradient-to-t from-[#1C1917]/70 to-transparent to-60% z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-end pb-4 md:pb-6">
          <span className="text-white text-sm md:text-xl font-display flex items-center gap-2 tracking-wide">
            Special Offers
            <ArrowUpRight className="size-4 md:size-5 text-[#C4A378]" />
          </span>
        </div>
      </div>

      {/* SECOND IMAGE */}
      <div className="relative group flex cursor-pointer justify-center items-center rounded-2xl overflow-hidden border border-[#E7DFD5]/50">
        <Image
          src="/b.jpg"
          height={300}
          width={600}
          alt="New Arrivals"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="size-full absolute bg-gradient-to-t from-[#1C1917]/70 to-transparent to-60% z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-end pb-4 md:pb-6">
          <span className="text-white text-sm md:text-xl font-display flex items-center gap-2 tracking-wide">
            New Arrivals
            <ArrowUpRight className="size-4 md:size-5 text-[#C4A378]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Grid2Images;