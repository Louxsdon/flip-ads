import React from "react";
import Link from "next/link";

export default function Sidebar({ openDrawer }) {
  return (
    <div className={`side-drawer ${openDrawer ? "open" : ""}`}>
      <div className="">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/how-it-works">
          <a className="nav-link">How it works</a>
        </Link>
        <Link href="/sell">
          <a className="nav-link">Sell</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About Us</a>
        </Link>
        <Link href="/contact">
          <a className="nav-link">Contact Us</a>
        </Link>
      </div>
    </div>
  );
}
