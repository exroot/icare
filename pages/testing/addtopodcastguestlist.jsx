import React, { useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import { BsThreeDotsVertical } from "react-icons/bs";

import "twin.macro";

export default function Basic() {
  return (
    <>
      <Wrapper>
        <ContentArea />
      </Wrapper>
    </>
  );
}

function ContentArea() {
  return (
    <>
      {/* <!-- top section --> */}

      {/* <!-- component --> */}
      <div tw="bg-background-secondary overflow-x-hidden">
        {/* <!-- content area --> */}
        <div tw="px-6 py-8">
          {/* <!-- inside content area --> */}
          <div tw="flex justify-between container mx-auto">
            {/* <!-- inside content area main section --> */}
            {/* <!-- content area side section --> */}
            <div tw="-mx-8 w-4/12 hidden lg:block space-y-8">
              <SideSectionAlt
                title="Add podcast guests"
                description="Manage people in your podcast guest list here."
              />
            </div>
            {/* <!-- inside content area main section --> */}
            <div tw="w-full lg:w-8/12 space-y-6">
              <ContentPanelFull
                title="Add to guest list"
                description="Search for members to add to your guest list here. You can send them
            an invite to accept your request for being a guest on your podcast."
              />
            </div>
            {/* <!-- end inside content area main section --> */}
          </div>
        </div>
      </div>

      {/* <!-- middle section --> */}

      <div tw="bg-background-secondary overflow-x-hidden">
        {/* <!-- content area --> */}
        <div tw="px-6 py-8">
          {/* <!-- inside content area --> */}
          <div tw="flex justify-between container mx-auto">
            {/* <!-- inside content area main section --> */}
            {/* <!-- content area side section --> */}
            <div tw="-mx-8 w-4/12 hidden lg:block space-y-8">
              <SideSectionAlt
                title="Waiting for approval"
                description="People who have asked to join your guest list."
              />
            </div>
            {/* <!-- inside content area main section --> */}
            <div tw="w-full lg:w-8/12 space-y-6">
              <ContentPanelFullAlt
                title="Accept Guests on your podcast"
                description="Search for members to add to your guest list here. You can send them
            an invite to accept your request for being a guest on your podcast."
              />
            </div>
            {/* <!-- end inside content area main section --> */}
          </div>
        </div>
      </div>

      {/* <!-- bottom section --> */}

      <div tw="bg-background-secondary overflow-x-hidden">
        {/* <!-- content area --> */}
        <div tw="px-6 py-8">
          {/* <!-- inside content area --> */}
          <div tw="flex justify-between container mx-auto">
            {/* <!-- inside content area main section --> */}
            {/* <!-- content area side section --> */}
            <div tw="-mx-8 w-4/12 hidden lg:block space-y-8">
              <SideSectionAlt
                title="Manage Guest List"
                description="People who have asked to join your guest list."
              />
            </div>
            {/* <!-- inside content area main section --> */}
            <div tw="w-full lg:w-8/12 space-y-6">
              <ContentPanelFullManaged
                title="Manage Guests on your podcast"
                description="Search for members to add to your guest list here. You can send them
            an invite to accept your request for being a guest on your podcast."
              />
            </div>
            {/* <!-- end inside content area main section --> */}
          </div>
        </div>
      </div>
    </>
  );
}

function SideSectionAlt(props) {
  return (
    <>
      <div tw="flex flex-col max-w-sm pl-8 pr-6 mx-auto">
        <div tw="flex flex-col items-start text-text-dark space-y-4">
          <p tw="font-bold text-2xl">{props.title || "title"}</p>
          <p tw="text-text-dark mb-2 text-text-dark leading-tight text-xl">
            {props.description || "description"}
          </p>
        </div>
      </div>
    </>
  );
}

function AddGuestSection() {
  return (
    <>
      <div tw="flex mb-6 h-screen flex flex-col w-full">
        <SearchInput />

        <div tw="w-full flex-grow overflow-y-scroll">
          <GuestListUserCardInvite />
          <GuestListUserCardInvite />
        </div>
        {/* <div tw="w-full flex-grow overflow-y-scroll">
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
        </div> */}
      </div>
    </>
  );
}

function ManageGuestSection() {
  return (
    <>
      <div tw="flex mb-6 h-screen flex flex-col w-full">
        <div tw="w-full flex-grow overflow-y-scroll">
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
        </div>
      </div>
    </>
  );
}
function ContentPanelFull(props) {
  return (
    <>
      <div tw="max-w-4xl px-10 py-6 bg-background-primary rounded-lg shadow-md">
        <div tw="flex flex-col justify-between items-start">
          {/* title here if you need it */}
          <p tw="text-2xl text-text-dark font-bold mb-2">
            {/* Add to guest list */}
            {props.title || "title"}
          </p>
          <p tw="text-text-dark mb-2 text-text-dark leading-tight text-xl">
            {/* Search for members to add to your guest list here. You can send them
            an invite to accept your request for being a guest on your podcast. */}

            {props.description || "description"}
          </p>
          <AddGuestSection />
          {/* <GuestListSection /> */}
        </div>
      </div>
    </>
  );
}

function ContentPanelFullManaged(props) {
  return (
    <>
      <div tw="max-w-4xl px-10 py-6 bg-background-primary rounded-lg shadow-md">
        <div tw="flex flex-col justify-between items-start">
          {/* title here if you need it */}
          <p tw="text-2xl text-text-dark font-bold mb-2">
            {props.title || "title"}
          </p>
          <p tw="text-text-dark mb-2 text-text-dark leading-tight text-xl">
            {props.description || "description"}
          </p>
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
          <GuestListUserCardManaged />
        </div>
      </div>
    </>
  );
}
function ContentPanelFullAlt(props) {
  return (
    <>
      <div tw="max-w-4xl px-10 py-6 bg-background-primary rounded-lg shadow-md">
        <div tw="flex flex-col justify-between items-start">
          {/* title here if you need it */}
          <p tw="text-2xl text-text-dark font-bold mb-2">
            {props.title || "title"}
          </p>
          <p tw="text-text-dark mb-2 text-text-dark leading-tight text-xl">
            {props.description || "description"}
          </p>
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
          <GuestListUserCardAsked />
        </div>
      </div>
    </>
  );
}

function GuestListUserCardAsked() {
  return (
    <>
      <div tw="w-full mx-auto flex p-2 hover:bg-indigo-100 border-b border-gray-600">
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
          tw="bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded ml-4"
          type="button"
        >
          Accept
        </button>
        <button
          tw="bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded ml-4"
          type="button"
        >
          Decline
        </button>
      </div>
    </>
  );
}

function GuestListUserCardInvite() {
  return (
    <>
      <div tw="w-full mx-auto flex p-2 hover:bg-indigo-100 border-b border-gray-600">
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
          tw="bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded ml-4"
          type="button"
        >
          Invite
        </button>
      </div>
    </>
  );
}

function GuestListUserCardManaged() {
  return (
    <>
      <div tw="w-full mx-auto flex p-2 hover:bg-indigo-100 border-b border-gray-600">
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
          tw="bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 w-20 rounded ml-4"
          type="button"
        >
          remove
        </button>
      </div>
    </>
  );
}
function SearchInput() {
  return (
    <>
      <div tw="flex my-6 flex flex-col w-full">
        <div tw="flex items-center py-2">
          <input
            tw="bg-background-primary border border-2 border-indigo-600 h-16 px-5 w-full pl-10 rounded-full text-xl focus:outline-none focus:border-indigo-700 focus:bg-background-secondary text-indigo-600"
            type="text"
            placeholder="Search for user"
            aria-label="Full name"
          />
        </div>
      </div>
    </>
  );
}
