// TODO - incorporate this into creating a shoutout button
// tutorial - https://scotch.io/tutorials/recreate-the-tweet-creation-modal-with-tailwind-css

import React, { useState, useEffect } from "react";

import {
  FaAngleDown,
  FaTwitter,
  FaCheckCircle,
  FaRegCircle,
  FaCube,
} from "react-icons/fa";

import "twin.macro";

export default function ShoutoutModalTest() {
  return (
    <>
      <div tw="h-screen flex items-center justify-center bg-black bg-opacity-50">
        {/* <!-- modal --> */}
        <div tw="w-1/2 rounded-lg shadow-lg bg-blue-900">
          {/* <!-- header --> */}
          {/* <div tw="border-b border-blue-400 text-blue-400">
            <div tw="p-4">X</div>
          </div> */}

          {/* <!-- body --> */}
          <div tw="relative p-4 w-3/4 mx-auto">
            {/* testing */}

            <Shoutouts />

            {/* testing */}

            <ShareButton title="Twitter" />
            <ShareButton title="Facebook" />
            <ShareButton title="Youtube" />

            <p tw="py-8 w-full mx-auto text-white text-center">OR</p>

            <form tw="w-full mx-auto px-8">
              <div tw="flex items-center border-b border-green-500 py-2 bg-gray-300 px-2">
                <input
                  tw="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value="http://www.shoutmo.com/@username"
                  aria-label="Full name"
                  id="foo"
                />
                <button
                  tw="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                  data-clipboard-target="#foo"
                >
                  copy
                </button>
              </div>
            </form>
          </div>

          {/* <!-- footer --> */}
          <div tw="pl-20 pb-4 pr-4 flex justify-between">
            <div tw="flex text-2xl items-center"></div>
            <div>
              <button tw="bg-blue-400 rounded-full text-blue-100 inline-block py-2 px-4">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ShareButton(props) {
  const iconSize = 24;

  return (
    <>
      <button tw="py-3 my-3 px-4 bg-white text-white bg-indigo-400 font-semibold hover:shadow rounded flex flex-row w-full justify-center">
        <div tw="px-2">
          <FaCube size={iconSize} />
        </div>
        <div tw="px-2">Share to {props.title}</div>
      </button>
    </>
  );
}

function Shoutouts(props) {
  return (
    <>
      <div tw="flex flex-row w-full p-2 mb-6 border border-pink-600 overflow-x-auto bg-transparent">
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
      </div>
    </>
  );
}
function Shoutout(props) {
  return (
    <>
      <div tw="bg-white m-2 rounded border">
        <div tw="p-2 w-20 h-20 rounded shadow-sm">
          <p tw="p-2 text-sm leading-tight text-gray-600 sm:flex sm:items-center flex flex-col justify-between">
            <FaCube size="32" />
            <p>Twitter</p>
          </p>
        </div>
      </div>
    </>
  );
}
