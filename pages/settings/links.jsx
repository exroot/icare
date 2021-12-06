/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { RiSearchLine } from 'react-icons/ri'
import useUser from '../../lib/useUser'
import PageLoader from '../../components/PageLoader'
import AddAccounts from '../../components/Links/AddAcounts'
import useSocialPlatforms from '../../lib/useSocialPlatforms'
import TabMenu from '../../components/Navigation/TabNavigator'
import Status from '../../components/Status'
import 'twin.macro'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar/NavbarAlt'
import linkz from '../../components/tablinkz'

const SettingsLinks = () => {
  const { user, isLoading } = useUser({ redirectTo: '/login' })
  const [platformAux, setPlatformAux] = useState([])
  const [searchTerm, setSearchTerm] = useState('') // this holds the search term that use effect watches
  const {
    socialPlatforms,
    isLoadingPlatforms,
    mutatePlatforms,
    errorPlatforms,
  } = useSocialPlatforms()

  useEffect(() => {
    let isMounted = true
    if (isMounted && !!socialPlatforms && !platformAux.length) {
      setPlatformAux(socialPlatforms)
    }
    return () => {
      isMounted = false
    }
  }, [socialPlatforms])

  useEffect(() => {
    ;(async () => {
      await fetch('https://api.shoutmo.com/api/v1/socialmedia-platforms')
        .then((data) => data.json())
        .then((data) => {
          setPlatformAux(data.data)
        })
    })()
  }, [])

  // Search bar
  useEffect(() => {
    if (!platformAux.length) {
      // There is no social platforms
      return
    }
    if (!searchTerm.length) {
      // Search input is empty so, show all platforms
      mutatePlatforms(platformAux, false)
      return
    }
    // Filter social platforms based on search input
    const filtered = platformAux.filter((platform) => {
      const platformName = platform.name.toLowerCase()
      return platformName.includes(searchTerm.toLowerCase())
    })
    mutatePlatforms(filtered, false)
  }, [searchTerm, platformAux])

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
        <title>Settings - Links</title>
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Settings</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <AnnouncementArea />
            <SearchBar setSearchTerm={setSearchTerm} />
            <Status
              loading={isLoadingPlatforms}
              error={errorPlatforms}
              topic="links"
            />
            {socialPlatforms && !socialPlatforms.length && (
              <div tw="w-full py-12 text-primary-200">
                {/* <div tw="flex justify-center">Empty illustration</div> */}
                <div tw="w-full text-center bg-primary-800 py-4 rounded-lg">
                  <span tw="text-primary-200 font-bold">
                    No platforms found.
                  </span>
                </div>
              </div>
            )}
            {socialPlatforms && (
              <>
                <AddAccounts linksAvailable={socialPlatforms} user={user} />
              </>
            )}
          </div>

          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  )
}

const SearchBar = ({ setSearchTerm }) => (
  <div tw="text-primary-200 flex flex-row">
    <input
      tw="bg-primary-700 text-primary-200 font-medium border border-primary-700 h-10 px-5 w-full pl-10 rounded-lg text-sm hover:border-accent outline-none duration-75 ease-in-out"
      type="search"
      autoComplete="off"
      name="search"
      placeholder="Search by platform name"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <RiSearchLine tw="text-gray-600 absolute mt-3 ml-4" />
  </div>
)

function AnnouncementArea() {
  return (
    <>
      <div
        tw="mt-2 appearance-none block bg-primary-800
          text-primary-200 text-center
          rounded-lg py-3 px-6 leading-tight mb-4 shadow-2xl"
      >
        {/* <div tw="text-xl font-bold leading-tight p-8 text-left"> */}
        <div tw="leading-normal p-4 lg:p-8 text-left">
          <h3 tw="text-xl font-bold uppercase">
            Can't find the link you're looking for?
          </h3>
          <p tw="text-base mt-1 text-primary-400">
            Don't be shy and hit us up on Twitter. Once we have time we'll get
            it added for you ASAP.
          </p>
          {/* // link to dm us on twitter */}
          <a href="https://twitter.com/messages/compose?recipient_id=1303504989499936771&ref_src=twsrc%5Etfw">
            <button
              type="button"
              tw="bg-accent hover:bg-accent-hover text-button font-bold py-3 px-4 rounded-full shadow mt-4 mr-2 duration-75 ease-in-out"
              href="https://twitter.com/messages/compose?recipient_id=1303504989499936771&ref_src=twsrc%5Etfw"
              data-screen-name="http://twitter.com/shoutmofficial"
              data-show-count="false"
            >
              Message us on Twitter
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default SettingsLinks
