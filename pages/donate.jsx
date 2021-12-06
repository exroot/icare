import React, { useState, useEffect } from "react";
import NotLoggedInNavbar from "../components/NavbarForNonLoggedInUsers";

import "twin.macro";

export default function Basic() {
  return (
    <>
      {/* <NotLoggedInNavbar /> */}
      {/* <DonateButtonsContainer /> */}
      <DonateButtonsContainerComingSoon />
    </>
  );
}

function DonateButtonsContainerComingSoon(props) {
  return (
    <>
      <div tw="flex flex-col h-screen items-center justify-center bg-gray-900">
        <div tw="rounded mx-auto w-full p-4">
          <div tw="mb-6 text-gray-400">
            <p tw="text-4xl text-center">Coming soon</p>

            <p tw="font-mono text-lg text-center px-8">
              We'll have links to donate here soon.
            </p>
            <a href="/">
              <button tw="w-48 mx-auto mt-4 text-lg font-semibold bg-green-400 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function DonateButtonsContainer(props) {
  return (
    <>
      <div
        tw="flex flex-col h-screen items-center justify-center bg-blue-800 bg-gray-100
        "
      >
        {/* <div tw="flex flex-col h-screen items-center justify-center bg-gray-900"> */}
        <div tw="bg-white rounded mx-auto w-1/2 border shadow p-4">
          {/* <div tw="bg-white flex flex-col h-screen items-center justify-center rounded mx-auto w-3/4 border shadow"> */}
          {/* <div tw="flex items-center justify-center h-screen rounded w-3/4 border shadow"> */}

          <div tw="mb-6">
            <p
              tw="text-6xl text-center"
              style={{
                fontFamily: "basiclazer",
              }}
            >
              {">"}Donate
            </p>
            {/* <p tw="font-mono text-lg text-gray-800 text-center">
              Like what we're doing here? Want to see us become successful? Help
              support us!
            </p> */}
            {/* <p tw="font-mono text-lg text-gray-800 text-center">
              We need your support, please consider donating to help us!
            </p> */}
            <p tw="font-mono text-lg text-gray-800 text-center">
              We need your support
            </p>
            {/* <p tw="font-mono text-sm text-gray-800 text-center mt-2">
              A little help can go a long way..
            </p> */}
          </div>

          <div tw="flex py-4">
            <DonateInput />
          </div>

          <div tw="flex pb-4">
            <DonateButton amount={3} />
            <DonateButton amount={5} />
            <DonateButton amount={10} />
            <DonateButton amount={20} />
          </div>

          <DonateMessageArea />
          <DonateSubmitButton />
        </div>
      </div>
    </>
  );
}

function DonateButton(props) {
  // amount

  function DonateButtonAction() {
    console.log("Donate Button Clicked");
  }

  return (
    <>
      <button
        tw="flex-shrink bg-gray-400 hover:bg-gray-500 bg-green-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-1/4 mx-1"
        onClick={DonateButtonAction}
      >
        ${props.amount}
      </button>
    </>
  );
}

function DonateInput(props) {
  // need to make the dollar sign float left
  // need to make the input amount center

  return (
    <>
      <div tw="w-full md:w-full mt-2">
        <input
          // tw="bg-gray-100 bg-white rounded border border-gray-400 leading-normal
          // resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500
          // focus:outline-none focus:bg-white"

          tw="w-full resize-none h-20"
          type="number"
          placeholder="$50.00"
          class="input-donate-amount"
        ></input>
      </div>
    </>
  );
}

function DonateMessageArea(props) {
  // amount

  return (
    <>
      <div tw="w-full md:w-full mb-2 mt-2">
        <textarea
          tw="bg-gray-100 bg-white rounded border border-gray-400 leading-normal 
          resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500 
          focus:outline-none focus:bg-white"
          name="body"
          placeholder="Donation Message"
        ></textarea>
      </div>
    </>
  );
}

function DonateSubmitButton(props) {
  return (
    <>
      <button tw="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        Donate
      </button>
    </>
  );
}

// notes
// edit placeholder text
// https://css-tricks.com/almanac/selectors/p/placeholder/
// https://stackoverflow.com/questions/2913236/html-text-input-field-with-currency-symbol
