import React, { useState, useEffect } from "react";
import tw, { css } from "twin.macro";

export default function NotLoggedInNavbar() {
  return (
    <>
      <nav
        tw="flex items-center justify-between flex-wrap px-6 py-4 sticky"
        className="custom-nav-settings"
      >
        <div tw="flex items-center flex-shrink-0 text-white mr-6">
          <div tw="flex items-center h-16 pb-2 w-full">
            <h1
              tw="w-full font-bold text-5xl text-center"
              className="threedeeshadow"
              style={{
                fontFamily: "basiclazer",
              }}
            >
              Shoutmo
            </h1>
          </div>
        </div>
        <div tw="block lg:hidden">
          <button tw="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
            <svg
              tw="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div tw="text-sm lg:flex-grow">
            {/* <a
              href="#"
              tw="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
            >
              Replace this later with a better header for non logged in users
            </a> */}
          </div>
          <div>
            <a
              href="/login"
              tw="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
          <div>
            <a
              href="/signup"
              tw="ml-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
