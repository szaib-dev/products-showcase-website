"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <section className="w-full py-4">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden shadow-sm"
      >
        <CarouselContent className="-ml-0">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[200px] md:h-[350px] lg:h-[450px]">
                <Image
                  src={img}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Optional: Dark gradient overlay for text readability if you add text later */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows (Hidden on mobile for clean look) */}
        <div className="hidden md:block">
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-0" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-0" />
        </div>
      </Carousel>
    </section>
  );
}