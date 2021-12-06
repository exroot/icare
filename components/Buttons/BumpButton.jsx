import PropTypes from "prop-types";
import Link from "next/link";
import { useState, useEffect } from "react";
import tw, { css } from "twin.macro";

export default function BumpButton() {
  function handleBump() {
    console.log("clicked bump button");
  }
  return (
    <>
      <button
        tw="inline-flex items-center bg-white hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border border-gray-900 rounded-lg"
        onClick={handleBump}
      >
        <img tw="hover:bg-white h-6 w-6 mr-2" src="/img/bump-icon.png" />
        <span>Bump</span>
      </button>
    </>
  );
}

{
  /* alt version - gray button
  <button
tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
onClick={handleBump}
>
<img tw="hover:bg-white h-6 w-6 mr-2" src="/img/bump-icon.png" />
<span>Bump</span>
</button> */
}
