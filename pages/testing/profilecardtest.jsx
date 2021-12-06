import React, { useState, useEffect, useRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import QRCode from 'qrcode.react'

import tw, { css } from 'twin.macro'
import {
  BsInfoCircle,
  BsFillInfoCircleFill,
  BsSquareFill,
} from 'react-icons/bs'
import { FaChevronRight, FaInfo } from 'react-icons/fa'

export default function NewProfileCardWithLinks() {
  return (
    <>
      <div tw="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-6">
        <NewCard />
      </div>
    </>
  )
}

function NewCard() {
  return (
    <>
      <div tw="max-w-md mx-auto flex-grow">
        <TopSection />
        <TabBar />
      </div>
    </>
  )
}

function TopSection() {
  return (
    <>
      <div tw="flex flex-col mx-auto space-y-2 items-center my-4">
        <Avatar />
        <CenteredNameUsername />
      </div>
    </>
  )
}

function DescriptionSection() {
  return (
    <>
      <div tw="py-8 leading-6 space-y-4 sm:text-lg sm:leading-7 text-center flex-grow">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          augue neque gravida in. Varius sit amet mattis vulputate enim nulla
          aliquet porttitor. Ut sem viverra aliquet eget sit.
        </p>
      </div>
    </>
  )
}

function Avatar() {
  return (
    <>
      <div tw="h-24 w-24 rounded-xl border-4 border-gray-500">
        <img
          src="https://randomuser.me/api/portraits/women/21.jpg"
          tw="rounded-lg"
        />
      </div>
    </>
  )
}

function CenteredNameUsername() {
  return (
    <>
      <div tw="flex flex-col mx-auto h-16 leading-6 sm:text-lg sm:leading-7 items-center text-white">
        <p tw="text-3xl font-bold">Jane doe</p>
        <p tw="text-xl font-bold">@username</p>
      </div>
    </>
  )
}

function Links() {
  return (
    <>
      <ul tw="list-disc space-y-4 h-full">
        <li tw="flex items-start">
          <LinkButton name="Twitch" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Bitchute" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Odysee" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Twitter" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Youtube" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Itunes" />
        </li>
        <li tw="flex items-start">
          <LinkButton name="Stitcher" />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
        <li tw="flex items-start">
          <LinkButton />
        </li>
      </ul>
    </>
  )
}

function LinkButton(props) {
  return (
    <>
      <button tw="flex flex-row h-14 items-center bg-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-500 hover:ring-2 hover:ring-purple-600">
        <BsFillInfoCircleFill tw="mx-auto h-6" size={24} />
        <p tw="flex-grow text-lg font-bold">{props.name || 'cool'}</p>
        <FaChevronRight tw="mx-auto h-6" size={24} />
      </button>
    </>
  )
}

// TABS --------------------------------------------------------------------------------------------------------------

function TabBar(props) {
  const [selectedItem, setSelectedItem] = useState('links')

  return (
    <>
      <div tw="flex flex-wrap text-white w-full">
        <div tw="w-full">
          <div tw="space-y-2 flex flex-wrap content-around mx-3">
            <CardTabBar
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
        </div>

        <div tw="w-full">{TABBAR_ITEM[selectedItem]}</div>
      </div>
    </>
  )
}

function CardTabBar({ setSelectedItem, selectedItem, props }) {
  const defaultStyle = css`
    ${tw`text-gray-600 rounded-lg border border border-transparent cursor-pointer px-3 py-2 flex text-center hover:text-gray-400 text-white`}
  `
  const selectedStyle = css`
    ${tw`text-3xl rounded-lg border border border-transparent cursor-pointer px-3 py-2 flex text-center text-white bg-gray-700`}
  `
  return (
    <>
      <div tw="flex flex-row text-white rounded-md text-purple-300 py-2 overflow-x-scroll space-x-1">
        <div
          onClick={() => setSelectedItem('links')}
          css={selectedItem === 'links' ? selectedStyle : defaultStyle}
        >
          <span tw="text-xl font-bold leading-6 font-bold text-2xl sm:text-2xl">
            Links
          </span>
        </div>

        <div
          onClick={() => setSelectedItem('about')}
          css={selectedItem === 'about' ? selectedStyle : defaultStyle}
        >
          <span tw="text-xl font-bold leading-6 font-bold text-2xl sm:text-2xl">
            Info
          </span>
        </div>

        <div
          onClick={() => setSelectedItem('shoutouts')}
          css={selectedItem === 'shoutouts' ? selectedStyle : defaultStyle}
        >
          <span tw="text-xl font-bold leading-6 font-bold text-2xl sm:text-2xl">
            Shoutouts
          </span>
        </div>

        <div
          onClick={() => setSelectedItem('qr')}
          css={selectedItem === 'qr' ? selectedStyle : defaultStyle}
        >
          <span tw="text-xl font-bold leading-6 font-bold text-2xl sm:text-2xl">
            QR
          </span>
        </div>
      </div>
    </>
  )
}

const TABBAR_ITEM = {
  links: <TabDataLinks />,
  about: <TabDataAbout />,
  qr: <TabDataQR />,
  shoutouts: <TabDataShoutouts />,
}

function TabDataLinks(props) {
  return (
    <>
      <div tw="flex flex-col h-full">
        <div tw="py-8 leading-6 space-y-4 sm:text-lg sm:leading-7 p-3">
          <Links />
        </div>
      </div>
    </>
  )
}

function TabDataShoutouts(props) {
  return (
    <>
      <div tw="flex flex-col h-full">
        <div tw="py-8 leading-6 space-y-4 sm:text-lg sm:leading-7 p-3">
          show shoutouts
        </div>
      </div>
    </>
  )
}

function TabDataQR(props) {
  return (
    <>
      <div tw="flex flex-col h-full">
        <div tw="py-8 leading-6 space-y-4 sm:text-lg sm:leading-7 p-3">
          <QRCode
            tw="mx-auto border-2 rounded-md border-4 sm:border-8 border-gray-500 w-full h-full p-2"
            id="qrcode"
            // value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${profile.username}`}
            value="www.example.com"
            size={128}
            bgColor="var(--primary-900)"
            fgColor="var(--color-primary-100)"
            level="L"
            includeMargin={false}
            renderAs="svg"
          />
        </div>
      </div>
    </>
  )
}

function TabDataAbout(props) {
  return (
    <>
      <div tw="flex flex-col h-full">
        <div tw="list-disc space-y-4 h-full p-3">
          <div tw="flex items-start">
            <button tw="flex flex-row h-14 items-center bg-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-500">
              <p tw="flex-grow text-lg font-bold">Follow</p>
            </button>
          </div>
          <div tw="flex items-start">
            <button tw="flex flex-row h-14 items-center bg-gray-700 py-2 px-4 rounded-lg w-full hover:bg-gray-500">
              <p tw="flex-grow text-lg font-bold">Share</p>
            </button>
          </div>
        </div>
        <div tw="space-y-6">
          <DescriptionSection />
          <Followers />
          <Following />
        </div>
      </div>
    </>
  )
}

function Following() {
  return (
    <>
      <div tw="list-disc space-y-2">
        <div tw="flex items-center space-x-3">
          <p tw="text-xl font-bold">Following</p>

          <div tw="flex">
            <img
              tw="w-12 h-12 rounded-full border-4 border-white"
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
              alt=""
            />
            <span tw="flex items-center justify-center font-semibold text-gray-600 w-12 h-12 rounded-full bg-gray-200 border-4 border-white -ml-4">
              +3
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

function Followers() {
  return (
    <>
      <ul tw="list-disc space-y-2">
        <li tw="flex items-center space-x-3">
          <p tw="text-xl font-bold">Followers</p>

          <div tw="flex">
            <img
              tw="w-12 h-12 rounded-full border-4 border-white"
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
              alt=""
            />
            <span tw="flex items-center justify-center font-semibold text-gray-600 w-12 h-12 rounded-full bg-gray-200 border-4 border-white -ml-4">
              +3
            </span>
          </div>
        </li>
      </ul>
    </>
  )
}
