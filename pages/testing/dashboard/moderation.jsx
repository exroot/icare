// inspired by - https://www.tailwindtoolbox.com/templates/admin-template-day
// https://www.tailwindtoolbox.com/templates/admin-template
// https://tailwindcss.com/docs/table-layout

import React, { useState, useEffect } from 'react'

import 'twin.macro'

import {
  FaRegClipboard,
  FaUsers,
  FaSignOutAlt,
  FaHome,
  FaChartLine,
  FaSearch,
} from 'react-icons/fa'

import { FiFlag } from 'react-icons/fi'

import {
  BsCreditCard,
  BsFillCaretDownFill,
  BsFilterRight,
} from 'react-icons/bs'

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
      <div tw="container mx-auto w-10/12 ">
        <div tw="flex flex-row content-start items-center font-bold text-2xl mb-4 py-4 border-b">
          <div tw="mr-3 w-10 h-10 flex self-center content-center items-center p-2 rounded-full font-medium bg-gray-300">
            <FiFlag tw="mx-auto h-5" size={18} />
          </div>
          <p>Flagged Content</p>
        </div>

        <div tw="flex flex-row justify-between">
          <div tw="flex flex-row content-start items-center font-bold mb-4 py-4">
            <div tw="mr-2 flex self-center content-center items-center">
              <p>10</p>
            </div>
            <p>flags for review</p>
          </div>

          <div tw="flex flex-col content-end items-end font-bold mb-1 py-4">
            <FilterDropDownButton />
          </div>
        </div>
        <hr />
        <FlaggedContentTable />
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
              <p tw="text-gray-500">Admin Dashboard</p>
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

        <div tw="h-screen w-5/6 overflow-y-scroll">{props.pagecontent}</div>
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
          </span>
          <span> {props.name || 'OPTION'}</span>
        </a>
      </li>
    </>
  )
}

function FlaggedContentTable() {
  return (
    <>
      <table tw="bg-white table-auto shadow mx-auto w-full rounded-xl mb-6">
        <thead>
          <tr tw="text-center border-b capitalize">
            <th tw="px-4 py-2">Flag Count</th>
            <th tw="text-left pl-5 pr-4 py-2">User</th>
            <th tw="px-4 py-2">Post</th>
            <th tw="px-4 py-2">Date Flagged</th>
            <th tw="px-4 py-2">User That Flagged</th>
            <th tw="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <FlaggedPostTableRow
            username="mattmegabit"
            flagged_count={12}
            date_flagged="12/15/2021"
          />

          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
          <FlaggedPostTableRow />
        </tbody>
      </table>
    </>
  )
}

function FlaggedPostTableRow(props) {
  return (
    <>
      <tr tw="hover:bg-gray-100 border-b text-gray-700 text-sm">
        <td tw="text-center px-4 py-2">{props.flagged_count || '...'}</td>
        <MockUser
          username="BrittneyWasBad"
          img="https://randomuser.me/api/portraits/women/21.jpg"
        />
        <td tw="text-center px-4 py-2 hover:underline">
          {props.view_post || 'view'}
        </td>
        {/* <ViewPost /> */}
        <td tw="text-center px-4 py-2">{props.date_flagged || '...'}</td>

        <MockUser
          username="someguy"
          img="https://randomuser.me/api/portraits/men/3.jpg"
        />
        <td className="last-login" tw="text-center px-4 py-2">
          {props.action || <Dropdown />}
        </td>
      </tr>
    </>
  )
}

function MockUser(props) {
  return (
    <>
      <td tw="px-4 py-2">
        <div tw="flex flex-row">
          <div tw="place-self-center">
            <img
              tw="h-8 w-8 rounded-full"
              // src="https://randomuser.me/api/portraits/women/21.jpg"
              src={
                props.img || 'https://randomuser.me/api/portraits/lego/6.jpg'
              }
              alt="profile photo"
            />
          </div>
          <p tw="ml-2 place-self-center">@{props.username || 'n/a'}</p>
        </div>
      </td>
    </>
  )
}

function Dropdown() {
  return (
    <>
      <button tw="outline-none focus:outline-none bg-gray-300 px-3 py-1 rounded-sm flex flex-row items-center">
        <span tw="pr-1 font-semibold flex-1">Action</span>
        <BsFillCaretDownFill tw="mx-auto h-5 h-4 w-4" size={18} />
      </button>
    </>
  )
}

function FilterDropDownButton() {
  return (
    <>
      <button tw="outline-none focus:outline-none bg-gray-300 px-3 py-1 rounded-sm flex flex-row items-center">
        <span tw="pr-1 font-semibold flex-1">Filter</span>
        <BsFilterRight tw="mx-auto h-5 h-4 w-4" size={18} />
      </button>
    </>
  )
}
