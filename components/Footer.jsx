import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="px-8 space-y-3 space-y-reverse md:space-y-0 flex flex-col-reverse md:flex-row items-center justify-evenly bg-gray-700 py-5 text-sm text-white">
        <p>Copyright @ 2020 - FLIPIT All Rights Reserved</p>
        <div className="flex space-x-4">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="flex space-x-5">
          <Link href="/about">
            <a>FQA</a>
          </Link>
          <Link href="/#">
            <a>News</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </footer>
    </>
  );
}
