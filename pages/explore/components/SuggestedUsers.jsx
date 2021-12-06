/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'
import axios from '../../../lib/client'
import resizeImage from '../../../utils/resizeImage'
import SuggestedUsersSkeleton from '../../../components/Feed/FeedSkeleton'
import useUser from '../../../lib/useUser'

const SuggestedUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      ;(async () => {
        setLoading(true)
        try {
          const { data: suggested } = await axios({
            url: '/profiles/me/suggested/?page=1',
            method: 'GET',
          })
          setUsers(
            // TODO show users who have a profile pic first
            // TODO show more users button
            suggested.data.results.sort(() => 0.5 - Math.random()).slice(0, 8)
          )
        } catch (err) {
          // console.log(err)
        } finally {
          setLoading(false)
        }
      })()
    }
    return () => {
      isMounted = false
    }
  }, [])
  if (loading) {
    return <SuggestedUsersSkeleton />
  }
  return (
    <>
      <div tw="flex flex-col space-y-1">
        <div tw="flex flex-row overflow-x-scroll space-x-3 h-64">
          {users.map((profile) => (
            <Suggested key={profile.username} profile={profile} />
          ))}
        </div>
      </div>
    </>
  )
}
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

const Suggested = ({ profile }) => {
  const [followed, setFollowed] = useState(false)
  const { user: userLogged } = useUser()

  const followUser = async () => {
    if (!followed) {
      await axios({
        url: `/profiles/${profile.username}/follows/`,
        method: 'POST',
        body: {
          follower: userLogged.id,
          followed: profile.id,
        },
      })
      setFollowed(true)
    } else {
      // action: unfollow user
      await axios({
        url: `/profiles/${profile.username}/follows/`,
        method: 'DELETE',
      })
      setFollowed(false)
    }
  }

  return (
    <>
      <Link href={`/${profile.username}`} passHref>
        <div tw="flex-shrink-0 h-full w-36 cursor-pointer duration-100 ease-in space-y-1">
          <img
            tw="object-cover w-full h-48 rounded"
            src={
              profile.profile_picture
                ? resizeImage(profile.profile_picture, [50, 50])
                : '/img/avatar_placeholder.png'
            }
            alt={`${profile.username}'s avatar`}
          />
          <div tw="flex flex-col space-y-0 text-sm">
            <a tw="block text-sm text-primary-200 font-bold leading-tight hover:underline duration-75 ease-in-out truncate text-white tracking-wide text-white font-semibold">
              {nameParser(
                profile.first_name,
                profile.last_name,
                profile.username
              )}
            </a>
            <p tw="text-primary-400 leading-normal truncate overflow-clip overflow-hidden">{`@${profile.username}`}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SuggestedUsers
