// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template
// https://tailwindcss.com/docs/table-layout

import React, { useState, useEffect } from 'react'

import LargeMetricCardWithChartTest from './comps/widechart'

import 'twin.macro'

import {
  FaRegClipboard,
  FaUsers,
  FaSignOutAlt,
  FaHome,
  FaChartLine,
  FaSearch,
  FaSquare,
} from 'react-icons/fa'

import { BsCreditCard } from 'react-icons/bs'

export default function AdminDashboard() {
  return (
    <>
      <PageWithSidebar pagecontent={<PageContent />} />
    </>
  )
}

function PageContent(props) {
  return (
    <>
      <div tw="container mx-auto w-10/12 h-screen">
        <SectionTitle title="Revenue" />
        <LargeMetricCardWithChartTest />

        {/* top 10 earners  */}
      </div>
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

// https://www.newline.co/@dmitryrogozhny/quick-introduction-to-displaying-charts-in-react-with-chartjs-and-react-chartjs-2--a85b4e2e

// ------------------------------------------------- test chart --------------------------------------------------------
// https://www.newline.co/@dmitryrogozhny/quick-introduction-to-displaying-charts-in-react-with-chartjs-and-react-chartjs-2--a85b4e2e

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
