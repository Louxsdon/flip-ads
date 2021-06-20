import Head from "next/head";
import Link from "next/link";
import { electronics, furnitures } from "../shop/products";
import {
  MdLocationOn,
  MdSearch,
  MdCollectionsBookmark,
  MdPerson,
  MdNotifications,
} from "react-icons/md";
import { MdPhonelink } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { FaCar, FaChair } from "react-icons/fa";
import ProductCard from "../components/Cards";
import BisPoint from "../components/BisPoint";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoginModal } from "../components/Modals";
import ProductCat from "../components/ProductCat";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flipit | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginModal />
      <Navbar />
      <header>
        {/* ******************
        ------ HERO HEADER SECTION --------
        **********************
         */}
        <div
          className="hero bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgb(38 63 239 / 73%), rgb(0 16 60 / 60%)), url(imgs/bg.jpeg)",
            height: "500px",
          }}
        >
          <div className="container h-full relative">
            <div className="hero-contents w-10/12 space-y-8 text-white text-center absolute top-1/2 left-1/2  transform -translate-x-1/2  -translate-y-1/2">
              <h2 className="text-4xl md:text-6xl font-semibold">
                All You Need To Sell With Flip It
              </h2>
              <p className="">
                Browse from more than 15,000,000 adverts while new ones come on
                daily basis
              </p>
              <div className="search mb-8 md:mb-0">
                <form
                  action=""
                  className="flex flex-col md:flex-row md:space-x-6 justify-center"
                >
                  <div className="input-group">
                    <div className="input-addon">
                      <MdSearch className="input-icon" />
                      <input
                        type="text"
                        className="input-control py-3"
                        placeholder="Searching for..."
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-addon">
                      <MdLocationOn className="input-icon" />
                      <input
                        type="text"
                        className="input-control py-3"
                        placeholder="Located at..."
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-addon">
                      <MdCollectionsBookmark className="input-icon" />
                      <input
                        type="text"
                        className="input-control py-3"
                        placeholder="Category"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <button className="btn primary h-full w-full md:w-auto">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <<<<<<<<< HERO SECTION END <<<<<<<<
         */}
      </header>

      <main className="bg-primary-100">
        <div className="container py-12 px-4" id="ads">
          <div className="catalogs flex justify-center items-center space-x-5 md:space-x-32">
            <div className="cat-1 flex items-center flex-col">
              <div className="cat-card">
                <MdPhonelink className="text-3xl text-gray-400" />
              </div>
              <h3 className="font-semibold">Electronics</h3>
              <p className="text-gray-500">5 ads posted</p>
            </div>
            <div className="cat-1 flex items-center flex-col">
              <div className="cat-card">
                <FaChair className="text-3xl text-gray-400" />
              </div>
              <h3 className="font-semibold">Furnitures</h3>
              <p className="text-gray-500">1 ads posted</p>
            </div>
            <div className="cat-1 flex items-center flex-col">
              <div className="cat-card">
                <FaCar className="text-3xl text-gray-400" />
              </div>
              <h3 className="font-semibold">Vehicles</h3>
              <p className="text-gray-500">2 ads posted</p>
            </div>
          </div>
        </div>

        {/* ******************
        ------ HOW IT WORKS --------
        **********************
         */}
        <div className="how-it-works bg-white ">
          <div className="container  py-20">
            <div className="text-center mb-14">
              <h3 className="text-2xl font-serif font-bold">How It Works</h3>
              <p className="font-semibold text-gray-500">
                Quick brief on how simple yet powerful site is
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-center items-center md:w-10/12 m-auto md:space-x-8">
              <div className="item flex items-center flex-col space-y-2 text-center">
                <div className="icon bg-primary-500 p-3 rounded-full text-white">
                  <MdPerson className="text-5xl" />
                </div>
                <h4 className="font-bold font-serif">Create An Account</h4>
                <p className="text-gray-500">
                  Start your journey by creating your very first account to gain
                  you cool options which allow you to create awesome ads
                </p>
              </div>
              <div className="item flex items-center flex-col space-y-2 text-center">
                <div className="icon bg-primary-500 p-3 rounded-full text-white">
                  <MdNotifications className="text-5xl" />
                </div>
                <h4 className="font-bold font-serif">Post An Advert</h4>
                <p className="text-gray-500">
                  Now when you are our member go to your account profile and
                  post your very first advert and make you be descriptive as
                  possibles
                </p>
              </div>
              <div className="item flex items-center flex-col space-y-2 text-center">
                <div className="icon bg-primary-500 p-3 rounded-full text-white">
                  <GiCutDiamond className="text-5xl" />
                </div>
                <h4 className="font-bold font-serif">Start Earning</h4>
                <p className="text-gray-500">
                  Is your advert ready and live? Now sit back, and enjoy and
                  wait for that very first phone call and start earning money
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ******************
        ------ ADVERTS --------
         ********************** */}
        <div id="ads" className="container">
          <div className="flex justify-center items-center space-x-5 py-8">
            <button className="btn bg-white">Latest Ads</button>
            <button className="btn bg-white">Ending Soon</button>
          </div>
          <ProductCat
            heading="Electronics"
            variant="bg-warning-500"
            textColor=""
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
          </ProductCat>
          <ProductCat
            heading="Furnitures"
            variant="bg-primary-500"
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
        {/* ******************
        ------ BUSINESS POINTS --------
         ********************** */}
        <section id="business" className="">
          <div className="flex flex-col md:flex-row justify-center items-center mt-8">
            <BisPoint
              image="linear-gradient(to right,rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(imgs/feature-1.jpg)"
              heading="Business Point A"
            >
              <p>
                Benefit with creating account which will allow you to spare
                favorite ads, participate in auctions, have chat with the
                seller, review the seller / be reviewed and after a while if you
                decide to sell something it will be ready for it
              </p>
              <button className="btn rounded-all border-white border-2 mt-5">
                Create Account & Pay
              </button>
            </BisPoint>
            <BisPoint
              image="linear-gradient(to right,rgb(38 63 239 / 73%), rgb(0 16 60 / 60%)), url(imgs/feature-2.jpg)"
              heading="Business Point B"
            >
              <p>
                In order to list your product / services and start earning you
                need you create your account. Account has all the tools you need
                and multiple payment gateways will make it more convenient for
                you purchase subscriptions / ads
              </p>
            </BisPoint>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4">
            <BisPoint
              image="linear-gradient(to right,rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(imgs/feature-3.jpg)"
              heading="Business Point C"
            >
              <p>
                Benefit with creating account which will allow you to spare
                favorite ads, participate in auctions, have chat with the
                seller, review the seller / be reviewed and after a while if you
                decide to sell something it will be ready for it
              </p>
            </BisPoint>
            <BisPoint
              image="linear-gradient(to right, rgb(0 46 69), rgba(0, 0, 0, 0.7)), url(imgs/feature-4.jpg)"
              heading="Business Point D"
            >
              <p>
                In order to list your product / services and start earning you
                need you create your account. Account has all the tools you need
                and multiple payment gateways will make it more convenient for
                you purchase subscriptions / ads
              </p>
              <button className="btn rounded-all border-white border-2 mt-5">
                Create Account & Sell
              </button>
            </BisPoint>
          </div>
        </section>

        {/* ******************
        ------ PRICING PACKAGE --------
         ********************** */}
        <section className="bg-white py-20 px-4 text-center mt-5 space-y-4">
          <h3 className="font-serif text-3xl">Pricing Package</h3>
          <p>
            You can set to charge users for{" "}
            <strong>packages, Subscriptions, Hybrid</strong> or{" "}
            <strong>Free</strong>
          </p>
        </section>
      </main>
      {/* ******************
        ------ FOOTER SECTION --------
         ********************** */}
      <Footer />
    </div>
  );
}
