import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";
import TopNavbar from "../../../components/Testing/Navbar/TopNavbar";
import BottomMenu from "../../../components/Testing/BottomMenu";
import "twin.macro";

const Index = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Shoutmo</title>
      </Head>

      <div tw="h-screen w-screen bg-gray-900 flex flex-col min-h-0 min-w-0 overflow-hidden">
        <TopNavbar
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <main tw="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto">
          <div tw="flex justify-center mx-auto">
            <div tw="max-w-lg bg-gray-900">
              <FeedContentPanelFull />
            </div>
            <div tw="max-w-sm hidden md:block bg-gray-900">
              <FeedSideSectionAlt />
            </div>
          </div>
        </main>
        <BottomMenu />
      </div>
    </>
  );
};

function FeedContentPanelFull() {
  return (
    <>
      <div tw="w-full overflow-y-scroll h-screen">
        <div tw="flex flex-col justify-between items-start">
          {/* inside content panel - start */}
          <MakeShoutoutNew />
          <RightFeedCards />
          {/* inside content panel - end */}
        </div>
      </div>
    </>
  );
}

function FeedSideSectionAlt() {
  return (
    <>
      <div tw="m-2 space-y-3">
        <Tags />
        <RelatedUserCards />
      </div>
    </>
  );
}

function MakeShoutoutNew() {
  return (
    <>
      <div tw="w-full border border-gray-700 rounded p-4 mx-auto">
        <div tw="flex justify-between items-center">
          <div tw="min-w-0 flex-1 flex items-center">
            <div tw="flex-shrink-0">
              {/* icon  */}

              <div tw="h-12 w-12 rounded-full bg-blue-500 p-1 shadow" alt="">
                <svg
                  tw="bg-gray-700 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // strokeWidth="1"
                    d="M17.223 7.03c-1.584-3.686-4.132-6.49-5.421-5.967c-2.189.891 1.304 5.164-9.447 9.533c-.929.379-1.164 1.888-.775 2.792c.388.902 1.658 1.801 2.587 1.424c.161-.066.751-.256.751-.256c.663.891 1.357.363 1.604.928l1.158 2.66c.219.502.715.967 1.075.83l2.05-.779c.468-.178.579-.596.436-.924c-.154-.355-.786-.459-.967-.873c-.18-.412-.769-1.738-.938-2.156c-.23-.568.259-1.031.97-1.104c4.894-.512 5.809 2.512 7.475 1.834c1.287-.525 1.025-4.259-.558-7.942zm-.551 5.976c-.287.115-2.213-1.402-3.443-4.267c-1.231-2.863-1.076-5.48-.79-5.597c.286-.115 2.165 1.717 3.395 4.58c1.231 2.863 1.124 5.167.838 5.284z"
                  />
                </svg>
              </div>
              {/* icon  */}
            </div>

            <div tw="min-w-0 flex-1 px-4 text-gray-700">
              <div>
                {/* <p tw="font-bold">Ted Fox</p> */}
                <p tw="text-xl font-extrabold text-gray-200 sm:text-2xl">
                  SHOUTOUT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* shoutout input  */}
        <div tw="flex flex-row justify-end space-x-2 space-y-2 items-center mt-2">
          <textarea
            id="shoutoutinput"
            name="shoutoutinput"
            rows="6"
            tw="max-w-lg block w-full bg-gray-300 focus:bg-indigo-100 sm:text-sm border ring-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:outline-none hover:bg-gray-400"
          ></textarea>
        </div>
        {/* shoutout input  */}

        {/* send  */}

        <div tw="flex flex-row justify-end space-x-2 items-center mt-2">
          <button
            type="button"
            tw="w-1/4 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span tw="mx-auto">Send</span>
          </button>
          {/* <FiSettings size={24} /> */}
        </div>
        {/* send  */}
      </div>
    </>
  );
}

function RightFeedCards() {
  return (
    <>
      <ul tw="space-y-6 mt-12">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </ul>
    </>
  );
}

function FeedCard() {
  return (
    <>
      <div tw="max-w-md border border-gray-700 rounded p-4 mx-auto">
        {/* <div tw="max-w-4xl px-10 py-6 border border-gray-700 rounded-lg mx-auto"> */}
        <div tw="flex justify-between items-center">
          <div tw="min-w-0 flex-1 flex items-center">
            <div tw="flex-shrink-0">
              <img
                tw="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div tw="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4 text-gray-300">
              <div>
                {/* // text-indigo-600 / text-gray-500 */}
                <p tw="text-sm font-medium font-bold hover:underline ">
                  Ted Fox
                </p>
                <p tw="mt-1 flex items-center text-sm">
                  <span tw="hover:underline">@TedIsDaMan</span>
                </p>
              </div>
            </div>
          </div>

          {/* <a
              href="#"
              tw="px-2 py-1 bg-gray-700 text-gray-400 font-bold rounded"
            >
              Laravel
            </a> */}
        </div>
        <div tw="mt-6 sm:mt-3">
          {/* <a href="#" tw="text-2xl text-gray-700 font-bold hover:underline"> */}
          {/* <p tw="text-xl text-gray-700 font-bold"> */}

          {/* <p tw="text-xl text-gray-600 font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
              enim reprehenderit nisi, accusamus delectus nihil quis facere in
              modi ratione libero!
            </p> */}
          <p tw="mt-2 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        {/* <div tw="flex justify-between items-center mt-4"> */}
        <div tw="flex justify-end items-center mt-4">
          {/* <a href="#" tw="text-blue-500 hover:underline">
              Read more
            </a> */}
          <div>
            <a href="#" tw="flex items-center">
              {/* <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  tw="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                /> */}
              {/* <h1 tw="text-gray-700 font-bold hover:underline">Alex John</h1> */}

              <span tw="font-light text-gray-300 text-sm">2 days ago</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Tags() {
  return (
    <>
      <div>
        <p tw="font-bold text-xl bg-purple-600 rounded-xl p-2">Tags</p>

        <div tw="py-3">
          <div tw="my-3 flex flex-wrap -m-1">
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #winter
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #stark
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #gameofthrones
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #battle
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #jhonsnow
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #kinglandings
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function RelatedUserCards() {
  return (
    <>
      <p tw="font-bold text-xl bg-purple-600 rounded-xl p-2">Related Users</p>

      <div>
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
      </div>
    </>
  );
}

function SidebarUserCard() {
  return (
    <>
      <div tw="my-2">
        <div tw="w-full flex p-1 bg-white hover:bg-purple-200 rounded-lg border-purple-400 hover:border-purple-200 shadow mx-auto">
          <div tw="flex-shrink-0 flex align-middle">
            <img
              tw="h-12 w-12 rounded-full flex align-middle self-center"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="avatar"
            />
          </div>
          <div tw="flex-grow ml-3 mr-8 self-center">
            <h4 tw="text-gray-900 leading-tight">@JackyJives</h4>
            <p tw="text-gray-600 leading-normal">Jacky Jive</p>
          </div>

          <FaAngleRight
            tw="flex align-middle self-center text-purple-600"
            size={36}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
