import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { LoginModal, RegisterModal } from "./Modals";

function ActiveLink({ children, href }) {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a className={`side-link ${asPath === href ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
}

export function Sidebar({ openDrawer, drawerOpen }) {
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [showRegisterModal, setshowRegisterModal] = useState(false);
  return (
    <>
      <div className={`side-drawer ${openDrawer ? "open" : ""}`}>
        <div className=" py-14 px-10 bg-primary-50 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-semibold ">FliPit</h2>
          <p className="text-gray-400 mb-4 text-center">
            Sell, Buy and earn money
          </p>
          <div className="flex space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className=" mt-5">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/how-it-works">How it works</ActiveLink>
          <ActiveLink href="/sell">Sell</ActiveLink>
          <ActiveLink href="/about">About Us</ActiveLink>
          <ActiveLink href="/contact">Contact Us</ActiveLink>
        </div>
        <hr className="my-10" />
        <div className="flex justify-center items-center space-x-3">
          <button
            onClick={() => {
              setshowLoginModal(true);
              drawerOpen(false);
            }}
            className="btn primary-alt border border-primary-400"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setshowRegisterModal(true);
              drawerOpen(false);
            }}
            className="btn primary"
          >
            Register
          </button>
        </div>
      </div>

      <LoginModal
        visible={showLoginModal}
        handleVisibility={setshowLoginModal}
      />
      <RegisterModal
        visible={showRegisterModal}
        handleVisibility={setshowRegisterModal}
      />
    </>
  );
}
