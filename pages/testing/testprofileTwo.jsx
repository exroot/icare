import React from 'react'
import tw, { css } from 'twin.macro'

// icons
import { TiThMenu } from 'react-icons/ti'
import { VscBell } from 'react-icons/vsc'

import {
  FaAngleDown,
  FaAngleRight,
  FaAngleLeft,
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
  FaChevronLeft,
  FaChevronDown,
  FaBars,
  FaRegEnvelope,
  FaShare,
} from 'react-icons/fa'

import { BsList } from 'react-icons/bs'

import { BsChevronCompactDown } from 'react-icons/bs'

export default function Screen() {
  return (
    <>
      <Topbar />
      <div
        tw="w-full h-full bg-local bg-no-repeat bg-cover text-white"
        css={`
          background-image: url(https://images.unsplash.com/photo-1567304529193-acc92518efcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=1);
        `}
      >
        <div tw="w-full h-screen bg-gradient-to-r from-black via-black">
          <div tw="space-y-8 h-full mx-6 sm:ml-24 flex-grow">
            {/* // inside background image container    */}
            {/* border border-blue-900 */}
            <div tw="container mx-auto px-4 flex flex-col w-full h-screen text-white">
              <BackButton />
              <div tw="flex flex-col mt-6 space-y-3 sm:space-y-0">
                <Avatar />
                <Username />
              </div>

              <div tw="mt-6 space-x-3">
                <div tw="flex flex-row">
                  <FollowButton />
                  <div tw="w-1/3 flex flex-row content-start space-x-3 ml-3">
                    {/* <MessageButton />
                    <ShareButton /> */}
                    <MessageButtonIcon />
                    <ShareButtonIcon />
                  </div>
                </div>
              </div>

              <div tw="flex flex-col mt-12">
                <Bio />
                <div tw="flex flex-col mt-12">
                  <Meta />
                </div>
              </div>
            </div>
            {/* <button type="button" tw="h-12 w-full bg-green-500">
              <p tw="font-semibold tracking-wide">Links</p>
            </button> */}

            {/* // inside background image container    */}
          </div>
        </div>
        <button type="button" tw="h-12 w-full bg-green-500">
          <p tw="font-semibold tracking-wide">Links</p>
        </button>
      </div>
      <div tw="container mx-auto px-4 flex flex-col w-full bg-black">
        <LinksSection />
      </div>

      <TestingAvatarSection />
    </>
  )
}

function Blank() {
  return (
    <>
      <p>blank</p>
    </>
  )
}

function Avatar() {
  return (
    <>
      <img
        tw="rounded-full w-20 h-20 sm:w-48 sm:h-48 border-4 mr-4 sm:mr-8"
        src="https://randomuser.me/api/portraits/women/21.jpg"
      />
    </>
  )
}

function Username() {
  return (
    <>
      <div>
        <p tw="text-xl sm:text-bigxlextra font-bold leading-none">
          Carrisa Somebody
        </p>

        <p tw="text-xl sm:text-2xl sm:leading-none">@imacoolchica</p>
      </div>
    </>
  )
}

function FollowButton() {
  return (
    <>
      <button
        type="button"
        tw="h-12 w-1/2 w-full sm:w-1/2 md:w-1/3 lg:w-3/12 bg-blue-500 rounded"
      >
        <p tw="text-xl sm:text-base font-semibold tracking-wide">Follow</p>
      </button>
    </>
  )
}

function MessageButton() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center justify-center h-12 w-1/4 bg-gray-400 rounded px-2"
      >
        {/* <FaRegEnvelope tw="w-16 sm:w-24" /> */}
        <FaRegEnvelope size={18} />
        <p tw="text-xl sm:text-base font-semibold tracking-wide">Message</p>
      </button>
    </>
  )
}

function ShareButton() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center justify-center h-12 w-1/4 bg-gray-400 rounded px-2"
      >
        <FaShare tw="w-16 sm:w-24" />
        <p tw="text-xl sm:text-base font-semibold tracking-wide">Share</p>
      </button>
    </>
  )
}

function MessageButtonIcon() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center justify-center h-12 w-20 bg-gray-400 rounded"
      >
        {/* <FaRegEnvelope size={32} /> */}
        <FaRegEnvelope size={24} />
      </button>
    </>
  )
}

function ShareButtonIcon() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center justify-center h-12 w-20 bg-gray-400 rounded"
      >
        {/* <FaShare size={32} /> */}
        <FaShare size={24} />
      </button>
    </>
  )
}
function WebsiteLink() {
  return (
    <>
      <div tw="flex flex-row items-center text-xl space-x-2">
        <FaExternalLinkAlt tw="text-blue-500" />
        <p tw="" href="#">
          https://www.example.com
        </p>
      </div>
    </>
  )
}

function Bio() {
  return (
    <>
      <div tw="space-y-2">
        <p tw="w-full sm:w-5/12 text-lg lg:text-xl text-white">
          What can I say? I love the internet, writing code and making cool
          things happen. Waffle House Regulars Club Member. Miata4life. Lift,
          Run, Code, Repeat.
        </p>
        <div tw="w-full sm:w-5/12 flex flex-row items-center">
          <FaMapMarkerAlt
            size={24}
            fill="#eb008d"
            tw="text-gray-400 w-4 h-4 mr-1"
          />
          <p>Annapolis, USA</p>
        </div>
      </div>
    </>
  )
}

function Meta() {
  return (
    <>
      <div tw="flex flex-row space-x-16 pb-9">
        <div>
          <p tw="text-white">Fans</p>
          <p tw="text-white text-4xl font-bold">27k+</p>
        </div>
        <div>
          <p tw="text-white">Following</p>
          <p tw="text-white text-4xl font-bold">99</p>
        </div>
      </div>
    </>
  )
}

function BackButton() {
  return (
    <>
      <button
        type="button"
        tw="pt-4 text-gray-400 text-xl flex flex-row items-center"
      >
        <FaAngleLeft size={36} tw="text-gray-400 w-6 h-6 self-center mr-1" />
        <p tw="font-semibold tracking-wide">Back</p>
      </button>
    </>
  )
}

function FullbioSectionWrappedTwo() {
  return (
    <>
      <div
        tw="w-full h-full bg-local bg-no-repeat bg-cover text-white"
        css={`
          background-image: url(https://images.unsplash.com/photo-1567304529193-acc92518efcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=1);
        `}
      >
        <div tw="w-full h-full bg-gradient-to-r from-black via-black to-transparent">
          <div tw="space-y-8 h-screen mx-6 sm:ml-24">
            <BackButton />

            <div tw="space-y-9">
              {/* testing  */}

              {/* <div tw="flex flex-row">
                <img
                  tw="rounded-full w-1/4 h-full sm:w-48 sm:h-auto border-4 mr-4 sm:mr-8"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                />

                <div>
                  <p tw="text-2xl sm:text-6xl font-bold leading-none">
                    Carrisa Somebody
                  </p>
                  <p tw="text-xl">@username</p>
                  <button
                    type="button"
                    tw="h-9 sm:h-14 w-full sm:w-1/2 md:w-1/3 lg:w-3/12 bg-blue-500 rounded-sm"
                  >
                    <p tw="font-semibold tracking-wide">Follow</p>
                  </button>
                </div>
              </div> */}
              {/* testing  */}

              {/* items-center  */}

              <div tw="flex flex-row sm:flex-col items-start sm:items-start">
                <img
                  tw="rounded-full w-20 h-auto sm:w-48 sm:h-auto border-4 mr-4 sm:mr-8"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                />

                <div>
                  <p tw="text-2xl sm:text-6xl font-bold leading-none">
                    Carrisa Somebody
                  </p>
                  <p tw="text-xl">@username</p>
                </div>
              </div>

              <button
                type="button"
                tw="h-12 w-1/2 w-full sm:w-1/2 md:w-1/3 lg:w-3/12 bg-blue-500 rounded-sm"
              >
                <p tw="font-semibold tracking-wide">Follow</p>
              </button>

              <div tw="space-y-2">
                <p tw="w-full sm:w-5/12 mr-4 text-lg lg:text-xl text-white">
                  What can I say? I love the internet, writing code and making
                  cool things happen. Waffle House Regulars Club Member.
                  Miata4life. Lift, Run, Code, Repeat.
                </p>

                <div tw="w-full sm:w-5/12 flex flex-row items-center">
                  <FaMapMarkerAlt
                    size={24}
                    fill="#eb008d"
                    tw="text-gray-400 w-4 h-4 align-bottom mr-1"
                  />
                  <p>Annapolis, USA</p>
                </div>
              </div>

              <div tw="flex flex-row space-x-16 pb-9">
                <div>
                  <p tw="text-white">Fans</p>
                  <p tw="text-white text-4xl font-bold">27k+</p>
                </div>
                <div>
                  <p tw="text-white">Following</p>
                  <p tw="text-white text-4xl font-bold">99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TestingFontSizes() {
  return (
    <>
      <div tw="flex flex-col h-full w-screen flex-wrap">
        <p tw="text-3xl font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-4xl font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-5xl font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-bigxl font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-bigxlextra font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-big font-bold leading-none">Carrisa Somebody</p>
        <p tw="text-morebig font-bold leading-none">Carrisa Somebody</p>
        {/* <p tw="text-evenmorebig font-bold leading-none">Carrisa Somebody</p> */}
        {/* <p tw="text-biggest font-bold leading-none">Carrisa Somebody</p> */}
      </div>
    </>
  )
}

function TestingAvatarSection() {
  return (
    <>
      <div tw="bg-black bg-gradient-to-r from-black via-black to-gray-700">
        {/* // inside background image container    */}
        <div tw="container mx-auto px-4 flex flex-col w-full text-white">
          {/* <BackButton /> */}

          {/* testing avatars  */}
          {/* <div tw="flex flex-col mt-6 space-y-3 sm:space-y-0">
              <Avatar />
              <Username />
            </div>

            <div tw="mt-6">
              <FollowButton />
            </div> */}

          {/* testing avatars  */}
          <div tw="w-24 h-24" />

          <div tw="flex flex-col mt-6 space-y-3 sm:space-y-0">
            <div tw="flex flex-row mt-6 ">
              <Avatar />
              <Username />
            </div>
            <FollowButton />
            <div tw="w-24 h-24 bg-gray-400" />
          </div>

          {/* testing avatars  */}
          <div tw="flex flex-col mt-6 space-y-3">
            <div tw="flex flex-row items-center">
              <Avatar />
              <Username />
            </div>
            <FollowButton />
            <div tw="w-24 h-24" />
          </div>

          {/* testing avatars  */}
          <div tw="flex flex-col mt-6 space-y-3 sm:space-y-0">
            <div tw="flex flex-row items-center space-x-3">
              <Avatar />
              <div tw="flex flex-row space-x-6 items-center flex-grow justify-end">
                <div>
                  <p tw="text-white">Fans</p>
                  <p tw="text-white text-2xl font-bold">27k+</p>
                </div>
                <div>
                  <p tw="text-white">Following</p>
                  <p tw="text-white text-2xl font-bold">99</p>
                </div>
              </div>
            </div>
            <Username />

            <FollowButton />
            <div tw="w-24 h-24" />
          </div>

          {/* testing avatars  */}
          <div tw="flex flex-col mt-6 space-y-12 ">
            <div tw="flex flex-row items-center">
              <img
                tw="rounded-full w-28 h-28 sm:w-48 sm:h-48 border-4 mr-4 sm:mr-8"
                src="https://randomuser.me/api/portraits/women/21.jpg"
              />
              <div tw="flex-grow space-y-1">
                <Username />
                <button type="button" tw="h-12 w-full bg-blue-500 rounded-sm">
                  <p tw="text-xl sm:text-base font-semibold tracking-wide">
                    Follow
                  </p>
                </button>
              </div>
            </div>

            <WebsiteLink />
            <Bio />
            <Meta />
          </div>

          {/* testing avatars  */}
          <div tw="flex flex-col mt-6 space-y-12">
            <div tw="flex flex-col mt-6 space-y-3">
              <div tw="flex flex-row items-center">
                {/* <img
                  tw="rounded-full w-28 h-28 sm:w-48 sm:h-48 border-4 mr-4 sm:mr-8"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                /> */}
                <Avatar />
                <Username />
              </div>
              <FollowButton />
            </div>

            <WebsiteLink />
            <Bio />
            <Meta />
          </div>

          {/* testing avatars  */}
          <div tw="flex flex-col mt-6 space-y-3 sm:space-y-0">
            <div tw="flex flex-row items-center space-x-3">
              <Avatar />
            </div>
            <Username />

            <FollowButton />
            <WebsiteLink />
            <Bio />
            <Meta />
          </div>

          <div tw="w-24 h-24" />

          {/* // inside background image container    */}
        </div>
      </div>
    </>
  )
}

function SiteLogo() {
  return (
    <>
      <div tw="flex items-center flex-shrink-0 text-white mr-6">
        <div tw="flex items-center w-full">
          <h1
            tw="w-full font-bold text-center text-5xl leading-4"
            // className="threedeeshadow"
            style={{
              fontFamily: 'basiclazer',
              // color: '#ff27e1',
              letterSpacing: 0.025 + 'em',
              fontWeight: 500,
              fontSize: 36 + 'px',
              marginTop: -4 + 'px',
            }}
            className="threedeeshadow"
          >
            Shoutmo
          </h1>
        </div>
      </div>
    </>
  )
}

function Topbar() {
  return (
    <>
      <nav
        // tw="flex items-center justify-between text-white bg-black bg-gradient-to-b from-black via-gray-900 to-gray-800 shadow-xl sticky top-0"
        tw="flex items-center justify-between text-white bg-black shadow-xl sticky top-0 sm:hidden"
        // className="custom-nav-settings"
      >
        <div tw="ml-5 flex items-center h-9 w-full justify-between">
          <SiteLogo />
          <FaBars tw="mr-5 self-center" />
        </div>
      </nav>
    </>
  )
}

function Testbox() {
  return (
    <>
      <div tw="flex flex-col text-white">
        <div tw="flex flex-1 w-full bg-gray-600"></div>
        <div tw="flex w-full bg-gray-600">
          <button type="button" tw="h-12 w-full bg-green-500">
            <p tw="font-semibold tracking-wide">Links</p>
          </button>
        </div>
      </div>
    </>
  )
}

function LinksSection() {
  return (
    <>
      <div tw="space-y-4">
        <p tw="text-white text-3xl font-bold">Links</p>
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLinkWhite />
        <SharedLink />
        <SharedLink />
      </div>
    </>
  )
}

function SharedLink() {
  return (
    <>
      <div tw="flex flex-row bg-gray-200 shadow-sm rounded p-4">
        <div tw="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-gray-400 text-white">
          <FaYoutube size={36} tw="text-gray-900 w-6 h-6" />
        </div>

        <div tw="flex flex-col flex-grow justify-center ml-4">
          <p tw="font-bold text-lg">Twitter</p>
        </div>
        <div tw="flex items-center justify-center flex-shrink-0 h-12 w-12">
          <FaAngleRight size={36} tw="text-gray-400 w-6 h-6" />
        </div>
      </div>
    </>
  )
}

function SharedLinkWhite() {
  return (
    <>
      <div tw="flex flex-row bg-white shadow-sm rounded p-4">
        <div tw="flex items-center justify-center flex-shrink-0 text-gray-400">
          <FaTwitter size={36} tw="text-gray-600 w-9 h-9" />
        </div>

        <div tw="flex flex-col flex-grow justify-center ml-4">
          <p tw="font-bold text-lg">Twitter</p>
        </div>
        <div tw="flex items-center justify-center flex-shrink-0 h-12 w-12">
          <FaAngleRight size={36} tw="text-gray-400" />
        </div>
      </div>
    </>
  )
}
