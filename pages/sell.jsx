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
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4  py-6">
            <button className="btn bg-white">Latest Ads</button>
            <button className="btn bg-white">Ending Soon</button>
            <button className="btn bg-white">Most Popular</button>
            <button className="btn bg-white">Electronics</button>
            <button className="btn bg-white">Furnitures</button>
            <button className="btn bg-white">Vehicles</button>
          </div>
          <ProductSalesCard
            heading="Hot Selling Products"
            variant="primary-300"
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
            variant="orange-400"
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
