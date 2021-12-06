// can prob refactor to look something closer to this
// https://tailwindcomponents.com/component/game-lobby
import React, { useState, useEffect } from "react";
import BumpButton from "../../components/Buttons/BumpButton.jsx";
import NotLoggedInNavbar from "../../components/NavbarForNonLoggedInUsers";
import Wrapper from "../../components/Wrapper";

import "twin.macro";

export default function Basic() {
  return (
    <>
      {/* <NotLoggedInNavbar /> */}
      <Wrapper>
        {/* top button menu hide when not mobile  */}
        {/*       
<div tw="bg-white w-screen overflow-auto whitespace-no-wrap py-3 px-4 text-center">
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 1</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 2</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 3</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 4</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 5</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 6</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 7</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 8</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">Button 9</button>
  <button tw="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2">Button 10</button>
</div> */}

        <div tw="grid grid-cols-3 gap-4 font-mono">
          <LeftSideSection />
          <RightSideSection />
        </div>
      </Wrapper>
    </>
  );
}

// bg-background-primary
// text-text-dark

function LeftSideSection() {
  return (
    <>
      <div tw="min-h-screen col-start-1 col-span-1">
        <div tw="w-full max-w-4xl mx-auto bg-background-primary rounded-xl p-3 mx-2">
          <h2 tw="text-2xl text-text-dark">Your Circle</h2>
          <p tw="text-sm text-text-dark">
            <b>Increase your circle of influence.</b> <br />
            Your circle is similar to a friends list. You can accept people who
            whould like to join your circle here. Your circle is a way to
            connect with people who are active in a space similar as yours. If
            you send an invite, the other person will need to accept your
            request before they can join your circle. <br />
            {/* <a tw="underline" href="#">
              Click here for a 2 minute video to see how it works.
            </a> */}
          </p>
        </div>
        {/* <ShowInfo /> */}
      </div>
    </>
  );
}

function RightSideSection() {
  return (
    <>
      {/* <div tw="flex mb-6 px-8 h-screen flex flex-col"> */}
      <div tw="flex flex-col h-screen bg-background-primary col-start-2 col-span-2 rounded-xl p-2 mx-2">
        <p tw="text-xl mb-2 text-text-dark">Members in your circle.</p>
        {/* <Topmenusection /> */}
        {/* <SearchInput /> */}
        <div tw="w-full flex-grow overflow-y-scroll">
          <UserCardPending />
          <UserCardPending />
          <UserCardPending />
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
            tw="appearance-none bg-transparent border-none w-full text-indigo-700 mr-3 pr-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for user"
            aria-label="Full name"
          />
          <button
            tw="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-5 w-24 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

function UserCard() {
  return (
    <>
      <div tw="w-full mx-auto flex p-3 bg-background-secondary hover:bg-indigo-300 rounded-lg shadow mb-3">
        <div tw="flex-shrink-0">
          <img
            tw="h-12 w-12 rounded-full"
            src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            alt="avatar"
          />
        </div>
        <div tw="flex-grow ml-6 pt-1 mr-8">
          <h4 tw="text-xl text-text-dark leading-tight">@JohnnyJives</h4>
          <p tw="text-base text-text-dark leading-normal">Johnny Jive</p>
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

function UserCardPending() {
  return (
    <>
      <div tw="w-full mx-auto flex p-3 bg-background-secondary hover:bg-indigo-300 rounded-lg shadow mb-3">
        <div tw="flex-shrink-0">
          <img
            tw="h-12 w-12 rounded-full"
            src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            alt="avatar"
          />
        </div>
        <div tw="flex-grow ml-6 pt-1 mr-8">
          <h4 tw="text-xl text-text-dark leading-tight">@JohnnyJives</h4>
          <p tw="text-base text-text-dark leading-normal">Johnny Jive</p>
        </div>
        <button
          tw=" border-secondary text-sm border text-secondary py-1 px-2 w-20 rounded"
          type="button"
        >
          Pending
        </button>

        <button
          tw="ml-2 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

function Topmenusection() {
  return (
    <>
      <div tw="w-full mx-auto flex p-3 bg-background-secondary hover:bg-indigo-300 rounded-lg shadow mb-3">
        <div tw="flex-shrink-0"></div>
        {/* 
        <button
          tw=" border-secondary text-sm border text-secondary py-1 px-2 w-20 rounded"
          type="button"
        >
          Pending
        </button> */}

        <button
          tw="ml-2 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded"
          type="button"
        >
          clear all
        </button>
      </div>
    </>
  );
}
