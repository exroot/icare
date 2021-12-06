/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import { FaCcStripe, FaToggleOn } from 'react-icons/fa'
import PageLoader from '../../components/PageLoader'
import useUser from '../../lib/useUser'
import TabMenu from '../../components/Navigation/TabNavigator'
import Layout from '../../components/Layout'
import 'twin.macro'
import Navbar from '../../components/Navbar/NavbarAlt'

import linkz from '../../components/tablinkz'

const Payments = () => {
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
        <title>Settings - Payments</title>
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Payments</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <div tw="my-2 sm:my-2 max-w-3xl">
              <span tw="text-sm text-primary-900 text-xs">
                Here you can customize all your notifications settings as your
                will. Don't forget that you can change this settings anytime
                later.
              </span>
            </div>

            <div tw="my-4 sm:my-2 max-w-3xl space-y-3">
              {/* enable payments  */}
              <div tw="text-white space-y-2">
                {/* <div  tw="min-h-screen text-white space-y-6 flex flex-col pt-6 px-8"> */}
                {/* <!-- payment options section  --> */}

                {/* <!-- Traffic section  --> */}
                <div tw="space-y-3 mb-8">
                  <p tw="font-bold text-2xl">Setup Payments</p>
                  <p>
                    If you would like to setup a way for people to send you
                    tips, you can go ahead and fill out the form below. For more
                    information about how this works see our terms and
                    conditions.
                  </p>
                </div>

                <div tw="bg-primary-800 rounded-xl">
                  <div tw="flex flex-row justify-between items-center p-6">
                    <div tw="flex flex-row space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        tw="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p tw="font-semibold">Accept Payments</p>
                    </div>

                    <FaToggleOn size={36} />
                  </div>

                  <div tw="flex flex-col justify-center px-6 pb-6 pt-3">
                    <div tw="flex flex-row w-full items-center bg-gray-600 rounded-xl px-8 py-6 ">
                      <div tw="flex flex-grow items-center">
                        <FaCcStripe tw="" size={48} />
                        {/* <FaStripe tw="mx-auto" size={48} /> */}
                      </div>
                      <div tw="flex flex-row space-x-2 items-center">
                        <button tw="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-pink-500 hover:text-white hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>

          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  )
}

export default Payments
