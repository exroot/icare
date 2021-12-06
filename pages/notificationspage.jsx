import React from 'react'
import Wrapper from '../components/Wrapper'
import NotificationsCard from '../components/NotificationsCard'
import 'twin.macro'

export default function NotificationsPage() {
  return (
    <>
      <Wrapper>
        <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8">
          <h1 tw="text-4xl font-semibold text-text-dark ml-8">Notifications</h1>
          <NotificationsCard type="alert" message="This is an alert message" />
          <NotificationsCard
            type="message"
            message="@megamatt sent you a message"
          />
          <NotificationsCard
            type="invite"
            message="You recieved an invite from @megamatt"
          />
          <NotificationsCard
            type="bump"
            message="One of your shoutouts got a bump"
          />
          <NotificationsCard
            type="announcement"
            message="This is an announcement."
          />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
        </div>
      </Wrapper>
    </>
  )
}
