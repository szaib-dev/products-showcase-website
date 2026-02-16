"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FiArrowRight } from "react-icons/fi";

export default function AvelonHero() {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <section className="w-full bg-white pt-4 md:pt-8 pb-10 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* --- Left Side: Avelon Impact Content (Tightened) --- */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 order-2 lg:order-1">
            
            {/* Active Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-black text-white">
              <div className="size-1.5 rounded-full bg-primary animate-pulse " />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                Avelon / DISPATCH ACTIVE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-black tracking-[-0.06em] leading-[0.85] uppercase">
              PRIME <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>SUPPLY</span>
            </h1>
            
            <p className="text-gray-500 text-sm md:text-base max-w-sm font-bold leading-tight uppercase tracking-tight">
              Direct-to-trade distribution. <br />
              <span className="text-black">Verified Avelon inventory.</span>
            </p>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 pt-2">
              <Link 
                href="/trade-form" 
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-primary hover:text-black active:scale-95 shadow-[6px_6px_0px_0px_rgba(34,197,94,0.2)]"
              >
                Trade Account
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/product" 
                className="flex items-center justify-center px-8 py-4 bg-white border-[3px] border-black text-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Catalog
              </Link>
            </div>
          </div>

          {/* --- Right Side: Brutalist Carousel (Compact Wide-Format) --- */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative group">
              <Carousel
                plugins={[plugin.current]}
                opts={{ loop: true }}
                className="w-full overflow-hidden border-[8px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]"
              >
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/10] w-full bg-gray-100">
                        <Image
                          src={img}
                          alt={`Avelon Logistics ${index + 1}`}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Verified Tag - Smaller and Sleeker */}
              <div className="absolute top-4 right-4 bg-[#22c55e] px-3 py-1 text-black font-black text-[8px] uppercase tracking-widest border border-black">
                Avelon 
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}