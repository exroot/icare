// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template

import React, { useState, useEffect } from "react";

import tw, { css } from "twin.macro";

import { Line } from "react-chartjs-2";

import "twin.macro";

import {
  FaCube,
  FaAngleDown,
  FaAngleRight,
  FaRegCircle,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUsers,
  FaUser,
  FaSortUp,
  FaSortDown,
  FaCaretUp,
} from "react-icons/fa";

const iconSize = 24;

function FakeNavbar() {
  return (
    <>
      <nav tw="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div tw="flex items-center flex-shrink-0 text-white mr-6">
          <span tw="font-semibold text-xl tracking-tight">SHOUTMO</span>
        </div>

        <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div tw="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              tw="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white"
            >
              link
            </a>
          </div>
          <div>
            <a
              href="#"
              tw="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
            >
              button
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function ProfilePhoto(props) {
  return (
    <>
      <div tw=" px-6 pb-0">
        <div tw="text-center sm:text-left sm:flex">
          <img
            tw="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
            src={props.img}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

function QRcode(props) {
  return (
    <>
      <div tw="flex w-40 h-40 mx-auto bg-gray-400 shadow-sm rounded-lg overflow-hidden">
        <img
          tw="object-contain mx-auto"
          // placeholder we need to add a qrcode library, check lnkr-frontend for the QR Code
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
        />
      </div>
    </>
  );
}

function TopCard(props) {
  return (
    <>
      <div tw="max-w-sm flex p-6 m-4 bg-white rounded-lg shadow-xl border">
        <div tw="flex-shrink-0">
          <div tw="bg-gray-400 rounded p-2">
            <FaCube tw="h-8 w-8" />
          </div>
        </div>

        <div tw="ml-6 pt-1">
          <h4 tw="text-xl text-gray-900 leading-tight">Title</h4>
          <p tw="text-base text-gray-600 leading-normal">Subtitle</p>
        </div>

        <div tw="flex flex-row ml-6 pt-1">
          <p tw="text-xl text-gray-600 font-extrabold self-center flex-1 text-gray-800 ">
            77
          </p>
          {/* <FaSortUp tw="" /> */}
        </div>
      </div>
    </>
  );
}

function OtherCard(props) {
  return (
    <>
      <div tw="max-w-sm flex p-6 m-4 bg-white rounded-lg shadow-xl">
        <div tw="flex-shrink-0">
          <div tw="h-12 w-12 bg-gray-400">
            <FaCube tw="h-12 w-12" />
          </div>
        </div>

        <div tw="ml-6 pt-1">
          <h4 tw="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p tw="text-base text-gray-600 leading-normal">
            You have a new message!
          </p>
        </div>

        <div tw="ml-6 pt-1">
          <p tw="text-xl text-gray-600 leading-normal">77</p>
        </div>
      </div>
    </>
  );
}

function MetricCard(props) {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/3 p-3">
          <div tw="bg-white border rounded shadow p-2">
            <div tw="flex flex-row items-center">
              <div tw="flex-shrink pr-4">
                <div tw="rounded p-3 bg-green-700">
                  <FaCube />
                </div>
              </div>
              <div tw="flex-1 text-right md:text-center">
                {/* <div tw="flex flex-row text-right md:text-center"> */}
                <h5 tw="uppercase text-gray-400">Total Revenue</h5>
                <h3 tw="text-3xl">
                  $3249
                  <span tw="text-green-400">
                    <FaCaretUp />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TopDashboardCards(props) {
  return (
    <>
      <div tw="flex flex-row justify-start p-8 border-b mb-8">
        <TopCard />
        <TopCard />
        <MetricCard />
      </div>
      <div tw="">
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </div>
    </>
  );
}

function MiddleDashboardCards(props) {
  return (
    <>
      <div tw="flex flex-row justify-start p-4 bg-gray-200">
        <OtherCard />
      </div>
    </>
  );
}
export default function Dashboard() {
  return (
    <>
      <FakeNavbar />
      <TopDashboardCards />

      <ChartTest />
      <ChartTest />
    </>
  );
}

function ChartTest(props) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(70,192,192,1)",
      },

      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  // const options = {
  //   title: {
  //     display: true,
  //     text: "Chart Title",
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           suggestedMin: 0,
  //           suggestedMax: 100,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      {/* <div tw="flex flex-row justify-start p-4 bg-white"> */}
      <div tw="w-1/2 bg-white shadow-xl p-4 m-4 border rounded mx-auto">
        <p>Chart Title</p>

        <Line
          data={data}
          legend={legend}
          // options={options}
          width={400}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------------

// function DashboardLayout() {

// let user = {
//   username: "MattMEGAbit",
//   fullname: "Matt Brittingham",
//   banner_picture:
//     "https://images.unsplash.com/photo-1522093537031-3ee69e6b1746",
//   profile_picture: "https://www.placecage.com/300/300",
//   bio:
//     "This is just some words for the fake bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.",
// };

//   return (
//     <>
//       <p>{user.username}</p>

//       <h1
//         tw="text-secondary w-full font-bold text-5xl text-left pl-4"
//         style={{
//           fontFamily: "basiclazer",
//         }}
//       >
//         Shoutmo
//       </h1>

//       <h1
//         tw="text-secondary w-full font-bold text-5xl text-left pl-4"
//         style={{
//           fontFamily: "Inter",
//         }}
//       >
//         Shoutmo
//       </h1>
//       <div tw="px-6 py-4">
//         <div tw="font-bold text-xl mb-2">The Coldest Sunset</div>
//         <p tw="text-gray-700 text-base">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
//           quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
//           nihil.
//         </p>
//       </div>

//       <div tw="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
//         <div tw="flex-shrink-0">
//           <div tw="h-12 w-12 bg-gray-400">
//             <FaCube tw="h-12 w-12" />
//           </div>
//         </div>
//         <div tw="ml-6 pt-1">
//           <h4 tw="text-xl text-gray-900 leading-tight">ChitChat</h4>
//           <p tw="text-base text-gray-600 leading-normal">
//             You have a new message!
//           </p>
//         </div>
//       </div>

//       <div tw="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <div tw="sm:flex sm:items-center px-6 py-4">
//           <div tw="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full bg-gray-400">
//             {/* <FaCube tw="flex flex-shrink-0" /> */}
//           </div>
//           <div tw="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
//             <p tw="text-xl leading-tight">Erin Lindford</p>
//             <p tw="text-sm leading-tight text-gray-600">Product Engineer</p>
//             <div tw="mt-4">
//               <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
//                 Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
