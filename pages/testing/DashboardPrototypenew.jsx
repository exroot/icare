// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template
// https://tailwindcss.com/docs/table-layout
// scroll to - https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element

import React, { useState, useEffect } from "react";
import NotLoggedInNavbar from "../../components/NavbarForNonLoggedInUsers";
import Chart from "chart.js"; // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2"; // react plugin used to create charts

import "twin.macro";

import {
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
  FaBox,
} from "react-icons/fa";

import { FiSlash } from "react-icons/fi";
import {
  RiErrorWarningFill,
  RiErrorWarningLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

{
  /* <NotLoggedInNavbar />
      <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">Admin Dashboard</div>
      <div tw="container mx-auto">
        <TopMetrics />
        <SearchBar />
        <TestTable />
      </div>

      <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">Review Screen</div>
      <ReviewCard />

      <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">
        Show Traffic Analysis
      </div>
      <ShowCharts /> */
}

export default function AdminDashboard() {
  return (
    <>
      <div tw="h-screen flex">
        <nav
          tw="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
		transition duration-500 ease-in-out"
        >
          <div tw="flex flex-col items-center">
            <h1
              tw="text-5xl font-light text-pink-600 dark:text-pink-400 mt-0
				transition duration-500 ease-in-out"
              style={{
                fontFamily: "basiclazer",
              }}
            >
              Shoutmo
            </h1>
          </div>

          <ul>
            <li
              tw="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
            >
              <button
                tw="focus:text-pink-500 focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
              >
                <span tw="flex items-center">
                  <FaUser tw="h-4 w-4 fill-current" size={16} />
                  <span tw="ml-4 capitalize">option</span>
                </span>
              </button>
            </li>

            <li
              tw="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
            >
              <button
                tw="focus:text-pink-500 focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
              >
                <span tw="flex items-center">
                  <FaUser tw="h-4 w-4 fill-current" size={16} />
                  <span tw="ml-4 capitalize">option</span>
                </span>
              </button>
            </li>

            <li
              tw="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
            >
              <button
                tw="focus:text-pink-500 focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
              >
                <span tw="flex items-center">
                  <FaUser tw="h-4 w-4 fill-current" size={16} />
                  <span tw="ml-4 capitalize">option</span>
                </span>
              </button>
            </li>

            <li
              tw="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
            >
              <button
                tw="focus:text-pink-500 focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
              >
                <span tw="flex items-center">
                  <FaUser tw="h-4 w-4 fill-current" size={16} />
                  <span tw="ml-4 capitalize">option</span>
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <main
          tw="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
		duration-500 ease-in-out"
        >
          <div
            tw="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out"
          >
            {/* top of dashboard  */}

            <h2 tw="text-4xl font-medium capitalize">Admin Dashboard</h2>
            <div tw="mt-1 mb-4 flex items-center justify-between">
              <span tw="text-sm">
                wallet balance
                <strong>71.180,00kr</strong>
              </span>

              <div tw="flex items-center select-none">
                <span tw="hover:text-pink-500 cursor-pointer mr-3">
                  {/* <svg viewBox="0 0 512 512" tw="h-5 w-5 fill-current"> */}
                  <FaUser tw="h-4 w-4 fill-current" size={16} />
                </span>

                <input
                  tw="bg-transparent focus:outline-none"
                  placeholder="Search in activity"
                />
              </div>

              <button
                tw="flex items-center focus:outline-none border
					rounded-full py-2 px-6 leading-none border-gray-500
					select-none hover:text-pink-600 hover:bg-pink-300"
              >
                <svg tw="h-5 w-5 fill-current mr-1" viewBox="0 0 24 24">
                  <path
                    d="M12 1L8 5h3v9h2V5h3m2 18H6a2 2 0 01-2-2V9a2 2 0
							012-2h3v2H6v12h12V9h-3V7h3a2 2 0 012 2v12a2 2 0 01-2
							2z"
                  ></path>
                </svg>
                <span>Export</span>
              </button>

              <div tw="flex items-center select-none">
                <span>Filter</span>
                <button
                  tw="ml-3 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out"
                >
                  <svg tw="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0
								01-1.41 0l-2.01-2.01a.989.989 0
								01-.29-.83V12h-.03L4.21 4.62a1 1 0
								01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
								.43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"
                    ></path>
                  </svg>
                </button>
                <button
                  tw="ml-2 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out"
                >
                  <svg tw="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                    ></path>
                  </svg>
                </button>
                <button
                  tw="ml-2 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out"
                >
                  <svg tw="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4
								4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21
								3.58-4 8-4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div
              tw="border dark:border-gray-700 transition duration-500
				ease-in-out"
            ></div>
            <div tw="flex flex-col mt-2">
              {/* <NewCard /> */}
              <AdminDashboardContent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// ----------------------------------------------------------------------------------------------

function NewCard() {
  return (
    <>
      {/* <!-- card --> */}

      <div tw="flex flex-row mt-2">
        <div
          tw="flex w-full items-center justify-between bg-white
              dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
              dark:border-green-300"
        >
          <div tw="flex">
            {/* <img
                        tw="h-12 w-12 rounded-full object-cover"
                       
                      /> */}

            <div tw="flex flex-col ml-6">
              <span tw="text-lg font-bold">Amazon</span>
              <div tw="mt-4 flex">
                <div tw="flex">
                  <svg
                    tw="h-5 w-5 fill-current
                        dark:text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4
                          4 4 0 01-4-4 4 4 0 014-4m0
                          10c4.42 0 8 1.79 8
                          4v2H4v-2c0-2.21 3.58-4 8-4z"
                    ></path>
                  </svg>
                  <span
                    tw="ml-2 text-sm text-gray-600
                        dark:text-gray-300 capitalize"
                  >
                    Niccolo perra
                  </span>
                </div>

                <div tw="flex ml-6">
                  <svg
                    tw="h-5 w-5 fill-current
                        dark:text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19
                          19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
                          0-2 .89-2 2v14a2 2 0 002 2h14a2 2
                          0 002-2V5a2 2 0 00-2-2h-1V1m-1
                          11h-5v5h5v-5z"
                    ></path>
                  </svg>
                  <span
                    tw="ml-2 text-sm text-gray-600
                        dark:text-gray-300 capitalize"
                  >
                    13 aug 2016
                  </span>
                </div>

                <div tw="flex ml-6">
                  <svg
                    tw="h-5 w-5 fill-current
                        dark:text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 2.05v2.02c3.95.49 7 3.85 7
                          7.93 0 3.21-1.92 6-4.72 7.28L13
                          17v5h5l-1.22-1.22C19.91 19.07 22
                          15.76 22
                          12c0-5.18-3.95-9.45-9-9.95M11
                          2c-1.95.2-3.8.96-5.32 2.21L7.1
                          5.63A8.195 8.195 0 0111 4V2M4.2
                          5.68C2.96 7.2 2.2 9.05 2
                          11h2c.19-1.42.75-2.77
                          1.63-3.9L4.2 5.68M6
                          8v2h3v1H8c-1.1 0-2 .9-2
                          2v3h5v-2H8v-1h1c1.11 0 2-.89
                          2-2v-1a2 2 0 00-2-2H6m6
                          0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
                          13c.2 1.95.97 3.8 2.22
                          5.32l1.42-1.42A8.21 8.21 0 014
                          13H2m5.11 5.37l-1.43 1.42A10.04
                          10.04 0 0011 22v-2a8.063 8.063 0
                          01-3.89-1.63z"
                    ></path>
                  </svg>
                  <span
                    tw="ml-2 text-sm text-gray-600
                        dark:text-gray-300 capitalize"
                  >
                    21 hours
                  </span>
                </div>
              </div>

              <div tw="mt-4 flex">
                <button
                  tw="flex items-center
                      focus:outline-none border rounded-full
                      py-2 px-6 leading-none border-gray-500
                      dark:border-gray-600 select-none
                      hover:bg-blue-400 hover:text-white
                      hover:text-gray-200"
                >
                  <svg tw="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
                    <path
                      d="M14
                          12v7.88c.04.3-.06.62-.29.83a.996.996
                          0 01-1.41 0l-2.01-2.01a.989.989 0
                          01-.29-.83V12h-.03L4.21 4.62a1 1
                          0
                          01.17-1.4c.19-.14.4-.22.62-.22h14c.22
                          0 .43.08.62.22a1 1 0 01.17
                          1.4L14.03 12H14z"
                    ></path>
                  </svg>
                  <span>Select Category</span>
                </button>

                <button
                  tw="flex items-center ml-4
                      focus:outline-none border rounded-full
                      py-2 px-6 leading-none border-blue-500
                      dark:border-blue-600 select-none
                      hover:bg-blue-400 hover:text-white
                      hover:text-gray-200"
                >
                  <svg
                    tw="h-5 w-5 fill-current mr-2
                        text-blue-600"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M402.3 344.9l32-32c5-5
                          13.7-1.5 13.7 5.7V464c0 26.5-21.5
                          48-48 48H48c-26.5
                          0-48-21.5-48-48V112c0-26.5
                          21.5-48 48-48h273.5c7.1 0 10.7
                          8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
                          2.3-5.7
                          2.3H48v352h352V350.5c0-2.1.8-4.1
                          2.3-5.6zm156.6-201.8L296.3
                          405.7l-90.4 10c-26.2
                          2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
                          17.1c22.9-22.9 59.9-22.9 82.7
                          0l43.2 43.2c22.9 22.9 22.9 60 .1
                          82.8zM460.1 174L402 115.9 216.2
                          301.8l-7.3 65.3 65.3-7.3L460.1
                          174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
                          0L436 82l58.1 58.1
                          30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                    ></path>
                  </svg>
                  <span>Add note</span>
                </button>
              </div>
            </div>
          </div>

          <div tw="flex flex-col -mt-10 mr-20">
            <span
              tw="font-semibold text-green-500
                  dark:text-green-300"
            >
              Refunded
            </span>
            <span
              tw="font-semibold text-green-500
                  dark:text-green-300"
            >
              200 $
            </span>
            <span
              tw="text-sm text-gray-700 dark:text-gray-400
                  mt-2"
            >
              300,00kr
            </span>
          </div>
        </div>

        <div
          tw="text-center flex flex-col items-center
              justify-center bg-white dark:bg-gray-800
              dark:text-gray-300 ml-1 px-12 cursor-pointer
              hover:bg-blue-200 hover:bg-blue-500 rounded-lg"
        >
          <svg tw="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M9.47 9.65l-1.41 1.42L11
                  14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
                  .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
                  18V5h10z"
            ></path>
          </svg>
        </div>
      </div>
      {/* end card */}
    </>
  );
}

function AdminDashboardContent() {
  return (
    <>
      <div
        tw="flex flex-col
                   items-center"
      >
        {/* <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">Admin Dashboard</div> */}
        <div tw="container mx-auto">
          {/* <SearchBar /> */}
          <TestTable />
        </div>

        {/* <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">Review Screen</div> */}
        <ReviewCard />

        {/* <div tw="font-bold text-4xl mb-2 bg-gray-300 p-4">
          Show Traffic Analysis
        </div> */}
        <TopMetrics />

        <ShowCharts />
      </div>
    </>
  );
}

function ShowCharts() {
  return (
    <>
      <div>
        <BarExample />
        <LineExample />
      </div>
    </>
  );
}

const BarExample = () => (
  <div>
    <Bar
      data={barexampledata}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: true,
      }}
    />
  </div>
);

const LineExample = () => (
  <div>
    {/* <h2>Line Example</h2> */}
    <Line
      data={lineExampledata}
      width={400}
      height={400}
      options={{
        maintainAspectRatio: true,
      }}
    />
  </div>
);

const lineExampledata = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      // label: "My First dataset",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const barexampledata = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function SearchBar() {
  return (
    <>
      <div tw="w-full mx-auto py-6">
        <input
          tw="bg-white focus:outline-none border shadow border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="username"
        />
      </div>
    </>
  );
}

function ProfilePhoto(props) {
  return (
    <>
      <div tw="place-self-center">
        <img
          tw="h-8 w-8 rounded-full"
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt="profile photo"
        />
      </div>
    </>
  );
}

function TestTable() {
  return (
    <>
      <table tw="table-auto shadow mx-auto w-full ">
        <thead>
          <tr tw="bg-gray-200 text-center border-b border-gray-600 capitalize bg-gray-800 text-gray-700 text-gray-200 ">
            <th tw="px-4 py-2">User</th>
            <th tw="px-4 py-2">Last Online</th>
            <th tw="px-4 py-2">Views</th>
            <th tw="px-4 py-2">Role</th>
            <th tw="px-4 py-2">fans</th>
            <th tw="px-4 py-2">paid</th>
            <th tw="px-4 py-2">status</th>
            <th tw="px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            status="active"
            username="mattmegabit"
            views={1234}
            lastLogin="yesterday"
            followers={858}
            followersCount="858"
            accountType="user"
            paid="true"
          />
          <TableRow status="inactive" />
          <TableRow status="deleted" />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </>
  );
}

function TableRow(props) {
  function ReturnPaid(props) {
    if (props.paid == "true" || props.paid == "paid") {
      return (
        <>
          <p tw="text-center text-xs">
            <RiCheckboxCircleFill tw="mx-auto" color="#68D391" size={18} />
          </p>
        </>
      );
    } else {
      return (
        <>
          <p tw="text-center text-xs">
            <FiSlash tw="mx-auto" color="#FC8181" size={18} />
          </p>
        </>
      );
    }
  }

  function ReturnStatus(props) {
    if (props.status == "active") {
      return (
        <>
          <span tw="text-center rounded bg-green-400 py-1 px-3 text-xs font-bold">
            active
          </span>
        </>
      );
    } else if (props.status == "inactive") {
      return (
        <>
          <span tw="text-center rounded bg-yellow-400 py-1 px-3 text-xs font-bold">
            inactive
          </span>
        </>
      );
    } else if (props.status == "deleted") {
      return (
        <>
          <span tw="text-center rounded bg-red-400 py-1 px-3 text-xs font-bold">
            deleted
          </span>
        </>
      );
    } else {
      return (
        <>
          <p tw="text-center text-xs font-bold">...</p>
        </>
      );
    }
  }

  return (
    <>
      <tr tw="hover:bg-gray-100 hover:bg-gray-700 border-b border-gray-600 text-gray-700 hover:text-gray-200 text-sm">
        <td tw="px-4 py-2">
          <div className="user" tw="flex flex-row">
            <div tw="place-self-center">
              <img
                tw="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="profile photo"
              />
            </div>
            <p tw="ml-2 place-self-center">@{props.username || "n/a"}</p>
          </div>
        </td>
        <td className="last-login" tw="text-center px-4 py-2">
          {props.lastLogin || "..."}
        </td>
        <td className="follower" tw="text-center px-4 py-2">
          {props.followers || "..."}
        </td>
        <td className="account-type" tw="text-center px-4 py-2">
          {props.accountType || "..."}
        </td>
        <td className="followers-count" tw="text-center px-4 py-2">
          {props.followersCount || "..."}
        </td>
        <td className="paid" tw="text-center px-4 py-2">
          <ReturnPaid paid={props.paid} />
        </td>
        <td className="status" tw="text-center px-4 py-2">
          <ReturnStatus status={props.status} />
        </td>
        <td className="options" tw="text-center px-4 py-2">
          <OptionsButtons />
        </td>
      </tr>
    </>
  );
}

function OptionsButtons() {
  return (
    <>
      <button
        type="button"
        tw="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none"
      >
        Save
      </button>
      <button
        type="button"
        tw="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none"
      >
        Delete
      </button>

      <button tw="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
        Review
      </button>
    </>
  );
}

function ReviewCard() {
  return (
    <>
      <div tw="max-w-sm mx-auto dark:bg-gray-700 light:bg-gray-200 shadow-lg rounded-lg border overflow-hidden p-4 my-8">
        <div tw="flex">
          <div tw="flex-shrink-0">
            <img
              tw="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-16 rounded-full"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Woman's Face"
            />
          </div>
          <div tw="ml-6 pt-1">
            <p tw="text-xl leading-tight dark:text-gray-500">Erin Lindford</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Podcaster</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Role: user</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Fans: 77</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Paid: YES</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Bumps: 200</p>
            <p tw="text-sm leading-tight dark:text-gray-400">Status: Active</p>
          </div>
        </div>
        <div tw="mt-4">
          <button tw="mx-1 text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
            Message
          </button>
          <button tw="mx-1 text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
            Reset Password
          </button>
          <button tw="mx-1 text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}

function MetricCard(props) {
  return (
    <>
      {/* <!-- Card --> */}
      <div tw="flex items-center p-4 bg-white rounded-lg dark:bg-gray-800">
        <div tw="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          {/* <svg tw="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg> */}

          {/* <FaBox /> */}
          {props.icon || <RiErrorWarningLine />}
        </div>
        <div>
          <p tw="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {props.title || "title"}
          </p>
          <p tw="text-lg font-semibold text-gray-700 dark:text-gray-200">10</p>
        </div>
      </div>
    </>
  );
}

function TopMetrics() {
  return (
    <>
      <div tw="py-5">
        <main tw="h-full overflow-y-auto">
          <div tw="container mx-auto grid">
            {/* <!-- Cards --> */}
            <div tw="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <MetricCard title={"Total Users"} icon={<FaBox />} />
              <MetricCard title={"New signups this week"} icon={<FaBox />} />
              <MetricCard title={"Shoutouts this week"} icon={<FaBox />} />
              <MetricCard title={"Unique visits"} icon={<FaBox />} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
