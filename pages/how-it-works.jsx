import React from "react";
import Navbar from "../components/Navbar";
import { MdLocationOn, MdSearch, MdCollectionsBookmark } from "react-icons/md";
import Footer from "../components/Footer";
import Head from "next/head";
import MiniHeader from "../components/MiniHeader";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>Flipit | How it works</title>
      </Head>
      <Navbar />
      <MiniHeader heading="How It Works" tagline="How our system works" />

      <main className="mt-28 container">
        <div className="w-full space-y-5 sm:space-y-0 py-8 sm:py-12 md:py-16 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-3xl font-serif">1. Create An Account</h3>
            <p className="text-sm">
              First thing you need to do is to create your own account which
              will allow you to post ads and better communications with our
              members as well as some very cool features
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-32 m-auto" src="imgs/3.png" alt="" />
          </div>
        </div>
        <div className="w-full space-y-5 space-y-reverse sm:space-y-0 py-8 sm:py-12 md:py-16 flex flex-col-reverse sm:flex-row sm:justify-between items-center">
          <div className="w-full md:w-1/2">
            <img className="w-32 m-auto" src="imgs/2.png" alt="" />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-3xl font-serif">2. Post An Ad</h3>
            <p className="text-sm">
              Once you are finished with creating your account it is time to
              sell goods and / or services you are offering and in order to do
              that add submit some ads so people can notice you
            </p>
          </div>
        </div>
        <div className="w-full space-y-5 sm:space-y-0 py-8 sm:py-12 md:py-16 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-3xl font-serif">3. Start Earning</h3>
            <p className="text-sm">
              Now sit back and relax and wait for potential buyers to contact
              you regarding goods and / or services you are offering and start
              earning money and building contact as easy as that
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-32 m-auto" src="imgs/3.png" alt="" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
