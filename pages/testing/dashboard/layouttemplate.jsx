import React, { useState, useEffect } from 'react'
import LargeMetricCardWithChartTest from './comps/widechart'

import PiechartTest from './comps/piechart'
import Barchart from './comps/barchart'
import TotalUsersTopCardd from './comps/smallmetriccard'
import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

import { BsCreditCard, BsSquareFill } from 'react-icons/bs'

import {
  FaRegClipboard,
  FaUsers,
  FaSignOutAlt,
  FaHome,
  FaChartLine,
  FaSearch,
} from 'react-icons/fa'

const SIDEBAR_ITEM = {
  home: <Home />,
  users: <Users />,
  search: <Search />,
  traffic: <Traffic />,
  moderate: <Moderate />,
  revenue: <Revenue />,
  logout: <Logout />,
}

export default function AdminDashboard() {
  return (
    <>
      <PageWithSidebar pagecontent={<PageContent />} />
    </>
  )
}

function FakeNavBar({ setSelectedItem, props }) {
  return (
    <>
      <div tw="bg-white text-black">
        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('home')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Home</span>
        </div>

        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('users')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Users</span>
        </div>

        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('revenue')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Revenue</span>
        </div>

        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('search')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Search</span>
        </div>

        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('moderate')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Moderate</span>
        </div>

        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('traffic')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Traffic</span>
        </div>
        <div
          tw="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:bg-gray-500"
          onClick={() => setSelectedItem('logout')}
        >
          <span tw="text-gray-600">
            <BsSquareFill tw="mx-auto h-5" size={18} />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </>
  )
}

function PageWithSidebar(props) {
  const [selectedItem, setSelectedItem] = useState('home')

  return (
    <>
      <div tw="flex flex-wrap bg-gray-100 w-full min-h-screen">
        <div tw="w-1/6 bg-white rounded p-3 shadow-lg">
          <div tw="flex items-center space-x-4 p-2 mb-5">
            <ShoutmoTitle />
          </div>
          <div tw="space-y-2 text-sm">
            <FakeNavBar setSelectedItem={setSelectedItem} />
          </div>
        </div>

        <div tw="w-5/6">{SIDEBAR_ITEM[selectedItem]}</div>
      </div>
    </>
  )
}

function Sidebar(props) {
  return (
    <>
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
          <SideMenuItem
            icon={<FaSignOutAlt tw="mx-auto h-5" size={18} />}
            name="logout"
            href="#"
          />
        </ul>
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

function SectionTitle(props) {
  return (
    <>
      {/* <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || 'Page Title'}
      </p> */}

      <div tw="font-bold text-2xl mb-4 py-4 border-b">
        {props.title || 'Page Title'}
      </div>
    </>
  )
}

function PageContent(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        {/* <SectionTitle title="Review single user Screen" /> */}
        <SectionTitle />
        <CardwithContent title="total users" />
        <CardwithContent title="new users" />
      </div>
    </>
  )
}

function CardwithContent(props) {
  return (
    <>
      <div tw="bg-white shadow-lg rounded-lg border p-4 my-8 h-24 w-3/12">
        <p tw="text-xl">{props.title}</p>
        <p>{props.number || '24'}</p>
      </div>
    </>
  )
}

function Home(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Home</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}

function Users(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Users</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}

function Revenue(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Revenue</div>

        {/* <SectionTitle title="Revenue" /> */}
        <LargeMetricCardWithChartTest />

        {/* top 10 earners  */}
      </div>
    </>
  )
}

function Logout(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Logout</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}

function Moderate(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Moderate</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}

function Traffic(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Traffic</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}

function Search(props) {
  return (
    <>
      <div tw="flex flex-col w-11/12 mx-auto h-full">
        <div tw="font-bold text-2xl mb-4 py-4 border-b">Search</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus pretium quam vulputate dignissim.
          Vestibulum morbi blandit cursus risus at ultrices. Egestas pretium
          aenean pharetra magna ac.
        </p>
      </div>
    </>
  )
}
function ShoutmoTitle(props) {
  return (
    <>
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
    </>
  )
}
