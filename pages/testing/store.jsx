import React, { useState, useEffect } from "react";
import NotLoggedInNavbar from "../../components/NavbarForNonLoggedInUsers";

import {
  RiShoppingCartLine,
  RiHeart2Line,
  RiErrorWarningLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import "twin.macro";

export default function Store() {
  return (
    <>
      <NotLoggedInNavbar />
      {/* container  */}
      <div tw="mx-auto px-2">
        {/* top section  */}

        {/* <div tw="w-full text-gray-700 md:text-center text-2xl font-semibold my-8">
          <h1 tw="text-5xl font-black">Shop</h1>
          <p tw="text-lg mx-auto px-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet. Dolor morbi non arcu risus quis varius quam
            quisque.
          </p>
        </div> */}

        <div tw="max-w-6xl mx-auto px-0 sm:px-5 py-12">
          <div tw="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 tw="mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl text-gray-600">
              Shop
            </h1>
            <p tw="lg:w-1/2 w-full leading-relaxed text-base text-gray-700">
              Buy Merch, look cool and support us. Stay tuned we're working on
              some pretty cool stuff.
            </p>
          </div>
        </div>
        {/* </section> */}

        {/* shop items section  */}
        <div tw="flex flex-row flex-wrap justify-around">
          {/* <div tw="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> */}
          <ShopItem />
        </div>
      </div>
      <div tw="bg-gray-900 mt-24">
        <FooterNew />
      </div>
    </>
  );
}

function CartButton() {
  return (
    <>
      <button
        tw="flex items-center h-12 w-12 rounded-full mx-auto object-center
            bg-blue-200 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 text-blue-500 hover:text-white shadow"
      >
        <RiShoppingCartLine tw="mx-auto" />
      </button>
    </>
  );
}

function ShopItem() {
  return (
    <>
      <div tw="flex flex-col w-full max-w-sm m-6 rounded-md shadow-md overflow-hidden">
        <img
          alt="Placeholder"
          tw="block h-auto w-full object-cover"
          src="/img/tshirtplaceholder.png"
        />
        {/* buy button */}
        {/* <div tw="relative w-full">
          <div tw="absolute top-0 right-0 h-12 w-12 -mt-6 mr-6">
            <CartButton />
          </div>
        </div> */}
        {/* item description */}
        <div tw="px-5 py-3">
          {/* <h3 tw="uppercase text-xl font-bold">T-shirt</h3>
          <p tw="text-gray-600"> */}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet. Dolor morbi non arcu risus quis varius quam
            quisque.  */}
          {/* This is Matt's daily wear shirt. He's a simple dude, he wears short
            shorts and rocks t-shirts. Legend is that he only showers when
            leaving the house or after a workout.
          </p>
          <span tw="text-gray-500 mt-2 font-bold text-xl">$30</span> */}
          <PriceSection />

          <button
            type="button"
            tw="h-12 w-full px-6 my-2 py-2 font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

function PriceSection() {
  return (
    <>
      <div tw="md:flex-1 px-2">
        <h2 tw="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
          SHOUTMO Original
          <br />
          T-shirt{" "}
        </h2>

        <p tw="text-gray-600 mb-2">
          COMFY AF. This is Matt's daily wear shirt. He's a simple dude, he
          wears short shorts and rocks t-shirts.
          {/* Legend is that he only showers
          when leaving the house or after a workout. */}
        </p>

        <p tw="text-gray-500 text-sm">
          By{" "}
          <a href="#" tw="text-indigo-600 hover:underline">
            SHOUTMOCREW
          </a>
        </p>

        <div tw="flex items-center space-x-4 my-4">
          <div>
            <div tw="rounded-lg bg-gray-100 flex py-2 px-3">
              <span tw="text-indigo-400 mr-1 mt-1">$</span>
              <span tw="font-bold text-indigo-600 text-3xl">30</span>
            </div>
          </div>
          <div tw="flex-1">
            {/* <p tw="text-green-500 text-xl font-semibold">Save 12%</p> */}
            <p tw="text-gray-400 text-sm">Plus tax</p>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <p>sticker</p>
        <p>tshirt</p>
        <p>hat</p>
        <p>mug</p>
        <p>desk light</p> */
}

// 1 sentence
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

// 3 sentences
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet. Dolor morbi non arcu risus quis varius quam quisque.

function FooterNew() {
  return (
    <>
      <div tw="px-4 pt-4 sm:pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div tw="grid gap-10 row-gap-6 mb-2 sm:grid-cols-2 lg:grid-cols-4">
          <div tw="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              tw="inline-flex items-center"
            >
              <span tw="ml-2 text-xl font-bold tracking-wide text-purple-200 uppercase">
                <h1
                  tw="w-full font-bold text-5xl text-center text-white"
                  className="threedeeshadow"
                  style={{
                    fontFamily: "basiclazer",
                  }}
                >
                  Shoutmo
                </h1>
              </span>
            </a>

            {/* <div tw="mt-6 lg:max-w-sm">
                <p tw="text-sm text-purple-200">
                  Your premium online people connecting platform. Share one link
                  to all of your links, QR codes and even more coming soon. Stay
                  tuned and keep it locked.
                </p>
              </div> */}
          </div>
        </div>
        <div tw="flex flex-col-reverse justify-between pt-4 pb-10 border-t lg:flex-row">
          <p tw="text-sm text-gray-600">
            © Copyright 2020 All rights reserved.
          </p>
          <ul tw="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/info/faqs"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/info/privacy"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/info/terms"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// function ItemTwo() {
//   return (
//     <>
//       <article tw="overflow-hidden rounded-lg shadow-lg">
//         <a href="#">
//           <img
//             alt="Placeholder"
//             tw="block h-auto w-full"
//             src="https://picsum.photos/600/400/?random"
//           />
//         </a>

//         <header tw="flex items-center justify-between leading-tight p-2 md:p-4">
//           <h1 tw="text-lg">
//             <a tw="no-underline hover:underline text-black" href="#">
//               Article Title
//             </a>
//           </h1>
//           <p tw="text-gray-500 text-sm">14/4/19</p>
//         </header>

//         <footer tw="flex items-center justify-between leading-none p-2 md:p-4">
//           <a
//             tw="flex items-center no-underline hover:underline text-black"
//             href="#"
//           >
//             <img
//               alt="Placeholder"
//               tw="block rounded-full"
//               src="https://picsum.photos/32/32/?random"
//             />
//             <p tw="ml-2 text-sm">Author Name</p>
//           </a>
//           <a tw="no-underline text-gray-500 hover:text-red-500" href="#">
//             <span tw="hidden">Like</span>
//             <RiHeart2Line />
//           </a>
//         </footer>
//       </article>
//     </>
//   );
// }
