/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { PulseLoader } from 'react-spinners'
import ProfileShoutoutCard from './ProfileShoutoutCard'
import 'twin.macro'

function ShoutoutsContainer({ shoutouts, profile, shoutoutsLoading }) {
  const hasShoutouts = shoutouts && shoutouts.data.count > 0

  return (
    <>
      <div tw="flex flex-row w-full p-2 mb-6 overflow-x-auto bg-primary-900 rounded-lg">
        {!shoutoutsLoading && !hasShoutouts && (
          <div tw="w-full">
            <h3 tw="block text-center text-text-dark font-bold">
              This user doesn't have any shoutouts yet.
            </h3>
          </div>
        )}
        {shoutoutsLoading && <ShoutoutsLoadder username={profile.username} />}
        {!shoutoutsLoading &&
          shoutouts.data.results
            .slice(0, 10)
            .map((shoutout) => (
              <ProfileShoutoutCard shoutout={shoutout} key={shoutout.id} />
            ))}
        {!shoutoutsLoading && hasShoutouts && (
          <MoreCircleButton profile={profile} />
        )}
      </div>
    </>
  )
}

const ShoutoutsLoadder = ({ username }) => (
  <div tw="w-full flex justify-center">
    <PulseLoader color={'#9f7aea'} tw="mt-1 mr-2" size={12} />
    <span tw="ml-2 text-sm text-text-dark sm:text-base">
      Loading <span tw="font-extrabold">@{username}</span> shoutouts...
    </span>
  </div>
)

function MoreCircleButton({ profile }) {
  return (
    <>
      <Link href={`/${profile.username}/shoutouts`} passHref>
        {/* // TODO link to show all users shoutouts page  */}
        <a tw="m-2 rounded border-primary-700 shadow-sm bg-text-dark hover:bg-accent transition duration-100 ease-in">
          <div tw="p-2 w-32 h-32 text-white">
            <p tw="self-center flex-1 p-2 text-xl">More Shoutouts</p>
            <p tw="self-center flex-1 pl-2 py-12">
              <FaAngleRight size={36} />
            </p>
          </div>
        </a>
      </Link>
    </>
  )
}

export default ShoutoutsContainer
