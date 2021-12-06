import React, { useState, useEffect } from 'react'
import axios from '../lib/client'
import NotLoggedInNavbar from '../components/NavbarForNonLoggedInUsers'
import {
  FaDollarSign,
  FaEllipsisH,
  FaInfoCircle,
  FaCheck,
  FaChevronRight,
} from 'react-icons/fa'
import { loadStripe } from '@stripe/stripe-js'

import 'twin.macro'

export default function Basic() {
  return (
    <>
      <div tw="bg-white">
        <NewNavbar />
        <PricingLayoutTwo />
        {/* <PricingLayoutOne /> */}
        {/* <PricingLayoutThree /> */}
        {/* <PricingLayoutFour /> */}
      </div>
    </>
  )
}

function PricingLayoutFour() {
  return (
    <>
      <div tw="bg-white space-y-6 pb-12">
        <div tw="pt-12 pb-8 w-full mx-auto bg-white">
          <h1 tw="text-indigo-900 text-4xl text-center font-normal">
            Simple, transparent pricing.
          </h1>
          <h2 tw="text-indigo-400 text-4xl text-center font-normal">
            {/* Always know what you'll pay  */}
            Get the features that fit your needs
          </h2>
        </div>
        <table tw="table-fixed mx-auto w-3/4 my-8 shadow bg-white">
          <thead tw="bg-white">
            <THead />
          </thead>
          <tbody tw="bg-white">
            <Messaging />
            <Embeds />
            <AnimatedVideoOverlays />
            <MembershipBadge />
            <Analytics />
            <Email />
            <Newsletter />
            <PlusMoreFeatures />
            <OtherFeatures />

            <BuyButtons />
          </tbody>
        </table>
      </div>
    </>
  )
}

function NewNavbar() {
  return (
    <>
      <nav
        tw="flex items-center justify-between flex-wrap px-6 py-4 sticky bg-black"
        // className="custom-nav-settings"
      >
        <div tw="flex items-center flex-shrink-0 text-white mr-6">
          <div tw="flex items-center h-16 pb-2 w-full">
            <h1
              tw="w-full font-bold text-5xl text-center"
              className="threedeeshadow"
              style={{
                fontFamily: 'basiclazer',
              }}
            >
              Shoutmo
            </h1>
          </div>
        </div>
        <div tw="block lg:hidden">
          <button
            type="button"
            tw="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
          >
            <svg
              tw="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div tw="text-sm lg:flex-grow" />
          <div>
            <a
              href="/login"
              tw="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
          <div>
            <a
              href="/signup"
              tw="ml-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

function CircleCheck() {
  return (
    <>
      {/* // centered green circle with centered green checkmark  */}
      <div tw="h-12 w-12 bg-green-200 rounded-full flex items-center mx-auto">
        <FaCheck tw="mx-auto text-green-500" />
      </div>
    </>
  )
}

function PurpleButton({ onClick, isLoading }) {
  console.log('isLoading', isLoading)
  return (
    <>
      <button
        tw="text-purple-500 hover:text-white hover:bg-purple-500 
      border border-purple-500 font-semibold rounded px-4 py-1"
        onClick={onClick}
      >
        {isLoading ? 'Please wait' : 'Get started'}
      </button>
    </>
  )
}

function XLText(props) {
  return (
    <>
      <p tw="text-4xl font-semibold -my-2"> {props.price || 'n/a'}</p>
    </>
  )
}

function TableHeader(props) {
  return (
    <>
      <div tw="flex flex-row place-content-start">
        <div tw="">
          <p tw="text-2xl">{props.package}</p>
        </div>

        <div tw="flex flex-row">
          <p tw="ml-4">$</p>
          <XLText price={props.price} />
          <p tw="">/Month</p>
        </div>
      </div>
      {/* <PurpleButton  onClick={()=>{}}/> */}
    </>
  )
}

function TableHeaderAlt(props) {
  return (
    <>
      <div tw="flex flex-col items-center">
        <p tw="">{props.package}</p>
        <div tw="flex flex-row">
          <p tw="ml-4">$</p>
          <XLText price={props.price} />
          <p tw="">/Month</p>
        </div>
      </div>
      <PurpleButton onClick={() => {}} />
    </>
  )
}

function Embeds() {
  return (
    <>
      {/* Embeds */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Embeds</p>
          <p tw="text-sm text-gray-600">
            Easily share your profile with people by including overlays on your
            website, videos, photos and other content.
          </p>
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function BuyButtons() {
  const [stripePublicKey, setPublicKey] = useState(null)
  const [billingPeriod, setBillingPeriod] = useState('yearly')
  const [checkoutSessionLoading, setCheckoutSessionLoading] = useState(false)
  const [plan, setPlan] = useState(null)

  const setStripeKey = async () => {
    try {
      setCheckoutSessionLoading(true)
      const { data: response } = await axios({
        url: 'payments/config/',
        method: 'GET',
        headers: {},
      })
      if (response.publicKey) {
        setCheckoutSessionLoading(true)
        setPublicKey(response.publicKey)
      }
    } catch (err) {
      setCheckoutSessionLoading(true)

      if (err.response.data) {
      } else {
        alert(JSON.stringify(err))
      }
    }
  }

  useEffect(() => {
    setStripeKey()
  }, [])

  const handleGoToCheckout = async ({ plan }) => {
    setPlan(plan)
    try {
      const { data: response } = await axios({
        url: 'payments/create-checkout-session/',
        method: 'POST',
        body: { plan: `${plan}_${billingPeriod}` },
        headers: {},
      })

      if (response.sessionId) {
        loadStripe(stripePublicKey).then((res) => {
          res.redirectToCheckout({
            sessionId: response.sessionId,
          })
        })
      }
    } catch (err) {
      if (err.response?.data) {
      } else {
        alert(JSON.stringify(err))
      }
    }
  }

  return (
    <>
      {/* buy buttons */}
      {/* <tr tw="bg-gray-200"> */}
      <tr>
        <th tw="border w-1/4 px-4 py-4 ">{/* buy buttons */}</th>
        <th tw="border w-1/4 px-4 py-4">
          <PurpleButton isLoading={false} onClick={() => {}} />
        </th>
        <th tw="border w-1/4 px-4 py-4">
          <PurpleButton
            isLoading={checkoutSessionLoading && plan === 'basic'}
            onClick={() => {
              handleGoToCheckout({ plan: 'basic' })
            }}
          />
        </th>
        <th tw="border w-1/4 px-4 py-4">
          <PurpleButton
            isLoading={checkoutSessionLoading && plan === 'pro'}
            onClick={() => {
              handleGoToCheckout({ plan: 'pro' })
            }}
          />
        </th>
      </tr>
    </>
  )
}

function OtherFeatures() {
  return (
    <>
      {/* Some other feature */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Some other feature</p>
          <p tw="text-sm text-gray-600">
            Squid iceland viral sartorial gochujang cold-pressed synth occupy
            cred godard.
          </p>
        </td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function PlusMoreFeatures() {
  return (
    <>
      {/* Plus Access to additional features as they become available. */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Plus Access</p>
          <p tw="text-sm text-gray-600">
            Be the first to access additional features as they become available.
          </p>
        </td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function Analytics() {
  return (
    <>
      {/* Analytics */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Analytics</p>
          <p tw="text-sm text-gray-600">
            See where people are engaging the most with your links. Great for
            finding out which platforms are working best for you.
          </p>
        </td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function Email() {
  return (
    <>
      {/* Email */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Email Capture</p>
          <p tw="text-sm text-gray-600">
            Collect email addresses from your fans if they opt-in to share it
            with you.
          </p>
        </td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function Newsletter() {
  return (
    <>
      {/* Newsletter */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Newsletter Service</p>
          <p tw="text-sm text-gray-600">
            Send newsletters through the platform to people who have opted in to
            share their email address with you.
          </p>
        </td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2"></td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}
function MembershipBadge() {
  return (
    <>
      {/* Membership Badge */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Membership Badge</p>
          <p tw="text-sm text-gray-600">
            Show your support by getting a membership badge that will show on
            your profile page. This helps fund us so that we can continue to
            build the platform.
          </p>
        </td>
        <td tw="border px-4 py-2" />
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function Messaging() {
  return (
    <>
      {/* Messaging */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Messaging</p>
          <p tw="text-sm text-gray-600">
            People can direct message you through the app.
          </p>
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function AnimatedVideoOverlays() {
  return (
    <>
      {/* animated video overlays */}
      <tr>
        <td tw="border px-4 py-2">
          <p tw="font-medium">Animated Video Overlays</p>
          <p tw="text-sm text-gray-600">
            People can direct message you through the app. Cool animated video
            overlays to include in your video and streaming content.
          </p>
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
        <td tw="border px-4 py-2">
          <CircleCheck />
        </td>
      </tr>
    </>
  )
}

function THead() {
  return (
    <>
      <tr>
        <th tw="border w-1/4 px-4 py-2 ">Pick a Plan</th>
        <th tw="border w-1/4 px-4 py-2">
          <TableHeader package="Free" price="0" />
        </th>
        <th tw="border w-1/4 px-4 py-2">
          <TableHeader package="Starter" price="4" />
        </th>
        <th tw="border w-1/4 px-4 py-2">
          <TableHeader package="Pro" price="15" />
        </th>
      </tr>
    </>
  )
}

function PricingLayoutOne() {
  return (
    <>
      <div tw="w-full h-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
        <div tw="max-w-5xl mx-auto md:flex">
          <div tw="md:w-1/4 md:flex md:flex-col">
            <div tw="text-left w-full flex-grow md:pr-5">
              <h1 tw="text-4xl font-bold mb-5">Pricing</h1>
              <h3 tw="font-medium mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
                dignissimos laboriosam odit accusamus porro*
              </h3>
            </div>
            <div tw="w-full mb-2">
              <p tw="text-xs">*Lorem ipsum sit amet</p>
            </div>
          </div>
          <div tw="md:w-3/4">
            <div tw="max-w-4xl mx-auto md:flex">
              <div tw="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow md:flex md:flex-col">
                <div tw="w-full flex-grow">
                  <h2 tw="text-center font-bold uppercase mb-4">FREE</h2>
                  <h3 tw="text-center font-bold text-4xl mb-5">
                    $5
                    <span tw="text-sm">/mo</span>
                  </h3>
                  <ul tw="text-sm mb-8">
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      <p tw="self-center">Lorem ipsum</p>
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Dolor sit amet
                    </li>
                  </ul>
                </div>
                <div tw="w-full">
                  <button
                    type="button"
                    tw="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div tw="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow md:relative md:z-50 md:flex md:flex-col">
                <div tw="w-full flex-grow">
                  <h2 tw="text-center font-bold uppercase mb-4">STARTER</h2>
                  <h3 tw="text-center font-bold text-4xl md:text-5xl mb-5">
                    $15<span tw="text-sm">/mo</span>
                  </h3>
                  <ul tw="text-sm mb-8">
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Lorem ipsum
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Dolor sit amet
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Consectetur
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Adipisicing
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Elit repellat
                    </li>
                  </ul>
                </div>
                <div tw="w-full">
                  <button
                    type="button"
                    tw="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div tw="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow md:flex md:flex-col">
                <div tw="w-full flex-grow">
                  <h2 tw="text-center font-bold uppercase mb-4">PRO</h2>
                  <h3 tw="text-center font-bold text-4xl mb-5">
                    $35<span tw="text-sm">/mo</span>
                  </h3>
                  <ul tw="text-sm mb-8">
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Lorem ipsum
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Dolor sit amet
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Consectetur
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Adipisicing
                    </li>
                    <li tw="flex leading-tight p-2">
                      <FaCheck size={16} tw="mr-1 self-center" />
                      Much more...
                    </li>
                  </ul>
                </div>
                <div tw="w-full">
                  <button
                    type="button"
                    tw="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function PricingLayoutTwo() {
  return (
    <>
      <div tw="bg-white">
        <div tw="container px-6 py-8 mx-auto">
          <div tw="pt-12 pb-8 w-full mx-auto bg-white">
            <h1 tw="text-indigo-900 text-4xl text-center font-normal">
              Simple, transparent pricing.
            </h1>
            <h2 tw="text-indigo-400 text-4xl text-center font-normal">
              {/* Always know what you'll pay  */}
              Get the features that fit your needs
            </h2>
          </div>

          <div tw="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div tw="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 hover:shadow-xl hover:border-pink-500 hover:border-2 rounded-xl lg:mx-4 ">
              <div tw="flex-shrink-0">
                <h2 tw="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-pink-400 uppercase rounded-lg ">
                  Casual
                </h2>
              </div>
              <div tw="flex-shrink-0">
                <span tw="pt-2 text-4xl font-bold text-gray-800 uppercase ">
                  Free
                </span>
              </div>
              <ul tw="flex-1 space-y-4">
                <li tw="text-gray-500 ">feature</li>
                <li tw="text-gray-500 ">feature</li>
                <li tw="text-gray-500 ">feature</li>
              </ul>

              <button
                type="button"
                tw="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none"
              >
                Get Started
              </button>
            </div>
            <div tw="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 hover:shadow-xl hover:border-pink-500 hover:border-2 rounded-xl lg:mx-4 ">
              <div tw="flex-shrink-0">
                <h2 tw="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-pink-400 uppercase rounded-lg bg-gray-50 ">
                  Starter
                </h2>
              </div>
              <div tw="flex-shrink-0">
                <span tw="pt-2 text-4xl font-bold text-gray-800 uppercase ">
                  $4.99
                </span>
                <span tw="text-gray-500 ">/month</span>
              </div>
              <ul tw="flex-1 space-y-4">
                <li tw="text-gray-500 ">feature</li>
                <li tw="text-gray-500 ">feature</li>
                <li tw="text-gray-500 ">feature</li>
                <li tw="text-gray-500 ">feature</li>
              </ul>

              <button
                type="button"
                tw="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function PricingLayoutThree() {
  return (
    <>
      <section tw="text-gray-600 overflow-hidden bg-white">
        <div tw="container px-5 py-24 mx-auto">
          <div tw="flex flex-col text-center w-full mb-20">
            <h1 tw="sm:text-4xl text-3xl font-medium   mb-2 text-gray-900">
              Pricing
            </h1>
            <p tw="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div tw="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button
                type="button"
                tw="py-1 px-4 bg-indigo-500 text-white focus:outline-none"
              >
                Monthly
              </button>
              <button type="button" tw="py-1 px-4 focus:outline-none">
                Annually
              </button>
            </div>
          </div>
          <div tw="flex flex-wrap -m-4">
            <div tw="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div tw="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 tw="text-sm tracking-widest mb-1 font-medium">START</h2>
                <h1 tw="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Free
                </h1>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p tw="flex items-center text-gray-600 mb-6">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button
                  type="button"
                  tw="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    tw="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p tw="text-xs text-gray-500 mt-3">
                  Literally you probably haven&#39;t heard of them jean shorts.
                </p>
              </div>
            </div>
            <div tw="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div tw="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span tw="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 tw="text-sm tracking-widest   mb-1 font-medium">PRO</h2>
                <h1 tw="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span tw="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p tw="flex items-center text-gray-600 mb-6">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button
                  type="button"
                  tw="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    tw="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p tw="text-xs text-gray-500 mt-3">
                  Literally you probably haven&#39;t heard of them jean shorts.
                </p>
              </div>
            </div>
            <div tw="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div tw="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 tw="text-sm tracking-widest   mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 tw="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$56</span>
                  <span tw="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-6">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button
                  type="button"
                  tw="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    tw="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p tw="text-xs text-gray-500 mt-3">
                  Literally you probably haven&#39;t heard of them jean shorts.
                </p>
              </div>
            </div>
            <div tw="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div tw="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 tw="text-sm tracking-widest   mb-1 font-medium">SPECIAL</h2>
                <h1 tw="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$72</span>
                  <span tw="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p tw="flex items-center text-gray-600 mb-2">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p tw="flex items-center text-gray-600 mb-6">
                  <span tw="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      tw="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button
                  type="button"
                  tw="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    tw="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p tw="text-xs text-gray-500 mt-3">
                  Literally you probably haven&#39;t heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
