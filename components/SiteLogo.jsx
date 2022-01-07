/* eslint-disable react/prop-types */
import React from "react";
import "twin.macro";

const SiteLogo = ({ big }) => (
  <>
    <span
      tw="flex justify-center text-white"
      style={{
        fontFamily: "Pacifico",
        fontSize: big ? 90 : 60,
        // color: '#ff27e1',
        // fontSize: 80,
      }}
    >
      iCare
    </span>
  </>
);

export default SiteLogo;
