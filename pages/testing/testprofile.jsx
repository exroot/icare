import React from 'react'
import { FaAngleRight, FaYoutube, FaBars } from 'react-icons/fa'
import { RiLinksLine } from 'react-icons/ri'
import Linkify from 'react-linkify'
import Profile from '../../components/Profile/Profile'
import 'twin.macro'

export default function Screen() {
  return <></>
}

function SharedLink() {
  return (
    <>
      <div tw="flex flex-row bg-gray-200 shadow-sm rounded p-4">
        <div tw="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-gray-400 text-button">
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

function DefaultSection() {
  return (
    <>
      <div tw="space-y-4 pt-4 pb-8">
        <div tw="flex flex-row pt-4">
          <p tw="text-button text-3xl font-bold">Other</p>
        </div>
        <div tw="h-64 flex flex-row bg-gray-500"></div>
      </div>
    </>
  )
}
function WebsiteSection() {
  return (
    <>
      <div tw="">
        <div tw="flex flex-row">
          <p tw="text-button text-3xl font-bold">Website</p>
        </div>
        <div tw="flex flex-row flex-wrap">
          {/* <div tw="rounded-full text-button bg-gray-400 hover:bg-accent duration-300 font-bold mr-1 md:mr-2 mb-2 px-6 md:px-4 py-2 opacity-90 hover:opacity-100">
            <WebsiteLink />
          </div> */}
          <WebsiteLink />
        </div>
      </div>
    </>
  )
}

function WebsiteLink() {
  return (
    <>
      <div tw="flex justify-start md:mt-4">
        <RiLinksLine tw="mt-3 mr-1 w-4 text-lg text-primary-400" />

        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <>
              <a
                target="_blank"
                href={decoratedHref}
                rel={'noopener noreferrer'}
                key={key}
                style={{
                  color: '#eb008d',
                }}
                tw="mt-2 hover:underline"
              >
                {decoratedText}
              </a>
            </>
          )}
        >
          https://example.com/
        </Linkify>
      </div>
    </>
  )
}

function Topbar() {
  return (
    <>
      <nav
        // tw="flex items-center justify-between text-button bg-black bg-gradient-to-b from-black via-gray-900 to-gray-800 shadow-xl sticky top-0"
        tw="flex items-center justify-between text-button bg-black shadow-xl sticky top-0 sm:hidden px-5"
        // className="custom-nav-settings"
      >
        <div tw="flex items-center h-9 w-full justify-between">
          <SiteLogo />
          <FaBars tw="self-center" />
        </div>
      </nav>
    </>
  )
}

function SiteLogo() {
  return (
    <>
      <div tw="flex items-center flex-shrink-0 text-button mr-6">
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
