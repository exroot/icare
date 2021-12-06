import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  RiMapPin2Fill,
  RiLinksLine,
  RiEdit2Line,
  RiShareLine,
  RiUserAddLine,
} from 'react-icons/ri'
import ReactTooltip from 'react-tooltip'
import { RiArrowDownSLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import axios from '../../lib/client'
import redirectTo from '../../utils/redirectTo'
import Linkify from 'react-linkify'
import useUser from '../../lib/useUser'
import ShareModal from '../Modals/ShareModal'
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import useSWR from 'swr'
import ShoutoutsContainer from './ShoutoutsContainer'
import LinksSection from './LinksSection'
import resizeImage from '../../utils/resizeImage'
import localforage from 'localforage'
import 'twin.macro'
import GridActivity from './GridActivity'
import useShoutouts from '../../lib/useShoutoutsFetcher';

const notificationHandler = async (topic) => {
  const subscribed = false
  const fcmToken = await localforage.getItem('fcm_token')
  try {
    // if subscribed
    if (subscribed) {
      const { data: unsubscribeResponse } = await axios({
        url: '/notifications/topics',
        body: {
          topic,
          token: fcmToken,
        },
        headers: {},
        method: 'DELETE',
      })
    } else {
      const { data: subscribeResponse } = await axios({
        url: '/notifications/topics',
        body: {
          topic,
          token: fcmToken,
        },
        headers: {},
        method: 'POST',
      })
    }
    return
  } catch (err) {
    console.error(err)
  }
}

const ProfileNotFound = () => {
  return (
    <div tw="px-4 relative">
      <div tw="w-full bg-background-primary rounded-md shadow-md pb-4">
        <div tw="rounded-md">
          {/* Cover image */}
          <div tw="overflow-hidden w-full rounded-t">
            <div
              tw="w-full bg-gray-400 relative"
              style={{
                height: '320px',
              }}
            >
              <Image
                src={'/img/cover_placeholder.jpg'}
                layout="fill"
                quality={75}
                objectFit="cover"
                alt={`cover placeholder`}
                tw="bg-cover bg-center h-full"
              />
            </div>
          </div>
          {/* Profile image */}
          <div tw="flex justify-start">
            {/* Background which simulate border */}
            <div
              tw="absolute bg-background-primary -mt-20 ml-4 rounded-full z-20"
              style={{
                height: '160px',
                width: '160px',
                transform: 'translate(-5px, -5px)',
              }}
            ></div>
            <div tw="-mt-20 ml-4">
              <Image
                src={'/img/avatar_placeholder.png'}
                height={150}
                width={150}
                alt={`avatar placeholder`}
                tw="rounded-full z-20"
              />
            </div>
          </div>
          {/* User info */}
          <div tw="px-8 pb-6 pt-2">
            {/* Header */}
            <div tw="flex justify-start">
              <div>
                <h1 tw="text-text-darker text-sm font-bold font-sans text-xl">
                  This user doesn't exist
                </h1>
                <p tw="text-text-darker font-sans">
                  Try searching for another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = ({
  profile,
  user,
  setShowModal,
  followAction,
  followingStatus,
}) => {
  // Little hack to get the tooltip working on SSR
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <div tw="block sm:flex sm:justify-between">
        {/* Left side */}
        <div tw="mb-4">
          <h1 tw="text-white text-sm font-extrabold text-2xl">
            {'@' + profile.username}
          </h1>
          {profile.first_name || profile.last_name ? (
            <span tw="text-white font-light">
              {profile.first_name} {profile.last_name}
            </span>
          ) : (
            <span tw="text-white font-light">{profile.username} profile</span>
          )}
        </div>
        {/* Right side */}
        <div tw="flex sm:pb-8">
          {profile &&
            user &&
            user.is_logged_in &&
            profile.username !== user.username &&
            followingStatus && (
              <div>
                <a
                  onClick={() =>
                    notificationHandler(`${profile.username}-followers`)
                  }
                  data-tip
                  data-for="notificationsButton"
                  tw="flex rounded-full bg-transparent border border-primary-light text-primary-light px-1 py-1 sm:px-2 sm:py-2 mr-2 transition duration-300 ease-in hover:bg-primary-light hover:text-gray-100 hover:cursor-pointer"
                >
                  <IoMdNotificationsOutline tw="text-2xl" />
                </a>
              </div>
            )}

          {/* Share button */}
          <div tw="">
            <PrimaryButton onClick={() => setShowModal(true)}>
              <span tw="flex">
                <RiShareLine tw="mr-1 mt-1" />
                Share
              </span>
            </PrimaryButton>
          </div>
          {/* Follow/Following */}
          <div tw="ml-2">
            {profile && user && profile.username !== user.username ? (
              !followingStatus ? (
                <PrimaryButton onClick={followAction}>
                  <span tw="flex">
                    <RiUserAddLine tw="mr-1 mt-1" />
                    Follow
                  </span>
                </PrimaryButton>
              ) : (
                <SecondaryButton onClick={followAction}>
                  Following
                </SecondaryButton>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {profile &&
        user &&
        user.is_logged_in &&
        profile.username !== user.username &&
        mounted && (
          <ReactTooltip id="notificationsButton" type="dark">
            <span>Notifications</span>
          </ReactTooltip>
        )}
    </>
  )
}

const geoParser = (profile) => {
  let geoData
  if (profile.location_country && profile.location_city) {
    // Parse country with city
    geoData = `${profile.location_city}, ${profile.location_country}`
  } else if (profile.location_country && !profile.location_city) {
    // Just show country
    geoData = profile.location_country
  } else if (!profile.location_country && profile.location_city) {
    // Just show city
    geoData = profile.location_city
  } else {
    // Neither country or city has been set yet so, geo data will not be displayed
    geoData = null
  }
  return geoData
}

const Body = ({ profile }) => {
  const geoData = geoParser(profile)
  return (
    <div tw="block text-left -mt-2 sm:-mt-4">
      <div tw="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-4 md:mt-0">
        {/* Geo info */}
        {profile.location_city || profile.location_country ? (
          <div tw="flex justify-start md:mt-4">
            <RiMapPin2Fill tw="mt-3 mr-1 w-4 text-lg text-primary-light" />
            <p tw="mt-2 font-sans text-white mr-2">{geoData}</p>
          </div>
        ) : null}

        {/* Website */}
        {profile.website && (
          <div tw="flex justify-start md:mt-4">
            <RiLinksLine tw="mt-3 mr-1 w-4 text-lg text-primary-light" />

            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <>
                  <a
                    target="_blank"
                    href={decoratedHref}
                    rel={'noopener noreferrer'}
                    key={key}
                    tw="mt-2 font-sans text-white"
                  >
                    {decoratedText}
                  </a>
                </>
              )}
            >
              {profile.website}
            </Linkify>
          </div>
        )}
      </div>
      {/* Bio */}
      {profile.bio && (
        <p tw="mt-4  font-light text-white break-all">{profile.bio}</p>
      )}
      <div tw="text-center mt-4 ">
        {/* Categories / Tags */}
        {profile.tags.map((tag, i) => {
          return (
            <span
              tw="inline-block bg-background-secondary rounded-full px-3 py-1 text-sm font-semibold text-text-dark mr-2 mb-2"
              key={i}
            >
              #{tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}


function TopEditButton() {
  return (
    <>
      <SecondaryButton type="link" href="/settings">
        <div
          tw="mx-4 flex flex-row items-center align-middle justify-center inset-0 w-auto
        h-16 text-white text-2xl absolute bg-blue-700 hover:bg-blue-500 
        hover:shadow-xl shadow-lg rounded rounded-b-none"
        >
          <RiEdit2Line tw="mr-1" />
          <p tw="font-bold">Edit Profile</p>
          <RiArrowDownSLine tw="ml-2" size={24} />
        </div>
      </SecondaryButton>
    </>
  )
}

const ProfileCard = ({ profile }) => {
  const { user } = useUser()
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [followingStatus, setFollowingStatus] = useState(false)
  const { shoutouts } = useShoutouts(profile
  )

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      if (!profile) {
        return
      }
      let params = {}
      if (!!user) {
        params = {
          url: `/profiles/${profile.username}`,
          method: 'GET',
        }
      } else {
        params = {
          url: `/profiles/${profile.username}`,
          method: 'GET',
          headers: {},
        }
      }
      const { data } = await axios(params)
      if (isMounted && data.data.following) {
        setFollowingStatus(true)
      }
    })()
    return () => {
      isMounted = false
    }
  }, [user, profile])

  const followAction = async () => {
    try {
      if (user.is_logged_in === false) {
        // redirectTo(`/login?next=${profile.username}`);
        router.push({
          pathname: '/login',
          query: { next: `/${profile.username}` },
        })
        return
      }
      if (!followingStatus) {
        // follow user action
        const { data } = await axios({
          url: `/profiles/${profile.username}/follows/`,
          method: 'POST',
          body: {
            follower: user.id,
            followed: profile.id,
          },
        })
        setFollowingStatus(true)
      } else {
        // unfollow user action
        const { data } = await axios({
          url: `/profiles/${profile.username}/follows/`,
          method: 'DELETE',
        })
        setFollowingStatus(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (!profile) {
    return <ProfileNotFound />
  }

  return (
    <div tw="sm:px-4 mb-6 relative lg:w-3/4 xl:w-4/6 justify-center mx-auto bg-transparent rounded rounded-b-none">
      <ShareModal
        showModal={showModal}
        setShowModal={setShowModal}
        profile={profile}
      />

      {profile && user && user.username === profile.username && (
        <TopEditButton />
      )}

      <div tw="w-full mx-auto bg-background-primary rounded-md shadow-md">
        <div tw="rounded-md bg-black">
          {/* Profile image */}
          <div tw="flex justify-start">
            <div tw="flex justify-start mt-8">
              <img
                alt={`${profile.username} profile img`}
                src={
                  profile.profile_picture
                    ? resizeImage(profile.profile_picture, [200, 200])
                    : '/img/avatar_placeholder.png'
                }
                tw="object-cover h-36 w-36 sm:h-40 sm:w-40 border-transparent rounded-full mt-16 ml-4"
                style={{
                  borderWidth: 6 + 'px',
                }}
              />
            </div>
          </div>
          {/* User info */}
          <div tw="px-8 pb-6 pt-2 ">
            {/* Header */}
            <Header
              profile={profile}
              user={user}
              setShowModal={setShowModal}
              followAction={followAction}
              followingStatus={followingStatus}
            />
            {/* Body */}
            <Body profile={profile} />
          </div>
          {/* Links */}
          <div tw="px-8 pb-6 pt-2">
            {profile.social_links && (
              <LinksSection links={profile.social_links} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
