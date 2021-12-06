import React from "react";

import {
  FaMusic,
  FaGamepad,
  FaFootballBall,
  FaKeyboard,
  FaNewspaper,
  FaMicrophone,
  FaVideo
} from "react-icons/fa";

import "twin.macro";

export default function categories() {
  return (
    <>
      <p tw="text-4xl">Categories testing page</p>
      <CartegoryCard title="Gaming" icon={<FaGamepad />} />
      <CartegoryCard title="Streaming" icon={<FaVideo />} />
      <CartegoryCard title="Podcast" icon={<FaMicrophone />} />
      <CartegoryCard title="News" icon={<FaNewspaper />} />
      <CartegoryCard title="Programming" icon={<FaKeyboard />} />
      <CartegoryCard title="Sports" icon={<FaFootballBall />} />
      <CartegoryCard title="Music" icon={<FaMusic />} />
    </>
  );
}

function CartegoryCard(props) {
  return (
    <>
      <div tw="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl items-center bg-gray-800 text-white my-2">
        <div tw="flex-shrink-0 text-xl font-bold mr-2">{props.icon}</div>
        <p tw="text-2xl font-bold">{props.title}</p>
      </div>
    </>
  );
}
