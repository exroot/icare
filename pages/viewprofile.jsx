// TODO - this needs to show when you goto shoutmo.com/username or shoutmo.com/@username
// TODO - change color and icon based on which link there is for the link component
// TODO - need to have a view for the profile card for users that are not logged in that shows a signup call to action

import React, { useState, useEffect } from 'react'
import 'twin.macro'

import {
  FaAngleDown,
  FaAngleRight,
  FaRegCircle,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUsers,
  FaUser,
} from 'react-icons/fa'

const iconSize = 24

function ProfileCard(props) {
  const backgroundimage =
    'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746'

  // didn't know how to import user so just puting this in here..
  const user = {
    username: 'MattMEGAbit',
    fullname: 'Matt Brittingham',
    banner_picture:
      'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746',
    // profile_picture: "https://www.placecage.com/300/300",
    profile_picture: 'https://randomuser.me/api/portraits/women/21.jpg',
    bio:
      'This is just some words for the fake bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.',
  }

  return (
    <>
      <div tw="font-sans leading-tight min-h-screen bg-gray-200 p-8">
        <div tw="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <Qrcodewithborder />
          <BannerImage img={user.banner_picture} />
          <ProfilePhoto img={user.profile_picture} />
          <ProfileInfo
            fullname={user.fullname}
            username={user.username}
            country={user.country}
            city={user.city}
            following={user.following}
            bio={user.bio}
            website={user.website}
          />
          <Categories />
          <LinksSection />
          <Shoutouts />
        </div>
      </div>
    </>
  )
}

function Categories(props) {
  return (
    <>
      <div tw="px-10 pt-4 pb-2">
        <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </>
  )
}

function SuggestUserCard(props) {
  return (
    <>
      <div tw="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-2">
        <div tw="sm:flex sm:items-center px-6 py-4">
          <img
            tw="block mx-auto sm:mx-0 sm:flex-shrink-0 h-12 sm:h-12 rounded-full"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="Woman's Face"
          />
          <div tw="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p tw="text-xl leading-tight">Erin Lindford</p>
            <p tw="text-sm leading-tight text-gray-600">Product Engineer</p>
          </div>
        </div>
      </div>
    </>
  )
}

function PeopleYouShouldCheckOout(props) {
  return (
    <>
      <div tw="w-full mx-auto px-10">
        <p tw="max-w-sm mx-auto text-xl leading-tight mb-4">
          People you should also check out..
        </p>

        <SuggestUserCard />
        <SuggestUserCard />
        <SuggestUserCard />
        <SuggestUserCard />
        <SuggestUserCard />
        <SuggestUserCard />
        <SuggestUserCard />
      </div>
    </>
  )
}

function MoreCircleButton(props) {
  return (
    <>
      <div tw="bg-white m-2 rounded border shadow-sm bg-purple-400">
        <div tw="p-2 w-32 h-32 text-white">
          <p tw="self-center flex-1 p-2 text-xl">More</p>
          <p tw="self-center flex-1 pl-2 py-12">
            <FaAngleRight size={36} />
          </p>
        </div>
      </div>
    </>
  )
}

function Shoutouts(props) {
  return (
    <>
      <div tw="flex flex-row w-full p-2 mb-6 border overflow-x-auto bg-gray-200">
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <Shoutout />
        <MoreCircleButton />
      </div>
    </>
  )
}

function Shoutout(props) {
  return (
    <>
      <div tw="bg-white m-2 rounded border">
        <div tw="p-2 w-64 h-64 rounded shadow-sm">
          <p tw="p-2 text-sm leading-tight text-gray-600 sm:flex sm:items-center">
            This is a shoutout, it can get a little long so I'm writing some
            text here.
          </p>
        </div>
      </div>
    </>
  )
}

function Link(props) {
  if (props.network === 'Twitter') {
    console.log('Twitter')
  }

  if (props.network === 'LinkedIn') {
    console.log('LinkedIn')
  }

  return (
    <>
      <button tw="py-3 my-1 px-4 bg-white text-white bg-purple-500 border font-semibold hover:shadow rounded flex flex-row w-full justify-between">
        <div tw="">
          <FaTwitter size={iconSize} />
        </div>
        <div tw="items-center">{props.name}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </button>
    </>
  )
}

function LinksSection(props) {
  return (
    <>
      <div tw="flex flex-col w-full mx-auto px-10 mb-6">
        <Link name="Twitter" icon="FaTwitter" color="bg-purple-500" />
        <Link name="Youtube" icon="FaYoutube" color="bg-purple-500" />
        <Link name="Twitch" icon="FaTwitch" color="bg-purple-500" />
        <Link name="Linkedin" icon="FaLinkedin" color="bg-purple-500" />
      </div>
    </>
  )
}

function ProfileInfo(props) {
  return (
    <>
      <div tw="sm:flex sm:items-center px-6 py-4">
        <div tw="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p tw="text-xl leading-tight">{props.fullname || 'fullname'}</p>
          <p tw="text-sm leading-tight">
            @
            {props.username || 'username'}
          </p>

          <div tw="mt-4">
            <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 mr-1 leading-normal">
              Share
            </button>
            <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 mr-1 leading-normal">
              Follow
            </button>
            {/* <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
              Message
            </button> */}
          </div>
        </div>
      </div>

      <div tw="px-6 py-0">
        <div tw="text-sm leading-tight text-gray-600 sm:flex sm:items-center pr-1 py-1">
          <p tw="pl-4 pr-1 py-1 flex">
            <FaMapMarkerAlt /> 
            {' '}
            {props.city || 'Annapolis'}
            ,&nbsp;
            {props.country || 'USA'}
          </p>
        </div>

        <div tw="text-sm leading-tight text-gray-600 sm:flex sm:items-center pr-1 py-1">
          <p tw="pl-4 pr-1 py-1 flex">
            <FaUsers />
            &nbsp;
            {props.followers || 'followers 99'}
          </p>
          <p tw="pl-4 pr-1 py-1 flex">
            <FaUser />
            &nbsp;
            {props.following || 'following 10'}
          </p>
        </div>

        <div tw="text-sm leading-tight text-gray-600 sm:flex sm:items-center pr-1 py-1">
          <p tw="pl-4 pr-1 py-1 flex">
            <FaExternalLinkAlt />
            <a href={props.website || 'www.example.com'}>
              {props.website || 'www.example.com'}
            </a>
          </p>
        </div>

        <div tw="sm:flex sm:items-center px-6 py-4">
          <p tw="text-sm leading-tight text-gray-600">{props.bio || 'bio'}</p>
        </div>
      </div>
    </>
  )
}

function Qrcodewithborder() {
  return (
    <>
      <div tw="bg-white z-10">
        <div tw=" top-0 right-0 bg-white float-right -mb-48 p-px ">
          <div tw="relative top-0 right-0 h-24 w-24 bg-white float-right -mb-48 p-2 m-2 rounded shadow-sm">
            <img
              tw="object-contain mx-auto rounded"
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
            />
          </div>
        </div>
      </div>
    </>
  )
}

function BannerImage(props) {
  return (
    <>
      <div tw="flex w-full h-48 mx-auto overflow-hidden">
        <img
          tw="object-cover mx-auto"
          src={props.img || 'banner_placeholder_image'}
        />
      </div>
    </>
  )
}

function FakeNavbar() {
  return (
    <>
      <nav tw="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div tw="flex items-center flex-shrink-0 text-white mr-6">
          <span tw="font-semibold text-xl tracking-tight">SHOUTMO</span>
        </div>

        <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div tw="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              tw="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              link
            </a>
          </div>
          <div>
            <a
              href="#"
              tw="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              button
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

function ProfilePhoto(props) {
  return (
    <>
      <div tw=" px-6 pb-0">
        <div tw="text-center sm:text-left sm:flex">
          <img
            tw="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
            src={props.img}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

function QRcode(props) {
  return (
    <>
      <div tw="flex w-40 h-40 mx-auto bg-gray-400 shadow-sm rounded-lg overflow-hidden">
        <img
          tw="object-contain mx-auto"
          // placeholder we need to add a qrcode library, check lnkr-frontend for the QR Code
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
        />
      </div>
    </>
  )
}

export default function ViewProfile() {
  // didn't know how to import user so just puting this in here..
  const user = {
    username: 'MattMEGAbit',
    fullname: 'Matt Brittingham',
    banner_picture:
      'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746',
    profile_picture: 'https://www.placecage.com/300/300',
    bio:
      'This is just some words for the fake bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.',
  }
  return (
    <>
      <FakeNavbar />
      <ProfileCard />
    </>
  )
}

{
  // Phase2 - this will show people that this user recommends you check out
  /* <div tw="text-sm leading-tight text-gray-600 sm:flex sm:items-center pr-1 py-1">
<p tw="pl-4 pr-1 py-1 flex">
  <FaRegCircle />
  {props.following || "Circle 10"}
</p>
</div> */
}
