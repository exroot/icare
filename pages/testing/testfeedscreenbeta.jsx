/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import 'twin.macro'
import Link from 'next/link'
import { TiThMenu } from 'react-icons/ti'
import { VscBell } from 'react-icons/vsc'
import { BsThreeDotsVertical, BsChevronRight } from 'react-icons/bs'
import { CgProfile , CgFeed } from 'react-icons/cg'
import {
  FiSettings,
  FiAlertCircle,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi'

import TimeAgo from 'timeago-react'
import { BiMessageAdd, BiUserCircle, BiSupport, BiShare } from 'react-icons/bi'
import { FaShareAltSquare , FaRegCompass, FaBox } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'
import { AiOutlineRetweet } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler'

import { BeatLoader } from 'react-spinners'
import { IoIosClose } from 'react-icons/io'
import { Icon, InlineIcon } from '@iconify/react'
import bxsUpArrowSquare from '@iconify/icons-bx/bxs-up-arrow-square'
import InfiniteScroll from 'react-infinite-scroll-component'
import Sidebar from '../../components/Navigation/Sidebar'
import Layout from '../../components/Layout'
import ShoutoutForm from '../../components/ShoutoutForm'
import NavbarAlt from '../../components/Navbar/NavbarAlt'

const iconSize = 24

export default function Basic() {
  return (
    <>
      <Homescreen />
    </>
  )
}

function Homescreen() {
  const [size, setSize] = useState(5)
  const [shoutouts, setShoutouts] = useState([
    {
      text:
        'I think the things you regret most in life are the things you didn’t do.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'If today were the last day of your life, would you want to do what you are about to do today?',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text: 'Stay hungry. Stay foolish.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'Don’t let the noise of others’ opinions drown out your own inner voice.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
  ])
  const loadMore = useCallback(async () => setSize((i) => i + 1))
  return (
    <>
      <Layout>
        <h1 tw="text-primary-200 text-3xl font-extrabold">Feed</h1>
        <div tw="w-full border-b border-primary-700 mb-4" />
        <div tw="flex justify-between relative">
          <div tw="">
            <ShoutoutInput />
            <InfiniteScroll
              dataLength={shoutouts.length} // This is important field to render the next data
              next={() => console.log('next trigger')}
              hasMore
              scrollThreshold={0.8}
              refreshFunction={async () => console.log('ayyy')}
              scrollableTarget="main"
              loader={(
                <div tw="mx-auto text-center mt-8">
                  <BeatLoader color="var(--color-accent)" />
                </div>
              )}
              endMessage={(
                <div tw="w-3/4 p-2 mx-auto h-10 bg-transparent border border-accent text-accent rounded-xl font-semibold">
                  all caught up
                </div>
              )}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={(
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8595; Pull down to refresh
                </h4>
              )}
              releaseToRefreshContent={(
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8593; Release to refresh
                </h4>
              )}
              children={shoutouts.map((shoutout, idx) => (
                <FeedCardAlt shoutout={shoutout} key={idx} />
              ))}
            />
          </div>
          <div tw="hidden lg:block w-72">
            <div tw="mt-0 top-4 right-0 sticky w-auto">
              <SuggestedUsersAlt />
              <TrendingTags />
            </div>
          </div>
        </div>
      </Layout>
      {/* <div tw="h-screen w-screen flex flex-row bg-black space-x-4">
        <Sidebar />
        <ContentArea />
      </div> */}
    </>
  )
}

function ContentArea() {
  return (
    <>
      <div
        tw="w-full h-screen flex flex-col font-mono overflow-y-scroll"
        style={{
          fontFamily: 'Inter',
        }}
        id="main"
      >
        <ContentPanelFull />
      </div>
    </>
  )
}

function BigTitle(props) {
  return (
    <>
      <div tw="h-16">
        <p tw="leading-tight text-gray-700 text-xl md:text-2xl font-semibold w-full ml-16 align-middle">
          {props.title || ' Title'}
        </p>
      </div>
    </>
  )
}

function ContentPanelFull() {
  const [size, setSize] = useState(5)
  const [shoutouts, setShoutouts] = useState([
    {
      text:
        'I think the things you regret most in life are the things you didn’t do.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'If today were the last day of your life, would you want to do what you are about to do today?',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text: 'Stay hungry. Stay foolish.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'Don’t let the noise of others’ opinions drown out your own inner voice.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
    {
      text:
        'You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.',
      creator: {
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'John Doe',
        username: 'john',
      },
      created_at: `${new Date()}`,
    },
  ])
  const loadMore = useCallback(async () => setSize((i) => i + 1))
  return (
    <>
      <NavbarAlt />
      <div tw="flex flex-col lg:flex-row space-x-4">
        <div tw="w-full lg:w-3/4 h-auto">
          <div tw="flex flex-col pr-4 md:pr-0 justify-between items-center mx-auto w-full">
            {/* <AnnouncementArea /> */}
            <ShoutoutInput />
            <InfiniteScroll
              dataLength={shoutouts.length} // This is important field to render the next data
              next={() => console.log('next trigger')}
              hasMore
              scrollThreshold={0.8}
              refreshFunction={async () => console.log('ayyy')}
              scrollableTarget="main"
              loader={(
                <div tw="mx-auto text-center">
                  <BeatLoader color="var(--color-accent)" />
                </div>
              )}
              endMessage={(
                <div tw="w-3/4 p-2 mx-auto h-10 bg-transparent border border-accent text-accent rounded-xl font-semibold">
                  all caught up
                </div>
              )}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={(
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8595; Pull down to refresh
                </h4>
              )}
              releaseToRefreshContent={(
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8593; Release to refresh
                </h4>
              )}
              children={shoutouts.map((shoutout, idx) => (
                <FeedCardAlt shoutout={shoutout} key={idx} />
              ))}
            />
          </div>
        </div>
        {/* right content panel */}

        <div tw="hidden lg:block w-80 h-auto">
          <SuggestedUsersAlt />
          {/* <TrendingTags /> */}
        </div>
        {/* right content panel */}
      </div>
    </>
  )
}

function TtestCard() {
  return (
    <>
      <div tw="flex max-w-xl p-3 border border-gray-300 rounded mx-auto">
        <div tw="flex flex-col space-y-2">
          <Topcardsection />
          <MiddleCardsection />
          <Bottomsection time={Date.now().toLocaleString} />
        </div>
      </div>
    </>
  )
}

function Topcardsection() {
  return (
    <>
      <div tw="flex flex-row justify-between">
        <div tw="flex flex-row mr-4 flex-shrink-0">
          <div tw="flex-shrink-0">
            <img
              tw="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div tw="flex flex-col ml-3">
            <div tw="hover:underline">
              <h4 tw="text-lg font-bold">Ted Foxsum</h4>
              <p tw="flex items-center">
                <span tw="">@TedIsDaMan</span>
              </p>
              {/* <ButtonGroup /> */}
            </div>
          </div>
        </div>

        <div tw="flex flex-row flex-shrink-0">
          <BsThreeDotsVertical tw="text-gray-900" size={24} />
        </div>
      </div>
    </>
  )
}

function MiddleCardsection() {
  return (
    <>
      <p tw="text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
        enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
        ratione libero!
        {' '}
        <span tw="ml-1 text-sm font-semibold text-gray-500 uppercase space-x-2">
          <span tw="text-sm font-semibold hover:text-gray-900">#n64</span>
          <span tw="text-sm font-semibold hover:text-gray-900">
            #programmer
          </span>
          <span tw="text-sm font-semibold hover:text-gray-900">#gaming</span>
        </span>
      </p>
    </>
  )
}

function Bottomsection({ time, bumps, username }) {
  return (
    <>
      <div tw="hidden md:flex flex-row justify-between">
        <MetaButtonGroupLeft time={time} bumps={bumps} />
        <MetaButtonGroupRight username={username} />
      </div>
    </>
  )
}

function BottomsectionMobileOnly({ time, bumps, username }) {
  return (
    <>
      <div tw="block md:hidden flex flex-col justify-between ">
        <div tw="flex flex-row space-x-4 text-base">
          {/* time  */}
          <span tw="text-base font-semibold self-center">
            <TimeAgo tw="mr-1" datetime={time} />
          </span>
        </div>
        {/* bump count, share, bump button  */}
        <div tw="flex flex-row justify-between border-t border-white mt-6 text-sm">
          <button tw="font-semibold flex flex-row rounded-lg py-2 px-0 items-center space-x-1 hover:border-white focus:outline-none ease-in duration-75">
            <InlineIcon icon={bxsUpArrowSquare} tw="self-center w-7 h-7" />
            <span tw="self-center">
              {bumps}
              {' '}
              Bumps
            </span>
          </button>
          <button tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 hover:border-white focus:outline-none ease-in duration-75 hover:bg-primary-800">
            <BiShare tw="w-6 h-6 self-center mr-1" />
            <span tw="self-center">Share</span>
          </button>
          <button tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 hover:border-white focus:outline-none ease-in duration-75 bg-transparent hover:bg-primary-800">
            <img tw="h-6 w-6 self-center mr-1" src="/img/bump-icon-white.png" />
            <span>Bump</span>
          </button>
        </div>
      </div>
    </>
  )
}

function MetaButtonGroupLeft({ time, bumps }) {
  return (
    <>
      <div tw="flex flex-row space-x-4 text-sm xl:text-base">
        <span tw="font-semibold self-center">
          <TimeAgo tw="mr-1" datetime={time} />
        </span>
        <button tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 hover:border-white focus:outline-none transition ease-in duration-75">
          <InlineIcon icon={bxsUpArrowSquare} tw="self-center w-7 h-7" />
          {/* <FaBox tw="w-6 h-6 self-center mr-1" /> */}
          <span tw="self-center flex">
            {bumps}
            {' '}
            <span tw="ml-1 hidden sm:flex lg:hidden xl:flex"> Bumps</span>
          </span>
        </button>
      </div>
    </>
  )
}

function MetaButtonGroupRight({ username }) {
  return (
    <>
      <div tw="flex flex-row space-x-4 text-sm xl:text-base">
        <button tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 focus:outline-none transition ease-in duration-75 hover:bg-primary-800">
          <BiShare tw="w-6 h-6 self-center mr-1" />
          <span tw="self-center">Share</span>
        </button>
        <button tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 focus:outline-none transition ease-in duration-75 hover:bg-primary-800">
          <img tw="h-6 w-6 self-center mr-1" src="/img/bump-icon-white.png" />
          <span>Bump</span>
        </button>
      </div>
    </>
  )
}

function TopSection({ avatar, name, username }) {
  return (
    <>
      <div tw="flex flex-row">
        <img
          tw="h-14 w-14 sm:h-16 sm:w-16 rounded shadow"
          src={avatar}
          alt={`${username}'s avatar`}
        />
        <div tw="leading-6 self-center ml-3">
          {/* <Link href="/testing/testmockup/screens/viewprofile"> */}
          <p tw="text-primary-200 text-xl font-semibold hover:underline">
            {name}
          </p>
          {/* </Link> */}
          {/* <Link href="/testing/testmockup/screens/viewprofile"> */}
          <p tw="hover:underline text-base text-primary-400">{`@${username}`}</p>
          {/* </Link> */}
        </div>
      </div>
    </>
  )
}

function MiddleSection() {
  return (
    <>
      <p>
        Perfect for learning how the framework works, prototyping a new idea, or
        creating a demo to share online.
      </p>
    </>
  )
}

function MiddleSectionAlt({ shoutout }) {
  return (
    <div tw="w-full">
      <span tw="text-base w-full">{shoutout}</span>
    </div>
  )
}

// function SideBar() {
//   return (
//     <>
//       <div
//         tw="hidden lg:block bg-primary-900"
//         style={{
//           minWidth: 280 + 'px',
//         }}
//       >
//         {/* <!-- start menu container --> */}

//         <div
//           tw="flex flex-col space-y-8 h-screen font-mono"
//           style={{
//             fontFamily: 'Inter',
//           }}
//         >
//           <SiteLogo />
//           <SBMenu />
//         </div>
//         {/* <!-- end menu container --> */}
//       </div>
//     </>
//   )
// }

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
      <div tw="flex flex-col pt-4 w-full">
        {/* <Link href="/testing/testmockup/screens/feedscreenalt"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9">
          {/* <button tw="w-full flex justify-between hover:bg-gradient-to-r from-pink-900 via-blue-900 focus:outline-none focus:text-accent text-gray-500 py-6 pl-9 transition ease-in duration-75"> */}
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
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9">
          <span tw="flex ml-6">
            <FaRegCompass tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Explore
            </p>
          </span>
        </button>

        {/* <Link href="/testing/testmockup/screens/trendingscreen"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9">
          <span tw="flex ml-6">
            <VscBell tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Notifications
            </p>
          </span>
        </button>

        {/* <Link href="/testing/testmockup/screens/trendingscreen"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9">
          <span tw="flex ml-6">
            <CgProfile tw="h-6 w-6 self-center" />
            <p tw="mx-4 text-lg focus:font-semibold hover:font-semibold">
              Profile
            </p>
          </span>
        </button>

        {/* </Link> */}
        {/* <Link href="/testing/testmockup/screens/settingsscreen"> */}
        <button tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9">
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
        tw="w-full flex justify-between hover:bg-primary-800 focus:outline-none focus:text-accent text-gray-500 py-5 pl-9"
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
              {/* content */}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div tw="m-3">
                  {/* title */}
                  <div tw="ml-auto mb-3 text-gray-700 font-semibold">
                    SHOUTOUT
                  </div>
                  {/* input */}
                  <textarea
                    tw="w-full text-gray-800 bg-gray-100 p-3 h-60 border-2 border-gray-800 rounded outline-none p-2"
                    spellCheck="false"
                    placeholder="Say it loud ;)"
                  />
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
          <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900" />
        </>
      ) : null}
    </>
  )
}

function SLogo(props) {
  return (
    <>
      {/* <Link href="/testing/testmockup/screens/homescreen"> */}
      <h1
        // tw="w-full font-bold text-5xl text-white ml-12 pt-12 focus:outline-none cursor-pointer"
        tw="flex w-full font-bold justify-center text-5xl text-white  pt-12 focus:outline-none cursor-pointer"
        style={{
          fontFamily: 'basiclazer',
          color: '#ff27e1',
        }}
      >
        Shoutmo
      </h1>
      {/* </Link> */}
    </>
  )
}

function Titlebar() {
  return (
    <>
      <nav tw="px-6 py-2 flex items-center min-w-0 h-full text-gray-700 space-x-3 mt-8 w-full">
        <TiThMenu size={32} tw="block lg:hidden flex self-center" />
        <span tw="flex-1" />
        <VscBell size={32} tw="text-white" />
        <img
          tw="object-cover w-10 h-10 rounded-full ml-auto border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt="avatar"
        />
      </nav>
    </>
  )
}

function FeedCardAlt({ shoutout }) {
  return (
    <>
      <div tw="relative sm:px-0 sm:mx-auto w-full sm:max-w-2xl">
        <div tw="relative text-primary-200 bg-primary-800 rounded-lg w-full mb-2 hover:bg-primary-700 duration-300 ease-in-out shadow-2xl">
          <div tw="p-6 text-base space-y-6 w-full">
            <TopSection
              avatar={shoutout.creator.avatar}
              name={shoutout.creator.name}
              username={shoutout.creator.username}
            />
            {/* <MiddleSection /> */}
            <MiddleSectionAlt shoutout={shoutout.text} />

            <BottomsectionMobileOnly
              time={shoutout.created_at}
              username={shoutout.creator.username}
              bumps={21}
            />
            <Bottomsection
              time={shoutout.created_at}
              username={shoutout.creator.username}
              bumps={21}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const user = {
  podcast_owner: 'Freeman',
  podcast_title: 'The Free Zone w/ Freeman Fly',
  podcast_banner:
    'https://images.unsplash.com/photo-1550424844-f7b914439c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80', // profile_picture: "https://www.placecage.com/300/300",
  profile_picture:
    'https://images.unsplash.com/photo-1542908220-73cc48ad0af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  podcast_website: 'https://www.example.com',
  podcast_bio:
    'This is just some words for the podcast description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.',
  related_podcast_img: 'https://picsum.photos/200',
}

function SuggestedUsers() {
  return (
    <>
      <div tw="flex flex-col items-center mt-12">
        <div tw="flex flex-col h-full w-full">
          <p tw="text-white text-xl font-semibold ml-6 mb-2 uppercase">
            Also check out
          </p>
        </div>
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />
        {/* <p tw="text-sm text-white flex-wrap self-start ml-6 mr-32">
          see more suggestions
        </p> */}
      </div>
    </>
  )
}

function SuggestedUser() {
  return (
    <>
      <div tw="flex flex-col justify-center h-full w-full">
        {/* <p tw="text-xl text-gray-700">Title</p> */}
        <div tw="mx-4">
          <div tw="w-full flex p-1 rounded-full hover:border-primary-200 mx-auto mb-3">
            <div tw="flex-shrink-0 flex align-middle">
              <img
                tw="h-10 w-10 rounded-full flex align-middle self-center border-2"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="avatar"
              />
            </div>
            <div tw="flex-grow ml-3">
              <h4 tw="text-sm text-primary-200 leading-tight">@JackyJives</h4>
              <p tw="text-sm text-primary-200 leading-normal">Jacky Jive</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SuggestedUsersAlt() {
  return (
    <>
      <div tw="flex flex-col items-center bg-primary-900 px-3 space-y-1">
        <div tw="flex flex-col h-full w-full px-4">
          <p tw="text-primary-200 text-sm font-bold uppercase">
            Also check out
          </p>
        </div>
        <SuggestedUserAlt />
        <SuggestedUserAlt />
        <SuggestedUserAlt />
        <SuggestedUserAlt />
        <SuggestedUserAlt />
        {/* <p tw="text-sm text-white flex-wrap self-start ml-6 mr-32">
          see more suggestions
        </p> */}
      </div>
    </>
  )
}

function SuggestedUserAlt() {
  return (
    <>
      <div tw="-mx-12 w-full flex items-center bg-primary-800 hover:bg-primary-800 pl-2 xl:pl-4 cursor-pointer duration-100 ease-in  rounded-lg">
        {/* <p tw="text-xl text-gray-700">Title</p> */}

        <div tw="flex items-center">
          <img
            tw="h-10 w-10 rounded-full flex align-middle self-center border-2"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="avatar"
          />
        </div>

        <div tw="flex-grow p-3 w-2">
          <h4 tw="text-sm text-primary-200 font-bold leading-tight truncate">
            Jacky Jive
          </h4>
          <p tw="text-sm text-primary-400 leading-normal truncate">@Jack</p>
        </div>

        {/* Button */}
        <div tw="hidden xl:block p-2">
          <button
            tw="px-4 text-xs xl:text-sm py-1 bg-transparent border border-accent text-accent rounded-full hover:bg-accent-hover-outline duration-200 ease-in-out"
            type="button"
          >
            Follow
          </button>
        </div>
      </div>
    </>
  )
}

function MegaPhoneTilted() {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tw="transform -rotate-28 "
      >
        <path
          d="M17.502 2.135A1 1 0 0 1 18 3v4a3.99 3.99 0 0 1 2.981 1.333A3.989 3.989 0 0 1 22 11c0 1.024-.386 1.96-1.019 2.667A3.993 3.993 0 0 1 18 15v4a1 1 0 0 1-1.496.868L10 16.152V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.734l6.77-3.868a1 1 0 0 1 .998.003zM10 14a1 1 0 0 1 .496.132L16 17.277V4.723l-5.504 3.145A1 1 0 0 1 10 8H4v6h6zm-4 2v4h2v-4H6zm12-3c.592 0 1.123-.256 1.491-.667.317-.354.509-.82.509-1.333s-.192-.979-.509-1.333A1.993 1.993 0 0 0 18 9v4z"
          fill="var(--color-accent)"
          // fill="#6B7280"
        />
      </svg>
    </>
  )
}

function MegaPhoneReg() {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.502 2.135A1 1 0 0 1 18 3v4a3.99 3.99 0 0 1 2.981 1.333A3.989 3.989 0 0 1 22 11c0 1.024-.386 1.96-1.019 2.667A3.993 3.993 0 0 1 18 15v4a1 1 0 0 1-1.496.868L10 16.152V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.734l6.77-3.868a1 1 0 0 1 .998.003zM10 14a1 1 0 0 1 .496.132L16 17.277V4.723l-5.504 3.145A1 1 0 0 1 10 8H4v6h6zm-4 2v4h2v-4H6zm12-3c.592 0 1.123-.256 1.491-.667.317-.354.509-.82.509-1.333s-.192-.979-.509-1.333A1.993 1.993 0 0 0 18 9v4z"
          // fill="white"
          fill="#6B7280"
        />
      </svg>
    </>
  )
}

function ShoutoutInput() {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      {!expanded ? (
        <div
          // tw="rounded-full text-white bg-gray-400 hover:bg-purple-500 duration-300 font-bold mr-1 md:mr-2 mb-2 px-6 md:px-4 py-2 opacity-90 hover:opacity-100"
          tw="hidden mt-6 lg:mt-0 sm:block w-full  mb-4 h-14 rounded-full text-accent bg-accent-hover-outline border border-accent relative sm:max-w-2xl sm:mx-auto hover:cursor-pointer"
          onClick={() => setExpanded(true)}
        >
          <div tw="flex flex-row h-14 w-full justify-center">
            <span tw="text-xl font-semibold self-center mr-2">
              <MegaPhoneTilted />
            </span>
            <p tw="text-xl font-extrabold tracking-wide self-center uppercase ">
              Shout it
            </p>
          </div>
        </div>
      ) : (
        <div tw="w-full sm:max-w-2xl xl:px-2">
          <ShoutoutForm setShow={setExpanded} />
        </div>
      )}
    </>
  )
}

function AnnouncementArea() {
  return (
    <>
      <div
        tw="flex flex-row w-full h-14 items-center text-black bg-gray-700 sm:max-w-2xl sm:mx-auto rounded"
        // style={{
        //   backgroundColor: '#4C4C4C',
        // }}
      >
        <span tw="text-xl font-semibold ml-4 mr-3">
          <FiAlertCircle />
          {/* <FiChevronsRight /> */}
        </span>
        <p tw="text-base font-semibold">
          We’re in alpha .. More features coming soon ..
          <span tw="self-center underline" href="https://www.example.com">
            info here
          </span>
        </p>
        {/* <IoIosClose tw="float-right" /> */}
      </div>
    </>
  )
}

// to add in later after Cryce gets new functions working

function Bumpedbytheseusers() {
  return (
    <>
      <div tw="mt-4 flex items-center">
        <div tw="flex -space-x-2 mr-2">
          <img
            tw="rounded-full w-6 h-6 border border-white"
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=10"
            alt=""
          />
          <img
            tw="rounded-full w-6 h-6 border border-white"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=10"
            alt=""
          />
          <img
            tw="rounded-full w-6 h-6 border border-white"
            src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=10"
            alt=""
          />
        </div>
        <div tw="text-sm text-gray-500 font-semibold">5 Replies</div>
      </div>
    </>
  )
}

function TrendingTags() {
  return (
    <>
      <div tw="flex flex-col items-center mt-4">
        <div tw="flex flex-col h-full w-full">
          <p tw="text-primary-200 text-sm font-bold ml-6 uppercase">
            Trending Tags
          </p>
        </div>

        <div tw="w-full px-3">
          <div tw="py-2">
            <div tw="my-3 flex flex-wrap -m-1">
              <Tag>Gaming</Tag>
              <Tag>Esports</Tag>
              <Tag>Business</Tag>
              <Tag>News</Tag>
              <Tag>Health and Fitness</Tag>
              <Tag>Politics</Tag>
              <Tag>Tech</Tag>
              <Tag>Movies</Tag>
              <Tag>Podcast</Tag>
              <Tag>Crypto</Tag>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Tag({ children }) {
  return (
    <>
      <a tw="block m-1 bg-primary-800 rounded-full hover:bg-accent text-primary-200 px-2 py-0 leading-loose cursor-pointer text-sm md:text-base">
        <span tw="font-bold">#</span>
        {children}
      </a>
    </>
  )
}
