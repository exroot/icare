// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template
// https://tailwindcss.com/docs/table-layout

import React, { useState, useEffect } from 'react'

import PiechartTest from './comps/piechart'
import Barchart from './comps/barchart'
import TotalUsersTopCardd from './comps/smallmetriccard'
import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

import {
  FaRegClipboard,
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
  FaSignOutAlt,
  FaHome,
  FaChartLine,
  FaSearch,
  FaSquare,
} from 'react-icons/fa'

import { FiSlash, FiFlag } from 'react-icons/fi'
import {
  RiErrorWarningFill,
  RiErrorWarningLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri'

import {
  BsInfoSquare,
  BsSquareFill,
  BsSquare,
  BsCreditCard,
} from 'react-icons/bs'

export default function AdminDashboard() {
  return (
    <>
      {/* <NotLoggedInNavbar /> */}
      <PageWithSidebar pagecontent={<PageContent />} />
    </>
  )
}

function PageContent(props) {
  return (
    <>
      <div tw="container mx-auto w-10/12 h-full space-y-4">
        <SectionTitle title="Traffic" />
        <TopMetrics />
        <PiechartTest />
        <TrafficTable />

        <TopPagesTable />
        {/* <Barchart /> */}

        {/* <TotalUsersTopCardd /> */}
        {/* <TestTable /> */}
      </div>
      {/* 
      <div tw="container mx-auto w-10/12 h-screen">
        <SectionTitle title="Flagged Content" />

        <SideMenuItem
          icon={<FiFlag tw="mx-auto h-5" size={18} />}
          name="Flagged Content"
          href="#"
        />
        <hr />
        <FlaggedContentTable />
        <hr />
      </div> */}
      <div tw="h-40" />
    </>
  )
}

function PageWithSidebar(props) {
  return (
    <>
      <div tw="flex flex-wrap bg-gray-100 w-full h-full">
        <div tw="w-1/6 bg-white rounded p-3 shadow-lg">
          <div tw="flex items-center space-x-4 p-2 mb-5">
            <div>
              <h1
                tw="text-5xl font-light text-black dark:text-black mt-0"
                style={{
                  fontFamily: 'basiclazer',
                }}
              >
                Shoutmo
              </h1>
            </div>
          </div>
          <ul tw="space-y-2 text-sm">
            <SideMenuItem
              icon={<FaHome tw="mx-auto h-5" size={18} />}
              name="Home"
              href="#"
            />
            <SideMenuItem
              icon={<FaSearch tw="mx-auto h-5" size={18} />}
              name="Search"
              href="#"
            />

            <SideMenuItem
              icon={<FaChartLine tw="mx-auto h-5" size={18} />}
              name="Traffic"
              href="#"
            />

            <SideMenuItem
              icon={<FaUsers tw="mx-auto h-5" size={18} />}
              name="Users"
              href="#"
            />

            <SideMenuItem
              icon={<FaRegClipboard tw="mx-auto h-5" size={18} />}
              name="Moderate"
              href="#"
            />

            <SideMenuItem
              icon={<BsCreditCard tw="mx-auto h-5" size={18} />}
              name="Revenue"
              href="#"
            />
            {/* <SideMenuItem
              icon={<BsSquare tw="mx-auto h-5" size={18} />}
              name="other"
              href="#"
            /> */}
            <SideMenuItem
              icon={<FaSignOutAlt tw="mx-auto h-5" size={18} />}
              name="logout"
              href="#"
            />
          </ul>
        </div>

        <div tw="w-5/6">{props.pagecontent}</div>
      </div>
    </>
  )
}

function SideMenuItem(props) {
  return (
    <>
      <li>
        <a
          href={props.href || '#'}
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
        >
          <span tw="text-gray-600">
            {props.icon || <BsSquareFillFill tw="mx-auto h-5" size={18} />}
            {/* <BsSquareFillFill tw="mx-auto h-5" size={18} /> */}
          </span>
          <span> {props.name || 'OPTION'}</span>
        </a>
      </li>
    </>
  )
}

function TrafficTable(props) {
  return (
    <>
      {/* <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || "title_"}
      </p> */}

      {/* <div tw="font-bold text-2xl mb-4 py-4 border-b">
        {props.title || 'title_'}
      </div> */}

      <table tw="table-auto bg-white w-1/4 bg-white p-4 transition-shadow border rounded-lg shadow-sm">
        <thead>
          <tr>
            <th tw="text-left">rank</th>
            <th tw="text-left">site</th>
            <th tw="text-left">count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Youtube</td>
            <td>858</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Twitch</td>
            <td>512</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Twitter</td>
            <td>408</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Instagram</td>
            <td>108</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Other</td>
            <td>58</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function TopPagesTable(props) {
  return (
    <>
      <table tw="table-auto bg-white w-1/2 bg-white p-4 transition-shadow border rounded-lg shadow-sm">
        <thead>
          <tr>
            <th tw="text-left">Rank</th>
            <th tw="text-left">Page</th>
            <th tw="text-left">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>www.shoutmo.com/</td>
            <td>9418</td>
          </tr>
          <tr>
            <td>2</td>
            <td>www.shoutmo.com/about</td>
            <td>5212</td>
          </tr>
          <tr>
            <td>3</td>
            <td>www.shoutmo.com/matt</td>
            <td>408</td>
          </tr>
          <tr>
            <td>4</td>
            <td>www.shoutmo.com/Cryce</td>
            <td>108</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function SectionTitle(props) {
  return (
    <>
      {/* <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || "title_"}
      </p> */}

      <div tw="font-bold text-2xl mb-4 py-4 border-b">
        {props.title || 'title_'}
      </div>
    </>
  )
}

function ShowCharts() {
  return (
    <>
      <div tw="w-1/6">
        <BarExample />
      </div>
      <div tw="w-1/6">
        <LineExample />
      </div>
    </>
  )
}

const LineExample = () => (
  <div>
    <h2>Line Example</h2>
    <Line data={lineExampledata} width={400} height={400} />
  </div>
)

const BarExample = () => (
  <div>
    <h2>Bar Example</h2>
    <Bar
      data={barexampledata}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: false,
      }}
    />
  </div>
)

const lineExampledata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}

const barexampledata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

function SearchBar() {
  return (
    <>
      <div tw="w-full mx-auto py-6">
        <input
          tw="bg-white focus:outline-none border shadow border-gray-300 rounded-full py-2 pl-10 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="username"
        />
      </div>
    </>
  )
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
  )
}

function FlaggedContentTable() {
  return (
    <>
      <table tw="bg-white table-auto shadow mx-auto w-full rounded-xl mb-6">
        <thead>
          <tr tw="text-center border-b capitalize">
            <th tw="text-left pl-5 pr-4 py-2">User</th>
            {/* <th tw="px-4 py-2">Last Online</th> */}
            <th tw="px-4 py-2">reason flagged</th>
            <th tw="px-4 py-2">warn user</th>
            <th tw="px-4 py-2">status</th>
            <th tw="px-4 py-2">blank</th>
            <th tw="px-4 py-2">blank</th>
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
            flagged_reason="bad language"
          />
          <TableRow status="inactive" />
          <TableRow status="deleted" />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </>
  )
}

function TestTable() {
  return (
    <>
      <table tw="bg-white table-auto shadow mx-auto w-full rounded-xl mb-6">
        <thead>
          <tr tw="text-center border-b capitalize">
            <th tw="text-left pl-5 pr-4 py-2">User</th>
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
  )
}

function TableRow(props) {
  function ReturnPaid(props) {
    if (props.paid == 'true' || props.paid == 'paid') {
      return (
        <>
          <p tw="text-center text-xs">
            <RiCheckboxCircleFill tw="mx-auto" color="#68D391" size={18} />
          </p>
        </>
      )
    } else {
      return (
        <>
          <p tw="text-center text-xs">
            <FiSlash tw="mx-auto" color="#FC8181" size={18} />
          </p>
        </>
      )
    }
  }

  function ReturnStatus(props) {
    if (props.status == 'active') {
      return (
        <>
          <span tw="text-center rounded bg-green-400 py-1 px-4 text-xs font-bold">
            active
          </span>
        </>
      )
    } else if (props.status == 'inactive') {
      return (
        <>
          <span tw="text-center rounded bg-yellow-400 py-1 px-3 text-xs font-bold">
            inactive
          </span>
        </>
      )
    } else if (props.status == 'deleted') {
      return (
        <>
          <span tw="text-center rounded bg-red-400 py-1 px-3 text-xs font-bold">
            deleted
          </span>
        </>
      )
    } else {
      return (
        <>
          <p tw="text-center text-xs font-bold">...</p>
        </>
      )
    }
  }

  return (
    <>
      <tr tw="hover:bg-gray-100 border-b text-gray-700 text-sm">
        <td tw="px-4 py-2">
          <div className="user" tw="flex flex-row">
            <div tw="place-self-center">
              <img
                tw="h-8 w-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="profile photo"
              />
            </div>
            <p tw="ml-2 place-self-center">@{props.username || 'n/a'}</p>
          </div>
        </td>
        <td className="last-login" tw="text-center px-4 py-2">
          {props.flagged_reason || '...'}
        </td>
        <td className="last-login" tw="text-center px-4 py-2">
          {props.lastLogin || '...'}
        </td>
        <td className="follower" tw="text-center px-4 py-2">
          {props.followers || '...'}
        </td>
        <td className="account-type" tw="text-center px-4 py-2">
          {props.accountType || '...'}
        </td>
        <td className="followers-count" tw="text-center px-4 py-2">
          {props.followersCount || '...'}
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
  )
}

function OptionsButtons() {
  return (
    <>
      <button tw="text-sm font-bold hover:underline text-gray-400 hover:text-blue-500 py-1 px-2 rounded focus:outline-none">
        Edit
      </button>
    </>
  )
}

function ReviewCard() {
  return (
    <>
      <div tw="max-w-sm mx-auto bg-white shadow-lg rounded-lg border overflow-hidden p-4 my-8">
        <div tw="flex">
          <div tw="flex-shrink-0">
            <img
              tw="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-16 rounded-full"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Woman's Face"
            />
          </div>
          <div tw="ml-6 pt-1">
            <p tw="text-xl leading-tight">Erin Lindford</p>
            <p tw="text-sm leading-tight text-gray-600">Podcaster</p>
            <p tw="text-sm leading-tight text-gray-600">Role: user</p>
            <p tw="text-sm leading-tight text-gray-600">Fans: 77</p>
            <p tw="text-sm leading-tight text-gray-600">Paid: YES</p>
            <p tw="text-sm leading-tight text-gray-600">Bumps: 200</p>
            <p tw="text-sm leading-tight text-gray-600">Status: Active</p>
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
  )
}

function MetricCard(props) {
  return (
    <>
      {/* <!-- Card --> */}
      <div tw="flex items-center p-4 bg-white rounded-lg bg-white border">
        <div tw="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
          {/* <svg tw="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg> */}

          {/* <FaBox /> */}
          {props.icon || <RiErrorWarningLine />}
        </div>
        <div>
          <p tw="mb-2 text-sm font-medium text-gray-600 text-gray-400">
            {props.title || 'title'}
          </p>
          <p tw="text-lg font-semibold text-gray-700 text-gray-500">10</p>
        </div>
      </div>
    </>
  )
}

function MetricCardAlt(props) {
  return (
    <>
      <div tw="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
        <div tw="flex items-start justify-between">
          <div tw="flex flex-col space-y-2">
            <span tw="text-gray-400"> {props.title || 'title'}</span>
            <span tw="text-lg font-semibold">100,221</span>
          </div>
          <div tw="p-10 bg-gray-200 rounded-md">
            {/* {props.icon || <RiErrorWarningLine />} */}
          </div>
        </div>
        <div>
          <span tw="inline-block px-2 mr-2 text-sm text-white bg-green-300 rounded">
            14%
          </span>
          <span>from 2019</span>
        </div>
      </div>
    </>
  )
}

// https://www.newline.co/@dmitryrogozhny/quick-introduction-to-displaying-charts-in-react-with-chartjs-and-react-chartjs-2--a85b4e2e

function TopMetrics() {
  return (
    <>
      <div tw="py-3">
        <div tw="h-full overflow-y-auto">
          <div tw="container mx-auto grid">
            {/* <!-- Top Cards --> */}
            <div tw="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <TotalUsersTopCard />
              <NewUsersTopCard />
              <SessionsTopCard />
              <VisitsTopCard />
              {/* <MetricCard title={"Total Users"} icon={<FaBox />} />
              <MetricCard title={"New signups this week"} icon={<FaBox />} />
              <MetricCard title={"Shoutouts this week"} icon={<FaBox />} />
              <MetricCard title={"Unique visits"} icon={<FaBox />} />

              <MetricCardAlt title={"Total Users"} icon={<FaBox />} />
              <MetricCardAlt title={"New signups this week"} icon={<FaBox />} />
              <MetricCardAlt title={"Shoutouts this week"} icon={<FaBox />} />
              <MetricCardAlt title={"Unique visits"} icon={<FaBox />} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ------------------------------------------------- test chart --------------------------------------------------------
// https://www.newline.co/@dmitryrogozhny/quick-introduction-to-displaying-charts-in-react-with-chartjs-and-react-chartjs-2--a85b4e2e

function VisitsTopCard(props) {
  return (
    <>
      <MetricCardWithChart title="Visits" />
    </>
  )
}
function SessionsTopCard(props) {
  return (
    <>
      <MetricCardWithChart title="Sessions" />
    </>
  )
}

function TotalUsersTopCard(props) {
  return (
    <>
      <MetricCardWithChart title="Total Users" />
    </>
  )
}

function NewUsersTopCard(props) {
  return (
    <>
      <MetricCardWithChart title="New Users" />
    </>
  )
}

function MetricCardWithChart(props) {
  const data = {
    labels: month,
    datasets: [
      {
        label: 'First dataset',
        data: [0, 10, 20, 33, 53, 85, 41, 44, 65, 12],
        fill: false,
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  }

  const legend = {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: '#323130',
      fontSize: 14,
    },
  }

  const options = {
    title: {
      display: false,
      text: 'Chart Title',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  }

  return (
    <>
      <a
        href="#"
        // tw=" bg-white p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
        tw="bg-white p-4 transition-shadow border rounded-lg shadow-sm"
      >
        <div tw="flex items-start">
          <div tw="flex flex-col flex-shrink-0 space-y-2">
            <span tw="text-gray-400">{props.title || 'title_'}</span>
            <span tw="text-lg font-semibold">100,221</span>
          </div>
          <div tw="relative min-w-0 ml-auto h-14">
            <Line data={data} legend={legend} options={options} />
          </div>
        </div>
        <div>
          <span tw="inline-block px-2 mr-2 text-sm text-white bg-green-300 rounded">
            {/* <span tw="inline-block px-2 mr-1 text-sm text-white bg-green-300 rounded">
               ▲
            </span> */}
            {/* <span tw="inline-block px-2 mr-1 text-sm text-white bg-green-300 rounded">
              ▼
            </span> */}
            14%
          </span>

          <span>from 2019</span>
        </div>
      </a>
    </>
  )
}

function LargeMetricCardWithChart(props) {
  // look something like this? - https://codepen.io/ScottWindon/pen/wvMVMNG

  const data = {
    labels: month,
    datasets: [
      {
        label: 'First dataset',
        data: [0, 1, 20, 13, 23, 45, 51, 33, 93, 20, 12, 0, 2, 20],
        fill: false,
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  }

  const legend = {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: '#323130',
      fontSize: 14,
    },
  }

  const biggraphoptions = {
    title: {
      display: false,
      text: 'Chart Title',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: true },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: true },
          gridLines: {
            display: true,
            drawBorder: false,
          },
        },
      ],
    },
  }

  return (
    <>
      {/* <div tw="bg-white my-12 p-4 border hover:border-blue-400 rounded-lg shadow-lg hover:bg-blue-100"> */}
      <div tw="bg-white my-12 p-4 border rounded-lg shadow-lg">
        {/* title  */}

        <div tw="flex items-start">
          <div tw="flex flex-col flex-shrink-0 space-y-2">
            <span tw="text-gray-400">Revenue</span>
            <span tw="text-lg font-semibold">$1,221</span>
          </div>
        </div>
        {/* graph  */}
        <div tw="min-w-0 h-24">
          <Line data={data} legend={legend} options={biggraphoptions} />
        </div>
      </div>
    </>
  )
}

// ------------------------------------------------- fake data --------------------------------------------------------

const week = [1, 2, 3, 4, 5, 6, 7]
const month = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
]

const year = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const monthdata = [
  0,
  10,
  20,
  33,
  53,
  85,
  0,
  10,
  20,
  33,
  53,
  85,
  41,
  44,
  65,
  12,
  41,
  44,
  65,
  12,
]
