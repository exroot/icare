/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import tw, { css } from 'twin.macro'
import SiteLogo from '../../components/SiteLogo'
import EditProfile from '../../components/Profile/edit/EditProfile'
import PageLoader from '../../components/PageLoader'
import useUser from '../../lib/useUser'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TabMenu from '../../components/Navigation/TabNavigator'
import Layout from '../../components/Layout'

const linkz = [
  {
    title: 'Profile',
    path: '/settings',
  },
  {
    title: 'Links',
    path: '/settings/links',
  },
  {
    title: 'Notifications',
    path: '/settings/notifications',
  },
  {
    title: 'Shareables',
    path: '/settings/shareables',
  },
  {
    title: 'Security',
    path: '/settings/security',
  },
]

const Settings = () => {
  const { user, isLoading } = useUser({ redirectTo: '/login' })

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
        <title>Settings - Profile</title>
      </Head>
      <Layout>
        <h1 tw="text-primary-200 text-3xl font-extrabold">Settings</h1>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <EditProfile user={user} />
          </div>

          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  )
}

const BackButton = () => (
  <div tw="flex py-1 mr-4">
    <a tw=" cursor-pointer  block w-auto px-4 py-2 font-bold rounded-full text-button bg-accent border border-accent hover:bg-accent-hover duration-200 ease-in-out">
      {' '}
      Back{' '}
    </a>
  </div>
)

const SettingsMenu = () => {
  return (
    <>
      <div
        tw="w-full h-screen flex flex-col font-mono overflow-y-scroll py-12"
        style={{
          fontFamily: 'Inter',
        }}
      >
        <header tw="flex align-middle mb-4 px-24">
          <BackButton />
          <h1 tw="font-bold text-primary-200 text-3xl">Settings</h1>
        </header>
        <main>
          <Menu />
        </main>
      </div>
    </>
  )
}

const Menu = () => (
  <div tw="mx-auto mt-12">
    <ul tw="text-primary-200 font-bold text-xl space-y-4 text-center lg:text-left lg:pl-48">
      <MenuItem>Edit profile</MenuItem>
      <MenuItem>Update Links</MenuItem>
      <MenuItem>Notifications Settings</MenuItem>
      <MenuItem>Shareable Cards</MenuItem>
      <MenuItem>Security</MenuItem>
      <MenuItem>Support</MenuItem>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>Legal</MenuItem>
    </ul>
  </div>
)

const MenuItem = ({ children }) => (
  <li tw="">
    <a tw="px-4 py-2  hover:underline cursor-pointer">{children}</a>
  </li>
)
export default Settings
