import React from "react";
import Head from "next/head";

export default function components() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div>
        <main className="container py-10 mb-52">
          {/* <!-- 
     Component: Buttons
   --> */}
          <div className="container py-20 grid grid-cols-2 gap-7">
            <button className="btn primary-alt dismisable">
              <span>
                <i className="fa fa-heart"></i>{" "}
              </span>
              Primary
            </button>
            <button className="btn primary">
              <span>
                <i className="fa fa-heart"></i>{" "}
              </span>
              Primary
            </button>
            <button className="btn danger-alt">Danger</button>
            <button className="btn danger">Danger</button>
            <button className="btn success-alt">Success</button>
            <button className="btn success">Success</button>
            <button className="btn warning-alt">Warning</button>
            <button className="btn warning">Warning</button>
            <button className="btn info-alt">Info</button>
            <button className="btn info">Info</button>
          </div>
          {/* <!-- 
     Component: Cards
   --> */}
          <div className="container">
            <div className="card border rounded-md overflow-hidden">
              <img
                className="w-full"
                src="https://webneel.com/daily/sites/default/files/images/daily/01-2014/15-love-pictures.preview.jpg"
                alt=""
              />
              <div className="card-body p-3">
                <h2 className="font-bold">Card Title</h2>
                <h4 className="tagline text-gray-400">This is card tagling</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum labore in possimus eligendi! Deserunt officia labore..
                </p>
                <button className="btn primary-alt fluid mt-3">
                  <span>
                    <i className="fa fa-heart"></i>{" "}
                  </span>{" "}
                  Like
                </button>
              </div>
            </div>
          </div>

          {/* <!-- 
    Component: Inputs
   --> */}
          <div className="container py-4">
            <form action="">
              <div className="input-group">
                <div className="input-addon">
                  <i className="fa fa-envelope input-icon"></i>
                  <input
                    className="input-control rounded-all"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-addon">
                  <i className="fa fa-lock input-icon"></i>
                  <input
                    className="input-control rounded-all"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="btn primary fluid">
                <i className="fa fa-login"></i> Login In
              </button>
            </form>
          </div>

          <div className="pl-7 pr-7">
            <nav className="flex p-3 rounded bg-blue-400 mt-3 justify-between">
              <div className="flex">
                <p className="px-2 text-white text-2xl">Navbar</p>
                <ul className="text-gray-300 pt-1">
                  <a className="active pl-3" href="">
                    Home
                  </a>
                  <a className="pl-3" href="">
                    Features
                  </a>
                  <a className="pl-3" href="">
                    Pricing
                  </a>
                  <a className="pl-3" href="">
                    About
                  </a>
                </ul>
              </div>
              <div className="flex">
                <div className="">
                  <input
                    className="input p-2 rounded pl-2"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="bg-blue-400 pl-3">
                  <button className="button1 out rounded p-1 text-white">
                    search
                  </button>
                </div>
              </div>
            </nav>

            <nav className="flex p-3 rounded bg-gray-600 mt-3 justify-between">
              <div className="flex">
                <p className="px-2 text-white text-2xl">Navbar</p>
                <ul className="text-gray-300 pt-1">
                  <a className="pl-3" className="active" href="">
                    Home
                  </a>
                  <a className="pl-3" href="">
                    Features
                  </a>
                  <a className="pl-3" href="">
                    Pricing
                  </a>
                  <a className="pl-3" href="">
                    About
                  </a>
                </ul>
              </div>
              <div className="flex">
                <div className="">
                  <input
                    className="input p-2 rounded pl-2"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="bg-gray-600 pl-3">
                  <button className="button2 out rounded p-1 border-green-200 text-green-200">
                    search
                  </button>
                </div>
              </div>
            </nav>

            <nav className="flex p-3 rounded bg-blue-100 mt-3 justify-between">
              <div className="flex">
                <p className="px-2 text-gray-700 text-2xl">Navbar</p>
                <ul className="text-gray-500 pt-1">
                  <a className="pl-3" className="active1" href="">
                    Home
                  </a>
                  <a className="pl-3" href="">
                    Features
                  </a>
                  <a className="pl-3" href="">
                    Pricing
                  </a>
                  <a className="pl-3" href="">
                    About
                  </a>
                </ul>
              </div>
              <div className="flex">
                <div className="">
                  <input
                    className="input p-2 rounded pl-2"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="bg-blue-100 pl-3">
                  <button className="button3 out rounded p-1 border-blue-400 text-blue-400">
                    search
                  </button>
                </div>
              </div>
            </nav>

            {/* <!-- 
    Component: Avatar
   --> */}
            <div className="flex container mt-16 items-center">
              <div className="relative w-16 h-16">
                <div
                  className="
            rounded-full
            overflow-hidden
            w-full
            h-full
            border-4 border-white
            shadow-lg
          "
                >
                  <img
                    className="w-full h-full"
                    src="https://webneel.com/daily/sites/default/files/images/daily/01-2014/15-love-pictures.preview.jpg"
                    alt="img"
                  />
                </div>
                <div
                  className="
            absolute
            flex
            top-0
            right-1
            bg-danger-500
            border-white border-2
            w-5
            h-5
            text-xs
            rounded-full
            items-center
            justify-center
            text-center text-danger-50
          "
                >
                  3
                </div>
              </div>
              <div className="relative w-24 h-24">
                <div
                  className="
            rounded-full
            overflow-hidden
            w-full
            h-full
            border-4 border-white
            shadow-lg
          "
                >
                  <img
                    className="w-full h-full"
                    src="https://webneel.com/daily/sites/default/files/images/daily/01-2014/15-love-pictures.preview.jpg"
                    alt="img"
                  />
                </div>
                <div
                  className="
            absolute
            flex
            top-0
            right-1
            bg-danger-500
            border-white border-2
            w-6
            h-6
            text-xs
            rounded-full
            items-center
            justify-center
            text-center text-danger-50
          "
                >
                  5
                </div>
              </div>
              <div className="relative w-32 h-32">
                <div
                  className="
            rounded-full
            overflow-hidden
            w-full
            h-full
            border-4 border-white
            shadow-lg
          "
                >
                  <img
                    className="w-full h-full"
                    src="https://webneel.com/daily/sites/default/files/images/daily/01-2014/15-love-pictures.preview.jpg"
                    alt="img"
                  />
                </div>
                <div
                  className="
            absolute
            flex
            top-1
            right-3
            bg-danger-500
            border-white border-2
            w-6
            h-6
            text-xs
            rounded-full
            items-center
            justify-center
            text-center text-danger-50
          "
                >
                  6
                </div>
              </div>
            </div>

            {/* <!-- 
    Component: List items
   --> */}

            <div>
              <ul>
                <h4 className="list-heading">List item heading</h4>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
                <li className="list-item">This is a list item</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
