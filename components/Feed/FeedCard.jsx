/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Link from 'next/link'
import TimeAgo from 'timeago-react'
import tw, { css } from 'twin.macro'
import { InlineIcon } from '@iconify/react'
import bxsUpArrowSquare from '@iconify/icons-bx/bxs-up-arrow-square'
import { BiShare } from 'react-icons/bi'
import Linkit from '../Linkit'
import resizeImage from '../../utils/resizeImage'
import axios from '../../lib/client'

const nameParser = (firstname, lastname, username) => {
  if (firstname && lastname) {
    return `${firstname} ${lastname}`
  }
  if (!lastname && firstname) {
    return firstname
  }
  if (!firstname && lastname) {
    return lastname
  }
  return `${username}'s profile`
}

const FeedCard = ({ shoutout, mutateShoutouts }) => {
  const [bumped, setBumped] = useState(shoutout.bumped_by_me)
  const [bumpCount, setBumpCount] = useState(shoutout.bump_count)
  const bumpIt = async () => {
    setBumped((bumpStatus) => !bumpStatus)
    setBumpCount((prevCount) => {
      const newValue = !bumped ? prevCount + 1 : prevCount - 1
      return newValue
    })
    await mutateShoutouts((data) => {
      data.some((shoutoutPage, index) => {
        const shoutoutIndex = shoutoutPage.findIndex(
          (s) => s.id === shoutout.id
        )
        if (shoutoutIndex !== -1) {
          const shoutoutToUpdate = shoutoutPage[shoutoutIndex]
          data[index].splice(shoutoutIndex, 1, {
            ...shoutoutToUpdate,
            bumped_by_me: !shoutoutToUpdate.bumped_by_me,
            bump_count: !shoutoutToUpdate.bumped_by_me
              ? shoutoutToUpdate.bump_count + 1
              : shoutoutToUpdate.bump_count - 1,
          })
        }
        return shoutoutIndex !== -1
      })

      return [...data]
    }, false)
    await axios({
      url: `/shoutouts/bump/${shoutout.id}`,
      method: !bumped ? 'POST' : 'DELETE',
    })
  }
  return (
    <>
      <div tw="relative sm:px-0 sm:mx-auto w-full sm:max-w-2xl">
        <div tw="relative text-primary-200 bg-primary-800 rounded-lg w-full mb-2 duration-300 ease-in-out shadow-2xl">
          <div tw="p-6 text-base space-y-6 w-full">
            <TopSection
              avatar={shoutout.creator.profile_picture}
              name={shoutout.creator.first_name}
              lastname={shoutout.creator.last_name}
              username={shoutout.creator.username}
            />
            {/* <MiddleSection /> */}
            <MiddleSection shoutout={shoutout.text} />

            <BottomSectionMobileOnly
              time={shoutout.created_at}
              username={shoutout.creator.username}
              bumps={bumpCount}
              bumped={bumped}
              bumpIt={bumpIt}
            />
            <Bottomsection
              time={shoutout.created_at}
              username={shoutout.creator.username}
              bumps={bumpCount}
              bumped={bumped}
              bumpIt={bumpIt}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const TopSection = ({ avatar, name, lastname, username }) => (
  <>
    <div tw="flex flex-row">
      <img
        tw="h-14 w-14 sm:h-16 sm:w-16 rounded shadow"
        key={avatar || `${username}'s avatar`}
        src={
          avatar ? resizeImage(avatar, [50, 50]) : '/img/avatar_placeholder.png'
        }
        alt={`${username}'s avatar`}
      />
      <div tw="leading-6 self-center ml-3">
        {/* <Link href="/testing/testmockup/screens/viewprofile"> */}
        <Link href={`/${username}`} passHref>
          <a tw="block text-primary-200 text-xl font-semibold hover:underline">
            {nameParser(name, lastname, username)}
          </a>
        </Link>

        {/* </Link> */}
        {/* <Link href="/testing/testmockup/screens/viewprofile"> */}
        <span tw="text-base text-primary-400 cursor-default">{`@${username}`}</span>
        {/* </Link> */}
      </div>
    </div>
  </>
)

const MiddleSection = ({ shoutout }) => (
  <div tw="w-full text-base break-words">
    <Linkit>{shoutout}</Linkit>
  </div>
)

const BottomSectionMobileOnly = ({ time, bumps, bumped, bumpIt }) => (
  <>
    <div tw="flex flex-col justify-between md:hidden">
      <div tw="flex flex-row space-x-4 text-base">
        {/* time  */}
        <span tw="text-base font-semibold self-center">
          <TimeAgo tw="mr-1" datetime={time} />
        </span>
      </div>
      {/* bump count, share, bump button  */}
      <div tw="flex flex-row justify-between border-t pt-1 border-primary-700 mt-6 text-sm">
        <button
          type="button"
          tw="font-semibold flex flex-row rounded-lg py-2 px-0 items-center space-x-1 hover:border-primary-700 focus:outline-none ease-in duration-75"
        >
          <InlineIcon icon={bxsUpArrowSquare} tw="self-center w-7 h-7" />
          <span tw="self-center">{`${bumps}`}</span>
        </button>
        <ShareButton />
        <BumpButton bumpIt={bumpIt} bumped={bumped} />
      </div>
    </div>
  </>
)

const Bottomsection = ({ time, bumps, bumped, bumpIt }) => (
  <>
    <div tw="hidden md:flex flex-row justify-between">
      <div tw="flex flex-row space-x-4 text-sm xl:text-sm">
        <span tw="font-semibold self-center">
          <TimeAgo tw="mr-1" datetime={time} />
        </span>
        <button
          type="button"
          tw="font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 hover:border-white focus:outline-none transition ease-in duration-75"
        >
          <InlineIcon icon={bxsUpArrowSquare} tw="self-center w-7 h-7" />
          {/* <FaBox tw="w-6 h-6 self-center mr-1" /> */}
          <span tw="self-center flex">
            {`${bumps} `}
            <span tw="ml-1 hidden sm:flex lg:hidden xl:flex">
              {' '}
              {bumps === 1 ? 'Bump' : 'Bumps'}
            </span>
          </span>
        </button>
      </div>

      <div tw="flex flex-row space-x-4 text-sm xl:text-sm">
        <ShareButton />
        <BumpButton bumpIt={bumpIt} bumped={bumped} />
      </div>
    </div>
  </>
)

const ShareButton = () => {
  const style = css`
    ${tw`font-semibold flex flex-row rounded-lg py-2 px-3 items-center space-x-1 focus:outline-none transition ease-in duration-75 hover:bg-primary-800`}
  `
  return (
    <button type="button" css={style}>
      <BiShare tw="w-6 h-6 self-center mr-1" />
      <span tw="self-center">Share</span>
    </button>
  )
}

const BumpButton = ({ bumpIt, bumped }) => {
  const style = css`
    ${tw`font-semibold flex flex-row rounded-lg py-1 px-3 items-center space-x-1  focus:outline-none transition ease-in duration-75 bg-primary-900 hover:bg-primary-700`}

    ${bumped &&
    tw` bg-accent-hover-outline text-accent hover:bg-accent-hover-outline`}
  `
  return (
    <button type="button" css={style} onClick={bumpIt}>
      <img
        tw="h-6 w-6 self-center mr-1"
        src="/img/bump-icon-white.png"
        alt="bump icon"
      />
      <span>{bumped ? 'Bumped' : 'Bump'}</span>
    </button>
  )
}

export default FeedCard
