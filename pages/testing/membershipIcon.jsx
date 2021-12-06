import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import tw, { css } from "twin.macro";

export default function Basic() {
  return (
    <>
      <div tw="flex flex-col justify-center mx-auto content-center">
        <p tw="font-bold mb-2 ml-6">Membership Icon</p>
        <DemoCard />
      </div>
    </>
  );
}

function DemoCard() {
  return (
    <>
      <div tw="py-8 px-8 max-w-sm mx-auto bg-white rounded-lg shadow-md sm:py-4 sm:flex sm:items-center sm:my-0 sm:mx-6">
        <AvatarWithMembership />
        <div tw="text-center sm:text-left ml-2">
          <div tw="">
            <p tw="text-lg text-black font-semibold">@JohnnyJives</p>
            <p tw="text-gray-500 font-medium">Johnny Jive</p>
          </div>
          <button
            tw="px-4 py-1 text-sm text-purple-600 font-semibold 
          rounded-full border border-purple-200 hover:text-white 
          hover:bg-purple-600 hover:border-transparent focus:outline-none 
          "
          >
            Message
          </button>
        </div>
      </div>
    </>
  );
}

function AvatarWithMembership() {
  return (
    <>
      <div tw="flex space-x-2">
        <div tw="relative w-24 h-24">
          <img
            tw="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="user image"
          />
          <div
            tw="absolute bottom-0 right-0 rounded-full p-1 w-8 h-8 border-4 border-white z-20"
            css={GoldColorOne}
          >
            <FaStar color="white" size={16} />
          </div>
        </div>
      </div>
    </>
  );
}

// icon background color
//   background: linear-gradient(to right, #fcf6ba, #bf953f);
const GoldColorOne = css`
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #fcf6ba 8%, #D1B464 20%, transparent 80%),
             radial-gradient(ellipse farthest-corner at left top, #fcf6ba 0%, #FFFFAC 8%, #FEDB37 20%);
}
`;
