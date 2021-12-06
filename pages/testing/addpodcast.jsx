import React, { useState, useEffect } from "react";
import BumpButton from "../../components/Buttons/BumpButton.jsx";
import NotLoggedInNavbar from "../../components/NavbarForNonLoggedInUsers";

import "twin.macro";

export default function Basic() {
  return (
    <>
      <NotLoggedInNavbar />

      <div tw="grid grid-cols-2 gap-0 font-mono">
        <LeftSideSection />
        <div>
          <RightSideSection />
        </div>
      </div>
    </>
  );
}

function LeftSideSection() {
  return (
    <>
      <div tw="bg-gray-400 min-h-screen">
        <div tw="w-full max-w-4xl p-2 mx-auto mt-4">
          <h2 tw="text-2xl text-gray-900">Link your Show</h2>
          <p tw="text-sm text-gray-900">
            Link your stream, show, podcast or livestream to your account. You
            can can also add other SHOUTMO members to your guest list to make it
            easier for fans to find guests who've made appearances.{" "}
            <a tw="underline" href="#">
              Click here for a 2 minute video to see how it works.
            </a>
          </p>
        </div>
        <ShowInfo />
      </div>
    </>
  );
}

function RightSideSection() {
  return (
    <>
      <div tw="flex mb-6 px-8 h-screen flex flex-col">
        <SearchInput />
        <p tw="text-xl mb-2">Members added to your guest list: </p>

        <div tw="w-full flex-grow overflow-y-scroll">
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
  );
}

function SearchInput() {
  return (
    <>
      <div tw="w-full md:w-full px-3 mb-12 mt-16">
        <div tw="flex items-center border-b border-indigo-500 py-2">
          <input
            tw="appearance-none bg-transparent border-none w-full text-indigo-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for user"
            aria-label="Full name"
          />
          <button
            tw="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-5 w-24 rounded mr-2 "
            type="button"
          >
            Add
          </button>
          <button
            tw="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-24 rounded"
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

function UserCard() {
  return (
    <>
      <div tw="w-full mx-auto flex p-6 bg-white hover:bg-indigo-100 rounded-lg shadow mb-3">
        <div tw="flex-shrink-0">
          <img
            tw="h-12 w-12 rounded-full"
            src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            alt="avatar"
          />
        </div>
        <div tw="flex-grow ml-6 pt-1 mr-8">
          <h4 tw="text-xl text-gray-900 leading-tight">@JohnnyJives</h4>
          <p tw="text-base text-gray-600 leading-normal">Johnny Jive</p>
        </div>
        <button
          tw="bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded"
          type="button"
        >
          Remove
        </button>
      </div>
    </>
  );
}

function ShowInfo() {
  return (
    <>
      <div tw="w-full border-t border-gray-400 flex-grow pt-4">
        <h2 tw="ml-3 text-2xl text-gray-900">Show info:</h2>
        <div tw="flex items-center justify-between mt-4"></div>
        <div tw="w-full md:w-full px-3 mb-6">
          <label tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Cover Photo for your show
          </label>
          <input
            tw="appearance-none block w-full text-gray-700 border border-gray-400 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"
            type="text"
            required
          />
        </div>
        <div tw="w-full md:w-full px-3 mb-6">
          <label tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title of your show
          </label>
          <input
            tw="appearance-none block w-full text-gray-700 border border-gray-400 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"
            type="text"
            required
          />
        </div>
        <div tw="w-full md:w-full px-3 mb-6">
          <label tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            prefered link to your Show
          </label>
          <input
            tw="appearance-none block w-full text-gray-700 border border-gray-400 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"
            type="text"
            required
          />
        </div>

        <div tw="w-full md:w-full px-3 mb-6">
          <label tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Description for your show
          </label>
          <textarea
            // tw="bg-gray-200 rounded-md leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white "
            tw="appearance-none block w-full text-gray-700 border border-gray-400 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"
            required
          ></textarea>
        </div>
        <div tw="flex justify-end">
          <button
            tw="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 "
            type="submit"
          >
            save
          </button>
        </div>
      </div>
    </>
  );
}
