import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import MiniHeader from "../components/MiniHeader";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Contactus() {
  return (
    <>
      <Head>
        <title>Flipit | Contact</title>
      </Head>
      <Navbar />
      <MiniHeader heading="Contact Us" tagline="Get in-touch with us" />

      <main className="bg-gray-50 p-5 md:p-20">
        <section className="bg-white md:px-20 md:py-16 w-full md:w-10/12 m-auto flex flex-col-reverse md:flex-row">
          <div className="space-y-5 w-full md:w-1/2 p-6">
            <h2 className="text-3xl">Contact us</h2>
            <div className="text-gray-500 space-y-5">
              <div>
                <h3 className="text-2xl font-serif">Address</h3>
                <p>
                  FLip iT Labs <br />
                  Newton <br /> Massachusetts 02464 USA
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif">Telephone</h3>
                <p>Office : +1-617-863-8104</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif">Email</h3>
                <p>Alex@myflipitassistant.com</p>
              </div>
              <div className="mt-5 flex space-x-6">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaLinkedin />
              </div>
            </div>
          </div>

          {/* Form section */}
          <section className="w-full md:w-1/2">
            <form action="" className="w-10/12 m-auto">
              <div className="input-group">
                <label htmlFor="">Name</label>
                <input type="text" className="input-control" />
              </div>
              <div className="input-group">
                <label htmlFor="">Email</label>
                <input type="text" className="input-control" />
              </div>
              <div className="input-group">
                <label htmlFor="">Message</label>
                <textarea
                  className="input-control"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button className="btn primary">Send Message</button>
            </form>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
