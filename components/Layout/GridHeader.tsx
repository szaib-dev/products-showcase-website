import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import React from "react";

interface GridHeaderProps {
  title: string;
  highlight?: string;
  link: string;
}

function SectionHeader({ title, highlight, link }: GridHeaderProps) {
  return (
    <div className="flex flex-row justify-between items-end mb-8 md:mb-12 group/header">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">
          {title} <br className="md:hidden" />
          {highlight && <span className="text-sky-500 block md:inline">{highlight}</span>}
        </h2>
        {/* Animated Bar: Thicker for a more "designed" feel */}
        <div className="h-1.5 w-12 bg-black rounded-full transition-all duration-500 group-hover/header:w-24 group-hover/header:bg-sky-500" />
      </div>
      
      <Link 
        href={link} 
        className="group flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all duration-300 pb-1"
      >
        <span className="hidden sm:inline">View Collection</span>
        <span className="sm:hidden">View All</span>
        <div className="relative flex items-center justify-center size-7 md:size-9 rounded-full border border-gray-200 bg-white group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
          <MdKeyboardArrowRight className="size-5 md:size-6 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}

export default SectionHeader;