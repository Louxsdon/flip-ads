import React from "react";
import Link from "next/link";

export default function ProductCat({ variant, textColor, heading, children }) {
  return (
    <div className="rounded overflow-hidden mt-12 shadow-sm">
      <div
        className={` bg-${variant} ${textColor} flex justify-between px-6 py-3 font-semibold`}
      >
        <h3 className="text-lg">{heading}</h3>
        <Link href="">
          <a>SEE ALL </a>
        </Link>
      </div>
      <div className="body bg-white p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ProductSalesCard({ variant, textColor, heading, children }) {
  return (
    <div className="rounded overflow-hidden mt-12 shadow-sm">
      <div
        className={` bg-${variant} ${textColor} flex justify-between px-6 py-3 font-semibold`}
      >
        <h3 className="text-lg">{heading}</h3>
        <div className="relative space-x-4 flex items-center">
          <span className="font-semibold">Sort by: </span>
          <form action="">
            <div className="">
              <select
                className={`bg-${variant} border px-4 py-1 focus:outline-none`}
                name=""
                id=""
              >
                <option value="latest">Latest Ads</option>
                <option value="latest">Ending Soon</option>
                <option value="latest">Most Popular</option>
                <option value="latest">Electronics</option>
                <option value="latest">Vehicles</option>
                <option value="latest">Furniture</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="body bg-white p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}
