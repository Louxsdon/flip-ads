import React from "react";

export default function BisPoint({ image, heading, children }) {
  return (
    <div
      className="poin-a flex flex-col justify-center items-center p-5 md:p-20 md:h-96 bg-cover bg-no-repeat bg-center text-white text-center "
      style={{
        backgroundImage: image,
      }}
    >
      <h2 className="text-3xl mb-4">{heading}</h2>
      {children}
    </div>
  );
}
