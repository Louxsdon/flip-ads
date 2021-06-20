import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import MiniHeader from "../components/MiniHeader";
import { electronics, furnitures } from "../shop/products";
import ProductCat, { ProductSalesCard } from "../components/ProductCat";
import ProductCard from "../components/Cards";

export default function Sell() {
  return (
    <>
      <Head>
        <title>Flipit | Sell Product</title>
      </Head>
      <Navbar />
      <MiniHeader
        heading="Sell Products"
        tagline="Sell your products with us"
      />

      <main className="pb-20 bg-primary-50">
        {/* ******************
        ------ SALES PRODUCTS --------
         ********************** */}
        <div id="ads" className="container pt-24">
          <div className="flex justify-center items-center space-x-5 py-8">
            <button className="btn bg-white">Latest Ads</button>
            <button className="btn bg-white">Ending Soon</button>
            <button className="btn bg-white">Latest Ads</button>
            <button className="btn bg-white">Ending Soon</button>
            <button className="btn bg-white">Latest Ads</button>
            <button className="btn bg-white">Ending Soon</button>
          </div>
          <ProductSalesCard
            heading="Hot Selling Products"
            variant="primary-400"
            textColor="text-white"
          >
            {electronics.map(({ id, name, img, location, category }) => (
              <ProductCard
                key={id}
                name={name}
                image={img}
                location={location}
                category={category}
              />
            ))}
            {electronics.map(({ id, name, img, location, category }) => (
              <ProductCard
                key={id}
                name={name}
                image={img}
                location={location}
                category={category}
              />
            ))}
          </ProductSalesCard>
          <ProductCat
            heading="Ending Soon"
            variant="orange-500"
            textColor="text-white"
          >
            {furnitures.map(({ id, name, img, location, category }) => (
              <ProductCard
                key={id}
                name={name}
                image={img}
                location={location}
                category={category}
              />
            ))}
          </ProductCat>
        </div>
      </main>

      <Footer />
    </>
  );
}
