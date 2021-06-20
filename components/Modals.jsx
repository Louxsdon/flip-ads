import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function LoginModal({ visible, handleVisibility }) {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div
      className={`modal-overlay overflow-y-auto  bg-black bg-opacity-50 w-full h-full fixed top-0 left-0 z-40 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="absolute bg-white w-10/12 p-5 m-auto sm:w-6/12 lg:w-1/3 top-16 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
        <div className="flex justify-between mb-8">
          <h3 className="text-xl font-bold">Sign In</h3>
          <button onClick={() => handleVisibility(false)} className="btn">
            <IoClose />
          </button>
        </div>
        <form action="#">
          <div className="input-group">
            <label htmlFor="">Email *</label>
            <input type="email" className="input-control" />
          </div>
          <div className="input-group">
            <label htmlFor="">Password *</label>
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="input-control pr-10"
              />
              {!showPassword ? (
                <FaEye
                  onClick={() => setshowPassword(true)}
                  className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setshowPassword(false)}
                  className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                />
              )}
            </div>
          </div>
          <button className="btn primary fluid">Login</button>
        </form>
        <div className="mt-10 text-center">
          <div className="separator mb-4">OR</div>
          <h3>Sign in with</h3>
          <div className="flex space-x-4 justify-center mt-8">
            <button className="btn primary w-44">
              <FaFacebook className="inline-block" /> Facebook
            </button>
            <button className="btn primary w-44">
              <FaTwitter className="inline-block" /> Twitter
            </button>
            <button className="btn primary w-44">
              <FaGoogle className="inline-block" /> Google
            </button>
          </div>
        </div>
        <div className="my-6 text-center">
          <h3>
            Don't have an account?
            <Link href="#">
              <a> Register here</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
export function RegisterModal({ visible, handleVisibility }) {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div
      className={`modal-overlay overflow-y-auto bg-black bg-opacity-50 w-full h-full fixed top-0 left-0 z-40 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="absolute bg-white w-10/12 p-5 m-auto sm:w-6/12 lg:w-1/3 top-16 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
        <div className="flex justify-between mb-8">
          <h3 className="text-xl font-bold">Create Account</h3>
          <button onClick={() => handleVisibility(false)} className="btn">
            <IoClose />
          </button>
        </div>
        <form action="#">
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="input-group w-full">
              <label htmlFor="">Username *</label>
              <input
                type="text"
                className="input-control"
                placeholder="Your desired username"
              />
            </div>
            <div className="input-group w-full">
              <label htmlFor="">Email *</label>
              <input
                type="email"
                className="input-control"
                placeholder="Valid email address"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-5 w-full">
            <div className="input-group w-full">
              <label htmlFor="">Password *</label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="input-control pr-10 fluid"
                  placeholder="Enter a strong password"
                />
                {!showPassword ? (
                  <FaEye
                    onClick={() => setshowPassword(true)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setshowPassword(false)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                )}
              </div>
            </div>
            <div className="input-group w-full">
              <label htmlFor="">Confirm Password *</label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="input-control pr-10 fluid"
                  placeholder="Verify password"
                />
                {!showPassword ? (
                  <FaEye
                    onClick={() => setshowPassword(true)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setshowPassword(false)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="checkbox" className="" name="" id="" /> Agreed to terms
            and conditions
          </div>
          <button className="btn primary fluid">Register</button>
        </form>
        <div className="mt-10 text-center">
          <div className="separator mb-4">OR</div>
          <h3>Sign in with</h3>
          <div className="flex space-x-4 justify-center mt-8">
            <button className="btn primary w-44">
              <FaFacebook className="inline-block" /> Facebook
            </button>
            <button className="btn primary w-44">
              <FaTwitter className="inline-block" /> Twitter
            </button>
            <button className="btn primary w-44">
              <FaGoogle className="inline-block" /> Google
            </button>
          </div>
        </div>
        <div className="my-10 text-center">
          <h3>
            Already have account?
            <Link href="#">
              <a> Login here</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
