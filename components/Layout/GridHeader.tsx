import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import React from "react";

interface GridHeaderProps {
  title: string;
  highlight?: string; // Made optional
  link: string;
}

function SectionHeader({ title, highlight, link }: GridHeaderProps) {
  return (
    <div className="flex justify-between items-end mb-6 font-montserrat border-b border-gray-100 pb-2">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      
      <Link 
        href={link} 
        className="group flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors pb-1"
      >
        View All
        <MdKeyboardArrowRight className="size-5 ml-0.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default SectionHeader;