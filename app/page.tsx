import React from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import CategoriesSection from "@/components/Layout/GridCircle";
import ProductsSection from "@/components/Layout/GridHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] font-body text-[#1C1917]">
      {/* 1. Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Main Content */}
      <div className="flex flex-col gap-16  ">
        {/* 2. Categories */}
       <CategoriesSection />

        {/* 3. Featured Products */}
        <ProductsSection />

      

        {/* 5. Wholesale Inquiry (Full Width) */}
        <section className="w-full">
          <Features />
        </section>
      </div>
    </main>
  );
}