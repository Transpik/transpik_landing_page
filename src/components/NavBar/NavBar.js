import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/BrandLogo.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-secondary">
          <div className="relative flex items-center justify-between h-16">
            {/* Hamburger icon to show and hide the navigation bar when tab resized */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src={BrandLogo}
                  alt="Brand logo"
                ></img>
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={BrandLogo}
                  alt="Brand logo"
                ></img>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="underline decoration-orange-400 decoration-solid decoration-2 underline-offset-8 px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Docs
                  </a>

                  <a
                    href="#"
                    className="dark-gray hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="dark-gray hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tracking
                  </a>

                  <a
                    href="#"
                    className="dark-gray hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Downloads
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="#"
                className="outline outline-2 outline-width-orange-400 hover:bg-orange-100 text-orange-400 px-3 py-1 rounded-md text-sm font-medium"
              >
                Log in
              </a>
            </div>
          </div>
        </div>

        {show && (
          // navigation bar in small tab size
          <div className="sm:hidden navigation-menu expanded" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="underline decoration-orange-400 decoration-solid decoration-2 underline-offset-8 block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Docs
              </a>

              <a
                href="#"
                className="dark-gray hover:bg-orange-400  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>

              <a
                href="#"
                className="dark-gray hover:bg-orange-400  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Tracking
              </a>

              <a
                href="#"
                className="dark-gray hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Downloads
              </a>
              <a
                href="#"
                className="text-orange-400 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
