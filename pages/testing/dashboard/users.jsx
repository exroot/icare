// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template
// https://tailwindcss.com/docs/table-layout

import React, { useState, useEffect } from 'react'

import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

import {
  FaRegClipboard,
  FaUsers,
  FaSignOutAlt,
  FaHome,
  FaChartLine,
  FaSearch,
} from 'react-icons/fa'

import { FiSlash, FiFlag } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'
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
        <SectionTitle title="Users" />
        <SearchBar />
        <TestTable />
        <hr />
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

function SearchBar() {
  return (
    <>
      <div tw="w-full mx-auto py-6">
        {/* <p>Search</p> */}
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
