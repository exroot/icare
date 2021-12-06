/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaChevronRight, FaAngleRight, FaRegCreditCard } from 'react-icons/fa'
import tw, { css } from 'twin.macro'
import { ShareButtonForCard } from '../../components/Buttons/ShareButtonForCard'
import { FollowButtonForCard } from '../../components/Buttons/FollowButtonForCard'
import { UnfollowButtonForCard } from '../../components/Buttons/UnfollowButtonForCard'
import { EditButtonForCard } from '../../components/Buttons/EditButtonForCard'
import useShoutouts from '../../lib/useShoutoutsFetcher'
import NotFoundPage from '../../components/404'
import TopNavbar from '../../components/Navigation/TopNavbar'
import AuthModal from '../../components/Modals/AuthModal'
import ShareModal from '../../components/Modals/ShareModal'
import BottomNavigation from '../../components/Navigation/BottomNavigation'
import useUser from '../../lib/useUser'
import axiosClient from '../../lib/client'
import SEOProfile from '../../components/SEOProfile'
import PlatformIcon from '../../components/PlatformIcon'
import ShoutoutsContainer from '../../components/Profile/ShoutoutsContainer'

import { event } from '../../lib/gtag'

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

const ProfilePage = ({ data, referrer }) => {
  const [buttonText, setButtonText] = useState('Following')
  const [showModal, setShowModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [followingStatus, setFollowingStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useUser()
  const isUser =
    user && user.is_logged_in && user.username === data.profile.username

  useEffect(() => {
    event('profileview', data.profile.username, 'referrer', referrer)
    if (referrer) {
      axiosClient({
        url: `/traffic/profile-page-views`,
        method: 'POST',
        body: {
          user: data.profile.username,
          referrer,
        },
      })
    }
  }, [])

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      ;(async () => {
        let params = {}
        if (user) {
          params = {
            url: `/profiles/${data.profile.username}`,
            method: 'GET',
          }
        } else {
          params = {
            url: `/profiles/${data.profile.username}`,
            method: 'GET',
            headers: {},
          }
        }
        const { data: responseData } = await axiosClient(params)
        if (isMounted && responseData.data.following) {
          setFollowingStatus(true)
        }
      })()
    }
    return () => {
      isMounted = false
    }
  }, [user])

  const followAction = async () => {
    try {
      if (user.is_logged_in === false) {
        // redirectTo(`/login?next=${profile.username}`);
        setShowModal(true)
        return
      }
      setLoading(true)
      if (!followingStatus) {
        // action: follow user
        await axiosClient({
          url: `/profiles/${data.profile.username}/follows/`,
          method: 'POST',
          body: {
            follower: user.id,
            followed: data.profile.id,
          },
        })
        setFollowingStatus(true)
        setLoading(false)
      } else {
        // action: unfollow user
        await axiosClient({
          url: `/profiles/${data.profile.username}/follows/`,
          method: 'DELETE',
        })
        setFollowingStatus(false)
        setLoading(false)
      }
    } catch (err) {}
  }
  if (data.notFound) {
    //  Show profile doesnt exist
    return (
      <>
        <SEOProfile profile={null} />
        <NotFoundPage />
      </>
    )
  }

  return (
    <>
      <SEOProfile profile={data.profile} />

      <div tw="bg-black py-6 flex flex-col justify-center sm:py-6">
        <TopNavbar />

        {/* start testing card  */}
        <div tw="ml-0 w-full max-w-md mx-auto px-3 | sm:px-0 sm:mx-auto | md:ml-36 | lg:ml-48 | mt-16 lg:mt-24 space-y-3 mb-20">
          <div tw="flex flex-row items-center space-x-3">
            {/* <!-- avatar  --> */}
            <Avatar
              src={data.profile.profile_picture}
              username={data.profile.username}
            />

            <div tw="flex flex-col w-full space-y-3">
              {/* <!-- name / username --> */}
              <div tw="flex flex-col w-full">
                <p tw="text-2xl sm:text-3xl text-white font-semibold">
                  {nameParser(
                    data.profile.firstname,
                    data.profile.lastname,
                    data.profile.username
                  )}
                </p>
                <p tw="text-white font-medium">@{data.profile.username}</p>
              </div>

              {/* <!-- start buttons section  --> */}
              <div tw="mb-3 flex flex-row flex-wrap space-x-2 justify-end">
                {!isUser ? (
                  !followingStatus ? (
                    <FollowButtonForCard
                      isSubmitting={loading}
                      onClick={followAction}
                    >
                      Follow
                    </FollowButtonForCard>
                  ) : (
                    <UnfollowButtonForCard
                      onMouseEnter={() => setButtonText('Unfollow')}
                      onMouseLeave={() => setButtonText('Following')}
                      isSubmitting={loading}
                      onClick={followAction}
                    >
                      {buttonText}
                    </UnfollowButtonForCard>
                  )
                ) : (
                  <EditButtonForCard anchor href="/settings">
                    <span tw="flex justify-center">Edit Profile</span>
                  </EditButtonForCard>
                )}
                <ShareButtonForCard onClick={() => setShowShareModal(true)} />
              </div>

              {/* <!-- end buttons section  --> */}
            </div>
          </div>

          {/* <!-- meta section / bio section  --> */}
          <MetaSection
            following={data.profile.following_count}
            followers={data.profile.follower_count}
            profile={data.profile}
          />
          <BioSection bio={data.profile.bio} />

          {/* <!-- tabs /tab bar  --> */}
          <ProfileCardTabs
            links={data.profile.social_links}
            withTitle={false}
            profile={data.profile}
          />
        </div>
        {/* end card  */}

        <AuthModal showModal={showModal} setShowModal={setShowModal} />

        <ShareModal
          showModal={showShareModal}
          setShowModal={setShowShareModal}
          profile={{
            username: data.profile.username,
          }}
        />
        <BottomNavigation />
      </div>
    </>
  )
}

function Avatar({ src, username }) {
  return (
    <>
      <img
        tw="object-contain w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 sm:border-4 border-gray-500"
        src={src || '/img/avatar_placeholder.png'}
        alt={`${username} avatar.`}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const {
    params: { username },
    req: {
      headers: { referer },
    },
  } = context

  try {
    const { data: response } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/profiles/${username}`
    )
    return {
      props: { data: response.data, referrer: referer || null },
    }
  } catch (err) {
    return { props: { data: { notFound: true, profile: { username: null } } } }
  }
}

function TipMeButton() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center place-content-between px-4 py-2 text-base text-white font-semibold rounded-md border border-transparent hover:text-white bg-green-500 hover:bg-green-500 hover:border-white w-full focus:outline-none outline-none"
      >
        <FaRegCreditCard tw="text-white" />
        <p>Send Tip</p>
        <FaChevronRight tw="text-white" />
      </button>
    </>
  )
}

const LinksSection = ({ withTitle = true, links, profile }) => {
  if (!links || !links.length) {
    return <MessageBox text="This user hasn't added any links yet." />
  }
  return (
    <section>
      {withTitle && <p tw="text-button text-3xl font-bold">Links</p>}

      <div tw="w-full flex flex-col space-y-2">
        {profile.connected_account ? <TipMeButton /> : null}
        {links.map((link) => (
          <LinkButton
            platformName={link.platform_name}
            url={link.user_url}
            key={link.id}
          />
        ))}
      </div>
    </section>
  )
}

function ProfileCardTabs({ links, profile }) {
  const { shoutoutsLoading, shoutouts } = useShoutouts(profile)

  const TABBAR_ITEM = {
    ShowUsersShoutouts: (
      <ShoutoutsContainer
        shoutoutsLoading={shoutoutsLoading}
        shoutouts={shoutouts}
        profile={profile}
      />
    ),
    ShowUsersLinks: (
      <LinksSection links={links} withTitle={false} profile={profile} />
    ),
  }
  const [selectedItem, setSelectedItem] = useState('ShowUsersLinks')

  return (
    <>
      <div tw="flex flex-wrap w-full text-white space-y-2">
        <Tabs setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <div tw="w-full">{TABBAR_ITEM[selectedItem]}</div>
      </div>
    </>
  )
}

function Tabs({ setSelectedItem, selectedItem }) {
  const activeStyle = css`
    ${tw`text-accent`}
  `
  const inactiveStyle = css`
    ${tw`text-gray-600`}
  `

  return (
    <>
      <div tw="w-full pt-3 flex space-x-4">
        <button
          tw="w-1/2 text-xl py-1 font-bold uppercase tracking-wide leading-6 sm:text-lg sm:leading-7 text-gray-600 hover:text-accent border-b-2 border-transparent hover:border-b-2 hover:border-accent focus:outline-none transition duration-300 ease-in"
          type="button"
          css={selectedItem === 'ShowUsersLinks' ? activeStyle : inactiveStyle}
          onClick={() => setSelectedItem('ShowUsersLinks')}
        >
          Links
        </button>
        <button
          tw="w-1/2 text-xl py-1 font-bold uppercase tracking-wide leading-6 sm:text-lg sm:leading-7 text-gray-600 hover:text-accent border-b-2 border-transparent hover:border-b-2 hover:border-accent focus:outline-none transition duration-300 ease-in"
          type="button"
          css={
            selectedItem === 'ShowUsersShoutouts' ? activeStyle : inactiveStyle
          }
          onClick={() => setSelectedItem('ShowUsersShoutouts')}
        >
          Shoutouts
        </button>
      </div>
    </>
  )
}

function LinkButton({ platformName, url }) {
  const iconSize = 24
  return (
    <>
      <a
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        tw="py-2 px-4 cursor-pointer text-primary-200 bg-primary-700 border border-primary-900 hover:border-accent font-semibold 
          rounded-md flex flex-row w-full justify-between
          transition duration-100 ease-in-out transform shadow-2xl w-full"
      >
        <div tw="">
          <PlatformIcon icon={platformName} />
        </div>
        <div tw="items-center">{platformName}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </a>
    </>
  )
}

function MetaSection({ following, followers, profile }) {
  return (
    <>
      <div tw="flex flex-col pt-3">
        <div tw="flex flex-row flex-wrap w-full place-items-start space-x-5">
          <div tw="flex flex-row space-x-1 items-center">
            <p tw="text-white font-bold">{followers}</p>
            <p tw="text-white">Followers</p>
          </div>
          <div tw="flex flex-row space-x-1 items-baseline">
            <p tw="text-white font-bold">{following}</p>
            <p tw="text-white">Following</p>
          </div>
          <div tw="flex flex-row space-x-1 items-center">
            <p tw="text-white font-bold">
              {profile.shoutouts_count ? profile.shoutouts_count : '0'}
            </p>
            <p tw="text-white">Shouts</p>
          </div>
        </div>
      </div>
    </>
  )
}

function BioSection({ bio }) {
  return (
    <>
      {/* <p tw="mt-3 text-gray-400 text-sm text-justify">{bio}</p> */}
      {/* <p tw="mt-3 text-gray-400">{bio}</p> */}
      <p tw="w-full mt-3 text-gray-400 text-sm break-words">{bio}</p>
    </>
  )
}

function MessageBox({ text }) {
  return (
    <>
      <div tw="flex flex-row w-full p-2 mb-6 bg-primary-900 rounded-lg">
        <div tw="w-full">
          <h3 tw="block text-center text-text-dark font-bold">{text}</h3>
        </div>
      </div>
    </>
  )
}
export default ProfilePage
