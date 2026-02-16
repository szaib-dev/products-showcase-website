import React from "react";
import Carousel from "./_components/Crausal"; // Assuming Carousel component
import WholesaleInquiry from "./_components/Hero"; 
import SectionHeader from "@/components/Layout/GridHeader";
import CategoryGrid from "@/components/Layout/GridCircle";
import ProductGrid from "@/components/Layout/GridRoudSquare";
import PromoBanners from "@/components/Layout/Grid2Images";
import { CATEGORIES, PRODUCTS, PRODUCTS_LIST } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 pb-24">
      
      {/* 1. Hero / Carousel Section */}
      <section className="pt-6 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Content Flow */}
      <div className="flex flex-col gap-8">
        
        {/* 2. Distribution Categories */}
        <section className="max-w-[1300px] mx-auto px-6 w-full">
          <SectionHeader
            title="Browse our"
            highlight="Distribution Categories"
            link="/product"
          />
          <div className="mt-10">
            <CategoryGrid categories={CATEGORIES} />
          </div>
        </section>

        {/* 3. Primary Inventory / Featured Distribution */}
        <section className="max-w-[1300px] mx-auto px-6 w-full">
          <SectionHeader
            title="Featured"
            highlight="Product Inventory"
            link="/product"
          />
          <div className="mt-10">
            <ProductGrid products={PRODUCTS_LIST} limit={20} />
          </div>
        </section>

        {/* 4. Strategic Banners */}
        <section className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="rounded-[2.5rem] overflow-hidden">
             <PromoBanners />
          </div>
        </section>

        {/* 5. Partnership & Wholesale Process (The Features component) */}
        {/* We keep this full width as it acts as a transition to the Trade Form */}
        <section className="w-full bg-gray-50/50 py-4">
          <WholesaleInquiry />
        </section>

        {/* 6. Global Sourcing / Full Catalog */}
        <section className="max-w-[1300px] mx-auto px-6 w-full">
          <SectionHeader
            title="Global"
            highlight="Sourcing Portfolio"
            link="/product"
          />
          <div className="mt-10">
            <ProductGrid products={PRODUCTS} limit={20} />
          </div>
        </section>

      </div>
    </main>
  );
}