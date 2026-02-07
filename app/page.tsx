import React from "react";
import Crausal from "./_components/Crausal";
import Features from "./_components/Hero"; // Renaming to BrandFeatures for clarity is recommended
import GridHeader from "@/components/Layout/GridHeader";
import GridCircle from "@/components/Layout/GridCircle";
import GridRoundSquare from "@/components/Layout/GridRoudSquare";
import Grid2Images from "@/components/Layout/Grid2Images";
import { CATEGORIES, PRODUCTS, PRODUCTS_LIST } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* 1. Hero Section (White bg for contrast) */}
      <section className=" pt-4 pb-8  mb-12">
        <div className="max-w-[1300px] mx-auto px-4 w-full">
          <Crausal />
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="flex flex-col gap-16 md:gap-24">
        
        {/* 2. Categories */}
        <section className="max-w-[1300px] mx-auto px-4 w-full">
          <GridHeader
            title="Shop by"
            highlight="Categories"
            link="/product"
          />
          <div className="mt-6">
            <GridCircle categories={CATEGORIES} />
          </div>
        </section>

        {/* 3. Smartphone Deals */}
        <section className="max-w-[1300px] mx-auto px-4 w-full">
          <GridHeader
            title="Grab the best deal on"
            highlight="Smartphone"
            link="/product"
          />
          <div className="mt-6">
            <GridRoundSquare products={PRODUCTS_LIST} />
          </div>
        </section>

        {/* 4. Promotional Banners */}
        <section className="max-w-[1300px] mx-auto px-4 w-full">
          <Grid2Images />
        </section>

        {/* 5. Brand Features (Full Width) */}
        <section className="w-full">
          <Features />
        </section>

        {/* 6. Special Products */}
        <section className="max-w-[1300px] mx-auto px-4 w-full">
          <GridHeader
            title="Find the best"
            highlight="Products"
            link="/products"
          />
          <div className="mt-6">
            <GridRoundSquare products={PRODUCTS} />
          </div>
        </section>

      </div>
    </main>
  );
}