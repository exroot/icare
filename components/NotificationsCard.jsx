/* eslint-disable react/prop-types */
import React from 'react'
import { RiInformationLine, RiAlertFill, RiCloseLine } from 'react-icons/ri'
import { MdAnnouncement, MdPersonAdd } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiStar } from 'react-icons/fi'
import 'twin.macro'

export default function NotificationsCard({ message, type }) {
  function AnnouncementIcon({ iconType }) {
    if (iconType === 'alert') {
      return <RiAlertFill tw="text-text-dark float-right" size={32} />
    }
    if (iconType === 'message') {
      return <BiMessageSquareDetail tw="text-text-dark float-right" size={32} />
    }
    if (iconType === 'invite') {
      return <MdPersonAdd tw="text-text-dark float-right" size={32} />
    }
    if (iconType === 'bump') {
      return <FiStar tw="text-text-dark float-right" size={32} />
    }
    if (iconType === 'announcement') {
      return <MdAnnouncement tw="text-text-dark float-right" size={32} />
    }
    return <RiInformationLine tw="text-text-dark float-right" size={32} />
  }

  // function AnnouncementColor({ type }) {
  //   if (type === 'alert') {
  //     return 'red'
  //   }
  //   if (type === 'message') {
  //     return 'yellow'
  //   }
  //   if (type === 'invite') {
  //     return 'blue'
  //   }
  //   if (type === 'bump') {
  //     return 'yellow'
  //   }
  //   if (type === 'announcement') {
  //     return 'white'
  //   }
  //   return 'white'
  // }

  function hideAnnouncementCard() {}
  return (
    <div tw="bg-background-primary shadow-md rounded mt-4 border border-gray-600 text-text-dark mx-8">
      <div tw="sm:flex sm:items-center px-6 py-4">
        <AnnouncementIcon iconType={type} />
        <div tw="text-center sm:text-left sm:flex-grow ml-4 ">
          <p tw="leading-tight">{message}</p>
        </div>
        <RiCloseLine
          onClick={hideAnnouncementCard}
          tw="text-text-dark float-right"
          size={32}
        />
      </div>
    </div>
  )
}
