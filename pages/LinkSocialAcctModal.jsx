// TODO - incorporate this into social link button a shoutout button
// tutorial - https://scotch.io/tutorials/recreate-the-tweet-creation-modal-with-tailwind-css

import React, { useState, useEffect } from "react";

import "twin.macro";

function DescriptionText() {
  return (
    <>
      <div tw="bg-white rounded-lg p-4 mt-4">
        <p tw="text-left text-gray-500">
          This is just some small text. Instuction for what to do will go here.
        </p>
        <HelpButton />
      </div>
    </>
  );
}

function HelpButton() {
  return (
    <>
      <div tw="flex items-center justify-between">
        <a
          tw="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Help
        </a>
      </div>
    </>
  );
}

function LinkAccountButton() {
  return (
    <>
      <button
        tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        type="button"
      >
        Automagically Link Account
      </button>
    </>
  );
}

function InputForSocialAcct() {
  return (
    <>
      <form tw="">
        <div tw="mb-4">
          <label tw="block text-white text-lg font-bold mb-2" for="username">
            Username
          </label>
          <input
            tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
      </form>
    </>
  );
}

export default function LinkSocialAcctModal() {
  return (
    <>
      <div tw="h-screen flex items-center justify-center bg-black bg-opacity-50">
        {/* <!-- modal --> */}
        <div tw="w-3/4 rounded-lg shadow-lg bg-blue-900">
          {/* <!-- header --> */}
          <div tw="border-b border-blue-400 text-blue-400 flex flex-row">
            <div tw="p-4">X</div>
            <div tw="p-4">Add social link to your account</div>
          </div>
          {/* <!-- body --> */}
          <div tw="p-4">
            <div tw="w-full max-w-lg px-8 pt-6 pb-8 mb-4">
              <InputForSocialAcct />
              <LinkAccountButton />
              {/* <DescriptionText /> */}
            </div>
            {/* <!-- footer --> */}
            <div tw="pl-20 pb-4 pr-4 flex justify-between">
              <div tw="flex text-2xl items-center"></div>
              <div>
                <button tw="bg-blue-400 rounded-full text-blue-100 inline-block py-2 px-4">
                  Add Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div tw="mb-6">
// <label
//   tw="block text-gray-700 text-sm font-bold mb-2"
//   for="password"
// >
//   Password
// </label>
// <input
//   tw="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
//   id="password"
//   type="password"
//   placeholder="******************"
// />
// <p tw="text-red-500 text-xs italic">Please choose a password.</p>
// </div>
