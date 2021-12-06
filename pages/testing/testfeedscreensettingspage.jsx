import React, { useState, useEffect } from 'react'
import 'twin.macro'
import Link from 'next/link'
import { TiThMenu } from 'react-icons/ti'
import { VscBell } from 'react-icons/vsc'
import {
  BsThreeDotsVertical,
  BsChevronRight,
  BsPersonSquare,
  BsLock,
} from 'react-icons/bs'
import {
  FiSettings,
  FiAlertCircle,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi'
import { CgFeed } from 'react-icons/cg'
import { BiMessageAdd, BiUserCircle, BiSupport, BiShare } from 'react-icons/bi'
import { FaShareAltSquare, FaRegListAlt } from 'react-icons/fa'
import { MdLiveTv, MdNotificationsActive, MdInfoOutline } from 'react-icons/md'
import { AiOutlineRetweet, AiOutlineDashboard } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler'
import { FaRegCompass, FaBox, FaLanguage } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'

const iconSize = 24

export default function Basic() {
  return (
    <>
      <Homescreen />
    </>
  )
}

function Homescreen() {
  return (
    <>
      <div tw="h-screen w-screen flex flex-row bg-white">
        <SideBar />

        <ContentArea />
      </div>
    </>
  )
}

function SideBar() {
  return (
    <>
      <div
        // tw="hidden lg:block border-r border-gray-200 bg-gray-900"
        tw="hidden lg:block"
        style={{
          minWidth: 324 + 'px',
          backgroundColor: '#121212',
          // alternate bg color we are using on app
          // backgroundColor: '#0F1216',
        }}
      >
        {/* <!-- start menu container --> */}

        <div
          tw="flex flex-col space-y-8 h-screen font-mono"
          style={{
            fontFamily: 'Inter',
          }}
        >
          <SiteLogo />

          {/* <SLogo /> */}
          <SBMenu />
        </div>
        {/* <!-- end menu container --> */}
      </div>
    </>
  )
}

function SiteLogo() {
  return (
    <>
      <p
        tw="flex justify-center text-white mt-6"
        className="threedeeshadow"
        style={{
          // color: '#ff27e1',
          fontFamily: 'basiclazer',
          fontSize: 60,
          // fontSize: 80,
        }}
      >
        SHOUTMO
      </p>

      {/* <div tw="flex items-center flex-shrink-0 text-white border">
        <div tw="flex items-center w-full">
          <h1
            tw="w-full font-bold text-center text-5xl leading-4"
            // className="threedeeshadow"
            style={{
              fontFamily: 'basiclazer',
              // color: '#ff27e1',
              letterSpacing: 0.025 + 'em',
              fontWeight: 500,
              // fontSize: 36 + 'px',
              // marginTop: -4 + 'px',
            }}
            className="threedeeshadow"
          >
            Shoutmo
          </h1>
        </div>
      </div> */}
    </>
  )
}

function SBMenu(props) {
  return (
    <>
      <div tw="flex flex-col pt-12 w-full">
        {/* <Link href="/testing/testmockup/screens/feedscreenalt"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-purple-600 text-gray-500 py-6 pl-9">
          {/* <button tw="w-full flex justify-between hover:bg-gradient-to-r from-pink-900 via-blue-900 focus:outline-none focus:text-purple-600 text-gray-500 py-6 pl-9 transition ease-in duration-75"> */}
          <span tw="flex ml-6">
            <CgFeed tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Feed
            </p>
          </span>
        </button>
        {/* </Link> */}

        <ShoutoutModal />

        {/* <Link href="/testing/testmockup/screens/trendingscreen"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-purple-600 text-gray-500 py-6 pl-9">
          <span tw="flex ml-6">
            <FaRegCompass tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Explore
            </p>
          </span>
        </button>
        {/* </Link> */}
        {/* <Link href="/testing/testmockup/screens/settingsscreen"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-purple-600 text-gray-500 py-6 pl-9">
          <span tw="flex ml-6">
            <FiSettings tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Settings
            </p>
          </span>
        </button>
        {/* </Link> */}
      </div>
    </>
  )
}

function ShoutoutModal() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button
        tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-purple-600 text-gray-500 py-6 pl-9"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span tw="flex ml-6">
          <BiMessageAdd tw="h-6 w-6 self-center" />

          <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
            Shoutout
          </p>
        </span>
      </button>

      {showModal ? (
        <>
          <div tw="block justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div tw="relative w-1/2 my-6 mx-auto max-w-3xl border-2 border-gray-800 rounded-lg">
              {/*content*/}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div tw="m-3">
                  {/*title*/}
                  <div tw="ml-auto mb-3 text-gray-700 font-semibold">
                    SHOUTOUT
                  </div>
                  {/*input*/}
                  <textarea
                    tw="w-full text-gray-800 bg-gray-100 p-3 h-60 border-2 border-gray-800 rounded outline-none p-2"
                    spellcheck="false"
                    placeholder="Say it loud ;)"
                  ></textarea>
                  {/* <!-- icons --> */}
                  <div tw="flex text-gray-500">
                    {/* <BiMessageAdd tw="h-12 w-12 align-middle self-center bg-gray-300 border-2 border-gray-800 rounded p-2 mr-2" /> */}
                    <BiMessageAdd tw="h-9 w-9 align-middle self-center bg-gray-300 border-2 border-gray-800 rounded p-1 mr-2" />
                    <BiMessageAdd tw="h-9 w-9 align-middle self-center bg-gray-300 border-2 border-gray-800 rounded p-1 mr-2" />
                    <MdLiveTv tw="h-9 w-9 align-middle self-center bg-gray-300 border-2 border-gray-800 rounded p-1 mr-2" />
                    <div tw="h-9 w-auto align-middle self-center bg-gray-300 border-2 border-gray-800 rounded p-1 mr-2">
                      <p>going live</p>
                    </div>

                    <div tw="ml-auto text-gray-400 text-xs font-semibold">
                      0/300
                    </div>
                  </div>
                  {/* <!-- buttons --> */}
                  <div tw="flex">
                    <div
                      tw=" border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto border-2 border-gray-800 rounded-lg"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </div>
                    <div
                      tw=" border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 border-2 border-gray-800 rounded-lg"
                      onClick={() => setShowModal(false)}
                    >
                      Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900"></div>
        </>
      ) : null}
    </>
  )
}

function ContentArea() {
  return (
    <>
      <div
        tw="w-full h-screen flex flex-col font-mono overflow-y-scroll bg-black "
        style={{
          fontFamily: 'Inter',
        }}
      >
        {/* <div tw="flex justify-end">
          <FiSettings tw="h-8 w-8 self-center m-6 mr-12 text-purple-600" />
        </div> */}
        {/* <div tw="w-full flex flex-col pl-16"> */}
        <div tw="space-y-4 w-10/12 mx-auto mt-16">
          <SectionTitle title="Settings & Important Info" />
        </div>

        <div tw="pl-16 py-8 w-7/12 mx-auto ">
          <Link href="/testing/testmockup/screens/editprofilescreen">
            <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
              {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}
              <span tw="flex m-3">
                <BsPersonSquare tw="h-6 w-6 self-center text-purple-600" />
                <p tw="mx-4 text-lg">Personal Info</p>
              </span>
            </button>
          </Link>
          <Link href="/testing/testmockup/screens/notificationssettingsscreen">
            <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
              {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
              <span tw="flex m-3">
                <MdNotificationsActive tw="h-6 w-6 self-center text-purple-600" />
                <p tw="mx-4 text-lg">Notifications</p>
              </span>
            </button>
          </Link>

          {/* <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            <span tw="flex m-3">
              <AiOutlineDashboard tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">Dashboard</p>
            </span>
          </button> */}
          <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
            <span tw="flex m-3">
              <BsLock tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">Security</p>
            </span>
          </button>
          <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
            <span tw="flex m-3">
              <FaLanguage tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">Language</p>
            </span>
          </button>
          <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
            <span tw="flex m-3">
              <BiSupport tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">Support</p>
            </span>
          </button>
          <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
            <span tw="flex m-3">
              <MdInfoOutline tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">FAQ</p>
            </span>
          </button>
          <button tw="w-full mx-auto flex items-center py-3 px-6 cursor-pointer hover:underline focus:outline-none text-white">
            {/* <button tw="w-full mx-auto flex items-center py-3 px-6 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none text-white"> */}{' '}
            <span tw="flex m-3">
              <FaRegListAlt tw="h-6 w-6 self-center text-purple-600" />
              <p tw="mx-4 text-lg">Legal</p>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

function SectionTitle(props) {
  return (
    <>
      {/* <p tw="text-2xl leading-tight text-gray-700">{props.title || "title_"}</p> */}
      <p tw="leading-tight text-xl md:text-2xl font-semibold text-white">
        {props.title || 'title_'}
      </p>
    </>
  )
}
