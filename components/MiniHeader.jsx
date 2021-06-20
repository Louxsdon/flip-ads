import React from "react";
import { MdSearch, MdCollectionsBookmark } from "react-icons/md";

export default function MiniHeader({ heading, tagline }) {
  return (
    <header className="relative">
      <div
        className="hero bg-cover bg-no-repeat bg-center py-5 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgb(38 63 239 / 73%), rgb(0 16 60 / 60%)), url(imgs/mini-hero1.jpg)",
          height: "250px",
        }}
      >
        <h3 className="text-3xl text-white">{heading}</h3>
        <p className="text-gray-300">{tagline}</p>
      </div>

      <form
        action=""
        className="bg-gray-200 py-4 px-8 w-full md:w-1/2 m-auto flex flex-col md:flex-row items-center md:space-x-6 justify-center md:absolute -bottom-12 left-1/2 transform md:-translate-x-1/2"
      >
        <div className="input-addon w-full">
          <MdSearch className="input-icon" />
          <input
            type="text"
            className="input-control py-3"
            placeholder="Searching for..."
          />
        </div>
        <div className="input-addon w-full">
          <MdCollectionsBookmark className="input-icon" />
          <input
            type="text"
            className="input-control py-3"
            placeholder="Category"
          />
        </div>
        <button className="btn danger h-full w-full md:w-auto">Search</button>
      </form>
    </header>
  );
}
