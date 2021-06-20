import { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { LoginModal, RegisterModal } from "./Modals";
import { Sidebar } from "./Sidebar";
import NavLink from "./NavLink";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [showRegisterModal, setshowRegisterModal] = useState(false);
  return (
    <>
      {/* ******************
        ------ NAVBAR SECTION -------
        **********************
         */}
      <div className="bg-indigo-200 py-1"></div>
      <nav className="navbar">
        <div className="brand">
          <Link href="/">
            <a>
              <h3 className="font-bold font-mono text-xl">FliPiT</h3>
            </a>
          </Link>
        </div>

        <div className="nav-items hidden md:block">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/sell">Sell</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>
        <div className="button-links hidden md:block justify-self-end space-x-3">
          <button
            onClick={() => setshowLoginModal(true)}
            className="btn primary-alt"
          >
            Sign In
          </button>
          <button
            onClick={() => setshowRegisterModal(true)}
            className="btn primary"
          >
            Create Account
          </button>
        </div>
        <button
          onClick={() => setOpenDrawer(!openDrawer)}
          className={`block md:hidden focus:outline-none ${
            !openDrawer ? "bg-primary-50" : "bg-danger-50"
          } p-2 rounded`}
        >
          {!openDrawer ? (
            <IoMenuOutline className="text-xl" />
          ) : (
            <IoClose className="text-xl text-danger-600" />
          )}
        </button>
      </nav>

      <Sidebar openDrawer={openDrawer} drawerOpen={setOpenDrawer} />

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
