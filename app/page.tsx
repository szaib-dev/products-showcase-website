import Crausal from "./_components/Crausal";
import GridHeader from "@/components/Layout/GridHeader";
import GridCircle from "@/components/Layout/GridCircle";
import { CATEGORIES, PRODUCTS, PRODUCTS_LIST } from "@/constants";
import GridRoundSquare from "@/components/Layout/GridRoudSquare";
import Grid2Images from "@/components/Layout/Grid2Images";
import Features from "./_components/Hero";

export default function Home() {
  return (
    <div className=" flex flex-col w-full gap-7 md:gap-12 mx-auto w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        <Crausal />
      </div>
      <div className="flex w-full flex-col px-3 gap-5 max-w-[1200px] mx-auto w-full">
        <GridHeader
          title="Shop by"
          highlight="Categories"
          link="/smartphone"
        />
        <GridCircle categories={CATEGORIES} />
      </div>
      <div className="flex w-full flex-col px-3 gap-5  max-w-[1200px] mx-auto w-full">
        <GridHeader
          title="Grab the best deal on"
          highlight="Smartphone"
          link="/smartphone"
        />
        <GridRoundSquare products={PRODUCTS_LIST} />
      </div>
      <div className=" max-w-[1200px] px-3 mx-auto w-full ">
        <Grid2Images />
      </div>

      <Features />

      <div className="flex w-full flex-col gap-5 max-w-[1200px] mx-auto w-full ">
        <GridHeader
          title="Find the best products"
          highlight="Special"
          link="/products"
        />
        <GridRoundSquare products={PRODUCTS} />
      </div>
    </div>
  );
}
