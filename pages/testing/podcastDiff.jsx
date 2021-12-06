import React, { useState, useEffect } from 'react'
import tw, { css } from 'twin.macro'

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

import Wrapper from '../../components/Wrapper'

const iconSize = 24

const user = {
  podcast_owner: 'Freeman',
  podcast_title: 'The Free Zone w/ Freeman Fly',
  podcast_banner:
    'https://images.unsplash.com/photo-1550424844-f7b914439c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80', // profile_picture: "https://www.placecage.com/300/300",
  profile_picture:
    'https://images.unsplash.com/photo-1542908220-73cc48ad0af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  podcast_website: 'https://www.example.com',
  podcast_bio:
    'This is just some words for the podcast description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.',
  related_podcast_img: 'https://picsum.photos/200',
}

export default function PageLayout() {
  return (
    <>
      <Wrapper>
        <PodcastLayoutWithNoSidebar />
      </Wrapper>
    </>
  )
}

function PodcastLayoutWithNoSidebar(props) {
  return (
    <>
      {/* <section tw="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0"> */}
      <section tw="h-screen w-full flex flex-col-reverse sm:flex-row min-h-0 min-w-0">
        <main tw="sm:h-full flex-1 flex flex-col min-h-0 min-w-0">
          <section tw="flex-1 pt-3 md:p-6 md:mb-0 md:min-h-0 md:min-w-0">
            <div tw="flex flex-col md:flex-row h-full w-full">
              <div tw="pb-2 md:pb-0 w-full md:max-w-sm px-3 flex flex-row md:flex-col flex-wrap md:flex-nowrap space-y-6">
                {/* <!-- control content left --> */}
                <img
                  tw="h-auto w-1/3 w-48 h-48 mx-auto sm:w-1/3 md:w-full sm:h-auto rounded shadow object-contain"
                  // tw="h-full w-full rounded shadow object-contain"
                  src={user.profile_picture}
                  alt="podcast album cover"
                />

                <div tw="w-2/3 sm:w-full h-64 min-h-0 min-w-0 space-y-3 hidden sm:hidden md:inline-block">
                  <div tw="flex flex-col p-3">
                    <SectionTitleSmaller title="Website" />
                    <PodcastWebsite />
                  </div>
                  <ShareButtonFull />
                  {/* <NewsletterSignupButtonFull /> */}
                </div>

                {/* <div tw="bg-blue-200 w-full h-24 min-h-0 min-w-0"></div> */}
                {/* <div tw="bg-blue-200 w-full h-24 min-h-0 min-w-0"></div> */}
              </div>

              <div tw=" h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
                {/* <!-- overflow content right --> */}
                <div tw="w-full h-full min-h-0 min-w-0 overflow-y-auto ">
                  {/* <div tw="bg-blue-600 w-full h-64"></div>
                  <div tw="bg-red-600 w-full h-64"></div> */}
                  <div tw="w-full h-full space-y-3">
                    <div tw="w-full h-auto space-y-2 p-6">
                      <PodcastTitle />
                      <PodcastOwnerProfile />
                      <PodcastDescription />
                      <div tw=" mt-2">
                        <PodcastWebsite />
                      </div>
                    </div>

                    <div tw="w-2/3 sm:w-full h-64 min-h-0 min-w-0 space-y-3 inline md:hidden">
                      {/* <div tw="flex flex-col p-3 px-6">
                        <SectionTitleSmaller title="Website" />
                        <PodcastWebsite />
                      </div> */}
                      <div tw="px-6">
                        <ShareButtonFull />
                        {/* <NewsletterSignupButtonFull /> */}
                      </div>
                    </div>

                    <CategoriesSection />
                    {/* <FansSection /> */}
                    {/* <DescriptionAreaSection /> */}
                    <ListenOnAlt />
                    <GuestListAlt />
                    {/* <GuestList /> */}
                    {/* <RelatedPodcastsSection /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  )
}

// function PodcastLayoutWithNoSidebar(props) {
//   return (
//     <>
//       <section tw="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
//         <main tw="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
//           <section tw="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
//             <div tw="flex flex-col lg:flex-row h-full w-full">
//               <div tw="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap space-y-3">
//                 <!-- control content left -->
//                 <div tw="w-48 md:w-64 mx-0 md:mx-auto min-h-0 min-w-0">
//                   start album photo
//                   <div tw="md:flex-shrink-0">
//                     <img
//                       tw="h-full w-full object-contain w-48 h-48 md:w-full md:h-auto rounded shadow"
//                       src={user.profile_picture}
//                       alt="podcast album cover"
//                     />
//                   </div>
//                   end
//                 </div>
//                 <div tw="bg-blue-200 w-full h-64 min-h-0 min-w-0">
//                   <ShareButtonFull />
//                 </div>
//                 <div tw="bg-blue-200 w-full h-24 min-h-0 min-w-0"></div>
//                 <div tw="bg-blue-200 w-full h-24 min-h-0 min-w-0"></div>
//               </div>

//               <div tw="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
//                 <!-- overflow content right -->
//                 <div tw="w-full h-full min-h-0 min-w-0 overflow-y-auto ">
//                   <div tw="bg-blue-600 w-full h-64"></div>
//                   <div tw="bg-red-600 w-full h-64"></div>
//                   <div tw="bg-gray-400 w-full h-full space-y-3">
//                     <div tw="w-full h-64 space-y-2">
//                       <PodcastTitle />
//                       <PodcastOwnerProfile />
//                       <PodcastDescription />
//                       <PodcastWebsite />
//                     </div>

//                     <CategoriesSection />
//                     <FansSection />
//                     <DescriptionAreaSection />
//                     <ListenOn />
//                     <ListenOnAlt />
//                     <GuestListAlt />
//                     <GuestList />
//                     <RelatedPodcastsSection />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </section>
//     </>
//   );
// }

function PodcastLayout(props) {
  return (
    <>
      <section tw="h-full w-full flex flex-col-reverse sm:flex-row min-h-0 min-w-0">
        <main tw="sm:h-full flex-1 flex flex-col min-h-0 min-w-0">
          <section tw="flex-1 lg:mb-0 lg:min-h-0 lg:min-w-0">
            <div tw="flex flex-col lg:flex-row h-full w-full">
              <div tw="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
                {/* <!-- control content left --> */}
                {/* <div tw="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div> */}
                <div tw="w-48 w-full mx-0 md:mx-auto min-h-0 min-w-0 mb-4">
                  {/* start album photo */}
                  <div tw="md:flex-shrink-0">
                    <img
                      tw="h-full w-full object-contain w-48 h-48 md:w-full md:h-auto rounded shadow"
                      src={user.profile_picture}
                      alt="podcast album cover"
                    />
                  </div>
                  {/* end  */}
                </div>
              </div>

              <div tw="h-full md:h-screen w-full md:flex-1 px-3 min-h-0 min-w-0 overflow-y-scroll">
                {/* <!-- overflow content right --> */}
                <div tw="w-full h-full min-h-0 min-w-0">
                  {/* <div tw="bg-gray-500 w-full h-64"></div>
                  <div tw="bg-gray-600 w-full h-64"></div>
                  <div tw="bg-gray-700 w-full h-64"></div>
                  <div tw="bg-gray-800 w-full h-64"></div> */}
                  <PodcastTitle />
                  <PodcastOwnerProfile />
                  <ProfileCardExtras />
                  <CategoriesSection />
                  <FansSection />
                  <DescriptionAreaSection />
                  {/* <ListenOn /> */}
                  <ListenOnAlt />
                  <GuestListAlt />
                  {/* <GuestList /> */}
                  <RelatedPodcastsSection />
                </div>
              </div>
            </div>
          </section>

          <footer tw="px-6 py-3 border-t flex w-full items-end bg-white">
            <p tw="text-gray-600">Footer Section</p>
            <div tw="flex-1" />
            <button tw="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <FaRegCircle />
            </button>
          </footer>
        </main>
      </section>
    </>
  )
}

function PodcastLayoutWithSmallSidebar(props) {
  return (
    <>
      <section tw="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
        <aside tw="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
          <ul tw="text-center flex flex-row sm:flex-col w-full">
            <li tw="h-14 border-b border-gray-900 hidden sm:block">
              <a
                id="page-icon"
                href="/"
                tw="h-full w-full hover:bg-gray-700 block p-3"
              >
                <img
                  tw="object-contain h-full w-full"
                  src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                  alt="open-source"
                />
              </a>
            </li>
            <li tw="sm:border-b border-gray-900 flex-1 sm:w-full" title="Inbox">
              <a
                id="page-icon"
                href="/"
                tw="h-full w-full hover:bg-gray-700 block p-3"
              />
            </li>
            <li
              tw="sm:border-b border-gray-900 flex-1 sm:w-full"
              title="Settings"
            >
              <a
                id="page-icon"
                href="/"
                tw="h-full w-full hover:bg-gray-700 block p-3"
              >
                <FaRegCircle />
              </a>
            </li>
            <li tw="sm:border-b border-gray-900 flex-1 sm:w-full" title="Users">
              <a
                id="page-icon"
                href="/"
                tw="h-full  w-full hover:bg-gray-700 block p-3"
              >
                <FaRegCircle />
              </a>
            </li>
          </ul>
        </aside>
        <main tw="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
          <nav tw="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
            <h1 tw="font-semibold text-lg" />
            <span tw="flex-1" />
            <span tw="mr-2">
              <input
                type="text"
                placeholder="Search"
                tw="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
              />
            </span>
            <button tw="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <FaRegCircle />
            </button>
          </nav>
          <section tw="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
            <div tw="flex flex-col lg:flex-row h-full w-full">
              <div tw="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
                {/* <!-- control content left --> */}
                <div tw="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4" />
                <div tw="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4" />
              </div>

              <div tw="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
                {/* <!-- overflow content right --> */}
                <div tw="bg-green-200 w-full h-full min-h-0 min-w-0 overflow-auto">
                  <div tw="bg-pink-600 w-screen h-64" />
                  <div tw="bg-blue-600 w-full h-64" />
                  <div tw="bg-purple-600 w-screen h-64" />
                  <div tw="bg-red-600 w-full h-64" />
                  <div tw="bg-yellow-600 w-screen h-64" />
                  <div tw="bg-green-600 w-full h-64" />
                </div>
              </div>
            </div>
          </section>
          <footer tw="px-6 py-3 border-t flex w-full items-end">
            <p tw="text-gray-600">Made by SHOUTMO</p>
            <div tw="flex-1" />
            <button tw="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              <FaRegCircle />
            </button>
          </footer>
        </main>
      </section>
    </>
  )
}

function PodcastLayoutOrig(props) {
  return (
    <>
      <div tw="min-h-full">
        <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8 space-y-6">
          {/* this was what I had before */}
          <GridLayoutDiff />
          {/* this was commented out */}

          {/* <GridLayoutAlt /> */}
        </div>
      </div>
    </>
  )
}
function CategoriesSection(props) {
  return (
    <>
      <div tw="max-w-full">
        {/*  without title on top
       <div tw="md:flex bg-background-primary rounded-3xl p-6">
          <Categories />
        </div> */}

        <div tw="rounded-3xl p-6 space-y-4">
          <SectionTitle title="Categories" />
          <Categories />
        </div>
      </div>
    </>
  )
}

function ProfileCardTopSection(props) {
  return (
    <>
      <div tw="max-w-full">
        <div tw="md:flex overflow-y-scroll bg-background-primary rounded-3xl p-6">
          <PodcastAlbumnCoverAlt />
          <div tw="md:flex flex-col pl-0 md:pl-8 space-y-3">
            <PodcastTitle />
            <PodcastOwnerProfile />
            <ProfileCardExtras />
          </div>
        </div>
      </div>
    </>
  )
}

function GridLayoutDiff() {
  return (
    <>
      <div tw="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div tw="sticky top-0 p-6 space-y-4">
          <PodcastAlbumnCoverAlt />
        </div>
        <div tw="h-screen col-span-2 overflow-y-scroll p-6 space-y-4">
          <div tw="md:flex flex-col pl-0 md:pl-8 space-y-3">
            <PodcastTitle />
            <PodcastOwnerProfile />
            <ProfileCardExtras />
            <CategoriesSection />
            <FansSection />
            <DescriptionAreaSection />
            {/* <ListenOn /> */}
            <ListenOnAlt />
            <GuestListAlt />
            {/* <GuestList /> */}
            <RelatedPodcastsSection />
          </div>
        </div>
      </div>
    </>
  )
}

function DescriptionAreaSection() {
  return (
    <>
      <div tw="max-w-full">
        <div tw="flex flex-col bg-background-primary rounded-3xl p-6 space-y-3">
          <SectionTitle title="About" />
          <PodcastDescription />
        </div>
      </div>
    </>
  )
}

function PodcastAlbumnCoverAlt(props) {
  return (
    <>
      <div tw="md:flex-shrink-0">
        <img
          tw="h-full w-full object-contain w-48 h-48 md:w-full md:h-auto rounded shadow mx-3"
          src={user.profile_picture}
          alt="podcast album cover"
        />
      </div>
    </>
  )
}

function ProfileCardExtras(props) {
  return (
    <>
      <div tw="space-y-3">
        {/* <PodcastDescription /> */}
        {/* <Categories /> */}
        <PodcastWebsite />
        <ShareButton />
      </div>
    </>
  )
}

function PodcastOwnerProfile(props) {
  return (
    <>
      <div tw="w-full flex flex-row mx-auto">
        <div tw="w-full flex flex-row">
          <img
            tw="overflow-hidden rounded-full w-12 h-12"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="avatar"
          />
          <div tw="pl-3">
            <h6 tw="font-bold text-lg text-xl text-text-dark leading-tight">
              Jane Blow
            </h6>
            <p tw="text-xs text-text-dark">@jane.blow</p>
          </div>
        </div>
      </div>
    </>
  )
}

function Categories(props) {
  return (
    <>
      <div tw="space-y-2">
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #woo
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #scifi
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #occult
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #aliens
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #podcast
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
      </div>
    </>
  )
}

function FansSection(props) {
  return (
    <>
      {/* <div tw="">
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          <img
            tw="overflow-hidden rounded-full w-12 h-12"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="avatar"
          />
        </span>
      </div> */}

      <div tw="max-w-full">
        <div tw="bg-background-primary rounded-3xl p-6 space-y-4">
          <SectionTitle title="Fans" />
          <BunchOfFans />
        </div>
      </div>
    </>
  )
}

function BunchOfFans() {
  return (
    <>
      <ul tw="list-disc space-y-2">
        <li tw="flex items-center ">
          <p tw="text-xl font-bold text-text-dark">+300</p>

          <div tw="flex">
            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary"
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary -ml-4"
              src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary -ml-4"
              src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
              alt=""
            />
            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary -ml-4"
              src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
              alt=""
            />

            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary -ml-4"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt=""
            />

            <img
              tw="w-12 h-12 rounded-full border-4 border-background-primary -ml-4"
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <span tw="flex items-center justify-center font-semibold text-gray-600 w-12 h-12 rounded-full bg-gray-200 border-4 border-background-primary -ml-4">
              +3
            </span>
          </div>
        </li>
      </ul>
    </>
  )
}

// <div tw="w-full flex flex-row mx-auto">
// <div tw="w-full flex flex-row">
//   <img
//     tw="overflow-hidden rounded-full w-12 h-12"
//     src="https://randomuser.me/api/portraits/women/21.jpg"
//     alt="avatar"
//   />
//   <div tw="pl-3">
//     <h6 tw="font-bold text-lg text-xl text-text-dark leading-tight">
//       Jane Blow
//     </h6>
//     <p tw="text-xs text-text-dark">@jane.blow</p>
//   </div>
// </div>
// </div>

// </>
// );
// }

function Link(props) {
  // add logo for link
  if (props.network === 'Twitter') {
  }
  if (props.network === 'LinkedIn') {
  }

  return (
    <>
      <button
        tw="flex flex-row w-full text-white hover:text-white bg-purple-500 hover:bg-purple-400 border border-purple-500 hover:border-purple-400 font-semibold rounded-xl px-4 py-3 leading-normal justify-between mb-3"
        //   onClick={buttonAction}
      >
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

function GradientBackgroundSection(props) {
  return (
    <>
      <div tw="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <p tw="text-sm leading-tight">Some words</p>
      </div>
    </>
  )
}

function PodcastTitle(props) {
  props = user

  return (
    <>
      {/* <p class="text-2xl font-semibold tracking-wide tracking-tighter text-purple-600 sm:text-6xl title-font"> */}
      <p tw="uppercase text-3xl text-purple-500 font-bold font-sans">
        {props.podcast_title || 'podcast_title'}
      </p>
    </>
  )
}

function PodcastTitleSmall(props) {
  props = user

  return (
    <>
      <p tw="tracking-wide text-text-dark font-semibold">
        {props.podcast_title || 'podcast_title'}
      </p>
    </>
  )
}

function PodcastLink(props) {
  props = user

  return (
    <>
      <a tw="mt-3 text-indigo-500 inline-flex items-center">
        Check out
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </>
  )
}

function RelatedPodcastsSectionAlt() {
  return (
    <>
      <div tw="overflow-hidden max-w-full bg-white rounded-3xl p-6">
        <SectionTitle title="Related Podcasts" />
        <div tw="md:flex overflow-y-scroll">
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
        </div>
      </div>
    </>
  )
}

function RelatedPodcastsSection() {
  return (
    <>
      <div tw="overflow-hidden max-w-full rounded-3xl p-6 space-y-4">
        <SectionTitle title="Similar Podcasts" />
        <div tw="flex flex-row overflow-x-scroll space-x-4 h-64 bg-background-primary p-3 rounded-xl">
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
        </div>
      </div>
    </>
  )
}

function RelatedPodcast() {
  return (
    <>
      <div tw="flex-shrink-0 w-36 h-36 space-y-1">
        <img
          tw="object-contain rounded-xl shadow"
          src={user.related_podcast_img}
        />
        <PodcastTitleSmall />
        <PodcastLink />
      </div>
    </>
  )
}

function ListenOn(props) {
  props = user

  return (
    <>
      <SectionTitle title="Listen on" />

      <div tw="flex mb-6 flex flex-col">
        {/* <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary p-3 rounded-xl"> */}
        <div tw="w-full bg-background-secondary p-3 rounded-xl">
          <Link name="soundcloud" />
          <Link name="twitter" />
          <Link name="stitcher" />
          <Link name="youtube" />
          <Link name="itunes" />
          <Link />
          <Link />
        </div>
      </div>
    </>
  )
}

function ListenOnAlt(props) {
  props = user

  return (
    <>
      <div tw="flex mb-6 flex flex-col">
        <div tw="max-w-full">
          <div tw="flex flex-col rounded-3xl p-6 space-y-3">
            <SectionTitle title="Listen On" />

            <div tw="w-full bg-background-secondary py-3 rounded-xl">
              <Link name="soundcloud" />
              <Link name="twitter" />
              <Link name="stitcher" />
              <Link name="youtube" />
              <Link name="itunes" />
              <Link />
              <Link />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function PodcastDescription(props) {
  props = user

  return (
    <>
      <p tw="text-text-dark">{props.podcast_bio || 'podcast_bio'}</p>
    </>
  )
}

function PodcastSimilar(props) {
  props = user

  return (
    <>
      <p tw="font-bold text-2xl leading-tight">
        {props.podcast_title || 'podcast_title'}
      </p>
    </>
  )
}

function PodcastWebsite(props) {
  props = user
  return (
    <>
      <a href={props.podcast_website || 'podcast_title'}>
        <p tw="text-purple-600 font-semibold">
          {props.podcast_website || 'podcast_title'}
        </p>
      </a>
    </>
  )
}

function SectionTitle(props) {
  return (
    <>
      <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || 'title_'}
      </p>
    </>
  )
}

function SectionTitleSmaller(props) {
  return (
    <>
      <p tw="font-bold text-xl leading-tight text-text-dark">
        {props.title || 'title_'}
      </p>
    </>
  )
}
function GuestList() {
  return (
    <>
      <SectionTitle title="Guest List" />
      <div tw="flex mb-6 flex flex-col">
        <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary p-3 rounded-xl">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </>
  )
}

function GuestListAlt() {
  return (
    <>
      <div tw="flex mb-6 flex flex-col">
        <div tw="max-w-full">
          <div tw="flex flex-col rounded-3xl p-6 space-y-3">
            <SectionTitle title="Guest List" />

            <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary py-3 rounded-xl">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function UserCard() {
  return (
    <>
      <div tw="w-full flex p-2 bg-white hover:bg-purple-200 rounded-xl border-purple-400 hover:border-purple-200 shadow mx-auto mb-3">
        <div tw="flex-shrink-0 flex align-middle">
          <img
            tw="h-12 w-12 rounded-full flex align-middle self-center"
            src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            alt="avatar"
          />
        </div>
        <div tw="flex-grow ml-4 pt-1 mr-8">
          <h4 tw="text-xl text-gray-900 leading-tight">@JohnnyJives</h4>
          <p tw="text-base text-gray-600 leading-normal">Johnny Jive</p>
        </div>

        <FaAngleRight
          tw="flex align-middle self-center text-purple-400"
          size={36}
        />
      </div>
    </>
  )
}

function ShareButton() {
  return (
    <>
      <div tw="">
        <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
          Share
        </button>
      </div>
    </>
  )
}

function ShareButtonFull() {
  return (
    <>
      <div tw="">
        {/* <button tw="w-full text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal"> */}
        <button tw="w-full text-white hover:text-purple-500 bg-purple-500 hover:bg-purple-300 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
          Share
        </button>
      </div>
    </>
  )
}

function NewsletterSignupButtonFull() {
  return (
    <>
      <div tw="">
        {/* <button tw="w-full text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal"> */}
        <button tw="w-full text-white hover:text-purple-500 bg-purple-500 hover:bg-purple-300 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
          Join Newsletter
        </button>
      </div>
    </>
  )
}
