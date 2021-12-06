// ShareableEmbed
import React, { useState, useEffect } from "react";

import { FaAngleRight } from "react-icons/fa";
import PlatformIcon from "../../components/PlatformIcon";

import "twin.macro";

export default function EmbedCardPage() {
  return (
    <>
      {/* // embed example  */}

      <div tw="flex-col w-full min-h-screen flex items-center justify-center px-5 py-5 bg-gray-400">
        <SectionTitle words="darkmode embed" />
        <div tw="flex-row min-w-full flex items-center justify-center px-5 py-5">
          <ShoutmoEmbedWithLinks />
          <ShoutmoEmbedWithLinksAlt />
        </div>
      </div>

      {/* // embed example  */}

      <div tw="flex-col w-full min-h-screen flex items-center justify-center px-5 py-5 bg-gray-400">
        <SectionTitle words="lightmode embed" />
        <div tw="flex-row min-w-full flex items-center justify-center px-5 py-5">
          <ShoutmoEmbedWithLinksLight />
          <ShoutmoEmbedWithLinksLightAlt />
        </div>
      </div>

      {/* // embed example  */}

      {/* <div tw="flex bg-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "> */}

      <div tw="flex-col w-full min-h-screen flex items-center justify-center px-5 py-5 bg-gray-400">
        <SectionTitle words="Other embed examples" />
        <div tw="flex-col min-w-full flex items-center justify-center px-5 py-5">
          <EmbedCardVideoOverlayTest />
          <EmbedCardLarge />
          <EmbedCardVideoOverlay />
          <EmbedCardVideoOverlayFour />
          <EmbedCardVideoOverlayFive />
          <EmbedCardVideoOverlayOne />
          <EmbedCardVideoOverlayTwo />
          <EmbedCardVideoOverlayThree />
        </div>
      </div>
    </>
  );
}

function SectionTitle(props) {
  return (
    <>
      <div tw="w-full bg-white border px-8 m-8 shadow-lg rounded">
        <p tw="text-xl p-4 font-bold">{props.words}</p>
      </div>
    </>
  );
}

function ShoutmoEmbedWithLinksLight() {
  return (
    <>
      <div tw="flex bg-white shadow-lg rounded-lg w-auto m-2">
        <div tw="flex items-start px-4">
          <div>
            <p
              tw="text-6xl leading-none -mb-12 mx-4"
              style={{
                color: "#ff27e1",
                fontFamily: "basiclazer",
                // fontSize: 80,
              }}
            >
              SHOUTMO
            </p>
            <div tw="flex items-center justify-between">
              <div tw="">
                <div tw="w-full flex mb-4">
                  <div tw="overflow-hidden rounded-full w-12 h-12"></div>
                </div>
              </div>
              {/* // add space between  */}
              <div tw="w-32"></div>
              {/* <Qrcodewithborder /> */}
            </div>

            <LinkButtonSection />
            <p tw="mt-3 text-gray-900 text-xs">
              Powered by <a href="https://www.shoutmo.com">SHOUTMO</a>
            </p>
            <div tw="mt-4 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function ShoutmoEmbedWithLinksLightAlt() {
  return (
    <>
      {/* <div tw="flex bg-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "> */}
      <div tw="flex bg-white shadow-lg rounded-lg w-auto m-2">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <TopLeft />
              {/* // add space between  */}
              <div tw="w-32"></div>
              <Qrcodewithborder />
            </div>

            <LinkButtonSection />
            <p tw="mt-3 text-gray-900 text-xs">
              Powered by <a href="https://www.shoutmo.com">SHOUTMO</a>
            </p>
            <div tw="mt-4 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function ShoutmoEmbedWithLinks() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2">
        <div tw="flex items-start px-4">
          <div>
            <p
              tw="text-6xl leading-none -mb-12 mx-4"
              style={{
                color: "#ff27e1",
                fontFamily: "basiclazer",
                // fontSize: 80,
              }}
            >
              SHOUTMO
            </p>
            <div tw="flex items-center justify-between">
              <div tw="">
                <div tw="w-full flex mb-4">
                  <div tw="overflow-hidden rounded-full w-12 h-12"></div>
                </div>
              </div>
              {/* // add space between  */}
              <div tw="w-32"></div>
              {/* <Qrcodewithborder /> */}
            </div>

            <LinkButtonSection />
            <p tw="mt-3 text-gray-200 text-xs">
              Powered by <a href="https://www.shoutmo.com">SHOUTMO</a>
            </p>
            <div tw="mt-4 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function ShoutmoEmbedWithLinksAlt() {
  return (
    <>
      {/* <div tw="flex bg-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "> */}
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <TopLeft />
              {/* // add space between  */}
              <div tw="w-32"></div>
              <Qrcodewithborder />
            </div>

            <LinkButtonSection />
            <p tw="mt-3 text-gray-200 text-xs">
              Powered by <a href="https://www.shoutmo.com">SHOUTMO</a>
            </p>
            <div tw="mt-4 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function LinkButtonSection() {
  return (
    <>
      <div tw="flex flex-col items-center justify-between">
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
        <LinkButton platformName="Twitter" />
      </div>
    </>
  );
}

// components/Profile/ProfileCard.jsx

function LinkButton({ platformName, identifier, url }) {
  const iconSize = 24;
  return (
    <>
      <a
        target="_blank"
        href={url}
        rel={"noopener noreferrer"}
        tw="py-3 my-1 px-4 bg-white text-white bg-purple-500 border-none font-semibold 
        hover:bg-purple-800 rounded flex flex-row w-full justify-between
        transition duration-200 ease-in-out transform 
        inset-0 transform hover:border-purple-500 hover:translate-x-2 transition duration-200 mx-8"
      >
        <div tw="">
          <PlatformIcon icon={platformName} />
        </div>
        <div tw="items-center">{platformName}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </a>
    </>
  );
}

function EmbedCardVideoOverlayTest() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto p-2 h-auto">
        <div tw="flex items-start ">
          <div>
            {/* start left */}
            <div tw="flex items-center h-32">
              <div tw="mr-1">
                {/* pink logo */}
                <p
                  tw="text-6xl leading-none -mt-8"
                  // tw="text-5xl leading-normal"
                  style={{
                    color: "#ff27e1",
                    fontFamily: "basiclazer",
                  }}
                >
                  SHOUTMO
                </p>
                {/* pic */}
                <div tw="flex flex-row w-full">
                  <img
                    tw="rounded-full w-12 h-12"
                    src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
                    alt=""
                  />
                  <div tw="flex-grow pl-3">
                    <p tw="font-bold text-gray-400">Joe Blow</p>
                    <p tw="text-xs text-gray-500">@joe.blow</p>
                  </div>
                </div>
              </div>
              {/* end left */}
              {/* start right */}
              <div tw="float-right">
                <img
                  tw="object-contain rounded p-1 bg-white h-32"
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
                />
              </div>
              {/* end right */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardLarge() {
  return (
    <>
      {/* <div tw="flex bg-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "> */}
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <TopLeft />
              {/* // add space between  */}
              <div tw="w-32"></div>
              <Qrcodewithborder />
            </div>
            <p
              tw="mt-3 text-gray-600 text-xs"
              // style={{
              //   color: "#001eff",
              //   color: "#01FFFF",
              //   // fontFamily: "Inter",
              // }}
            >
              http://www.shoutmo.com/username
            </p>
            <div tw="mt-4 flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlay() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <TopLeft />
              <Qrcodewithborder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlayOne() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <div tw="">
                <SHOUTMOlogo />
              </div>
              <Qrcodewithborder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlayTwo() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <div tw="">
                <div tw="w-full flex mb-4">
                  <div tw="overflow-hidden rounded-full w-12 h-12">
                    <img
                      src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
                      alt=""
                    />
                  </div>
                  <div tw="flex-grow pl-3">
                    <h6 tw="font-bold text-gray-400">Joe Blow</h6>
                    <p tw="text-xs text-gray-500">@joe.blow</p>
                  </div>
                </div>
              </div>
              <Qrcodewithborder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlayThree() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <div tw="">
                <div tw="w-full flex mb-4">
                  <div tw="overflow-hidden rounded-full w-12 h-12">
                    <img
                      src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
                      alt=""
                    />
                  </div>
                  <div tw="flex-grow pl-3">
                    <h6 tw="font-bold text-gray-400">Joe Blow</h6>
                    <p tw="text-xs text-gray-500">@joe.blow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlayFour() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center justify-between">
              <div tw="">
                <div tw="w-full flex mb-4">
                  <SHOUTMOlogo />
                </div>
              </div>
              <Qrcodewithborder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmbedCardVideoOverlayFive() {
  return (
    <>
      <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
        <div tw="flex items-start px-4">
          <div>
            <div tw="flex items-center">
              <div tw="">
                <div tw="flex-col w-3/4 flex mb-4">
                  <SHOUTMOlogo />
                  <h6 tw="text-gray-400">
                    Scan this qr code with your phone to follow me.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <Qrcodewithborder />
        </div>
      </div>
    </>
  );
}
function SHOUTMOlogo() {
  return (
    <>
      <p
        tw="text-5xl leading-none"
        // tw="text-5xl leading-normal"
        style={{
          color: "#ff27e1",
          fontFamily: "basiclazer",
          // fontSize: 80,
        }}
      >
        SHOUTMO
      </p>
    </>
  );
}

function Qrcodewithborder() {
  return (
    <>
      <div tw="float-right">
        <div tw="relative h-24 w-24 bg-white p-1 m-2 rounded shadow-sm">
          <img
            tw="object-contain mx-auto rounded"
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
          />
        </div>
      </div>
    </>
  );
}

// function Qrcodewithborder() {
//   return (
//     <>
//       {/* <div tw="bg-white z-10">
//         <div tw=" top-0 right-0 float-right -mb-48 p-px "> */}
//       <div tw="relative top-0 right-0 h-24 w-24 bg-white float-right -mb-48 p-2 m-2 rounded shadow-sm">
//         <img
//           tw="object-contain mx-auto rounded"
//           src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
//         />
//       </div>
//       {/* </div>
//       </div> */}
//     </>
//   );
// }

function TopLeft() {
  return (
    <>
      <div tw="">
        <SHOUTMOlogo />
        {/* <Qrcodewithborder /> */}
        <div tw="w-full flex mb-4">
          <div tw="overflow-hidden rounded-full w-12 h-12">
            <img
              src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
              alt=""
            />
          </div>
          <div tw="flex-grow pl-3">
            <h6 tw="font-bold text-gray-400">Joe Blow</h6>
            <p tw="text-xs text-gray-500">@joe.blow</p>
          </div>
        </div>
      </div>
    </>
  );
}
