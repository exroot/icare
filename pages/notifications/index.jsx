/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import TimeAgo from 'timeago-react'
import Link from 'next/link'
import Head from 'next/head'
import { BeatLoader } from 'react-spinners'
import Layout from '../../components/Layout'
import useUser from '../../lib/useUser'
import PageLoader from '../../components/PageLoader'
import usePaginatedNotifications from '../../lib/useNotificationsHistory'
import 'twin.macro'
import Description from '../../components/Description'
import Navbar from '../../components/Navbar/NavbarAlt'

const NotificationsPage = () => {
  const { user, isLoading } = useUser({ redirectTo: '/login' })
  const {
    notifications,
    isEmpty,
    errorNotifications,
    isLoadingMore,
    setSize,
  } = usePaginatedNotifications()
  const loadMore = useCallback(async () => setSize((i) => i + 1))

  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>Shoutmo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Shoutmo | Notifications</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Notifications</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700" />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <Description tw="text-sm text-primary-400 mb-4 w-full">
              Here you'll see a brief history of your most recent notifications.
              New followers, new shoutouts from users you follow and more.
            </Description>
            <div tw="mt-4 w-full text-center">
              {notifications ? (
                notifications.map((notification) => (
                  <NotificationCard
                    notification={notification}
                    key={notification.id}
                  />
                ))
              ) : (
                <h3>Loading notifications...</h3>
              )}
              {!!notifications.length && !isEmpty && !errorNotifications ? (
                <button
                  type="button"
                  tw="flex justify-center px-4 py-2 bg-accent hover:bg-accent-hover text-button font-medium rounded-lg w-full text-center"
                  onClick={loadMore}
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? (
                    <BeatLoader color="#fff" tw="text-center" size={16} />
                  ) : (
                    'Load more'
                  )}
                </button>
              ) : (
                <span tw="text-xl font-bold text-primary-200">
                  You're up to date.
                </span>
              )}
            </div>
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  )
}

const NotificationCard = ({ notification }) => {
  if (notification.notification_type === 'FOLLOW') {
    const index = notification.body.indexOf(' ')
    const [username, body] = [
      notification.body.slice(0, index),
      notification.body.slice(index + 1),
    ]

    return (
      <div tw="bg-primary-800 max-w-4xl rounded-lg px-6 py-4 mb-2 shadow-2xl">
        <div tw="flex place-content-between mb-2">
          <h3 tw="font-bold text-primary-200 truncate">
            ❤️ You have a new follower
          </h3>
        </div>
        <div tw="text-primary-400 text-left">
          <Link href={`/${username}`} passHref>
            <a tw="text-primary-200 font-bold">{username}</a>
          </Link>
          {` ${body}`}
        </div>
        <div tw="text-right text-xs text-primary-400">
          <TimeAgo datetime={notification.created_at} />
        </div>
      </div>
    )
  }
  if (notification.notification_type === 'SHOUTOUTPOST') {
    return (
      <div tw="bg-primary-800 max-w-4xl rounded-lg px-6 py-4 mb-2 max-h-44">
        <div tw="flex place-content-between mb-2">
          <h3 tw="text-primary-400 text-left">
            📣 New shoutout from{' '}
            <Link href={`/${notification.title}`} passHref>
              <a tw="text-primary-200 font-bold">{notification.title}</a>
            </Link>
          </h3>
        </div>
        <div tw="  text-left text-primary-200">{notification.body}</div>
        <div tw="text-right text-xs text-primary-400">
          <TimeAgo datetime={notification.created_at} />
        </div>
      </div>
    )
  }
  return (
    <div tw="bg-primary-200 rounded-lg px-6 py-4 mb-2">New notification</div>
  )
}

export default NotificationsPage
