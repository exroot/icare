/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import PageLoader from '../../components/PageLoader'
import useUser from '../../lib/useUser'
import TabMenu from '../../components/Navigation/TabNavigator'
import Layout from '../../components/Layout'
import DownloadQRCodeSection from '../../components/EmbedOverlays'
import 'twin.macro'
import Navbar from '../../components/Navbar/NavbarAlt'

import linkz from '../../components/tablinkz'

const SettingsShareables = () => {
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
        <title>Settings - Shareables</title>
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Settings</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <DownloadQRCodeSection user={user} />
          </div>

          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  )
}

export default SettingsShareables
