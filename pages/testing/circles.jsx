import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import tw, { css } from "twin.macro";

export default function Basic() {
  return (
    <>
      <div tw="flex flex-col justify-center mx-auto content-center">
        <p tw="font-bold mb-2 ml-6">show peeps in your circle</p>
        <DemoCard />
      </div>
    </>
  );
}

function Circle() {
  return (
    <>
      <ul tw="list-disc space-y-2">
        {/* <li tw="flex items-start">
          <p tw="ml-2">blah blah blah</p>
        </li> */}
        <li tw="flex items-center ">
          <p tw="text-xl font-bold">Circle</p>

          <div tw="flex">
            <img
              tw="w-12 h-12 rounded-full border-4 border-white"
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
              alt=""
            />
            <span tw="flex items-center justify-center font-semibold text-gray-600 w-12 h-12 rounded-full bg-gray-200 border-4 border-white -ml-4">
              +3
            </span>
          </div>
        </li>
        {/* <li tw="flex items-start">
          <span tw="h-6 flex items-center sm:h-6">
            <svg
              tw="flex-shrink-0 h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <p tw="ml-2">blah blah blah</p>
        </li> */}
      </ul>
    </>
  );
}

function DemoCard() {
  return (
    <>
      <div tw="py-8 px-8 max-w-sm mx-auto bg-white rounded-lg shadow-md sm:py-4 sm:flex sm:items-center sm:my-0 sm:mx-6">
        <Circle />
      </div>
    </>
  );
}
