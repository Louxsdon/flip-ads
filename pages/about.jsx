import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import MiniHeader from "../components/MiniHeader";

import { TeamCard } from "../components/Cards";

export default function Contactus() {
  return (
    <>
      <Head>
        <title>Flipit | About Us</title>
      </Head>
      <Navbar />
      <MiniHeader heading="About Us" tagline="Get to know us better" />

      <main className="pt-10 md:pt-28 bg-primary-50">
        <div className="container py-16 md:py-36 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-semibold font-serif">About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              eligendi qui quo deserunt obcaecati ex nulla? Accusamus tempore
              dolores sequi? Rem deleniti quia atque tempora magnam inventore
              harum, dolor adipisci!
            </p>
          </div>
          <div className="about-img md:w-1/2">
            <img className="w-96 m-auto" src="imgs/about-img1.png" alt="" />
          </div>
        </div>
        <div className="bg-white">
          <div className="container py-16 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold font-serif">Mission</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                eligendi qui quo deserunt obcaecati ex nulla? Accusamus tempore
                dolores sequi? Rem deleniti quia atque tempora magnam inventore
                harum, dolor adipisci!
              </p>
              <button className="btn primary-alt shadow-sm rounded-full w-44">
                Read More
              </button>
            </div>
            <div className="about-img md:w-1/2">
              <img className="w-96 m-auto" src="imgs/about-img2.png" alt="" />
            </div>
          </div>
          <div className="container py-16 flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="about-img md:w-1/2">
              <img className="w-96 m-auto" src="imgs/about-img3.png" alt="" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold font-serif">Vision</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                eligendi qui quo deserunt obcaecati ex nulla? Accusamus tempore
                dolores sequi? Rem deleniti quia atque tempora magnam inventore
                harum, dolor adipisci!
              </p>
              <button className="btn primary-alt shadow-sm rounded-full w-44">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Our Teams Section */}
        <div className="teams container md:px-44 py-16 text-center">
          <h3 className="text-4xl font-semibold">Our Team</h3>
          <p className="text-gray-400">
            Meet the great people behind your success
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <TeamCard
              avatar="imgs/team-img1.png"
              name="Manuella Nevoresky"
              post="ceo - founder"
            />
            <TeamCard
              avatar="imgs/team-img2.png"
              name="Samuel Hardy"
              post="developer"
            />
            <TeamCard
              avatar="imgs/team-img3.png"
              name="Tom Sunderland"
              post="researcher"
            />
            <TeamCard
              avatar="imgs/team-img4.png"
              name="John Tarly"
              post="designer"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
